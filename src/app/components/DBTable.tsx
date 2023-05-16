'use client'
interface dbInterface {
    id:string,
    email:string,
    name:string
  }

interface tableProps{
  data: dbInterface[]
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
          <td className="p-3 text-center">-</td>
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