import axios from "axios"
import { useState, useEffect, useRef, useContext, memo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './App.css'
import { CartContext } from "../../App"
import ListProduct from "./ListProduct"
function DetailProduct() {
    const [img, setImg] = useState('')
    const [toggleImg, setToggleImg] = useState(false)
    const [toggleMessage, setTonggleMessage] = useState(false)
    const Navitage = useNavigate()
    const dataCartContext = useContext(CartContext)
    const { id } = useParams()
    const [productDetail, setProductDetail] = useState([])
    useEffect(() => {
        const element = document.querySelector('.zoom_img')
        function closeItem(e) {
            if (e.target == element) {
                setToggleImg(false)
            }
        }
        window.addEventListener('click', closeItem)
        return () => {
            window.removeEventListener('click', closeItem)
        }
    })
    const getProductDetail = async () => {
        const res = await axios.get("../../../json/content.json")
        const dataDetail = res.data.product.filter(product => product.id === Number(id))
        setProductDetail(dataDetail)
        setImg(dataDetail[0].url_img)
    }
    useEffect(() => {
        getProductDetail()

    }, [id])
    // const refNext = useRef()
    // const refBack = useRef()
    // useEffect(() => {
    //     const mySlide = document.querySelectorAll('.my_slides')
    //     if (mySlide[0]) {
    //         var indexs = 1
    //         refBack.current.onclick = () => { clickSlide(-1) }
    //         refNext.current.onclick = () => { clickSlide(1) }
    //         function clickSlide(x) {
    //             showSlide(indexs += x)
    //         }
    //         showSlide(indexs)
    //         function showSlide(n) {
    //             if (n > mySlide.length) { indexs = 1 }
    //             if (n < 1) { indexs = mySlide.length }
    //             for (var i = 0; i < mySlide.length; i++) {
    //                 mySlide[i].style.display = 'none'
    //             }
    //             mySlide[indexs - 1].style.display = 'block'
    //         }
    //     }
    // })
    const handleCart = (product) => {
        if (dataCartContext.user && dataCartContext.user.length > 0) {
            const dataCart = dataCartContext.cartsUser
            const cartCopy = dataCart.carts.slice();
            const index = cartCopy.findIndex((datas) => datas.id === product.id);
            if (index === -1) {
                cartCopy.push({ ...product, count: 1 });
            } else {
                const pr = cartCopy[index];
                cartCopy[index] = { ...pr, count: pr.count + 1 };
            }

            const CART = {
                userid: dataCartContext.user[0].id,
                carts: cartCopy
            }

            localStorage.setItem(`cart${dataCartContext.user[0].id}`, JSON.stringify(CART))
            dataCartContext.setCartsUser(CART);
            setTonggleMessage(true)
        } else {
            Navitage('/login')
        }

    }
    const ab = () => {
        setTonggleMessage(false)
    }
    if (toggleMessage) {
        setTimeout(ab, 3000)
    }
    function Message() {
        return (
            <div className="message_cart">
                <div className="text-center">
                    <i className="fs-3 fa-solid fa-check"></i>
                    <p>đã thêm vào giỏ hàng thành công</p>
                </div>
            </div>
        )
    }
    function ZoomImgDetail() {
        const element = document.querySelector('.zoom_img img')
        element.classList.toggle('w-25')
    }
    return (
        <div className="container mt-3">
            {toggleMessage && <Message />}
            {productDetail.map((product, index) => {
                return (
                    <div key={index} className="row">
                        <div className="col-12 col-lg-6">
                            <div className="p-2 text-center position-relative">
                                <div className="imgdetail">
                                    <img onClick={() => setToggleImg(true)} src={img } alt='img' className="w-50" />
                                </div>
                                {toggleImg && (<div className="zoom_img">
                                    <img onClick={() => ZoomImgDetail()} src={img || product.url_img} alt="zoom img" />
                                </div>)}
                                <div className="my_slides d-flex justify-content-around my-3">
                                    {product.img_detail.map((img, index) => {
                                        return (
                                            <img onClick={() => setImg(img)} key={img + index} className="img_detail" src={img} alt="img detail" />
                                        );
                                    })}
                                </div>
                                {/* <i ref={refBack} className=" click_left fa-solid fa-circle-left"></i>
                                <i ref={refNext} className="click_right fa-solid fa-circle-right"></i> */}
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="p-2">
                                <div className="">
                                    <h5 className="text-center">{product.product_name}</h5>
                                    <p className="fs-5 ">{product.detail_product.title}:</p>
                                    <p>{product.detail_product.content}</p>
                                </div>
                                <div className="d-flex justify-content-around">
                                    <div className="text-center">
                                        <b className="text-danger fs-4">{product.price.toLocaleString()} VND<hr className="m-0" /></b>
                                    </div>
                                    <div className="text-center">
                                        <button onClick={() => handleCart(product)} className=" btn_addCart">add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
<ListProduct datas = {productDetail} />
        </div>
    )
}
export default memo(DetailProduct)