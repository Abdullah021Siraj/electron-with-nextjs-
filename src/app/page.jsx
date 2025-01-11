import Link from "next/link"
export default function Home() {
  return (
    <>
    <div>
      <h2 className='text-red-400 text-4xl text-center p-8'> Home Page</h2>
      <div className="flex flex-col p-4">
        <Link href='/dashboard'>Dashboard Link</Link>
        <Link href='https://desktop.github.com/download/' target="_blank">Website link!</Link>
      </div>
      </div>
    </>
  );
}
