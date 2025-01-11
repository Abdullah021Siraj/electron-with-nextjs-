import '../app/global.css'
import {Metadata } from 'next' 

export const metadata= {
  title: 'Next + Electron ',
  description: 'next.js with electron.js',
}

function Layout({children}) {
  return (
  <html>
    <body>
      <h1 className='text-blue-900 bg-gray-100 text-2xl text-center p-4'>Hello from Main Layout</h1>
      {children}
    </body>
  </html>
  )
}

export default Layout