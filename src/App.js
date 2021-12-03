import React from "react";
import "./style.css";
import MedicalTreatmentPanel from "./MedicalTreatmentPanel"; //Here I have imported the MedicalTreatmentPanel component to the app.js

export default function App() {
  return (

 //This here below will show the title of the panel, which I have named as LHM hosital. Below that I have alo retrieved the data that we included in the MedicalTreatmentPanel.
    <div>
       <h1> LHM Hospital </h1> 


    <MedicalTreatmentPanel/>
 
    </div>
  );
}
