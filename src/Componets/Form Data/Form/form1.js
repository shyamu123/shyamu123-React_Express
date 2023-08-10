import React, { useState } from 'react'

const Form1 = () => {

// const[name , setName] = useState("");
// const[email , setEmail] = useState("");
// const[password , setPassword] = useState("");

const [formData , setFormData] = useState ({
  name:'',
  email:'',
  password:'' 
})

// const handleName = (e) =>{
//     console.log(e.target.value);
//     setName(e.target.value);
// }
// const handleEmail = (e) =>{
//   console.log(e.target.value);
//   setEmail(e.target.value);
// }
// const handlePassword = (e) =>{
//   console.log(e.target.value);
//   setPassword(e.target.value);
// }

const handleInput = (e) =>{
  const{name,value} = e.target;
  setFormData({
    ...formData,[name]:value
  })
}

const handleSubmit = (e) =>{
  e.preventDefault(); 
}
 
  return (
    <div>
      <form onSubmit={handleSubmit} style={{display:'flex' , flexDirection:'column' , height:'400px' , width:'500px'}}>
        <label> 
          Name:
          <input type='text' value={formData.name} name="name" onChange={handleInput}/>
        </label>
        <label> 
          Email:
          <input type='email' value={formData.email} name="email" onChange={handleInput}/>
        </label>
        <label>
          Password:
          <input type='password' value={formData.password} name="password" onChange={handleInput}/>
        </label>
        <button type="submit">Submit</button> 
      </form> 
    </div>
  )
}

export default Form1