import React from "react";

function Profile({ name, email }) {
  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
}

export default Profile;
