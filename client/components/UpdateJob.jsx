import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

// Custom hook for handling input boxes
// saves us from creating onChange handlers for them individually
const useInput = init => {
  const [ value, setValue ] = useState(init);
  const onChange = e => {
    setValue(e.target.value);
  };
  // return the value with the onChange function instead of setValue function
  return [ value, onChange ];
};

const statusData = ['Considering', 'Applied', 'In-Progess', 'Archived']

const CreateJob = props => {
  const [ title, titleOnChange ] = useInput('');
  const [ company, companyOnChange ] = useInput('');
  const [ location, locationOnChange ] = useInput('');
  const [ salary, salaryOnChange ] = useInput('');
  const [ status, setStatus ] = useState(statusData[0])
  const [ notes, notesOnChange ] = useInput('');
  const [ missingError, setMissingError ] = useState(null);

  const handleStatusChange = e => {
    setStatus(speciesData[e.target.value]);
  };

  const statusOptions = statusData.map((ele, idx) => {
    return (
      <option key={idx} value={idx}>{ele}</option>
    );
  });

  const saveJob = () => {
    // check if name is empty
    if (title === '' || company === '' || location === ''  ) {
      setMissingError('required');
    } else {
      const body = {
        title,
        company,
        location,
        salary,
        status,
        notes,
      };
      fetch('/profile/addCard', {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON'
        },
        body: JSON.stringify(body)
      })
        .then(resp => resp.json())
        .then(data => {
          console.log(data);
        })
        .catch(err => console.log('CreateJob fetch /profile/addCard: ERROR: ', err));
    }
  };

  const updateJob = () =>{

  }

  // useEffect to clear Error when `title` is changed
  useEffect(()=>{
    setMissingError(null);
  }, [title,company,title]);

  return (
    <section className="mainSection">
      <article className="createJob">
        <h3>Enter your Job details</h3>

        <div className="createJobFields">
          <label htmlFor="title">Title: </label>
          <input name="title" type ="text" placeholder="Software Developer" value={title} onChange={titleOnChange} />
          {missingError ? (<span className="errorMsg">{missingError}</span>) : null}
        </div>

        <div className="createJobFields">
          <label htmlFor="company">Company: </label>
          <input name="company" type ="text" placeholder="Google" value={company} onChange={companyOnChange} />
          {missingError ? (<span className="errorMsg">{missingError}</span>) : null}
        </div>

        <div className="createJobFields">
          <label htmlFor="location">Location: </label>
          <input name="location" type ="text" placeholder="NYC" value={location} onChange={locationOnChange} />
          {missingError ? (<span className="errorMsg">{missingError}</span>) : null}
        </div>

        <div className="createJobFields">
          <label htmlFor="salary">Salary: </label>
          <input name="salary" type ="text" placeholder="100000" value={salary} onChange={salaryOnChange}  />
        </div>

        <div className="createJobFields">
          <label htmlFor="status" style={{'flex-grow' : '0.4'}} >Status: </label>
          <select name="status" style={{'flex-grow' : '1'}}id="status-select" onChange={handleStatusChange}>
            {statusOptions}
          </select>
        </div>

        <div className="createJobFields">
          <label htmlFor="notes">Notes: </label>
          <input name="notes" type ="text" placeholder="Near by" value={notes}  onChange={notesOnChange} />
        </div>

        <div className="createCharButtonContainer">
          <Link to="/" className="backLink">
            <button type="button" className="btnSecondary">
              Cancel
            </button>
          </Link>
          <button type="button" className="btnMain" onClick={saveJob}>Save</button>
          <button type="button" className="btnMain" onClick={updateJob}>Update</button>
        </div>
      </article>
    </section>
  );
};

export default withRouter(CreateJob);