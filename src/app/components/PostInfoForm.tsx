'use client'
import { FormEvent, useState } from "react";

export default function PostInfoForm(){
    interface FormData{
        name:string;
        email:string;
    }
    const [formData,setFormData]=useState<FormData>({email:'',name:''})
    const handleData = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        setFormData({...formData,[name]:value})
    }
    async function handleSubmit(e:FormEvent<HTMLFormElement>){
        await fetch('http://localhost:8080/info',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(formData)
        }).then((res)=>{setFormData({email:'',name:''})})
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <div className="my-2">
                <span className="block text-sm font-medium text-slate-700">Name</span>
                <input type="text" name="name" className=" placeholder:italic rounded text-pink-500" placeholder="John Doe"
                value={formData.name} onChange={handleData}/>
            </div>
            <div className="my-2">
                <span className="block text-sm font-medium text-slate-700">Email</span>
                <input type="email" name="email" className=" placeholder:italic rounded text-pink-500" placeholder="user@example.com" 
                value={formData.email} onChange={handleData}/>
            </div>
            <div className="mt-6 flex justify-center">
                <button type="submit"className="
                rounded-full bg-cyan-400 text-lg 
                font-semibold px-4 py-2 transition-colors
                 hover:bg-pink-400 hover:text-white
                 active:border-4 active:border-blue-300">Submit New DB</button>
            </div>
        </form>
        </div>
    )
}