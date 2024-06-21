
import getUserSession from "../(funcs)/getUserSession";


 
export default async function UserAvatar() {
  return (
    <div>
      {
        JSON.stringify(await getUserSession())
      }
    </div>
  )
}