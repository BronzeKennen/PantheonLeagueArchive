import "../styles/Signin.css"
import {useRef, useState, useEffect} from 'react';
import { faCheck, faTimes, faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

export default function SignIn() {
  const userRef = useRef();
  const errorRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);
  
  const [pass, setPass] = useState('');
  const [validPass, setValidPass] = useState(false);
  const [passFocus, setPassFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   userRef.current.focus();
  // }, [])
 
  // useEffect(() => {
  //   const result = USER_REGEX.test(user);
  //   console.log(result);
  //   console.log(user);
  //   setValidName(result);
  // }, [user]);

  // useEffect(() => {
  //   const result = USER_REGEX.test(pass);
  //   console.log(result);
  //   console.log(pass);
  //   setValidPass(result);
  // }, [pass]);
  
  // useEffect(() => {
  //   setErrMsg('');
  // }, [user,pass]);
  
  return (
    <>
    <div className="signin-bg"/>
    <section className="signin">
      <p ref={errorRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assretive">{errMsg}</p>
      <h1>Register</h1>
      <form className="register">
        <label htmlFor="username">
          Username: 
        </label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          required
          aria-invalid={validName ? false : true}
          aria-describedby="uidnote"
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
        />
      </form>
    </section>
    </>
  )
}
