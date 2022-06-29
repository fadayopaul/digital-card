import React from "react";
import ProfileInfo from "./component/profile-info";
import ContactInfo from "./component/contact-info";
import About from "./component/about";
import Footer from "./component/footer";

export default function App() {
  return (
    <div className="container">
      <div className="main-div">
        <div className="contact-box">
          <ProfileInfo />
          <ContactInfo />
          <About />
        </div>
        <Footer />
      </div>
    </div>
  );
}
