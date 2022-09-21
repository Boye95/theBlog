import avatar from '../assets/avatar.png'
import img4 from '../assets/postimages/4.png'

const Profile = () => {
  return (
    <div className='flex '>
      <div className='scroll-no flex flex-col mx-8 pt-9 w-4/6 h-screen overflow-scroll border-blue-200 border-r-2'>
        <div className="text-xl font-sfprotr font-semibold px-2 mb-5">
            Welcome Home, Boye.
        </div>
        <div className='text-2xl w-fit p-2 mb-8 font-sfprod border-b-8 border-black'>
          Your Blog Posts
        </div>
        <div className='w-11/12 flex flex-col gap-6 mb-9'>
          <div className='flex gap-3 h-52 border-2 rounded-md overflow-hidden transition hover:border-emerald-300 hover:ring-1'>
            <img src={img4} alt='' className='' />
            <div className='p-1'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              adipisci esse voluptatibus quos perspiciatis laborum minima
              laudantium eum ab libero, dolore, facere optio alias nostrum
              debitis exercitationem commodi nam? Quibusdam?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              adipisci esse voluptatibus quos perspiciatis laborum minima
              laudantium eum ab libero, dolore, facere optio alias nostrum
              debitis exercitationem commodi nam? Quibusdam?
            </div>
          </div>
          <div className='flex gap-3 h-52 border-2 rounded-md overflow-hidden transition hover:border-emerald-300 hover:ring-1'>
            <img src={img4} alt='' className='' />
            <div className='p-1'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              adipisci esse voluptatibus quos perspiciatis laborum minima
              laudantium eum ab libero, dolore, facere optio alias nostrum
              debitis exercitationem commodi nam? Quibusdam?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              adipisci esse voluptatibus quos perspiciatis laborum minima
              laudantium eum ab libero, dolore, facere optio alias nostrum
              debitis exercitationem commodi nam? Quibusdam?
            </div>
          </div>
          <div className='flex gap-3 h-52 border-2 rounded-md overflow-hidden transition hover:border-emerald-300 hover:ring-1'>
            <img src={img4} alt='' className='' />
            <div className='p-1'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              adipisci esse voluptatibus quos perspiciatis laborum minima
              laudantium eum ab libero, dolore, facere optio alias nostrum
              debitis exercitationem commodi nam? Quibusdam?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              adipisci esse voluptatibus quos perspiciatis laborum minima
              laudantium eum ab libero, dolore, facere optio alias nostrum
              debitis exercitationem commodi nam? Quibusdam?
            </div>
          </div>
          <div className='flex gap-3 h-52 border-2 rounded-md overflow-hidden transition hover:border-emerald-300 hover:ring-1'>
            <img src={img4} alt='' className='' />
            <div className='p-1'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              adipisci esse voluptatibus quos perspiciatis laborum minima
              laudantium eum ab libero, dolore, facere optio alias nostrum
              debitis exercitationem commodi nam? Quibusdam?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              adipisci esse voluptatibus quos perspiciatis laborum minima
              laudantium eum ab libero, dolore, facere optio alias nostrum
              debitis exercitationem commodi nam? Quibusdam?
            </div>
          </div>
        </div>
      </div>
      <div className='w-2/6 flex flex-col items-center mt-8'>
        <div className='h-[10rem] w-[10rem] border-2 border-gray-200 ring-4 ring-gray-400 hover:ring-2 rounded-full overflow-hidden'>
          <img src={avatar} alt='' className='h-full w-full ' />
        </div>

        <div className='mt-5 font-sfproth text-lg text-gray-700'>
          ADEBOYE FOLARANMI
        </div>
      </div>
    </div>
  )
}

export default Profile
