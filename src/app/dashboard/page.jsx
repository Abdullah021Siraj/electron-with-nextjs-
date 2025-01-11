import Link from "next/link"
function dashboard() {
  return (
    <>
    
    <div className="p-4">
      <div className="py-2 text-4xl text-center">Welcome to Dashboard</div>
      <Link href='/'>Back to home page</Link>
      </div>
    </>
  )
}

export default dashboard