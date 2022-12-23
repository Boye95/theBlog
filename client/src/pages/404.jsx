import { Link } from 'react-router-dom'

export default function ErrorPage () {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <div className='flex flex-col items-center gap-2 font-urbanist'>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>

          <div className='flex flex-col justify-center items-center gap-4'>
            <p>
              <p className='text-[10rem] font-nylarge text-center sm:text-[4rem]'>404</p>
              <p className="text-center">Remember the road that will lead you home</p>
            </p>
            <Link
              to='/'
              className='w-fit border-2 border-emerald-100 rounded-lg py-1 px-4 text-white bg-emerald-500 shadow-lg ring-2 ring-emerald-200 ring-offset-2 transition-all hover:text-black hover:bg-white hover:shadow-sm hover:ring-offset-1 sm:text-sm'
            >
              Go Back Home
            </Link>
          </div>
      </div>
    </div>
  )
}