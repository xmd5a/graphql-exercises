const db = require('./db');

const Query = {
  jobs: () => db.jobs.list(),
  job: (root, {id}) => db.jobs.get(id)
}

const Job = {
  company: (job) => db.companies.get(job.companyId)
}

module.exports = { Query, Job };
