/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, get, update } from "firebase/database";
import { getAuth } from "firebase/auth";
import { child } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA_u9ckgZa2LUaGu7eAl3EkJYK-uVEV8js",
  authDomain: "poushik-s-projects.firebaseapp.com",
  projectId: "poushikhttps://poushik-s-projects.web.app",
  storageBucket: "poushik-s-projects.appspot.com",
  messagingSenderId: "748730008357",
  appId: "1:748730008357:web:74f68b9462fd0a507690cc",
  databaseURL: "https://poushik-s-projects-default-rtdb.firebaseio.com",
};

let app = null;
let db = null;
function firebaseInit() {
  app = initializeApp(firebaseConfig);
  db = getDatabase();
}

// Initialize Realtime Database and get a reference to the service
function writeUserData(userId) {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    const username = user.displayName;
    const comment = "Your comment here";

    const userRef = ref(db, "users/" + userId);

    const likeRef = ref(userRef, "likes");
    onValue(likeRef, (snapshot) => {
      const liked = snapshot.val();

      if (!liked) {
        set(userRef, {
          username: username,
          comment: comment,
          likes: true,
        });
      }
    });
  }
}

async function getLike() {
  const likesRef = ref(db, "/likes");
  let likesCount = -1;
  return get(likesRef);
}

async function addALike() {
  const likesRef = ref(db, "/likes");
  getLike().then((data) => {
    console.log("Current likes " + data.val()["totalLikes"]);
    let currentLikes = data.val()["totalLikes"];
    currentLikes++;
    set(likesRef, {
      totalLikes: currentLikes,
    })
      .then(() => {
        console.log("Data saved successfully");
        // Data saved successfully!
      })
      .catch((error) => {
        // The write failed...
        console.log(error);
      });
  });
}

function logDbRealtime() {
  const starCountRef = ref(db, "users/");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
  });
}

export { firebaseInit, writeUserData, logDbRealtime, getLike, addALike };
