// this component displays when the user clicks 'create a plan' 
// to initiate the creation of a new meal plan
import React, { useState } from "react";
import styles from "./CreatePlanForm.module.css";

// callback functions passed as props.
const CreatePlanForm = ({ onCreate, onClose }) => {
  const [planName, setPlanName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (planName.trim() === "") { // ensure name is not empty
      alert("Please enter a plan name.");
      return;
    }
    // set plan name, prepare for storage
    onCreate(planName.trim());
    setPlanName("");
  };

  return (
    <div className={styles.createPlanForm}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={planName}
          placeholder="Enter plan name"
          onChange={(e) => setPlanName(e.target.value)} // set plan name as it changes
        />
        <button type="submit">Create plan</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};
export default CreatePlanForm;
