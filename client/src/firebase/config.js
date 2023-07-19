import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {
  getStorage,
  ref,
  // uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
// import { getFirestore, updateDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkPAME7LvVXe5V15TkbAAX8J4_m9F4yRg",
  authDomain: "circleup-7da4d.firebaseapp.com",
  projectId: "circleup-7da4d",
  storageBucket: "circleup-7da4d.appspot.com",
  messagingSenderId: "792870786061",
  appId: "1:792870786061:web:0d965a4ab1a90da6fdf144",
  measurementId: "G-5Q6DLSBWQD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});
export { provider };

export const uploadFile = (file) => {
  console.log("call get");
  const storage = getStorage(app);
  const fileExtension = file.name.split('.').pop().toLowerCase();
  console.log(fileExtension,'extension');
  const metadata = {
    contentType:`image/${fileExtension}`, // Replace 'image/jpeg' with the appropriate content type for your image file
  };
  const storageRef = ref(storage, "image/" + file.name);

  const uploadTask = uploadBytesResumable(storageRef, file, metadata);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Track upload progress

        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
      },
      (error) => {
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;
    
          // ...
    
          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
    
      },
      () => {
        // Upload completed successfully, get the download URL
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            console.log("File available at", downloadURL);
            resolve(downloadURL);
          })
          .catch((error) => {
            reject(error);
          });
      }
    );
  });
};

