import axios from "axios";
import { useState, useEffect} from 'react'
import Product from "../../Components/contentHome/Product";
function ListProduct({datas}){

    const[list_Product,setList_Product] = useState([])
    const getListProduct = async () => {
        if(datas[0]){
            const res = await axios.get("../../../json/content.json")
        const list = res.data.product.filter(product => product.category_id == datas[0].category_id )
        setList_Product(list)
        }
    }
    useEffect(() => {
        getListProduct()
    }, [datas])
   
    return(
        <div>
            <hr></hr>
            <h3 className="text-center my-5">Có thể bạn sẽ thích</h3>
           <div className="row">
                    {list_Product.map((product, index) => (
                        <div key={index} className="col-6 col-md-4 col-lg-3  ">
                                <Product product={product}/>
                        </div>
                    ))}
                </div>
        </div>
    )
}
export default ListProduct