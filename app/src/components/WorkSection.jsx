import { useState } from "react";

function WorkSection() {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const showForm = () => setIsDisplayed(!isDisplayed);

  const [workExperiences, setWorkExperiences] = useState([
    {
      id: 1,
      company: "test company",
      title: "Software Engineer",
      startDate: "2014/02/02",
      endDate: "2017/03/04",
      description: "Worked as a software engineer for 'test company'. Did lots of testing and worked hard."
    },
    {
      id: 2,
      company: "test company 2",
      title: "Software Architect",
      startDate: "2018/02/02",
      endDate: "2021/03/04",
      description: "Worked as a software architect for 'test company 2'. Did lots of architecting and worked hard."
    },
  ]);

  const [idCounter, setIdCounter] = useState(3);

  const incrementIdCounter = () => {
    setIdCounter(idCounter + 1);
  }

  const filterWork = (event) => {
    const newExperiences = workExperiences.filter(job => job.id != event.target.id);
    setWorkExperiences(newExperiences);
  }

  const addWork = (event) => {
    event.preventDefault();
    const parentContainer = event.target.parentElement;
    let newExperiences = workExperiences;
    newExperiences.push({
      id: idCounter,
      company: parentContainer.querySelector('#companyName').value,
      title: parentContainer.querySelector('#jobTitle').value,
      startDate: parentContainer.querySelector('#jobStartDate').value,
      endDate: parentContainer.querySelector('#jobEndDate').value,
      description: parentContainer.querySelector('#jobDescription').value
    });
    incrementIdCounter();
    setWorkExperiences(newExperiences);
    showForm();
  }

  return (
    <div>
      <div className="personalInfoHeader">
        <h2>Work Experience</h2>
        <button onClick={showForm}>{isDisplayed && 'Close' || 'Add Experience'}</button>
      </div>

      {
        isDisplayed && (
          <form action="">
            <div className="inputDiv">
              <label htmlFor="companyName" >Company: </label>
              <input type="text" id="companyName" />
            </div>

            <div className="inputDiv">
              <label htmlFor="jobTitle" >Job Title: </label>
              <input type="text" id="jobTitle" />
            </div>

            <div className="inputDiv">
              <label htmlFor="jobStartDate">Start Date: </label>
              <input type="text" id="jobStartDate" />
            </div>

            <div className="inputDiv">
              <label htmlFor="jobEndDate">End Date: </label>
              <input type="text" id="jobEndDate" />
            </div>

            <div className="inputDiv">
              <label htmlFor="jobDescription">Description: </label>
              <input type="text" id="jobDescription" />
            </div>

            <button onClick={addWork}>Save</button>
          </form>
        )
      }

      <ul>
        {workExperiences.map((job) => {
          return (
            <li key={job.id}>
              <div>
                <h4>{job.title} at {job.company}</h4>
                <p>{job.startDate} - {job.endDate}</p>
              </div>
              <p>{job.description}</p>
              <button id={job.id} onClick={filterWork}>X</button>
            </li>
          )
        })}
      </ul>

    </div>

  )


}

export default WorkSection;
