const { getStorage, ref, uploadBytesResumable, getDownloadURL } = require('firebase/storage');
const { signInWithEmailAndPassword } = require('firebase/auth');
const { auth } = require('../config/firebaseConfig');
const dotenv = require('dotenv');

dotenv.config();

async function uploadImage(file, quantity) {
    const storageFB = getStorage();

    await signInWithEmailAndPassword(auth, process.env.FIREBASE_USER, process.env.FIREBASE_AUTH);

    if (quantity === 'single') {
        const dateTime = Date.now();
        const fileName = `images/${dateTime}`;
        const storageRef = ref(storageFB, fileName);
        const metadata = {
            contentType: file.type,
        };

        await uploadBytesResumable(storageRef, file.buffer, metadata);

        // Get the download URL for the uploaded file
        const downloadURL = await getDownloadURL(storageRef);

        return downloadURL;
    }

    // Modify the 'multiple' case similarly if needed
}

const singleUpload = async (req, res) => {
    const file = {
        type: req.file.mimetype,
        buffer: req.file.buffer,
    };

    try {
        const imageURL = await uploadImage(file, 'single');
        res.send({
            status: 'SUCCESS',
            imageURL: imageURL,
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({ status: 'ERROR', message: err.message });
    }
};

module.exports = {
    singleUpload,
};
