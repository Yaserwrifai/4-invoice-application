import Link from 'next/link';
import {  signOut,useSession } from 'next-auth/react';
import classes from './main-navigation.module.css';

function MainNavigation() {

const session = useSession()
  function logoutHandler() {
    signOut();
    <Link href='/auth'></Link>
   
    
    //  router.push("/auth");
    
  }
//console.log('session', session)
  return (
    <header className={classes.sidebar}>
      <Link href='/auth'>
        <a>
          {/* <div className={classes.logo}>Next Auth</div> */}
        </a>
      </Link>
      <nav>
        <ul>
          {!session.data && (
            <li>
              <Link href='/auth'>Login</Link> 
            
            </li>
            
          )}
          {session.data && (
            <li>
              <Link href='/profile'>Profile</Link>
            
            </li>
          )}
          {session.data && (
            <li>
              <button onClick={logoutHandler} >Logout</button>
             
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;