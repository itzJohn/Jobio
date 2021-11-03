const {Job} = require('../models/jobModel');
const profileController = {};

profileController.getJobs = async (req, res, next) => {
  try {
    const jobs = await Job.find({});
    const considered = await Job.find({status: 'Considering'});
    const applied = await Job.find({status: 'Applied'});
    const process = await Job.find({status: 'In-Progess'});
    const archive = await Job.find({status: 'Archived'});

    res.locals.stat = [jobs.length, considered.length, applied.length, process.length, archive.length ]
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
    //const {title, location, company} = req.body;
    Job.create(req.body);
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

profileController.removeCard = async (req, res, next) => {
  try {
    await Job.findOneAndRemove(req.query);
    return next();
  } catch (error) {
    return next({
      log: `profileController.removeCard: ERROR: ${error}`,
      message: { error },
    });
  }
};
module.exports = profileController;
