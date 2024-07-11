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





export default App;