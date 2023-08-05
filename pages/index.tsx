import React from 'react';
import {useState} from 'react';
import { getCandidates } from '../src/services/staff/candidates.js';

function IndexPage() {  
  const [profile, setProfile] = useState("Student");
  React.useEffect(() => {
    const AUTH_TOKEN = localStorage.getItem("AUTH_TOKEN");
    if (!AUTH_TOKEN) {
      window.location.replace('/signin');
    } else {
      window.location.replace('/info');
    }
  }, [])

  return (
    <div style={{ zIndex: 1200, textAlign: "center", padding: "50vh"}}>
      <h1>Loading...</h1>
    </div>
  )
}

export default IndexPage;
