/**
 * reference: https://cloud.google.com/nodejs/docs/reference/storage/2.5.x/File#save
 */

const saveSourceCode = (storage, websiteId, fileId, type, sourceCode) => {
  return storage
  .bucket(process.env.GOOGLE_STORAGE_BUCKET)
  .file(`${websiteId}/${type}/${fileId}`)
  .save(sourceCode);
};

module.exports = saveSourceCode;
