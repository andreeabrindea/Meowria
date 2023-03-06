import TopBar from "../topbar/TopBar";
import "./about.css";


export default function About() {
    return (
        <div className="ABOUT">
            <div className="topBar">
             <TopBar></TopBar>
             </div>
             <div className="aboutWrapper">
                <p>Queen Meowria is an app designed to diagnose cats. It can be a valuable tool for pet owners and veterinarians alike. With the help of such an app, pet owners can quickly identify any potential health issues with their cats and seek appropriate treatment before the problem worsens. Similarly, veterinarians can use the app to streamline their diagnostic process and provide better care for their feline patients.</p>
                <p>One of the most significant advantages of a diagnostic app for cats is that it can help pet owners save time and money on vet bills. Instead of scheduling an appointment for a minor concern, pet owners can use the app to determine whether their cat needs to see a vet immediately or whether it's safe to wait a few days. It can help pet owners keep track of their cat's health over time. By recording the results of each diagnostic test, pet owners can monitor changes in their cat's health and act accordingly.</p>
                <p>Despite its advantages, there are some potential cons of using this app, as it may not be able to detect certain health conditions that require a physical examination or more advanced diagnostic tests. Additionally, there is a risk that pet owners may rely too heavily on the app and delay seeking medical attention for their cat when it's needed. </p>
                <p>Regardless the result, please consult a veterinarian!</p>
                <p>It's an idea for my bachelor thesis.</p>
           
        </div>
        </div>
    )
}
