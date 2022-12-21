import './slide.css'
import { useEffect, useRef, useState, memo } from 'react'
import axios from 'axios'

function Slide() {

    const [data, setData] = useState([])
    const getDatas = async () => {
        const res = await axios.get("../../../json/headers.json")
        setData(res.data.images_slide)
    }
    useEffect(() => {
        getDatas()
    }, [])
    const timeSlide = useRef()
    const refNext = useRef()
    const refBack = useRef()
    useEffect(() => {
        const mySlide = document.querySelectorAll('.my_slides')
        if (mySlide[0]) {
            var indexs = 1
            refBack.current.onclick = () => { clickSlide(-1) }
            refNext.current.onclick = () => { clickSlide(1) }
            function clickSlide(x) {
                showSlide(indexs += x)
            }
            showSlide(indexs)
            function showSlide(n) {
                if (n > mySlide.length) { indexs = 1 }
                if (n < 1) { indexs = mySlide.length }
                for (var i = 0; i < mySlide.length; i++) {
                    mySlide[i].style.display = 'none'
                }
                mySlide[indexs - 1].style.display = 'block'
            }
            var autoIndex = 0
            autoSlide()
            function autoSlide() {
                for (var i = 0; i < mySlide.length; i++) {
                    mySlide[i].style.display = 'none'
                }
                autoIndex++
                if (autoIndex > mySlide.length) { autoIndex = 1 }

                mySlide[autoIndex - 1].style.display = 'block'
                timeSlide.current = setTimeout(autoSlide, 3000)
            }
            return () => {
                clearTimeout(timeSlide.current)
            }
        }
    })

    return (
        <div className="px-5  ">
            <div className='position-relative'>
            {data.map((url, index) => {
                return (
                    <div className="my_slides" key={index}>
                        <img src={url} alt="slide" width="100%" />
                    </div>
                )
            })}
            <i ref={refBack} className=" click_left fa-solid fa-circle-left"></i>
            <i ref={refNext} className="click_right fa-solid fa-circle-right"></i>
            </div>
        </div>
    )
}
export default memo(Slide)