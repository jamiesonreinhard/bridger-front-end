import axios from 'axios';
import react, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getUser } from '../creators/userCreator';
import { useDispatch } from 'react-redux';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const dispatch = useDispatch();


  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log(email);
    console.log(password);

    dispatch(getUser(email, password))
    history.push("/me");

    // axios.post('http://localhost:3000/login',
    // {
    //   email: email,
    //   password: password
    // })
    // .then(resp => {
    //   console.log(resp);
    //   if(resp.data.error){
    //     alert(resp.data.error)
    //   } else {
    //     localStorage.setItem("token", resp.data.token);
    //     localStorage.setItem("user", JSON.stringify(resp.data.user));
    //     history.push("/me");
    //   }
    // })
  }



  return (
    <div className="container ">
      <form onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input onChange ={e => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input onChange ={e => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <button type="submit" className="btn btn-primary">Log in</button>
      </form>
      
    </div>
  )
}

export default Login;