import React, { useState } from 'react'
import './adminlogin.css'
import { useNavigate } from 'react-router-dom';

function AdminLoginpage() {
  const [adminuser,setadminuser]  = useState('');
  const [adminpws,setadminpws]  = useState('');
  const [adminusererror,setadminusererror] = useState('');
  const navigate = useNavigate();

  const adminhandling = (e) => { 

    e.preventDefault();


    if((adminuser.trim() === 'admin@20531') && (adminpws.trim() === '12345') ){
      // console.log('Redirecting to dashboard...');
      navigate('/admindasboard');

    }else{
      setadminusererror('This username or password wrong please check')
    }
    
   }
  return (
    <div className='loginpage'>
      <h3>Admin login</h3>
      <form onSubmit={adminhandling}>
        <label className='aminlable'>username</label>
        <input type='text' name='username' 
        className='adminbox'
        value={adminuser} 
        onChange={(e) => setadminuser(e.target.value)}/>

        <label className='aminlable'>password</label>
        <input type='password' name='pwd'
        className='adminbox'
        value={adminpws}
        onChange={(e) => setadminpws(e.target.value)}/>
        <input type='submit' value={'Log.in '} 
        className='adminbox adminsubmit' />
        <p style={{
          color:'red',fontSize: '21px'
        }}>{adminusererror}</p>

      </form>

    </div>
  )
}

export default AdminLoginpage