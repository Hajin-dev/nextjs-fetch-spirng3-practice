'use client'
interface dbInterface {
    id:string,
    email:string,
    name:string
  }

interface tableProps{
  data: dbInterface[]
}
interface dataProps{
  data:dbInterface
}

async function remove(id:string){
  await fetch('http://localhost:8080/info/'+id,{
    method:'DELETE',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}

function EditDB({data}:dataProps){
  const dropdownId= "menu-"+data.id
  return(
    <div>
      <button
      className="rounded-full w-16 h-8 bg-blue-400">EDIT</button>
      <button
      className="rounded-full w-16 h-8 bg-red-400" onClick={()=>remove(data.id)}>DELETE</button>
    </div>
  )
}
export default function DBTable({data}:tableProps){

  return(
    <table className="table-auto">
      <thead>
        <tr>
          <td  className="p-3">Name</td>
          <td  className="p-3">E-mail</td>
          <td  className="p-3">Setting</td>
        </tr>
      </thead>
      <tbody>
      {
        data.length>0?data.map((d)=>
        <tr key={d.id}>
          <td className="p-3">{d.name}</td>
          <td className="p-3">{d.email}</td>
          <td className="p-3 text-center"><EditDB data={d}/></td>
        </tr>):
        
        <tr>
          <td colSpan={3}>
            No data Available...
          </td>
        </tr>
      }
      </tbody>
    </table>
  )
}