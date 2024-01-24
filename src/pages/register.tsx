import { useForm, SubmitHandler } from "react-hook-form"

interface IFormInput {
  firstName: string
  lastName: string
  email: string
}

export default function Register() {
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit((data)=>console.log(data))}>
      <label>First Name</label>
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      <label>Last Name</label>
      <input {...register("lastName", { required: true, maxLength: 20 })} />
      <label>Email</label>
      <input {...register("email", { required: true, pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
      <input type="submit" />
    </form>
  )
}