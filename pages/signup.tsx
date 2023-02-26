 import Head from 'next/head';
// import styles from '../styles/Auth.module.css';
// import useSignup from "../hooks/useSignup"
// import Link from 'next/link';
// export default function SignUp() {

//     const { 
//         userName,
//         email,
//         password,
//         loader,
//         setLoader,
//         setEmail,
//         setUserName,
//         setPassword,
//         onSubmitHandler } = useSignup();
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Sign Up | Event Planner App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>Sign Up</h1>

//         {/* <form className={styles.form} onSubmit={onSubmitHandler}>/ */}
//           <label htmlFor="email">Email:</label>
//           <input type="email" value={email} id="email" onChange={(e) => setEmail(e.target.value)} name="email" required />

//           <label htmlFor="password">Password:</label>
//           <input type="password" value={password} id="password"  onChange={(e) => setPassword(e.target.value)} name="password" required />

//           <label htmlFor="displayName">Display Name:</label>
//           <input type="text" id="displayName" value={userName} onChange={(e) => setUserName(e.target.value)} name="displayName" />

//           {/* <button type="submit" onClick={onSubmitHandler} className={styles.button}>
//             Sign Up
//           </button> */}
//           {loader ? <button >Loading...</button> :
//          <Link href="/login">
//              <button type="submit" onClick={onSubmitHandler}>SignUp</button>
//          </Link>
//         }
//         {/* </form> */}
//       </main>

//       <footer className={styles.footer}>
//         <p>Event Planner App &copy; 2023</p>
//       </footer>
//     </div>
//   );
// }

// import useSignUp from "../customHooks/usesignUp"
import usesignup from "../hooks/useSignup"
import Link from 'next/link';


export default function SignUp() {
  const { 
    userName,
    email,
    password,
    loader,
    setLoader,
    setEmail,
    setUserName,
    setPassword,
    onSubmitHandler } = usesignup();

  return (
    <div>
      <h1>
        SignUp form
      </h1>
<form action="
">

      <input onChange={(e) => setUserName(e.target.value)} type="text" required placeholder="Enter your name" />
      <br />
      <input onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="Enter your email" />
      <br />
      <input onChange={(e) => setPassword(e.target.value)} type="password" required placeholder="Enter your password" />
      <br />
      {loader ? <button >Loading...</button> :
         <Link href="/login">
             <button onClick={onSubmitHandler} >SignUp</button>
         </Link>
        }
        </form>
        {/* <Link href="/login">
</Link> */}
  {/* <button>Login</button> */}
    </div>
  )
}