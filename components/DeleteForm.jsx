'use client'
import { deleteTask } from "@/utils/actions"
import { useFormStatus, useFormState } from 'react-dom'


const SubmitBtn = () => {
  const { pending } = useFormStatus()
  return <button type="submit" className="btn btn-xs btn-error uppercase" disabled={pending}>
    {pending ? 'please wait...' : 'delete task'}
  </button>

}

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <SubmitBtn />
    </form>
  )
}
export default DeleteForm