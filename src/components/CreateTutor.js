import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createTutor } from '../creators/newTutorCreator';

const CreateTutor = () => {

  const [tutor, setTutor] = useState({});
  const history = useHistory();
  const dispatch = useDispatch();
  const currentUser = JSON.parse(localStorage.getItem("user"));
  console.log(currentUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tutor);
    const formData = new FormData();
    formData.append('tutor[avatar]', tutor.avatar);
    formData.append('tutor[first_name]', tutor.first_name);
    formData.append('tutor[last_name]', tutor.last_name);
    formData.append('tutor[city]', tutor.city);
    formData.append('tutor[state]', tutor.state);
    formData.append('tutor[country]', tutor.country);
    formData.append('tutor[phone_number]', tutor.phone_number);
    formData.append('tutor[occupation]', tutor.occupation);
    formData.append('tutor[linked_in_link]', tutor.linked_in_link);
    formData.append('tutor[summary]', tutor.summary);
    formData.append('tutor[user_id]', currentUser.id); 

    for (var pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
    }
    dispatch(createTutor(formData));
    history.push("/me");
  }

  const handleChange = (e) => {
    e.preventDefault();
    setTutor(Object.assign({}, tutor, {[e.target.name]: e.target.value, user_id: currentUser.id}));
    console.log(('tutor:', tutor));
  }

  const onImageChange = (e) => { 
    e.preventDefault();
    setTutor({...tutor, avatar: e.target.files[0] });
    console.log(('tutor: ', tutor));
  };

  return(
    <div className="container">
      <h2 className="mb-4">Create Your Tutor Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="mr-2" htmlFor="avatar">Upload a Profile Picture:</label>
          <input onChange={onImageChange} type="file" id="avatar" name="avatar" accept="image/*" multiple={false} />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input onChange={handleChange} name="first_name" type="text" className="form-control" id="firstName" aria-describedby="emailHelp" placeholder="Enter your first name"></input>
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input onChange={handleChange} name="last_name" type="text" className="form-control" id="lastName" placeholder="Enter your last name"></input>
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input onChange={handleChange} name="city" type="text" className="form-control" id="city" placeholder="Enter your city"></input>
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input onChange={handleChange} name="state" type="text" className="form-control" id="state" placeholder="Enter your state"></input>
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input onChange={handleChange} name="country" type="text" className="form-control" id="country" placeholder="Country"></input>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input onChange={handleChange} name="phone_number" type="tel" className="form-control" id="phone" placeholder="Where can we contact you?"></input>
        </div>
        <div className="form-group">
          <label htmlFor="occupation">Occupation</label>
          <input onChange={handleChange} name="occupation" type="text" className="form-control" id="occupation" placeholder="Occupation"></input>
        </div>
        <div className="form-group">
          <label htmlFor="summary">Tell Us About Yourself!</label>
          <input onChange={handleChange} name="summary" type="text" className="form-control" id="summary" placeholder="Who are you?"></input>
        </div>
        <div className="form-group">
          <label htmlFor="linkedin">LinkedIn</label>
          <input onChange={handleChange} name="linked_in_link" type="url" className="form-control" id="linkedin" placeholder="LinkedIn profile"></input>
        </div>
 
        <button className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  )
}

export default CreateTutor;
