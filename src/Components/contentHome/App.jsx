import axios from "axios"
import { useEffect, useState } from 'react'
import './App.css'
import {  useNavigate } from 'react-router-dom'
import Product from "./Product"



function ContentHome(props) {
    const Rou = useNavigate()
    const [heading, setHeading] = useState([])
    const [products, setProducts] = useState([])
    const getDatas = async () => {
        const res = await axios.get("../../../json/content.json")
        setHeading(res.data.category.filter((item) => item.category_name === props.category_name))
        setProducts(res.data.product)
    }
    useEffect(() => {
        getDatas()
    }, [])
    var id_category
    heading.length > 0 ? id_category = heading[0].category_id : 'khong ton tai'
    const listProduct = products.filter(product => product.category_id === id_category)
    return (
        <div className=" bg-index py-3">
            <div className="container">
                {heading ? (
                    heading.map((item, index) => {
                        return (
                            <div key={index} className="py-2">
                                <h1 onClick={()=>{Rou(`/${item.url}`)}} className="text-center m-0 heading_item_product">{item.category_name}</h1>
                              
                                <div className="text-center">
                                    <img src={item.img_url_bottom} alt="img" width="25%"/>
                                    </div>
                            </div>
                        )
                    })
                ) : ''}
                <div className="row">
                    {listProduct.map((product, index) => (
                        <div key={index} className="col-6 col-md-4 col-lg-3 ">
                            {index + 1 > 20 ? '' :
                               <Product product={product}/>
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ContentHome