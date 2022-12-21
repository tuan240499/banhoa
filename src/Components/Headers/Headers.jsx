import './header.css'
import axios from 'axios'
import { useState, useEffect, memo, useContext } from 'react'
import HeaderBottom from './Header_bottom'
import { Link, useNavigate } from 'react-router-dom'
import Search from './Search'
import { CartContext } from '../../App'
import HeaderMobile from '../HeaderMobile/HeaderMobile'
function Headers() {
    const dataCart = useContext(CartContext)
    const Navigation = useNavigate()
    const [listButtonPage, setListButtonPage] = useState([])
    const [datas, setDatas] = useState([])
    const [userDetail,setUserDetail] = useState({})
    const getDatas = async () => {
        const datas = await axios.get("../../../json/headers.json")
        setDatas(datas.data)
        setListButtonPage(datas.data.button_page)
    }
    useEffect(() => {
        getDatas()
    }, [])
    const ab = localStorage.getItem('user')
    useEffect(() => {
       setUserDetail(JSON.parse(ab))
    },[ab])
    const abc = () => {
        Navigation(`/userdetail`)
    }
    console.log(userDetail)
    return (
        <div id="headers" className='shadow'>

            <div className="container-xl container-fluid pt-2 text-center d-md-flex align-items-center">
                <div className='logo text-center'>
                    {datas.logo_shop ? <Link to="/"><img src={datas.logo_shop} width="90%" /></Link>
                        : ''}
                </div>
                <hr className='m-0' />
                <div className='search d-none d-md-block'>
                    <Search />
                </div>
                <div className='header-button-list d-none d-md-flex align-items-center'>
                    {userDetail && userDetail.user_name ? (
                        <div>
                             <div onClick={() => abc()} > <i className="fa-regular mx-2 fa-user"></i>{userDetail.user_name}</div>
                        </div>
                    ) : (
                        <> <Link className='btn-hover p-0 px-lg-3 py-2 ' to="/login">Đăng nhập</Link>
                            <Link className='btn-hover p-0 px-lg-3 py-2 ' to="/register">Đăng ký</Link>
                        </>
                    )}

                    <div className='d-flex align-items-center position-relative'>
                        <Link className=' btn-hover p-0 px-lg-3 py-2 ' to="/cart"><i className="cart_icon  fa-sharp fa-solid fa-cart-plus"></i></Link>
                        <span className='length_cart'>{dataCart.count}</span>
                    </div>
                </div>
                <div className='d-md-none d-flex'>
                    <HeaderMobile count = {dataCart.count} user={userDetail} abc={abc} datas = {listButtonPage} />
                </div>
            </div>
            <div className='bg_header_bottom shadow py-1 d-none d-md-block'>
                <HeaderBottom data={listButtonPage} />
            </div>
        </div>

    )
}
export default Headers