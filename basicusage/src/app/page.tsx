"use client"
import {useForm} from "react-hook-form";


export default function Home() {
  const {handleSubmit, register, formState:{errors}}  =
      useForm({defaultValues:{firstname:"Djimaro", lastname:"Talahatu", phonenumber:""}});
  function onSubmit(data:any){
    console.log(data)
  }
  return (
    <main >
      <form onSubmit={handleSubmit(onSubmit) }>
        <input className={"text-black"}{...register("firstname",{required:true})} />
        {errors.firstname&&<span>firstname is required</span>}
          <input className={"text-black"} {...register("lastname", {required:true})}/>
          {errors.lastname&&<span> lastname is required</span>}

          <input className={"text-black"}{...register("phonenumber")}/>

          <button type={"submit"}>Send data</button>
      </form>

    </main>
  )
}
