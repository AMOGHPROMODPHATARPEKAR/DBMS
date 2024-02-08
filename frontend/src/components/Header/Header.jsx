import React from 'react'
import {Container,Logo,LogoutBtn} from '../index'
import { Link ,useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
    const authStatus = useSelector((state)=>state.auth.status)
    const admin = useSelector((state)=>state.auth.admin)
    const navigate = useNavigate()
  console.log(admin)
    const navItems = [
      {
        name: 'Home',
        slug: "/",
        active: true
      }, 
      {
        name: "Member Login",
        slug: "/userlogin",
        active: !authStatus,
    },
      {
        name: "Admin Login",
        slug: "/adminlogin",
        active: !authStatus,
    },
    {
        name: "Signup",
        slug: "/signup",
        active: !authStatus,
    },
    {
        name: "Profile",
        slug: "/profile",
        active: authStatus && !admin ,
    },
    {
        name: "Workout-Plan",
        slug: "/work-plan",
        active: authStatus && !admin,
    },
    {
      name:"Add-Trainer",
      slug:"/add-trainer",
      active:admin && authStatus
    },
    {
      name:"Add-workout",
      slug:'/add-work',
      active:admin && authStatus
    }
    ]
  
  return (
    <header className='py-3 shadow bg-slate-500'>
    <Container>
      <nav className='flex'>
        <div className='mr-4'>
          <Link to='/'>
            <Logo width='70px'   />

            </Link>
        </div>
        <ul className='flex ml-auto'>
          {navItems.map((item) => 
          item.active ? (
            <li key={item.name}>
              <button
              onClick={() => navigate(item.slug)}
              className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
              >{item.name}</button>
            </li>
          ) : null
          )}
          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
            )}
            </ul>
        </nav>
        </Container>
    </header>
)

}

export default Header