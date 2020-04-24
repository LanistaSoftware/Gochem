const path = require('path')
const multer = require('multer')
const diskStorageToUploads = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../../assets/img'))
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname + '-' + new Date().getUTCMonth() + '-' + new Date().getUTCDay() + '-' + '.jpg')
  }
})
const diskStorageToUploadsPdf = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname))
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const saveToUploads = multer({
  storage: diskStorageToUploads
})
const pdfUpload = multer({
  storage: diskStorageToUploadsPdf
})
module.exports = {
  saveToUploads: saveToUploads.array('file'),
  saveToUploadsReference: saveToUploads.single('file'),
  saveToUploadsPdf: pdfUpload.single('file')
}
