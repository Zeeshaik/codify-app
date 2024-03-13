import * as React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore, storage } from "@/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import Topbar from "@/components/Topbar/Topbar";
import BufferingSpinner from "@/components/Buffering/BufferingSpinner";
import { Bar, Line } from "react-chartjs-2";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useRouter } from "next/router";
import AllUsers from "@/components/AllUsers/AllUsers";
import CIcon from "@coreui/icons-react";
import cisEye from "@coreui/icons";
import {
  AiOutlineEye,
  AiOutlineInfoCircle,
  AiOutlineUser,
} from "react-icons/ai";
import { useState } from "react";

interface IProfileProps {}

const Profile: React.FunctionComponent<IProfileProps> = (props) => {
  const [userData, setUserData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);
  const [expanded1, setExpanded1] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  React.useEffect(() => {
    const getUserData = async () => {
      if (user) {
        try {
          const userRef = doc(firestore, "users", user.uid);
          const userDoc = await getDoc(userRef);
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
      setLoading(false);
    };
    getUserData();
  }, [user]);

  const handleEditProfileClick = () => {
    router.push("/profile/edit-profile");
  };

  if (!user || loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Topbar />
        <div className="flex flex-col items-center justify-center flex-1 bg-dark-layer-2 text-white">
          <BufferingSpinner />
        </div>
      </div>
    );
  }

  const languages = [
    { name: "Java", level: "Intermediate" },
    { name: "Python", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "HTML", level: "Intermediate" },
    { name: "CSS", level: "Intermediate" },

    // Add more languages as needed
  ];


  const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };
  

  const toggleExpanded1 = () => {
    setExpanded1(!expanded1);
  };

  return (
    <div className="flex flex-col min-h-screen bg-dark-layer-2 overflow-auto">
      <Topbar />
      <div className="flex flex-col items-center justify-center flex-1 bg-dark-layer-2 text-white">
        <div className=" h-[835px] md:w-[1200px] w-[400px] p-8 rounded-md md:flex gap-10">
          <div className="bg-dark-layer-1 rounded-lg shadow-md p-7 ">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={userData?.profilePhoto}
                  alt="Avatar"
                  width={70}
                  height={70}
                  className="rounded-full"
                />
                <div>
                  <h2>{userData?.displayName || "User"}</h2>
                  <p>{userData?.email}</p>
                  <p>
                    <span className="opacity-75">Rank</span> 2342
                  </p>
                </div>
              </div>
            </div>
            <div className=" mt-4">
              <button
                className="bg-brand-orange py-1 px-4 rounded-md text-white w-full"
                onClick={handleEditProfileClick}
              >
                Edit Profile
              </button>
            </div>
            <hr className="my-4 border-t border-gray-700" />
            <div className="w-[250px]">
              <h3 className="font-bold text-md">Community Status</h3>
              <div className=" p-2">
                <div className="flex items-center gap-2 text-gray-300 text-[15px] mb-2">
                  <AiOutlineEye size={25} color="skyblue" />
                  <p>Views</p>
                  <p>2342</p>
                </div>
                <div className="flex flex-col items-left gap-2 text-gray-300 text-[15px] mb-2">
                  <div className="flex items-center gap-2">
                    <AiOutlineInfoCircle size={25} color="skyblue" />
                    <p>About</p>
                  </div>
                  <div
                    className={`pl-4 pr-0 text-justify h-[80px] overflow-y-auto`}
                  >
                    <p className=" border-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-300 text-[15px] mb-2">
                  <AiOutlineUser size={25} color="skyblue" />
                  <p>Gender</p>
                  <p>Male</p>
                </div>
              </div>
            </div>
            <hr className="my-4 border-t border-gray-700" />
            <div className="w-[250px]">
              <h3 className="font-bold text-md">Languages</h3>
              <div className="w-full text-[15px]  overflow-y-auto">
                <table className="table-auto">
                  <tbody>
                    {languages.map((language, index) => (
                      <tr
                        key={index}
                        className={expanded1 || index < 4 ? "" : "hidden"}
                      >
                        <td className="px-4 py-2 ">
                          <p className="bg-gray-600 rounded-2xl px-2 text-center text-white">
                            {language.name}
                          </p>
                        </td>
                        <td className=" rounded px-4 py-2">{language.level}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {languages.length > 2 && (
                  <button
                    className="text-blue-600 hover:underline focus:outline-none mt-2"
                    onClick={toggleExpanded1}
                  >
                    {expanded1 ? "See Less" : "See More"}
                  </button>
                )}
              </div>
            </div>
          </div>
          <br />
          {/* Display other user data as needed */}
          {/* Second section */}
          <div className="max-w-xl  rounded-lg shadow-md">
            <div className="flex flex-col gap-4">
              {/* Second Card */}

              <div className="bg-dark-layer-1 rounded-lg p-2 md:w-[850px] md:flex md:flex-row flex flex-col gap-4">
                <div className="rounded-lg p-6 w-[400px] flex gap-6 md:justify-center">
                  <div className="p-6 bg-gray-900 rounded-lg flex items-center justify-center flex-col text-white md:w-[150px]">
                    <h1 className="md:text-5xl text-3xl font-extrabold mb-3">
                      1200
                    </h1>
                    <p className="text-lg font-mono">Rank</p>
                  </div>
                  <div className="p-6 bg-gray-900 rounded-lg flex items-center justify-center flex-col text-white md:w-[150px]">
                    <h1 className="md:text-5xl text-3xl font-extrabold mb-3">
                      2342
                    </h1>
                    <p className="text-lg font-mono">Coins</p>
                  </div>
                </div>

                <div className=" border-2"></div>
                <div className=" rounded-lg p-6 w-[400px]">
                  <div className="mx-auto w-11/12 overflow-hidden md:w-3/5">
                    
                  </div>
                </div>
              </div>
              {/* Third Card */}
              <div className=" rounded-lg  md:w-[850px] md:flex md:flex-row flex flex-col gap-4">
                <div className="bg-dark-layer-1 rounded-lg p-6 md:w-[420px]">
                  Graph Chart
                </div>
                <div className="bg-dark-layer-1 rounded-lg p-6 md:w-[420px]">
                  Bar Chart
                </div>
              </div>

              {/* Fourth Card */}
              <div className="bg-dark-layer-1 rounded-lg p-6 md:w-[850px] flex justify-center">
                <AllUsers />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
