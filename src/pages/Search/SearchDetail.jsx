import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

import Product from '../../Components/contentHome/Product'
export default function SearchDetail() {
    const [data, setData] = useState([])
    const { name } = useParams()
    const abc = async () => {
        if (name.trim().length > 0) {
            const res = await axios.get('../../../json/content.json')
            var arr= []
            res.data.product.filter(product => {
                const a = product.product_name.toLocaleLowerCase()
                const b = name.trim().toLocaleLowerCase()
              
                if (a.indexOf(b) === -1) {
                } else {
                    arr.push(product)                  
                }
            })
            setData(arr)
        }
    }
    useEffect(() => {
        abc()
    },[name])
    console.log(data)
    return (
        <div className='container-fluid'>
            <h1 className='text-center'>Kết quả tìm kiếm cho {name}</h1>
        <div className='row m-0'>
            {data.map(product => {
                return (
                    <div key={product.id} className="col-6 col-md-4 col-lg-3  ">
                        <Product product={product} />
                    </div>
                )
            })}
        </div>
        </div>
    )
} 