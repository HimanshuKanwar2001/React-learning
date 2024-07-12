import React,{useState} from 'react';


//Custom Hooks
function useFormInputs(intialValue){   //custom hooks are start with "use" in a function
  const [value,setValue]=useState('');  //it should use hook inside the function and the function act as a constructor

  function handleChange(e){
    setValue(e.target.value);
    
  }

  return{
    value,
    onChange:handleChange
  }
}


function LoginForm(){
  const email=useFormInputs('');
  const password=useFormInputs('');




return(
  <form>
    <div>Email</div>
    <div>
      <input type='text' {...email} />
    </div>
    <br/>
    <div>Password</div>
   <div>
   <input type='password' {...password} />
   </div>
   <p>
    <strong>
      <em>Email:</em>
    </strong>
    {email.value} |
    <strong>
      <em>Password:</em>
      {password.value} |
    </strong>
   </p>

  </form>
);

}


function SignupForm(){
  const email=useFormInputs('');
  const password=useFormInputs('');
  const confirmPassword=useFormInputs('');
  return(
    <form>
    <div>Email</div>
    <div>
      <input type='text' {...email} />
    </div>
    <br/>
    <div>Password</div>
    <div>
      <input type='password' {...password} />
    </div>
    <br/>
    <div>Confirm Password</div>
    <div>
      <input type='password' {...confirmPassword} />
    </div>
    <p>
    <strong>
      <em>Email:</em>
    </strong>
    {email}  |
    <strong>
      <em>Password:</em>
      {password}  |
    </strong>
    <strong>
      <em>Confirm Password:</em>
      {confirmPassword}  |
    </strong>
   </p>

    </form>
  )

}




function App(props){
  return(
    <div>
      <h2>Login</h2>
      <LoginForm/>
      <hr/>
      <h3>Signup</h3>
      <SignupForm/>
    </div>
  )
}


export default App;