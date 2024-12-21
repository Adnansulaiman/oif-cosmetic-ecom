// import Logo from '../../assets/images/oif.green.png';
const Navbar = () => {
  return (
    
<div className='flex fixed z-50 text-black bg-gray-400 mt-4 mx-0 px-4 rounded-xl justify-between items-center w-[calc(100%-6rem)] left-12 h-16 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20'>
      
      <ul className='flex gap-8 items-center '>
          <li>Shop</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Blog</li>
      </ul>
      <p className='text-xl font-semibold pr-24'>OIF.</p>
      <div className="flex  gap-16 items-center">
        <p>Cart(0)</p>
        <div className="flex gap-2 items-center ">
          <p>User.</p>
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" className='w-6 h-6 rounded-full' />
      </div>
      </div>
      
    
  </div>
 
    
  )
}

export default Navbar
