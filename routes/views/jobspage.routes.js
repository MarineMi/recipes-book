const router = require('express').Router();
const JobsPage = require('../../components/JobsPage');
const InnerJob = require('../../components/InnerJob');
const { Job } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const jobs = await Job.findAll({ order: [['id', 'ASC']] });
    res.send(res.renderComponent(JobsPage, { title: 'Jobs list', jobs }));
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/:jobsId', async (req, res) => {
  try {
    const job = await Job.findOne({
      raw: true,
      where: { id: req.params.jobsId },
    });
    res.send(res.renderComponent(InnerJob, { title: 'внутрянка', job }));
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
