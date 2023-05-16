import { NextResponse } from 'next/server';

export async function GET(
    request:Request,{
        params,
      }: {
        params: { id: string };
      },
){
    const url = 'http://localhost:8080/info/'+params.id
    const res = await fetch(url,{
        headers:{
            'Content-Type':'application/json'
        }
    });
    const data = await res.json();
    return NextResponse.json({data});
}
export async function DELETE(
    request:Request,{
        params,
      }: {
        params: { id: string };
      },
){
    const url = 'http://localhost:8080/info/'+params.id
    const res = await fetch(url,{
        method:"DELETE",
        headers:{
            'Content-Type':'application/json'
        }
    });
    const data = await res.json();
    return NextResponse.json({data});
}
interface putType {
    email:string,
    name:string
}
export async function PUT(request:Request,{
    params,
  }: {
    params: { id: string };
  },)
  {
    const body:putType = await request.json();
    const url = 'http://localhost:8080/info/'+params.id
    const res = await fetch(url,{
        method:"PUT",
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({
            email:body.email,
            name:body.name
        })
    })
    const data = await res.json();

    return NextResponse.json({data});
  }