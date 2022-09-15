import { useState } from "react"
import { getCsrfToken } from "next-auth/react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"

export default function SignIn({ csrfToken }) {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState('');
    const router = useRouter();
    // const handleLogin = () => {
    //     signIn('credentials', {
    //         redirect: false,
    //         username: username,
    //         password: password,
    //         csrfToken,
    //         callbackUrl: "/api/auth/callback/credentials",
    //       }).then((res) => {
    //         if (res?.ok) {
    //           router.push('/');
    //         } else {
    //           setError('Wrong or missing credentials.');
    //           console.log(error)
    //         }
    //       });
    // }
  return (
    <>
    <form method="post" action="/api/auth/callback/credentials">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <label>
        Username
        <input value={username} name="user" type="text" onChange={(e) => setUsername(e.target.value)}/>
      </label>
      <label>
        Password
        <input value={password} name="password" type="password" onChange={(e) => setPassword(e.target.value)} />
      </label>
      
      <button type="submit">Sign in</button>
    </form>
    
    </>
  )
}

export const getServerSideProps = async (context) => {
    return {
      props: {
        csrfToken: await getCsrfToken(context),
      },
    };
  };