
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './login_page/Login.css';
import { faApple, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Loginpage = () => {

    const [Person, setPerson] = useState([]);
    // const [error, setError] = useState('')

    const Datahandling = (e) => {
        const updata = (e.target.value);
        setPerson(updata);
        // setError('');
    }

  return (

    <>
      <div style={{paddingTop:'29px'}}>
        <div className='card'>
          <h1 style={{
                marginBottom: '8px',
                marginTop:"-13px"
          }}>Sin.in Page</h1>

          <form>
              <label  className='emailbox'>Email</label><br/>
              <input
              className='emailbox1's
              type='email'
              placeholder='Enter the Email'
              onChange={Datahandling}
              value={Person}
              required
              ></input><br/>

              <label className='pswbox'>Password</label><br/>
              <input
              className='pswbox1'
              type='password'
              placeholder='Enter the Password'
              onChange={Datahandling}
              value={Person}
              required
              ></input><br/>
              
              <div className='check'>
              <input
              type='checkbox'
              value={Person}
              ></input>
              <label>Remaber me</label><br/>
              </div>

              <input
              className='submit'
              type='submit'
              value={'SUBMIT'}
              />
          </form>
          <a href='#'className='fp'>Forget Password</a>

          <div className='ac_icon'>
            <a href='#' className='googleicon'>
            <FontAwesomeIcon icon={faGoogle} size="2x" style={{color:'white'}} /> 
            </a>
            <a href='#' className='appleicon'>
              <FontAwesomeIcon icon={faApple} size='2x' style={{color:'white'}}/>
            </a>
          </div>

        </div>
      </div>
    </>
    

  )
}

export default Loginpage