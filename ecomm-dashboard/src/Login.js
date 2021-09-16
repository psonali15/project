import Header from './Header';
import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

 function Login()
{
	useEffect(()=>{

		if(localStorage.getItem('user-info')){

			history.push('/add');
		}

	}, []);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const history = useHistory();

   async function signIn(e){
       console.warn(email, password);
       let item = {email, password}

      let result = await fetch("http://127.0.0.1:8000/api/login", {
       	method : "POST",
       	body : JSON.stringify(item),
       	headers : {
       		"Content-Type" : "application/json",
       		"Accept" : "application/json"
       	}
       });

      result = await result.json();
      localStorage.setItem('user-info', JSON.stringify(result));
      history.push("/add");
	}

	return(
		<>
		<Header />
		<div className="col-sm-6 offset-sm-3">
		     <h1>Login Page</h1>
		     <input type="email" value={email} name="email" onChange={(e)=>{setEmail(e.target.value)}} className="form-control" placeholder="Email" />
		     <br/>
		     <input type="password" value={password} name="password" onChange={(e)=>{setPassword(e.target.value)}} className="form-control" placeholder="Password" />
             <br/>
             <br/>
             <button onClick={signIn} className="btn btn-primary">Login</button>
		</div>
		</>
	)
}
export default Login;