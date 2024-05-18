const { getStorage, ref, uploadBytesResumable } = require('firebase/storage');
const { signInWithEmailAndPassword } = require('firebase/auth');
const { auth } = require('../config/firebaseConfig');


async function uploadImage(file, quantity) {
    const storageFB = getStorage();

    await signInWithEmailAndPassword(auth, "shawnarun19@gmail.com", "admin123")

    if (quantity === 'single') {
        const dateTime = Date.now();
        const fileName = `images/${dateTime}`
        const storageRef = ref(storageFB, fileName)
        const metadata = {
            contentType: file.type,
        }
        await uploadBytesResumable(storageRef, file.buffer, metadata);
        return fileName
    }

    if (quantity === 'multiple') {
        for(let i=0; i < file.images.length; i++) {
            const dateTime = Date.now();
            const fileName = `images/${dateTime}`
            const storageRef = ref(storageFB, fileName)
            const metadata = {
                contentType: file.images[i].mimetype,
            }

            const saveImage = await Image.create({imageUrl: fileName});
            file.item.imageId.push({_id: saveImage._id});
            await file.item.save();

            await uploadBytesResumable(storageRef, file.images[i].buffer, metadata);

        }
        return
    }

}


const singleUpload = async (req, res) => {
    const file = {
        type: req.file.mimetype,
        buffer: req.file.buffer,
    };
    try {
        const buildImage = await uploadImage(file, 'single');
        res.send({
            status: 'SUCCESS',
            imageName: buildImage,
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({ status: 'ERROR', message: err.message });
    }
};

module.exports = {
    singleUpload,
};