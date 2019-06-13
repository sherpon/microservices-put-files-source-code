
const saveSourceCode = (storage, websiteId, fileId, type, sourceCode) => {
  return storage
  .bucket(process.env.GOOGLE_STORAGE_BUCKET)
  .file(`${websiteId}/${type}/${fileId}`)
  .save(sourceCode);
};

module.exports = saveSourceCode;
