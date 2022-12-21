import Cart from "../pages/Cart/Cart"
import Home from "../pages/Home/Home"
import Login from "../pages/login/Login"
import Register from "../pages/Register/Register"
import Page1 from "../pages/pageDetailFooter/page1"
import Page2 from "../pages/pageDetailFooter/page2"
import Page3 from "../pages/pageDetailFooter/page3"
import Page4 from "../pages/pageDetailFooter/page4"
import Page5 from "../pages/pageDetailFooter/page5"
import BoaHoa from "../pages/detail_item_product/BoHoa"
import GioHoa from "../pages/detail_item_product/GioHoa"
import HoaCuoi from "../pages/detail_item_product/HoaCuoi"
import HoaKhaiTruong from "../pages/detail_item_product/HoaKhaiTruong"
import BinhHoa from "../pages/detail_item_product/BinhHoa"
import HoaTinhYeu from "../pages/detail_item_product/HoaTinhYeu"
import DetailProduct from "../pages/detailProduct/DetailProduct"
import UserDetail from "../pages/userDetail/UserDetail"
import SearchDetail from "../pages/Search/SearchDetail"
import SearchMobile from "../pages/search_mobile/Search_mobile"
import HoaLan from "../pages/detail_item_product/HoaLan"
import HoaHong from "../pages/detail_item_product/HoaHong"
import HoaTang from "../pages/detail_item_product/HoaTang"
function NotFound() {
    return (
        <div >not found</div>
    )
}
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/cart', component: Cart },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/cauhoithuonggap', component: Page1 },
    { path: '/chinhsachhoantien', component: Page2 },
    { path: '/chinhsachvanchuyen', component: Page3 },
    { path: '/thongtinlienhe', component: Page4 },
    { path: '/gioithieu', component: Page5 },
    { path: '/bohoa', component: BoaHoa },
    { path: '/giohoa', component: GioHoa },
    { path: '/hoacuoi', component: HoaCuoi },
    { path: '/hoakhaitruong', component: HoaKhaiTruong },
    { path: '/hoatinhyeu', component: HoaTinhYeu },
    { path: '/binhhoa', component: BinhHoa },
    { path: '/detailproduct/:id', component: DetailProduct },
    { path: '*', component: NotFound,layout : null },
    { path: '/userdetail', component: UserDetail },
    { path: '/search/:name', component: SearchDetail },
    { path: '/search', component: SearchMobile },
    { path: '/hoalan', component: HoaLan },
    { path: '/hoahong', component: HoaHong },
    { path: '/hoatang', component: HoaTang },

    
]


export { publicRoutes }