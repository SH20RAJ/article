import redis from "@/redis";







export default async function page() {
    //call json typecode api and save it to redish with key "user"
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    await redis.set('user', JSON.stringify(data));


    //get the data from redis with key "user"
    const user = JSON.parse(await redis.get('user'));


    
  return (
    <div>
      {
        user ? (
          <div>
            <h1>User Data</h1>
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </div>
        ) : (
          <div>Loading...</div>
        )
      }
    </div>
  )
}
