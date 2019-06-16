/**
 * reference: https://cloud.google.com/nodejs/docs/reference/storage/2.5.x/File#save
 */

const saveSourceCode = (storage, websiteId, filename, type, sourceCode) => {
  return storage
  .bucket(process.env.GOOGLE_STORAGE_BUCKET)
  .file(`${websiteId}/${type}s/${filename}`)
  .save(sourceCode);
};

module.exports = saveSourceCode;
