import { useContext } from "react";
import { CartContext } from "../../App";
import CartDetail from "./CartDeltail";
import { useNavigate } from "react-router-dom";
import FoemCartValue from "./formCartValue";
export default function Cart() {
  const Navitage = useNavigate();
  const dataCarts = useContext(CartContext);
  const user = JSON.parse(localStorage.getItem("user"));
  if (user ) {
    const dataCartLocalstorage = localStorage.getItem(`cart${user.userid}`);
    var CARTDATAS = JSON.parse(dataCartLocalstorage);
    if (CARTDATAS.carts && CARTDATAS.carts.length > 0) {
      const total = () => {
        return CARTDATAS.carts.reduce((a, b) => a + b.price * b.count, 0);
      };
      return (
        <div className="container">
          <h1 className="text-center">Giỏ Hàng</h1>
          <hr />
          <div className="row">
            <div className="col-5 p-0">
              <div className="p-2 text-center">
                <h4>Sản phẩm</h4>
              </div>
            </div>
            <div className="col-2 p-0">
              <div className="p-2 text-center">
                <h4>Giá</h4>
              </div>
            </div>
            <div className="col-5 p-0">
              <div className="p-2 text-center">
                <h4>Tùy chọn</h4>
              </div>
            </div>
            <hr />
          </div>
          {CARTDATAS.carts.map((product, index) => {
            return <CartDetail key={index} product={product} />;
          })}
          <hr />
          <div className="row m-0">
            <div className="col-lg-6 col-12 order-22 my-2">
              <FoemCartValue data={CARTDATAS} />
            </div>
            <div className="col-lg-6 col-12 order-11 text-center my-2">
              <h4>Tổng: {total().toLocaleString()} VND</h4>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <h1 className="text-center">Giỏ Hàng</h1>
          <hr></hr>
          <h5 className="text-center">Giỏ Hàng Của Bạn Đang Trống</h5>
        </>
      );
    }
  } else {
    return (
      <div className="text-center">
        <p>Vui lòng đăng nhập để xem giỏ hàng của bạn </p>
        <button className="btn btn-dark" onClick={() => Navitage("/login")}>
          dang nhap
        </button>
      </div>
    );
  }

  // const user = localStorage.getItem('user')
  // console.log(user)
  // const dataCarts = useContext(CartContext)
  // const total = ()=>{
  //     return dataCarts.carts.reduce((a, b) => a + b.price * b.count, 0)
  // }

  // if (dataCarts.carts.length > 0) {
  //     return (
  //         <div className='container'>
  //             <h1 className='text-center'>Giỏ Hàng</h1>
  //             <hr />
  //             <div className='row'>
  //                 <div className="col-5">
  //                     <div className="p-2 text-center">
  //                         <h4>tên sản phẩm</h4>
  //                     </div>
  //                 </div>
  //                 <div className="col-4">
  //                     <div className="p-2 text-center">
  //                         <h4>giá</h4>
  //                     </div>
  //                 </div>
  //                 <div className="col-3">
  //                     <div className="p-2 text-center">
  //                         <h4>tùy chọn</h4>
  //                     </div>
  //                 </div>
  //                 <hr />
  //             </div>
  //             {dataCarts.carts.map((product, index) => {
  //                 return (
  //                     <CartDetail key={index} product={product} />
  //                 )
  //             })}
  //             <hr />
  //             <div className=''>
  //                 <p >tong:{total()}</p>
  //             </div>
  //         </div>
  //     )
  // } else {
  //     return (
  //         <>
  //             <h1 className='text-center'>Giỏ Hàng</h1>
  //             <hr></hr>
  //             <h5 className='text-center'>Giỏ Hàng Của Bạn Đang Trống</h5>
  //         </>
  //     )

  // }
}
