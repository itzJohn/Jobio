const {Job} = require('../models/jobModel');
const profileController = {};

profileController.getJobs = async (req, res, next) => {
  try {
    const jobs = await Job.find({});
    res.locals.jobs = jobs;
    return next();
  } catch (error) {
    return next({
      log: `profileController.getJobs: ERROR: ${error}`,
      message: { error },
    });
  }
};

profileController.createCard = (req, res, next) => {
  try {
    const {title, location, company} = req.body;
    Job.create({'title': title, 'location': location, 'company': company});
    return next();
  } catch (error) {
    return next({
      log: `profileController.createCard: ERROR: ${error}`,
      message: { error },
    });
  }
};

profileController.updateStatus = async (req, res, next) => {
  try {
    await Job.findOneAndUpdate(req.query, req.body);
    return next();
  } catch (error) {
    return next({
      log: `profileController.updateStatus: ERROR: ${error}`,
      message: { error },
    });
  }
};
module.exports = profileController;
