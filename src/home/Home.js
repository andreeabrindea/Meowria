import TopBar from "../topbar/TopBar";
import "./home.css";
import headerImage from "./headerImage.png";
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
            <div className="join">
                <h1>Create an account</h1>
                <p>Make it easier to track your symptoms over time.</p>
                <form>
                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" required></input>

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" id="psw" required></input>

                <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required></input>
                <div className="joinButtons">
                <button>Join</button>
                <button>LogIn</button>
                </div>
                </form>
            </div>
           <div className="moreAbout">
           <p>© 2023 - Queen Meowria - made with love for cats. It is an app designed to diagnose cats. It can be a valuable tool for pet owners and veterinarians alike. With the help of such an app, pet owners can quickly identify any potential health issues with their cats and seek appropriate treatment before the problem worsens. Similarly, veterinarians can use the app to streamline their diagnostic process and provide better care for their feline patients.</p>
           </div>
           </div>
        </div>
        </div>
    )
}
