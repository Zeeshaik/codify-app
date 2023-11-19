import { doc } from 'firebase/firestore';
import * as React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "@/firebase/firebase";
import { Java } from "@/utils/types/problem"
interface ISubmitLevelProps {
    java : Java;
}

const SubmitLevel: React.FunctionComponent<ISubmitLevelProps> = ({ java }) => {
    const [user] = useAuthState(auth);
    const returnUserDataAndProblemData = async (transaction: any) => {
		const userRef = doc(firestore, "users", user!.uid);
		const problemRef = doc(firestore, "java", java.id);
		const userDoc = await transaction.get(userRef);
		const problemDoc = await transaction.get(problemRef);
		return { userDoc, problemDoc, userRef, problemRef };
	};
    const handleSubmit = () => {
        if (user) {
            const userRef = doc(firestore, "users", user.uid);
            // Do something with userRef
        } else {
            // Handle the case when user is null or undefined
            console.error("User is not logged in.");
        }
    };
   return <button
    onClick={handleSubmit}
    className=" bg-red-700 text-white px-2 py-2 rounded-3xl absolute bottom-20 md:bottom-32 left-44 md:left-[450px]"
  >
    Try Again
  </button>
};

export default SubmitLevel;
