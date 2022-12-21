import Slide from "../../Components/slide/slide"
import ContentHome from "../../Components/contentHome/App"

export default function Home(){
    return(
        <div className="">
             <div className='container my-3'>
             <h6 className="text-center text-heading-home">ĐẶT HOA NHANH - GỌI NGAY 037 277 0547 - 090 619 2436 HOẶC 036 606 3709</h6>
                <Slide />
            </div>
            <div className="">
              
                    <ContentHome 
                    category_name = "Hoa Cưới"
                    />
                    <hr className="m-0"/>
                    <ContentHome 
                    category_name = "Hoa Tình Yêu"
                    />
                    <hr className="m-0"/>
                    <ContentHome 
                    category_name = "Hoa Lan"
                    />
                    <hr className="m-0"/>
                    <ContentHome 
                    category_name = "Hoa Hồng"
                    />
                    <hr className="m-0"/>
                    <ContentHome 
                    category_name = "Hoa Tang"
                    />
                </div>
        </div>
    )
}