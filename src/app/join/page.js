import { signIn } from "next-auth/react"
import Posts from "@/auth"
 
export function SignIn() {
  return <button onClick={() => signIn()}>Sign In</button>
}