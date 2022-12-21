import {  useContext } from "react";
import { CartContext } from "../../App";

function CartDetail({ product }) {
  const dataCarts = useContext(CartContext);
  const RemoveProduct = (id) => {
    const cartCopy = dataCarts.cartsUser.carts.filter((item) => item.id !== id);
    const CART = {
      userid: dataCarts.user[0].id,
      carts: cartCopy,
    };
    localStorage.setItem(`cart${dataCarts.user[0].id}`, JSON.stringify(CART));
    dataCarts.setCartsUser(CART);
  };
  const upCount = (id) => {
    const cartCopy = dataCarts.cartsUser.carts.slice();
    const index = cartCopy.findIndex((product) => product.id === id);
    const pr = cartCopy[index];
    cartCopy[index] = { ...pr, count: pr.count + 1 };
    const CART = {
      userid: dataCarts.user[0].id,
      carts: cartCopy,
    };
    localStorage.setItem(`cart${dataCarts.user[0].id}`, JSON.stringify(CART));
    dataCarts.setCartsUser(CART);
  };
  const dowCount = (id) => {
    const cartCopy = dataCarts.cartsUser.carts.slice();
    const index = cartCopy.findIndex((product) => product.id === id);
    const pr = cartCopy[index];
    cartCopy[index] = { ...pr, count: pr.count - 1 };
    const CART = {
      userid: dataCarts.user[0].id,
      carts: cartCopy,
    };
    localStorage.setItem(`cart${dataCarts.user[0].id}`, JSON.stringify(CART));
    dataCarts.setCartsUser(CART);
  };
  return (
    <div className="row align-items-center">
      <div className="col-5">
        <div className="p-2 text-center">
          <p>{product.product_name}</p>
          <img src={product.url_img} width="50%" alt="img" />
        </div>
      </div>
      <div className="col-2">
        <div className="p-2 text-center">
          <b>{product.price.toLocaleString()} VND</b>
        </div>
      </div>
      <div className="col-5">
        <div className="p-2 text-center d-flex justify-content-around">
          <div className="d-flex align-items-center">
            <button className="btn_count" onClick={() => upCount(product.id)}>
              +
            </button>
            <p className="m-0">{product.count}</p>
            <button
              className="btn_count"
              disabled={product.count === 1}
              onClick={() => dowCount(product.id)}
            >
              -
            </button>
          </div>
          <div>
            <button
              className="btn_delete_product"
              onClick={() => RemoveProduct(product.id)}
            >
              xoa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartDetail;
