import { useState } from "react";

function PersonalInfo() {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const showForm = () => setIsDisplayed(!isDisplayed)

  return (
    <div>
      <div className="personalInfoHeader">
        <h2>Personal Info</h2>
        <button onClick={showForm}>{isDisplayed && 'Close' || 'Edit'}</button>
      </div>
      {
        isDisplayed && (
          <form action="">
            <div className="inputDiv">
              <label htmlFor="firstName" >First Name: </label>
              <input type="text" id="firstName" defaultValue="John" />
            </div>

            <div className="inputDiv">
              <label htmlFor="lastName" >Last Name: </label>
              <input type="text" id="lastName" defaultValue="Doe" />
            </div>

            <div className="inputDiv">
              <label htmlFor="email">Email: </label>
              <input type="email" id="email" />
            </div>

            <div className="inputDiv">
              <label htmlFor="phoneNumber">Phone Number: </label>
              <input type="text" id="phoneNumber" />
            </div>

            <button onClick={(event) => event.preventDefault()}>Save</button>
          </form>
        )
      }

    </div>

  )
}

export default PersonalInfo;
