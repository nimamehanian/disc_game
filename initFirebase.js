import firebase from 'firebase/app';
import 'firebase/auth';
import { FIREBASE_API_KEY } from 'root/keys';

firebase.initializeApp({
  apiKey: FIREBASE_API_KEY,
  authDomain: 'PROJECT_NAME.web.app',
  projectId: 'PROJECT_NAME',
});

export default firebase;
