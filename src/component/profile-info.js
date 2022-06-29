import React from "react";

export default function ProfileInfo() {
  return (
    <div>
      <div>
        <img
          src={require("../images/IMG_6372.JPG")}
          alt=""
          className="profile-image"
        />
      </div>
      <div className="profile-info">
        <h3 className="name">Paul Fadayo</h3>
        <h5 className="title"> Frontend Developer</h5>
        <p className="website">paulfadayo.com.ng</p>
      </div>
    </div>
  );
}
