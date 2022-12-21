import { useForm } from 'react-hook-form'
import Url_face from './../../images/face.png'
import Url_gg from "../../images/gg.png"
import Url_ins from "../../images/ins.jpeg"
import { useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Register() {
    const Navitage = useNavigate()
    const refMessage = useRef('')
    const refSpan = useRef()
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        if (data.password !== data.re_password) {
            refMessage.current = "nhap lai mk"
        } else {
            refSpan.current.innerHTML = "đăng kí thành công"
            const d = new Date()
            const datas = {
                user_name: data.user_name,
                password: data.password,
                email: data.email,
                created_date: d.getDate() + '/' + Number(d.getMonth() + 1) + '/' + Number(d.getFullYear()),
                created_by: "user",
                modified_date: "",
                modified_by: "",
            }
           
            await axios.post(' http://localhost:3000/users', datas)
            Navitage('/')
        }
        refSpan.current.innerHTML = refMessage.current
    }
    return (
        <div className="bg-form">
            <div className="container  form-content">
                <div className="text-center">
                    <h2 className="title_page">Đăng ký</h2>
                </div>
                <div className="row px-3">
                    <div className="col-lg-6 d-none d-lg-block">
                        <div className="p-3">
                            <img className="login-left-img" src="https://hoatuoi360.vn/uploads/file/hoa-hong-trang-mon-qua-dac-bi%E1%BA%B9t.jpg" alt="img" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <div className="p-3">
                            <form className='px-3 login'  onSubmit={handleSubmit(onSubmit)}>

                                <div className='my-2 position-relative'>
                                    <label>Tên đăng nhập:</label>
                                    <input
                                        type="text"
                                        placeholder="tên đăng nhập"
                                        {...register("user_name", {
                                            required: true,
                                            minLength: 8,
                                        })}
                                    />
                                    {errors.user_name?.type === "minLength" && (
                                        <p className="m-0 message_form">Vui lòng nhập tối thiểu 8 kí tự</p>
                                    )}
                                    {errors.user_name?.type === "required" && (
                                        <p className="m-0 message_form">Vui lòng nhập tên đăng nhập</p>
                                    )}

                                </div>
                                <div className='my-2 position-relative'>
                                    <label>email:</label>
                                    <input
                                        type="emial"
                                        placeholder="email"
                                        {...register("email", {
                                            required: true,
                                            minLength: 8,
                                            pattern: /[A-Za-z]{3}/
                                        })}
                                    />
                                    {errors.email?.type === "minLength" && (
                                        <p className="m-0 message_form">Vui lòng nhập tối thiểu 8 kí tự</p>
                                    )}
                                    {errors.email?.type === "required" && (
                                        <p className="m-0 message_form">Vui lòng nhập email</p>
                                    )}
                                    {errors.email?.type === "pattern" && (
                                        <p className="m-0 message_form">Vui lòng nhập đúng email</p>
                                    )}
                                </div>
                                <div className='my-2 position-relative'>
                                    <label>Mật khẩu:</label>
                                    <input
                                        type="password"
                                        placeholder="mật khẩu"
                                        {...register("password", {
                                            required: true,
                                            minLength: 8,
                                        })}
                                    />
                                    {errors.password?.type === "minLength" && (
                                        <p className="m-0 message_form">Vui lòng nhập tối thiểu 8 kí tự</p>
                                    )}
                                    {errors.password?.type === "required" && (
                                        <p className="m-0 message_form">Vui lòng nhập mật khẩu</p>
                                    )}
                                </div>
                                <div className='my-2 position-relative'>
                                    <label>nhập lại Mật khẩu:</label>
                                    <input
                                        type="password"
                                        placeholder="nhập lại mật khẩu"
                                        {...register("re_password", {
                                            required: true,
                                            minLength: 8,
                                        })}
                                    />
                                    {errors.re_password?.type === "minLength" && (
                                        <p className="m-0 message_form">Vui lòng nhập tối thiểu 8 kí tự</p>
                                    )}
                                    {errors.re_password?.type === "required" && (
                                        <p className="m-0 message_form">Vui lòng nhập lại mật khẩu</p>
                                    )}
                                </div>
                                <div className="text-center">
                                    <span ref={refSpan}></span>
                                    <button type="submit" className="btn_form btn_login">
                                        Đăng ký
                                    </button>
                                    <h5 className="my-3">hoặc đăng ký bằng:</h5>
                                    <p className="list_icons">
                                        <img src={Url_gg} alt="gg" width="50px" title="google" />
                                        <img src={Url_face} alt="gg" width="50px" title="facebook" />
                                        <img src={Url_ins} alt="gg" width="50px" title="facebook" />
                                    </p>
                                </div>
                                <p>bạn đã có tài khoản? đăng nhập ngay</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}