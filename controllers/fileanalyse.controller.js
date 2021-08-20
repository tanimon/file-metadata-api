const service = require('../services/fileanalyse.service');

const fileAnalyser = (req, res) => {
  const metadata = service.analyzeFile(req.file);
  res.json(metadata);
};

module.exports = fileAnalyser;
