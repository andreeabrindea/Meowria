import TopBar from "../topbar/TopBar";
import "./home.css";
import headerImage from "./header-image.jpg";
import MultiStepForm from "./MultiStepForm";
console.log(headerImage);


export default function Home() {
    return (
        <div className="HOME">
             <TopBar></TopBar>
             <div className="wrapper">
           <h1>Symptoms Checker</h1>
           <div className="description">
            <p>Worried about your health?</p>
           <p>Use our tool to determine the cause of your symptoms. Be aware that the results are not 100% accurate and they should be just intuitive. Regardless of the result, you should visit a doctor immediately. </p>
           </div>
           <img className="headerImg" src={headerImage} alt="cat-vet"></img>
           <div className="multistepform">
           <MultiStepForm></MultiStepForm>
           </div>
           <div className="do-not-forget">
           <div className="moreAbout">
           <p>© 2023 - Queen Meowria -  made with love for humans. It is an app designed to diagnose humans. It can be a valuable tool for individuals and healthcare professionals alike. With the help of such an app, individuals can quickly identify any potential health issues and seek appropriate treatment before the problem worsens. Similarly, healthcare professionals can use the app to streamline their diagnostic process and provide better care for their patients.</p>
           </div>
           </div>
        </div>
        </div>
    )
}
