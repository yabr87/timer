const { Feedback } = require('../models');

module.exports = {
  createFeedback: async (feedbackData) => {
    try {
      const feedback = await Feedback.create(feedbackData);
      return feedback;
    } catch (error) {
      throw new Error('Failed to create feedback');
    }
  },
  getAll: async () => {
    try {
      const feedbacks = await Feedback.findAll();
      return feedbacks;
    } catch (error) {
      throw new Error('Failed to find feedback');
    }
  },
  findBySessionId: async (sessionId) => {
    try {
      const feedbacks = await Feedback.findAll({ where: { sessionId } });
      return feedbacks;
    } catch (error) {
      throw new Error('Failed to find feedback by session id');
    }
  },
};
