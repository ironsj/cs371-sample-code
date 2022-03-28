import { FirebaseApp, initializeApp } from "firebase/app";

import { Firestore, getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./myconfig";
import { run as createOp} from "./create-funcs";
import { run as readOp } from "./read-funcs";
import { run as updateOp } from "./update-funcs";
import { run as deleteOp } from "./delete-funcs";
import { listen } from "./listener-funcs";
const app: FirebaseApp = initializeApp(firebaseConfig, "hans");
console.log("Create Firebase App", app.name);
const db: Firestore = getFirestore(app);

createOp(db);

// readOp(db);
// updateOp(db);
// deleteOp(db);
// listen(db);