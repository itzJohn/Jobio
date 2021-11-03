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

const CreateJob = props => {
  const [ title, titleOnChange ] = useInput('');
  const [ company, companyOnChange ] = useInput('');
  const [ location, locationOnChange ] = useInput('');

  const saveJob = () => {
    // check if name is empty
    if (title === '' || company === '' || location === ''  ) {
      setMissingError('required');
    } else {
      const body = {
        title,
        company,
        location,
      };
      fetch('/profile//addCard', {
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
        .then(() => {
          props.history.push('/');
        })
        .catch(err => console.log('CreateJob fetch /api/character: ERROR: ', err));
    }
  };

  // useEffect to clear Error when `title` is changed
  useEffect(()=>{
    setMissingError(null);
  }, [title]);

  return (
    <section className="mainSection createCharContainer">

      <header className="pageHeader">
        <h2>Job Creator</h2>
        <Link to="/profile" className="backLink">
          <button type="button" className="btnSecondary">
              Back your profile
          </button>
        </Link>
      </header>

      <article className="card createChar">
        <h3>Enter your Job details</h3>

        <div className="createJobFields">
          <label htmlFor="title">Title: </label>
          <input name="title" placeholder="Software Developer" value={title} onChange={titleOnChange} />
          {missingError ? (<span className="errorMsg">{missingError}</span>) : null}
        </div>

        <div className="createJobFields">
          <label htmlFor="company">Company: </label>
          <input name="company" placeholder="Google" value={title} onChange={companyOnChange} />
          {missingError ? (<span className="errorMsg">{missingError}</span>) : null}
        </div>

        <div className="createJobFields">
          <label htmlFor="location">Location: </label>
          <input name="location" placeholder="NYC" value={title} onChange={locationOnChange} />
          {missingError ? (<span className="errorMsg">{missingError}</span>) : null}
        </div>

        <div className="createCharButtonContainer">
          <Link to="/profile" className="backLink">
            <button type="button" className="btnSecondary">
              Cancel
            </button>
          </Link>
          <button type="button" className="btnMain" onClick={saveCharacter}>Save</button>
        </div>
      </article>
    </section>
  );
};

export default withRouter(CreateCharacter);