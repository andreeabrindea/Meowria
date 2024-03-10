import React from 'react'
import TopBar from '../topbar/TopBar'

const pages = ["Home", "Emergency", "About"];

const About = () => {
  return (
    <div className="page-wrapper">
        <TopBar items={pages}></TopBar>
        <p>Queen Meowria is a diagnostic app for humans, that can be a valuable tool for individuals and healthcare professionals alike. With the help of such an app, individuals can quickly identify potential health issues and seek appropriate treatment before the problem worsens. Similarly, healthcare professionals can use the app to streamline their diagnostic process and provide better care for their patients.</p>
        <p>One of the most significant advantages of a diagnostic app for humans is that it can help individuals save time and money on healthcare costs. Instead of scheduling an appointment for a minor concern, individuals can use the app to determine whether they need to see a doctor immediately or whether it's safe to wait a few days. The app can also help individuals keep track of their health over time by recording the results of each diagnostic test, allowing them to monitor changes in their health and act accordingly.</p>
        <p>However, like with any diagnostic tool, there are potential drawbacks to using the app. It may not be able to detect certain health conditions that require a physical examination or more advanced diagnostic tests. Additionally, there is a risk that individuals may rely too heavily on the app and delay seeking medical attention when it's needed.</p>
        <p>Regardless of the result, it's important to remember that a diagnostic app should not be a substitute for professional medical advice. It's always recommended to consult a healthcare professional if you have any concerns about your health.</p>
           
    </div>
  )
}

export default About
