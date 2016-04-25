import multer from 'multer';

export function setup(app) {
    const uploadsOptions = app.get('uploads');

    var {images, limits} = uploadsOptions;

    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, images);
        },
        filename: function (req, file, cb) {
            cb(null, `${file.fieldname}_${Date.now()}_${file.originalname.replace(/[|&;$%@\"<>()+,]/g, '').toLowerCase()}`);
        }
    });

    return multer({storage, limits});
};

export default function(app) {
    if (!app) {
        app = this;
    }

    var tunedMulter = setup(app);
    
    return tunedMulter;
}

