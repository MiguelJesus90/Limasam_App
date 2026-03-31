/* ===========================
   LIMASAM 2025 — Study App
   Main Application Controller
   =========================== */

class App {
  constructor() {
    this.currentView = 'dashboard';
    this.currentTopic = null;
    this.sidebarOpen = false;
    this.themeToggle = null;
    this.init();
  }

  init() {
    this.cacheElements();
    this.initTheme();
    this.bindEvents();
    this.renderSidebar();
    this.renderDashboard();
    this.updateGlobalProgress();
    this.checkGlobalQuizStatus();
  }

  initTheme() {
    const saved = localStorage.getItem('limasam-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    this.setTheme(theme);
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('limasam-theme', theme);
    this.themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    this.setTheme(current === 'dark' ? 'light' : 'dark');
  }

  cacheElements() {
    this.menuToggle = document.getElementById('menuToggle');
    this.sidebar = document.getElementById('sidebar');
    this.mainContent = document.getElementById('mainContent');
    this.topicNav = document.getElementById('topicNav');
    this.globalQuizBtn = document.getElementById('globalQuizBtn');
    this.globalBadge = document.getElementById('globalBadge');
    this.globalProgressFill = document.getElementById('globalProgressFill');
    this.globalProgressText = document.getElementById('globalProgressText');
    this.statsGrid = document.getElementById('statsGrid');
    this.topicsOverview = document.getElementById('topicsOverview');
    this.topicContainer = document.getElementById('topicContainer');
    this.quizContainer = document.getElementById('quizContainer');
    this.resultsContainer = document.getElementById('resultsContainer');
    this.reviewContainer = document.getElementById('reviewContainer');
    this.modalOverlay = document.getElementById('modalOverlay');
    this.modalContent = document.getElementById('modalContent');
    this.themeToggle = document.getElementById('themeToggle');
  }

  bindEvents() {
    this.menuToggle.addEventListener('click', () => this.toggleSidebar());

    this.themeToggle.addEventListener('click', () => this.toggleTheme());

    document.addEventListener('click', (e) => {
      if (this.sidebarOpen && !this.sidebar.contains(e.target) && !this.menuToggle.contains(e.target)) {
        this.closeSidebar();
      }
    });

    this.topicNav.addEventListener('click', (e) => {
      const btn = e.target.closest('.nav-item');
      if (btn) {
        const topicId = parseInt(btn.dataset.topicId);
        if (topicId) this.navigateToTopic(topicId);
        this.closeSidebar();
      }
    });

    this.globalQuizBtn.addEventListener('click', () => {
      if (!statsManager.isGlobalQuizUnlocked()) {
        this.showModal(
          'Cuestionario Global Bloqueado',
          `Debes completar los 11 temas individuales (≥80% en cada uno) para desbloquear el cuestionario global. Llevas ${statsManager.getGlobalProgress().completed}/11 temas completados.`
        );
        return;
      }
      this.startGlobalQuiz();
      this.closeSidebar();
    });

    document.querySelectorAll('[data-view="dashboard"]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.switchView('dashboard');
        this.renderDashboard();
        this.closeSidebar();
      });
    });

    document.querySelectorAll('[data-view="review"]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.switchView('review');
        this.renderReview();
        this.closeSidebar();
      });
    });

    this.modalOverlay.addEventListener('click', (e) => {
      if (e.target.dataset.action === 'modal-close') {
        this.closeModal();
      } else if (e.target.dataset.action === 'reset-progress') {
        this.confirmReset();
      } else if (e.target.closest('[data-action="modal-close"]')) {
        this.closeModal();
      } else if (e.target.closest('[data-action="reset-progress"]')) {
        this.confirmReset();
      }
    });

    this.mainContent.addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (!btn) return;

      if (btn.dataset.action === 'study') {
        const topicId = parseInt(btn.dataset.topicId);
        this.renderTopicContent(topicId);
        this.switchView('topic');
      } else if (btn.dataset.action === 'quiz') {
        const topicId = parseInt(btn.dataset.topicId);
        this.startTopicQuiz(topicId);
      } else if (btn.dataset.action === 'next-question') {
        this.nextQuestion();
      } else if (btn.dataset.action === 'submit-answer') {
        this.submitCurrentAnswer();
      } else if (btn.dataset.action === 'back-to-topic') {
        const topicId = parseInt(btn.dataset.topicId);
        this.renderTopicContent(topicId);
        this.switchView('topic');
      } else if (btn.dataset.action === 'retry-quiz') {
        const topicId = parseInt(btn.dataset.topicId);
        this.startTopicQuiz(topicId);
      } else if (btn.dataset.action === 'back-dashboard') {
        this.switchView('dashboard');
        this.renderDashboard();
      } else if (btn.dataset.action === 'start-review') {
        this.startReviewQuiz();
      } else if (btn.dataset.action === 'modal-close') {
        this.closeModal();
      } else if (btn.dataset.action === 'reset-progress') {
        this.confirmReset();
      }
    });

    this.quizContainer.addEventListener('click', (e) => {
      if (e.target.closest('.option-label')) {
        const optionLabel = e.target.closest('.option-label');
        const optionIndex = parseInt(optionLabel.dataset.optionIndex);
        this.selectOption(optionIndex);
      }
    });

    window.addEventListener('hashchange', () => this.handleHash());
    this.handleHash();
  }

  handleHash() {
    const hash = window.location.hash.slice(1);
    if (hash.startsWith('topic-')) {
      const topicId = parseInt(hash.replace('topic-', ''));
      this.navigateToTopic(topicId);
    } else if (hash === 'dashboard') {
      this.switchView('dashboard');
      this.renderDashboard();
    } else if (hash === 'quiz-global') {
      if (statsManager.isGlobalQuizUnlocked()) {
        this.startGlobalQuiz();
      }
    } else if (hash === 'review') {
      this.switchView('review');
      this.renderReview();
    }
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
    this.sidebar.classList.toggle('open', this.sidebarOpen);

    let overlay = document.querySelector('.sidebar-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'sidebar-overlay';
      document.body.appendChild(overlay);
      overlay.addEventListener('click', () => this.closeSidebar());
    }
    overlay.classList.toggle('active', this.sidebarOpen);
  }

  closeSidebar() {
    this.sidebarOpen = false;
    this.sidebar.classList.remove('open');
    const overlay = document.querySelector('.sidebar-overlay');
    if (overlay) overlay.classList.remove('active');
  }

  switchView(viewName) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const view = document.getElementById(`view-${viewName}`);
    if (view) view.classList.add('active');

    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const navBtn = document.querySelector(`[data-view="${viewName}"]`);
    if (navBtn) navBtn.classList.add('active');

    this.currentView = viewName;
  }

  navigateToTopic(topicId) {
    this.currentTopic = topicId;
    window.location.hash = `topic-${topicId}`;

    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const navBtn = document.querySelector(`[data-topic-id="${topicId}"]`);
    if (navBtn) navBtn.classList.add('active');

    this.renderTopicContent(topicId);
    this.switchView('topic');
  }

  renderSidebar() {
    this.topicNav.innerHTML = TOPICS.map(topic => {
      const stats = statsManager.getTopicStats(topic.id);
      const completedClass = stats.completed ? 'completed' : '';
      return `
        <button class="nav-item ${completedClass}" data-topic-id="${topic.id}">
          <span class="nav-icon">${topic.number}</span>
          <span class="nav-label">${topic.title}</span>
        </button>
      `;
    }).join('');
  }

  renderDashboard() {
    const progress = statsManager.getGlobalProgress();
    const totalAttempts = statsManager.data.totalAttempts;
    const totalCorrect = statsManager.data.totalCorrect;
    const totalQuestions = statsManager.data.totalQuestions;
    const globalAccuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
    const wrongQuestions = statsManager.getWrongQuestions();

    this.statsGrid.innerHTML = `
      <div class="stat-card">
        <div class="stat-icon">📚</div>
        <div class="stat-value">${progress.completed}/11</div>
        <div class="stat-label">Temas completados</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">📊</div>
        <div class="stat-value">${progress.percentage}%</div>
        <div class="stat-label">Progreso global</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">🎯</div>
        <div class="stat-value">${globalAccuracy}%</div>
        <div class="stat-label">Precisión global</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">📝</div>
        <div class="stat-value">${totalAttempts}</div>
        <div class="stat-label">Cuestionarios realizados</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">❌</div>
        <div class="stat-value">${wrongQuestions.length}</div>
        <div class="stat-label">Errores pendientes</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">🔄</div>
        <div class="stat-value" style="cursor:pointer" data-action="reset-progress">Reset</div>
        <div class="stat-label">Reiniciar progreso</div>
      </div>
    `;

    this.topicsOverview.innerHTML = TOPICS.map(topic => {
      const stats = statsManager.getTopicStats(topic.id);
      const pct = stats.bestScore;
      const completedClass = stats.completed ? 'completed' : '';
      const fillClass = stats.completed ? 'complete' : '';
      return `
        <div class="topic-card ${completedClass}" data-topic-id="${topic.id}">
          <div class="topic-card-number">Tema ${topic.number}</div>
          <div class="topic-card-title">${topic.title}</div>
          <div class="topic-card-meta">
            <div class="topic-progress-bar">
              <div class="topic-progress-fill ${fillClass}" style="width: ${pct}%"></div>
            </div>
            <span class="topic-progress-text">${stats.attempts > 0 ? `Mejor: ${pct}%` : 'Sin intentar'}</span>
          </div>
          <div class="topic-card-actions">
            <button class="btn btn-primary" data-action="study" data-topic-id="${topic.id}">📖 Estudiar</button>
            <button class="btn btn-outline" data-action="quiz" data-topic-id="${topic.id}">📝 Examen</button>
          </div>
        </div>
      `;
    }).join('');

    this.topicsOverview.querySelectorAll('.topic-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('button')) return;
        const topicId = parseInt(card.dataset.topicId);
        this.navigateToTopic(topicId);
      });
    });
  }

  renderTopicContent(topicId) {
    const topic = TOPICS.find(t => t.id === topicId);
    if (!topic) return;

    const stats = statsManager.getTopicStats(topicId);
    const prevTopic = TOPICS.find(t => t.id === topicId - 1);
    const nextTopic = TOPICS.find(t => t.id === topicId + 1);

    let html = `
      <div class="topic-header">
        <div>
          <span class="topic-card-number">Tema ${topic.number}</span>
          <h2>${topic.title}</h2>
        </div>
        <div class="topic-actions">
          <button class="btn btn-primary" data-action="quiz" data-topic-id="${topicId}">📝 Iniciar Examen</button>
          <button class="btn btn-secondary" data-action="back-dashboard">← Dashboard</button>
        </div>
      </div>

      <div class="content-section">
        <h3>📋 Descripción</h3>
        <p>${topic.description}</p>
      </div>

      <div class="content-section">
        <h3>🔧 Herramientas Necesarias</h3>
        <ul class="content-list">
          ${topic.tools.map(t => `<li>${t}</li>`).join('')}
        </ul>
      </div>
    `;

    if (topic.differences) {
      html += `
        <div class="content-section">
          <h3>🔄 Diferencias con el Barrido Individual</h3>
          <ul class="content-list">
            ${topic.differences.map(d => `<li>${d}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    if (topic.teamComposition) {
      html += `
        <div class="content-section">
          <h3>👥 Composición del Equipo</h3>
          <table class="content-table">
            <thead><tr><th>Unidad</th><th>Descripción</th></tr></thead>
            <tbody>
              ${topic.teamComposition.map(c => `<tr><td>${c.unit}</td><td>${c.description}</td></tr>`).join('')}
            </tbody>
          </table>
        </div>
      `;
    }

    if (topic.roles) {
      html += `
        <div class="content-section">
          <h3>🎭 Roles durante el Barrido</h3>
          <table class="content-table">
            <thead><tr><th>Rol</th><th>Tarea</th></tr></thead>
            <tbody>
              ${topic.roles.map(r => `<tr><td><strong>${r.role}</strong></td><td>${r.task}</td></tr>`).join('')}
            </tbody>
          </table>
        </div>
      `;
    }

    html += `<div class="content-section"><h3>📑 Fases de Trabajo</h3>`;
    topic.phases.forEach(phase => {
      html += `
        <h4>${phase.title}</h4>
        <ul class="content-list">
          ${phase.items.map(item => `<li>${item}</li>`).join('')}
        </ul>
      `;
    });
    html += `</div>`;

    html += `
      <div class="content-section">
        <h3>🎯 Objetivos del Puesto de Trabajo</h3>
        <ol class="content-list" style="list-style: decimal; padding-left: 20px;">
          ${topic.objectives.map(o => `<li style="padding-left: 8px;">${o}</li>`).join('')}
        </ol>
      </div>

      <div class="content-section">
        <h3>📊 Tu Progreso en este Tema</h3>
        <div class="topic-card-meta" style="margin-top: 12px;">
          <div class="topic-progress-bar" style="flex: 1; height: 8px;">
            <div class="topic-progress-fill ${stats.completed ? 'complete' : ''}" style="width: ${stats.bestScore}%"></div>
          </div>
          <span class="topic-progress-text">${stats.bestScore}%</span>
        </div>
        <p style="margin-top: 12px; font-size: 0.82rem; color: var(--color-text-light);">
          Intentos: ${stats.attempts} | Mejor nota: ${stats.bestScore}% | Última: ${stats.lastPercentage}%
        </p>
        <div class="topic-card-actions" style="margin-top: 16px;">
          <button class="btn btn-primary btn-lg" data-action="quiz" data-topic-id="${topicId}">📝 Realizar Examen</button>
        </div>
      </div>
    `;

    if (prevTopic || nextTopic) {
      html += `<div style="display: flex; justify-content: space-between; margin-top: 24px; flex-wrap: wrap; gap: 12px;">`;
      if (prevTopic) {
        html += `<button class="btn btn-secondary" data-action="study" data-topic-id="${prevTopic.id}">← Tema ${prevTopic.number}: ${prevTopic.title}</button>`;
      } else {
        html += `<div></div>`;
      }
      if (nextTopic) {
        html += `<button class="btn btn-secondary" data-action="study" data-topic-id="${nextTopic.id}">Tema ${nextTopic.number}: ${nextTopic.title} →</button>`;
      }
      html += `</div>`;
    }

    this.topicContainer.innerHTML = html;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  startTopicQuiz(topicId) {
    const topic = TOPICS.find(t => t.id === topicId);
    if (!topic) return;

    quizEngine.start(topic.questions, topicId);
    this.switchView('quiz');
    this.renderQuestion();
  }

  startGlobalQuiz() {
    const allQuestions = TOPICS.flatMap(t => t.questions.map(q => ({ ...q, topicId: t.id, topicTitle: t.title })));
    const shuffled = quizEngine.shuffle(allQuestions);
    const selected = shuffled.slice(0, 30);

    quizEngine.start(selected, 'global', 2700);
    this.switchView('quiz');
    this.renderQuestion();
    quizEngine.startTimer(() => this.finishQuizEarly());
  }

  finishQuizEarly() {
    const currentQ = quizEngine.getCurrentQuestion();
    if (currentQ) {
      while (quizEngine.getCurrentQuestion()) {
        if (!this.answers[quizEngine.currentIndex]) {
          quizEngine.submitAnswer(quizEngine.currentIndex, -1);
        }
        quizEngine.nextQuestion();
      }
    }
    this.showResults();
  }

  startReviewQuiz() {
    const wrongQuestions = statsManager.getWrongQuestions();
    if (wrongQuestions.length === 0) {
      this.renderReview();
      return;
    }

    const shuffled = quizEngine.shuffle(wrongQuestions);
    quizEngine.start(shuffled, 'review');
    this.switchView('quiz');
    this.renderQuestion();
  }

  renderQuestion() {
    const question = quizEngine.getCurrentQuestion();
    if (!question) {
      this.showResults();
      return;
    }

    const progress = ((question.index) / question.total) * 100;
    const letters = ['A', 'B', 'C', 'D'];

    this.quizContainer.innerHTML = `
      <div class="quiz-header">
        <h2>${question.topicId === 'global' ? 'Cuestionario Global' : question.topicId === 'review' ? 'Repaso de Errores' : `Tema ${TOPICS.find(t => t.id === question.topicId)?.number || ''} — ${TOPICS.find(t => t.id === question.topicId)?.title || ''}`}</h2>
        ${question.topicId === 'global' ? '<div class="quiz-timer"><span id="quizTimer">45:00</span></div>' : ''}
        <div class="quiz-progress">
          <div class="quiz-progress-bar">
            <div class="quiz-progress-fill" style="width: ${progress}%"></div>
          </div>
          <span class="quiz-progress-text">${question.index + 1} / ${question.total}</span>
        </div>
      </div>

      <div class="question-card" id="questionCard">
        <div class="question-number">Pregunta ${question.index + 1} de ${question.total}</div>
        <div class="question-text">${question.question}</div>
        <ul class="options-list" id="optionsList">
          ${question.options.map((opt, i) => `
            <li class="option-item">
              <label class="option-label" data-option-index="${i}">
                <span class="option-radio"></span>
                <span class="option-letter">${letters[i]}</span>
                <span class="option-text">${opt}</span>
              </label>
            </li>
          `).join('')}
        </ul>
        <div class="question-explanation" id="questionExplanation"></div>
      </div>

      <div class="quiz-actions">
        <button class="btn btn-secondary" data-action="back-dashboard">← Salir</button>
        <button class="btn btn-primary" data-action="submit-answer" id="submitBtn" disabled>Confirmar Respuesta</button>
        <button class="btn btn-primary hidden" data-action="next-question" id="nextBtn">Siguiente →</button>
      </div>
    `;

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  selectOption(optionIndex) {
    const labels = this.quizContainer.querySelectorAll('.option-label');
    labels.forEach(l => l.classList.remove('selected'));
    labels[optionIndex].classList.add('selected');
    this._selectedOption = optionIndex;
    document.getElementById('submitBtn').disabled = false;
  }

  submitCurrentAnswer() {
    if (this._selectedOption === undefined) return;

    const question = quizEngine.getCurrentQuestion();
    const isCorrect = quizEngine.submitAnswer(question.index, this._selectedOption);

    const labels = this.quizContainer.querySelectorAll('.option-label');
    labels.forEach(l => l.style.pointerEvents = 'none');

    labels[question.correct].classList.add('correct');
    if (!isCorrect) {
      labels[this._selectedOption].classList.add('incorrect');
    }

    const explanation = document.getElementById('questionExplanation');
    explanation.innerHTML = `<strong>${isCorrect ? '✓ Correcto' : '✗ Incorrecto'}</strong> — ${question.explanation}`;
    explanation.classList.add('visible');

    document.getElementById('submitBtn').classList.add('hidden');
    document.getElementById('nextBtn').classList.remove('hidden');
    this._selectedOption = undefined;
  }

  nextQuestion() {
    quizEngine.nextQuestion();
    this._selectedOption = undefined;
    this.renderQuestion();
  }

  showResults() {
    const results = quizEngine.getResults();
    const topicId = results.topicId;

    if (topicId && topicId !== 'global' && topicId !== 'review') {
      statsManager.recordResult(topicId, results);
      this.updateGlobalProgress();
      this.renderSidebar();
      this.checkGlobalQuizStatus();
    }

    const icon = results.passed ? '🎉' : '📚';
    const passClass = results.passed ? 'pass' : 'fail';
    const message = results.passed
      ? '¡Enhorabuena! Has aprobado este cuestionario.'
      : 'No has alcanzado el 80%. Repasa el tema y vuelve a intentarlo.';

    let html = `
      <div class="results-header">
        <div class="results-icon">${icon}</div>
        <div class="results-score ${passClass}">${results.percentage}%</div>
        <div class="results-label">${results.correct} de ${results.total} correctas</div>
        <div class="results-detail">${message}</div>
        <div class="results-detail" style="margin-top: 8px; font-size: 0.82rem; color: var(--color-text-light);">
          Tiempo: ${quizEngine.formatTime(results.timeSeconds)}
        </div>
      </div>

      <div class="results-breakdown">
        <h3>Detalle de Respuestas</h3>
        <ul class="results-breakdown-list">
          ${results.answers.map((a, i) => `
            <li>
              <span class="result-indicator ${a.isCorrect ? 'correct' : 'incorrect'}"></span>
              <span style="flex: 1;">${a.question}</span>
              <span style="font-size: 0.78rem; color: var(--color-text-light);">${a.isCorrect ? '✓' : '✗'}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="results-actions">
        <button class="btn btn-secondary" data-action="back-dashboard">📊 Dashboard</button>
        ${topicId && topicId !== 'global' && topicId !== 'review'
          ? `<button class="btn btn-outline" data-action="back-to-topic" data-topic-id="${topicId}">📖 Volver al Tema</button>`
          : ''}
        <button class="btn btn-primary" data-action="retry-quiz" data-topic-id="${topicId}">🔄 Repetir Examen</button>
      </div>
    `;

    this.resultsContainer.innerHTML = html;
    this.switchView('results');
    quizEngine.reset();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  renderReview() {
    const wrongQuestions = statsManager.getWrongQuestions();

    if (wrongQuestions.length === 0) {
      this.reviewContainer.innerHTML = `
        <div class="review-header">
          <h2>Repasar Errores</h2>
          <p>Practica con las preguntas que has fallado anteriormente</p>
        </div>
        <div class="review-empty">
          <div class="review-empty-icon">🎉</div>
          <h3>¡No tienes errores pendientes!</h3>
          <p>Has respondido correctamente todas las preguntas o aún no has realizado ningún cuestionario.</p>
          <div style="margin-top: 20px;">
            <button class="btn btn-primary" data-action="back-dashboard">Volver al Dashboard</button>
          </div>
        </div>
      `;
      return;
    }

    this.reviewContainer.innerHTML = `
      <div class="review-header">
        <h2>Repasar Errores</h2>
        <p>Tienes ${wrongQuestions.length} preguntas pendientes de repasar</p>
      </div>
      <div class="text-center" style="margin-top: 24px;">
        <button class="btn btn-primary btn-lg" data-action="start-review">🔄 Iniciar Repaso (${wrongQuestions.length} preguntas)</button>
        <div style="margin-top: 16px;">
          <button class="btn btn-secondary" data-action="back-dashboard">← Dashboard</button>
        </div>
      </div>
    `;
  }

  updateGlobalProgress() {
    const progress = statsManager.getGlobalProgress();
    this.globalProgressFill.style.width = `${progress.percentage}%`;
    this.globalProgressText.textContent = `${progress.completed}/11`;
  }

  checkGlobalQuizStatus() {
    const unlocked = statsManager.isGlobalQuizUnlocked();
    if (unlocked) {
      this.globalBadge.textContent = '✓';
      this.globalBadge.classList.remove('locked');
      this.globalBadge.classList.add('unlocked');
    } else {
      this.globalBadge.textContent = '🔒';
      this.globalBadge.classList.remove('unlocked');
      this.globalBadge.classList.add('locked');
    }
  }

  showModal(title, body) {
    this.modalContent.innerHTML = `
      <div class="modal-title">${title}</div>
      <div class="modal-body">${body}</div>
      <div class="modal-actions">
        <button class="btn btn-secondary" data-action="modal-close">Cerrar</button>
      </div>
    `;
    this.modalOverlay.classList.add('active');
  }

  closeModal() {
    this.modalOverlay.classList.remove('active');
  }

  confirmReset() {
    this.modalContent.innerHTML = `
      <div class="modal-title">⚠️ Reiniciar Progreso</div>
      <div class="modal-body">¿Estás seguro de que quieres borrar todo tu progreso? Esta acción no se puede deshacer.</div>
      <div class="modal-actions">
        <button class="btn btn-secondary" data-action="modal-close">Cancelar</button>
        <button class="btn btn-danger" id="confirmResetBtn">Sí, reiniciar</button>
      </div>
    `;
    this.modalOverlay.classList.add('active');

    document.getElementById('confirmResetBtn').addEventListener('click', () => {
      statsManager.resetAll();
      this.closeModal();
      this.updateGlobalProgress();
      this.renderSidebar();
      this.renderDashboard();
      this.checkGlobalQuizStatus();
    });
  }
}

const app = new App();
