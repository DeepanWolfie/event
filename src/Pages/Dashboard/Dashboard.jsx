import React, { useEffect, useState } from "react";
import { auth, firestore } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Dashboard.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import MainPart from "../../components/MainPart/MainPart";
const Dashboard = () => {
  const [userDetail, setUserDetail] = useState(null);

  const navi = useNavigate();
  function loginpage() {
    navi("/");
  }
  const signout = async () => {
    console.log("SIGNOUT CALLED");

    try {
      await auth.signOut();
      console.log("SIGNOUT CALLED");
      loginpage();
    } catch (e) {
      console.error("Error signing out:", e);
    }
  };

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const docRef = doc(firestore, "Users", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setUserDetail(docSnap.data());

            console.log(user);
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user data: ", error);
        }
      } else {
        console.log("No user is signed in");
        navi('/');
      }
    });
  };
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide >= 4 ? 1 : prevSlide + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <>
      {userDetail ? (
        <>
          <div className="backgroundlayer">
            <div className="threelayers">
            
              <Sidebar />
              <MainPart />
            </div>
          </div>
        </>
      ) : (
        <center>
          <p>loading...</p>
        </center>
      )}
    </>
  );
};

export default Dashboard;
