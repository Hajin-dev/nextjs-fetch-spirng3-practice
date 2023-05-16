import DBTable from "@components/DBTable";
import PostInfoForm from "@components/PostInfoForm";
async function getDB(){
  const res= await fetch('http://localhost:8080/info',{  cache:"no-store"})
  if (!res.ok){
    throw new Error('Failed to fetch Db');
  }
  return res.json()
}

export default async function Home() {
  const db = await getDB()
  return (
    <main className="flex min-h-screen flex-row items-start justify-around p-24">

      <DBTable data={db}/>
      <PostInfoForm/>
    </main>
  )
}
