import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Services from "../../services/services";
import Tutor from './Tutor';
import axios from 'axios';


const Tutors = () => {

  const [tutors, setTutors] = useState([]);
  const disptach = useDispatch();

  useEffect(()=> {
    const getTutors = () => {
      try{
        const tutors = Services.getTutorsAppointments();
        setTutors(tutors);
      } catch(e) {
        console.log("error in Tutors use effect, ", e);
      };
    };
    getTutors();
  }, [])

  const tutorsGrid = tutors.map( tutor => {
    return (
          <Tutor key={tutor.id} attributes={tutor} />
    )
  })

  return (
    <div className="container">
      <h1 className="mb-4">Available Tutors</h1>
      <div className="tutors-grid mb-4">
        {tutorsGrid}
      </div>
    </div>
  )
}

export default Tutors;