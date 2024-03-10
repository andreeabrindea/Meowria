import React from "react";
import headerImage from "./header-image.jpg";
import LoginOrRegister from "./LoginOrRegister";
import Footer from "../Footer";
import TopBar from "../topbar/TopBar";
import MultiStepForm from "./MultistepForm";
import Cookies from "js-cookie";

const purpose = "Symptom Checker";
const question = "Worried about your health? ";
const answer =
  "Use our tool to determine the cause of your symptoms. Be aware that the results are not 100% accurate and they should be just intuitive. Regardless of the result, you should visit a doctor immediately.";

const sessionToken = Cookies.get("sessionToken");
const isLoggedIn = !!sessionToken;
const pages = isLoggedIn
  ? ["Home", "Emergency", "About", "Account"]
  : ["Home", "Emergency", "About"];

function Home() {
  return (
    <div className="home-page">
      <TopBar items={pages}></TopBar>
      <div className="page-wrapper">
        <h1 className="app-purpose">{purpose}</h1>
        <p>{question}</p>
        <p>{answer}</p>
        <img className="header-image" src={headerImage}></img>
      </div>
      {isLoggedIn && <MultiStepForm></MultiStepForm>}
      {!isLoggedIn && <LoginOrRegister></LoginOrRegister>}
      <Footer></Footer>
    </div>
  );
}

export default Home;
