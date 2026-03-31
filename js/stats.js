/* ===========================
   LIMASAM 2025 — Study App
   Statistics & Progress
   =========================== */

class StatsManager {
  constructor() {
    this.storageKey = 'limasam2025_stats';
    this.data = this.load();
  }

  load() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      return saved ? JSON.parse(saved) : this.getDefault();
    } catch {
      return this.getDefault();
    }
  }

  save() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.data));
    } catch (e) {
      console.warn('No se pudo guardar el progreso:', e);
    }
  }

  getDefault() {
    const topics = {};
    for (let i = 1; i <= 11; i++) {
      topics[i] = {
        attempts: 0,
        bestScore: 0,
        lastScore: 0,
        lastPercentage: 0,
        completed: false,
        wrongQuestions: [],
        totalTime: 0
      };
    }
    return {
      topics: topics,
      globalQuizCompleted: false,
      globalQuizBest: 0,
      totalAttempts: 0,
      totalCorrect: 0,
      totalQuestions: 0,
      lastAccessed: null
    };
  }

  recordResult(topicId, results) {
    const topic = this.data.topics[topicId];
    if (!topic) return;

    topic.attempts++;
    topic.lastScore = results.correct;
    topic.lastPercentage = results.percentage;
    topic.totalTime += results.timeSeconds;

    if (results.percentage > topic.bestScore) {
      topic.bestScore = results.percentage;
    }

    if (results.percentage >= 80) {
      topic.completed = true;
    }

    results.answers.forEach((answer, idx) => {
      if (answer && !answer.isCorrect) {
        const exists = topic.wrongQuestions.some(wq =>
          wq.question === answer.question && wq.topicId === answer.topicId
        );
        if (!exists) {
          topic.wrongQuestions.push({
            question: answer.question,
            selected: answer.selected,
            correct: answer.correct,
            options: answer.options,
            explanation: answer.explanation,
            topicId: answer.topicId
          });
        }
      }
    });

    this.data.totalAttempts++;
    this.data.totalCorrect += results.correct;
    this.data.totalQuestions += results.total;
    this.data.lastAccessed = new Date().toISOString();

    this.save();
  }

  getTopicStats(topicId) {
    return this.data.topics[topicId] || this.getDefault().topics[topicId];
  }

  getGlobalProgress() {
    const completed = Object.values(this.data.topics).filter(t => t.completed).length;
    return {
      completed,
      total: 11,
      percentage: Math.round((completed / 11) * 100)
    };
  }

  isGlobalQuizUnlocked() {
    return Object.values(this.data.topics).every(t => t.completed);
  }

  getWrongQuestions() {
    const allWrong = [];
    Object.entries(this.data.topics).forEach(([topicId, topic]) => {
      topic.wrongQuestions.forEach(wq => {
        allWrong.push({ ...wq, topicId: parseInt(topicId) });
      });
    });
    return allWrong;
  }

  clearWrongQuestions(topicId) {
    if (topicId) {
      this.data.topics[topicId].wrongQuestions = [];
    } else {
      Object.values(this.data.topics).forEach(t => {
        t.wrongQuestions = [];
      });
    }
    this.save();
  }

  resetAll() {
    this.data = this.getDefault();
    this.save();
  }

  getTopicPercentage(topicId) {
    return this.data.topics[topicId]?.completed ? 100 : this.data.topics[topicId]?.bestScore || 0;
  }
}

const statsManager = new StatsManager();
