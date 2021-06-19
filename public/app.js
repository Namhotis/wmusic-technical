const auth = firebase.auth();

const whenSignedIn = document.getElementById("whenSignedIn");
const whenSignedOut = document.getElementById("whenSignedOut");

const signInBtn = document.getElementById("signInBtn");
const signOutBtn = document.getElementById("signOutBtn");

const userDetails = document.getElementById("userDetails");

const provider = new firebase.auth.GoogleAuthProvider();

signInBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged(user => {
  if (user) {
    // signed in
    whenSignedIn.hidden = false;
    whenSignedOut.hidden = true;
    userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p>UID: ${user.uid}`;
  } else {
    // not signed 
    whenSignedIn.hidden = true;
    whenSignedOut.hidden = false;
    userDetails.innerHTML = '';
  }
});

const db = firebase.firestore();

const createThing = document.getElementById('createThing');
const thingsList = document.getElementById('thingsList');

let thingsRef;
let unsubscribe;

auth.onAuthStateChanged((user) => {
  console.log(Faker)
  if (user) {
    thingsRef = db.collection('things')

    createThing.onclick = () => {
      const { serverTimestamp } = firebase.firestore.FieldValue;

      thingsRef.add({
        uid: user.uid, 
        name: Faker.Lorem.words().toString(),
        createdAt: serverTimestamp()
      })
    }

    unsubscribe = thingsRef
      .where('uid', '==', user.uid)
      .orderBy('createdAt')
      .onSnapshot(querySnapshot => {
        const items = querySnapshot.docs.map(doc => {
          
          return `<li>${doc.data().name }</li>`

        });

        thingsList.innerHTML = items.join('')
      });
  } else {
    unsubscribe && unsubscribe();
  }
});

