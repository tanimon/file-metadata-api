const analyzeFile = (file) => {
  const name = file.originalname;
  const type = file.mimetype;
  const size = file.size;

  return { name, type, size };
};

module.exports = { analyzeFile };
