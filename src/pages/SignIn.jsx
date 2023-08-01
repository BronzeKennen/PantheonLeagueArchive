import "../styles/Signin.css"
import { useRef, useState, useEffect } from 'react';
import { faCheck, faTimes, faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {motion} from 'framer-motion'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

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

  useEffect(() => {
    userRef.current.focus();
  }, [])
 
  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pass);
    console.log(result);
    console.log(pass);
    setValidPass(result);
  }, [pass]);
  
  useEffect(() => {
    setErrMsg('');
  }, [user,pass]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pass);
    if(!v1 || !v2) {
      setErrMsg('Invalid entry!');
      return;
    }
    console.log(user,pass);
    setSuccess(true);
  }
  
  return (  
    <>
    {success ? (
      <section>
        <h1>Success</h1>
      </section>
    ) : (
    <>
    <div className="signin-bg"/>
    <section className="signin">
      <p ref={errorRef} className={errMsg ? "errmsg" : "hide"} aria-live="assretive">{errMsg}</p>
      <h1>Register</h1>
      <form className="register" onSubmit={handleSubmit}>
        <div className="lmao">
        <label htmlFor="username">
          Username:
          <span className={validName ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck}/>
          </span>
          <span className={validName || !user ? "hide" : "invalid"}>
            <FontAwesomeIcon icon={faTimes}/>
          </span>
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
        </div>
        <motion.p id="uidnote" className={userFocus && user && !validName ? "instructions" : "hide"}>
          <FontAwesomeIcon icon={faInfoCircle}/> 4 to 24 characters. Must begin with a letter. Letters, numbers, underscores, hyphens allowed.
        </motion.p>
        <div className="lmao">
        <label htmlFor="password">
          Password:
          <span className={validPass ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck}/>
          </span>
          <span className={validPass || !pass ? "hide" : "invalid"}>
            <FontAwesomeIcon icon={faTimes}/>
          </span>
        </label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPass(e.target.value)}
          required
          aria-invalid={validPass ? false : true}
          aria-describedby="passnote"
          onFocus={() => setPassFocus(true)}
          onBlur={() => setPassFocus(false)}
        />
        <p id="passnote" className={passFocus && !validPass ? "instructions" : "hide"}>
          <FontAwesomeIcon icon={faInfoCircle}/> 8 to 32 characters. Must contain uppercase and lowercase letters, numbers and symbols.
        </p>
        </div>
        <motion.button disabled={!validName || !validPass ? true : false} className="submit"
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 2px 2px cyan"
        }}>Sign up</motion.button>
        <div className="lmao">
        <span>Already a member? <a href="/signin">Sign in</a></span>
        <span><a href="/forgot">Forgot Password?</a></span>
        </div>
      </form>
    </section>
      </>)}
    </>
  )
}
