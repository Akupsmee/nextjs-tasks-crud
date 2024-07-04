"use client"

const Error = (error) => {

  return (
    <span className="error">{error.error.message}</span>
  )
}
export default Error