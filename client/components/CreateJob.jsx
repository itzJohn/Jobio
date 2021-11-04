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

const statusData = ['Considering', 'Applied', 'In-Progress', 'Archived']

const CreateJob = props => {
  console.log(props)
  const [ title, titleOnChange ] = useInput(props.location.title || '')
  const [ company, companyOnChange ] = useInput(props.location.company || '')
  const [ location, locationOnChange ] = useInput(props.location.location || '')
  const [ salary, salaryOnChange ] = useInput(props.location.salary || '')
  const [ status, setStatus ] = useState(statusData[0])
  const [ notes, notesOnChange ] = useInput(props.location.notes || '')
  const [ missingError, setMissingError ] = useState(null);

  const handleStatusChange = e => {
    setStatus(statusData[e.target.value]);
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
        .then (() => props.history.push('/'))
        .catch(err => console.log('CreateJob fetch /profile/addCard: ERROR: ', err));
    }
  };

  const updateJob = (id) =>{
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
      fetch('/profile/updateStatus/?_id='+id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'Application/JSON'
        },
        body: JSON.stringify(body)
      })
        .then (() => props.history.push('/'))
        .catch(err => console.log('CreateJob fetch /profile/updateJob: ERROR: ', err));
    }
  }

  const removeJob = (id) =>{
    // check if name is empty
    if (!id) {
      setMissingError('required');
    } else {
      fetch('/profile/removeCard/?_id='+id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'Application/JSON'
        },
      })
        .then (() => props.history.push('/'))
        .catch(err => console.log('CreateJob fetch /profile/removeCard: ERROR: ', err));
    }
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
          <button type="button" className="btnMain" onClick={() => updateJob(props.match.params.jobId)}>Update</button>
          <button type="button" className="btnMain" onClick={() => removeJob(props.match.params.jobId)}>Remove</button>
        </div>
      </article>
    </section>
  );
};

export default withRouter(CreateJob);