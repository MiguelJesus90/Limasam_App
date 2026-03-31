/* ===========================
   LIMASAM 2025 — Study App
   Quiz Engine
   =========================== */

class QuizEngine {
  constructor() {
    this.currentQuiz = null;
    this.currentIndex = 0;
    this.answers = [];
    this.startTime = null;
    this.endTime = null;
  }

  start(questions, topicId = null) {
    this.currentQuiz = {
      questions: this.shuffle([...questions]),
      topicId: topicId,
      total: questions.length
    };
    this.currentIndex = 0;
    this.answers = [];
    this.startTime = Date.now();
    return this.currentQuiz;
  }

  getCurrentQuestion() {
    if (!this.currentQuiz || this.currentIndex >= this.currentQuiz.questions.length) {
      return null;
    }
    return {
      ...this.currentQuiz.questions[this.currentIndex],
      index: this.currentIndex,
      total: this.currentQuiz.total
    };
  }

  submitAnswer(questionIndex, selectedOption) {
    const question = this.currentQuiz.questions[questionIndex];
    const isCorrect = selectedOption === question.correct;

    this.answers[questionIndex] = {
      question: question.question,
      selected: selectedOption,
      correct: question.correct,
      isCorrect: isCorrect,
      options: question.options,
      explanation: question.explanation,
      topicId: this.currentQuiz.topicId
    };

    return isCorrect;
  }

  nextQuestion() {
    this.currentIndex++;
    return this.getCurrentQuestion();
  }

  getResults() {
    this.endTime = Date.now();
    const correct = this.answers.filter(a => a && a.isCorrect).length;
    const total = this.answers.filter(a => a !== undefined).length;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    const timeSeconds = Math.round((this.endTime - this.startTime) / 1000);

    return {
      correct,
      total,
      percentage,
      timeSeconds,
      answers: this.answers,
      topicId: this.currentQuiz?.topicId,
      passed: percentage >= 80
    };
  }

  reset() {
    this.currentQuiz = null;
    this.currentIndex = 0;
    this.answers = [];
    this.startTime = null;
    this.endTime = null;
  }

  shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }
}

const quizEngine = new QuizEngine();
