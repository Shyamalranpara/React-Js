import React from "react";
import ProfileCard from "./ProfileCard";

const Profile = () => {
  return (
    <div>

      <h1>Profile Card</h1>

      <ProfileCard
        name="Alice"
        age={30}
        greeting={

          <div>
            <strong>Hi Alice, have a wonderful day!</strong>
          </div>

        }
      />

      <p>Hobbies: Reading, Hiking</p>

      <button>Contact</button>
      
    </div>
  );
};

export default Profile;
