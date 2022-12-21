import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const Navitage = useNavigate();
  const handleDetail = (id) => {
    Navitage(`/detailproduct/${id}`);
    document.documentElement.scrollTop = 0;
  };
  return (
    <div className=" product ">
      <div className="bg-white shadow-product">
        <img
          onClick={() => {
            handleDetail(product.id);
          }}
          src={product.url_img}
          width="100%"
          alt="img"
        />
        <div className="min_heigth">
          <p className=" my-2">{product.product_name}</p>
        </div>
        <p>{product.price.toLocaleString()} VND</p>
      </div>
      <hr />
    </div>
  );
}

export default Product;
