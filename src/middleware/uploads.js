import multer from 'multer';

export function setup(app) {
    const uploadsOptions = apiApp.get('uploads');

    var {images, fileName} = uploadsOptions;

    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, images);
        },
        filename: function (req, file, cb) {
            cb(null, fileName);
        }
    });

    return multer({
        storage: storage,
        limits: {
            fileSize: 5e6
        }
    });
};

export default function(app) {
    if (!app) {
        app = this;
    }

    var tunedMulter = setup(app);
    
    return tunedMulter.any();
}

