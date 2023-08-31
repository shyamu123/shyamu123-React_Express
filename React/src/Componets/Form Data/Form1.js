import React,{useState} from 'react'

const Form1 = () => {

    const[formData,setFormData]=useState({
        name:'',
        email:'',
        password:'',
        fullname:''
    })

    const handleInput=(e)=>{
        const{name,value}=e.target;
        setFormData({
            ...formData,[name]:value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='flex justify-center mt-3'>
                <div className='w-[450px] bg-black'>
                    <div className=''>
                        <h1 className='text-center text-4xl mt-3 text-white'>Form</h1>
                        <input className='w-[400px] ms-4 mt-3' type="text" name="name" value={formData.name} onChange={handleInput} placeholder='Name'></input>
                        <br></br>
                        <input className='w-[400px] ms-4 mt-3' type="text" name="fullname" value={formData.fullname} onChange={handleInput} placeholder='Fullname'></input><br></br>
                        <input className='w-[400px] ms-4 mt-3' type="email" name="email" value={formData.email} onChange={handleInput} placeholder='Email'></input><br></br>
                        <input className='w-[400px] ms-4 mt-3' type="password" name="password" value={formData.password} onChange={handleInput} placeholder='password'></input>
                        <button type='submit' className='mb-3 bg-red-500 p-2 w-[200px] ms-[130px] mt-3'>Submit</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Form1
