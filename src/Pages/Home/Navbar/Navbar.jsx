import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import swal from "sweetalert";


const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);

  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : 'cupcake');
    
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");

    document.querySelector('html').setAttribute('data-theme', localTheme);


  }, [theme])


  const handleToggole = (e) => {
    if(e.target.checked){
      setTheme('dark');
    }
    else{
      setTheme('cupcake');
    }
  }
  

  

  const defaultImg = "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1696786604~exp=1696787204~hmac=c10645727b8724eecda4984ef1d8fbfba92a9c9072a57b851c28c9b1d8d62b81";


  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("logged out");
        swal("Signout", "You are successfully signed out", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = (
    <>
       <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#2a5298] underline font-bold text-base  md:hover:btn-neutral px-4 py-2 rounded-lg"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addjob"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#2a5298] underline font-bold text-base  md:hover:btn-neutral px-4 py-2 rounded-lg"
              : ""
          }
        >
          Add Job
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myjob"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#2a5298] underline font-bold text-base  md:hover:btn-neutral px-4 py-2 rounded-lg"
              : ""
          }
        >
          My Posted Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/mybids"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#2a5298] underline font-bold text-base  md:hover:btn-neutral px-4 py-2 rounded-lg"
              : ""
          }
        >
          My Bids
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/bidreq"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#2a5298] underline font-bold text-base  md:hover:btn-neutral px-4 py-2 rounded-lg"
              : ""
          }
        >
          Bid Requests
        </NavLink>
      </li>

       {user?.email ?  <>
    
    <li><button onClick={handleLogOut}>Logout</button></li> 
  </>
  : 
  <li> <NavLink
  to="/login"
  className={({ isActive, isPending }) =>
    isPending
      ? "pending"
      : isActive
      ? "text-[#2a5298] underline font-bold text-base  md:hover:btn-neutral px-4 py-2 rounded-lg"
      : ""
  }
>
Login
</NavLink></li>
 }
      
      
    </>
  )

  
    return (
      <div className="navbar bg-base-100">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
  
        <div className="flex  items-center gap-2">
          <img
            className="w-[50px] rounded-full hidden md:block h-[50px] "
            src="https://i.ibb.co/nRMM0k8/job-logo-two.jpg"
            alt=""
          />
          <h4 className="font-bold md:text-2xl text-base">
            Job<span className="text-[#2a5298]">IO</span>
          </h4>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" font-semibold gap-8 menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
  
      <div className="navbar-end">
          
          {
           user && (
             <div className="dropdown dropdown-end">
  
              <div>
  
  
              <label className="swap swap-rotate mr-4">
    
    {/* this hidden checkbox controls the state */}
    <input type="checkbox" onChange={handleToggole} />
    
    {/* sun icon */}
    <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
    
    {/* moon icon */}
    <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
    
  </label>
  
  
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
               <div className="w-10 rounded-full">
                 <img src={`${user?.photoURL ? user?.photoURL : defaultImg}`} />
               </div>
             </label>
             
             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
               <li>
                 <a className="justify-between">
                   {user.displayName ? user.displayName : "anonymous"}
                   
                 </a>
               </li>
               <li><a>{user.email ? user.email : "anonymous@example.com"}</a></li>
               {console.log("js diye aslm",user.photoURL)}
               <li><Link onClick={handleLogOut}>Logout</Link></li>
             </ul>
  
              </div>
            
           </div>
           )
          }
     
            <div >
            {user ? (
               ''
             ) : (
              <>
              <div className="flex items-center">
  
  
              <label className="swap swap-rotate mr-4">
    
    {/* this hidden checkbox controls the state */}
    <input type="checkbox" onChange={handleToggole} />
    
    {/* sun icon */}
    <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
    
    {/* moon icon */}
    <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
    
  </label>
  
  
  
  
  
               <Link to="/login">
                 <button className="btn btn-grad ">Login</button>
               </Link>
               </div>
               </>
             )}
            </div>
     
     
           </div>
      
  
    </div>
    );
};

export default Navbar;