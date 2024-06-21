import { signOut } from "@/auth"

export default function logOut() {
    return (async () => {
        "use server"
        await signOut()
      })();
  
}
