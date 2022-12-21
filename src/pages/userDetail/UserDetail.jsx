import { useNavigate } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { CartContext } from '../../App'
export default function UserDetail() {
    const dataContext = useContext(CartContext)
    const Navitage = useNavigate()
    const logout = () => {
        localStorage.removeItem('user')
        dataContext.setUser({})
        dataContext.setCartsUser([])
        Navitage('/login')
    }

    if (dataContext.user[0] && dataContext.user[0].user_name) {
        return (
            <div className='text-center pt-2'  >
                <p>userName: {dataContext.user[0].user_name}</p>
                <button className='btn btn-dark' onClick={() => logout()}>Đăng xuất</button>
            </div>
        )
    }


}