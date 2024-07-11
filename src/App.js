// // import React from 'react';

// // class App extends React.Component{
// //     constructor(props){
// //       super(props);
// //       this.state={email:'',name:''}
// //     }

// //     handleChange=(e)=>{
// //         this.setState({
// //           email:e.target.value,
// //         })
// //     }
// //     handleChangeName=(e)=>{
// //       this.setState({
// //         name:e.target.value
// //       })
// //     }

// //   render(){

// //     return(
// //       <>
// //       <div className='App' style={{padding:10}}>
// //         <input value={this.state.email} onChange={this.handleChange} />
// //         <input value={this.state.name}  onChange={this.handleChangeName} />

// //         <p>Email: {this.state.email}</p>
// //         <p>Name: {this.state.name}</p>
// //           </div>

// //       </>
// //     )
// //   }
// // }

// import React, { useState } from 'react';

// function App(){
//   const [email,setEmail]=useState('');//use state accepts single argument which is a intial value ,,,,,,,it return an array and [currentState,function(which helps in update the value of currentstate)]
//   const [name,setName]=useState('');

//   // const nameState=useState('');
//   // const name=nameState[0];
//   // const setName=nameState[1];

//   function handleChange(e){
//     setEmail(e.target.value)
//   }

//   function handleChangeName(e){
//     setName(e.target.value);
//   }
//   return(
//     <>
//     <div className="App" styles={{padding:10}}>
//       <input value={email} onChange={handleChange}></input>
//       <input value={name} onChange={handleChangeName}></input>
//       <p>Email: {email}</p>
//       <p>Name: {name}</p>
//     </div>
//     </>
//   )
// }

import React, { useState, useEffect } from "react";

//useEffect did all the work of ComponentDidMount,ComponentDidUpdate and ComponentDidUnmount
//useEffect call after initial render and after every update

function App(props) {
  const [userId, setUserId] = useState("1");
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, [userId]); 
  
  //to call the useEffect just one time we have to add empty array [] to prevent it to call after every render 
  //to render useEffect on changing the value of useEffect based on the upating value  we add userId in the empty array which make it ComponentDidUpadate

  useEffect(()=>{
    document.addEventListener('mousemove',onMouseMove);
    

    //the return runs when the App component is about to destroy which make it run as a ComponentDidUnmount
    return ()=>{
      document.removeEventListener('mousemove',onMouseMove);
    };
  });

  function onMouseMove(event){
    console.log(event.clientX);
  }
  return (
    <>
      <div className="App" style={{ padding: 20 }}>
        <h1>App</h1>
        <button onClick={() => setUserId("2")}>Change user id to 2</button>
        {data.map((user) => {
          return (
            <div>
              <p>{user.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
