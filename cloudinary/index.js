const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const sha1 = require('sha1'); // not sure how it works           
// const signature = sha1(payload_to_sign + api_secret);
                           
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
    folder: 'YelpCamp',
    allowedFormats: ['png', 'jpg', 'jpeg'],
    },                    
});

module.exports = {
    cloudinary,
    storage,
    // signature
}