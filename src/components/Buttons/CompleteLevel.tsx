import { auth, firestore } from "@/firebase/firebase";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import router from "next/router";
import * as React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

interface ICompletedBtnProps {
  level: string;
}

const CompletedBtn: React.FunctionComponent<ICompletedBtnProps> = ({
  level,
}) => {
  const [user] = useAuthState(auth);
  const [completed, setCompleted] = React.useState<boolean>(() => {
    const completedFromStorage = localStorage.getItem("completed");
    return completedFromStorage === "true" ? true : false;
  });

  const dataFetch = async () => {
    if (user) {
      try {
        const userRef = doc(firestore, "users", user.uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          setCompleted(userDoc.data().levelsCompleted.includes(level));
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
  };

  React.useEffect(() => {
    dataFetch();
  }, [user, level]);

  const handleSubmit = async () => {
    if (!user) {
      toast.error("Please login to submit your code", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
      return;
    }
    try {
      const userRef = doc(firestore, "users", user.uid);
      const userDoc = await getDoc(userRef);

      if (!userDoc.data()?.levelsCompleted.includes(level)) {
        const currentCoins = userDoc.data()?.coins || 0;

        await updateDoc(userRef, {
          levelsCompleted: arrayUnion(level),
          coins: currentCoins + 50,
        });
        // Update local storage to mark level as completed
        localStorage.setItem("completed", "true");
        setCompleted(true);
      }
      toast.success("Congrats! Level Completed!", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
    } catch (error: any) {
      console.error("Error completing level:", error.message);
      toast.error("Oops! Something went wrong!", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
    }
  };

  const handleHome = () => {
    router.push("/java");
  };

  return (
    <>
      <button
        className="bg-orange-500 text-white px-6 py-3 md:mt-4 absolute bottom-5 md:bottom-10 right-5 md:right-[150px] rounded-full hover:bg-orange-600 transition duration-300"
        onClick={handleSubmit}
      >
        Completed
      </button>
      {completed && (
        <button
          className="bg-green-500 text-white px-6 py-3 md:mt-4 absolute bottom-5 md:bottom-10 right-5 md:right-[150px] rounded-full hover:bg-orange-600 transition duration-300"
          onClick={handleHome}
        >
          Go to Home
        </button>
      )}
    </>
  );
};

export default CompletedBtn;
