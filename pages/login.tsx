 import Head from 'next/head';
// import styles from '../styles/Auth.module.css';
// import uselogin from '../hooks/uselogin'
// import Link from 'next/link';
// export default function Login() {

//     const { 
//         email,
//         password,
//         loader,
//         setLoader,
//         setEmail,
//         setPassword,
//         onSubmitHandler 
//     } = uselogin();
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Login | Event Planner App</title>
//         {/* <link rel="icon" href="/favicon.ico" /> */}
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>Log In</h1>

//         <form className={styles.form} >
//           <label htmlFor="email">Email:</label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" required />

//           <label htmlFor="password">Password:</label>
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" name="password" required />

//           <div className={styles.checkbox}>
//             <input type="checkbox" id="rememberMe" name="rememberMe" />
//             <label htmlFor="rememberMe">Remember me</label>
//           </div>

//           {/* <button type="submit" className={styles.button}>
//             Log In
//           </button> */}
//           {loader ? <button >Loading...</button> :
//          <Link href="/events">
//              <button type="submit" onSubmit={onSubmitHandler} >LogIn</button>
//          </Link>
//         }
//         </form>
//       </main>

//       <footer className={styles.footer}>
//         <p>Event Planner App &copy; 2023</p>
//       </footer>
//     </div>
//   );
// }




import React from 'react'
import uselogin from '../hooks/uselogin'
import Link from 'next/link';

const login = () => {

    const { 
        email,
        password,
        loader,
        setLoader,
        setEmail,
        setPassword,
        onSubmitHandler 
    } = uselogin();
  return (


     <div>
        <h1>
          Login form
        </h1>
  
        
        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" />
        <br />
        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" />
        <br />
        {loader ? <button >Loading...</button> :
         <Link href="/login">
         <button onClick={onSubmitHandler} >Login</button>
     </Link>
          }
      </div>
  )
}

export default login