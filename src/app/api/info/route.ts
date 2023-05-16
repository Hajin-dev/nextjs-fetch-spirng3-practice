import { NextResponse } from 'next/server';

export async function GET() {
    const res = await fetch('http://localhost:8080/info',{
        headers:{
            'Content-Type':'application/json'
        }
    });
    const data = await res.json();

    return NextResponse.json({data});
}
type postType = {
    email:string,
    name:string
}
export async function POST(request:Request) {
    // let body:postType={
    //     email:"error",
    //     name:"error"
    // };
    // const post_res = await request.json();
    // body = post_res
    const body:postType = await request.json();
    // if(typeof(body.email)!='string' || typeof(body.name)!='string'){
    //     return NextResponse.error()
    // }
    const res = await fetch('http://localhost:8080/info',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            email:body.email,
            name:body.name
        })
    });
    const data = await res.json();

    return NextResponse.json({data});
}