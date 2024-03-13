import * as React from "react";
import Link from "next/link";
import { firestore } from "@/firebase/firebase";
import { collection, onSnapshot } from "firebase/firestore";

interface IAllUsersProps {
  limitedCols?: boolean;
}

interface UserData {
  id: string;
  username: string;
  email: string;
  score: number;
}

const AllUsers: React.FunctionComponent<IAllUsersProps> = ({ limitedCols }) => {
  const [data, setData] = React.useState<UserData[]>([]);

  React.useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(firestore, "users"),
      (snapshot) => {
        const userData: UserData[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          username: doc.data().displayName,
          email: doc.data().email,
          score: doc.data().coins,
        }));

        userData.sort((a, b) => b.score - a.score);
        setData(userData);
      }
    );
    return () => unsubscribe();
  }, []);

  return (
    <div>
        <h2 className="text-2xl font-semibold text-white mb-4 text-center">
          User Ranking
        </h2>
      <div className="relative overflow-x-auto overflow-y-auto max-w-[20rem] md:max-w-[100rem] max-h-[20rem]">
        {/* User Ranking Table header  */}
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className="md:text-xl text-lg uppercase bg-gray-700 text-gray-400 sticky top-0">
            <tr>
              <th scope="col" className="px-6 py-3 bg-gray-500">
                User
              </th>
              {!limitedCols && (
                <th scope="col" className="px-6 py-3 bg-dark-layer-1">
                  Email
                </th>
              )}
              <th scope="col" className="px-6 py-3 bg-gray-500">
                Coins
              </th>
              {!limitedCols && (
                <th scope="col" className="px-6 py-3 bg-dark-layer-1">
                  Action
                </th>
              )}
            </tr>
          </thead>
          <tbody className="text-lg md:text-xl">
            {data.map((user) => (
              <tr
                key={user.id}
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <th className="px-6 py-4 text-white font-medium  whitespace-nowrap bg-gray-500 ">
                  {user.username}
                </th>
                {!limitedCols && <td className="px-6 py-4">{user.email}</td>}
                <td className="px-6 py-4 text-white font-medium  whitespace-nowrap bg-gray-500">
                  {user.score}
                </td>
                {!limitedCols && (
                  <td className="px-6 py-4">
                    <Link href={`/users/${user.id}`} passHref>
                      <p className="viewButton">View</p>
                    </Link>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
