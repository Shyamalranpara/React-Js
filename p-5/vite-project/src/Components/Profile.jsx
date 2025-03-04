import React, { useEffect, useState } from 'react';
import { auth, db } from '../../Firebaseconfig';
import { doc, getDoc } from 'firebase/firestore';
// import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [profile, setprofile] = useState(null);

  // const navigate = useNavigate(); 

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async(user)=>{
    console.log(user);
    const docRef = doc(db, 'users', user.uid);
    const docsnap = await getDoc(docRef);

        if (docsnap.exists()) {
          setprofile(docsnap.data());
          console.log(docsnap.data());
        }

       else {
      console.log('User is not logged in.');
    }});
  };

  useEffect(() => {
   fetchUserData();
  }, []);

  async function Hlogout() {
    try {
      await auth.signOut();
      window.location.href="/Login"; 
      console.log('User logged out successfully!');
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  }


  return (
    <div>
      {profile ? (
        <>
          <h2>Welcome {profile.FirstName}</h2>
          <div>
            <h1>Profile</h1>
            <p>Email: {profile.Email}</p>
            <p>First Name: {profile.FirstName}</p>
          </div>
          <button onClick={Hlogout}>Logout</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;