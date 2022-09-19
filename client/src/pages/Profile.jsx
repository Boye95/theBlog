import avatar from '../assets/avatar.png'

const Profile = () => {
  return (
    <div className='flex '>
      <div className='flex flex-col mx-8 mt-9 w-4/6 h-screen border-blue-200 border-r-2'>
        <div className="text-3xl font-sfprod">
            Your House of Magic!
        </div>
      </div>
      <div className='w-2/6 flex flex-col items-center mt-8'>
        <div className='h-[10rem] w-[10rem] border-2 border-gray-200 ring-4 ring-gray-400 hover:ring-2 rounded-full overflow-hidden'>
          <img src={avatar} alt='' className='h-full w-full ' />
        </div>

        <div className="mt-5 font-sfproth text-lg text-gray-700">ADEBOYE FOLARANMI</div>
      </div>
    </div>
  )
}

export default Profile
