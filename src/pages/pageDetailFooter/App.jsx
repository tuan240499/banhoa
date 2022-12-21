import axios from "axios"

import { useState, useEffect } from 'react'
function Apps({ heading }) {
    const [datas, setDatas] = useState([])
    const getDatas = async () => {
        const res = await axios.get('../../../json/footer_list.json')
        const data = res.data.list_header_left.filter(datas => datas.title == heading)
        setDatas(data)
    }
    useEffect(() => {
        getDatas()
    }, [])
    return (
        <div className="container pd_page_footer">
            {datas.map((heading, index) => {
                return (
                    <h3 className="text-center" key={index}>{heading.title}</h3>
                )
            })}
            {datas.map((item) => {
                return (
                    item.content.map((i, index) => {
                        return (
                            <div key={index}>
                                 <hr />
                                <h5>{i.title}</h5>
                                <p>{i.content}</p>
                                <img src={i.url} width="100%"/>
                               
                            </div>
                        )
                    })
                )
            })}
        </div>
    )
}
export default Apps