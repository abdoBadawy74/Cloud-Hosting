import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <section className='flex justify-center items-center flex-col'>
      <h1 className='text-gray-800 font-bold my-3 text-7xl'>404</h1>
      <p className='text-3xl text-gray-400 mt-2 mb-5 capitalize'>page not found</p>
      <Link className='text-blue-600 underline text-xl' href='/'>Go back to home</Link>
    </section>
  )
}

export default NotFoundPage
