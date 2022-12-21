import { useForm } from "react-hook-form";
import "./Cart.css";
import { useState } from "react";

export default function FoemCartValue({ data }) {
  const [toggleMessage, setTonggleMessage] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (value) => {
    const DATACART = {
      userid: data.userid,
      cartsUser: data.carts,
      value: value,
    };
    console.log(DATACART);
    setTonggleMessage(true)
  };
  const ab = () => {
    setTonggleMessage(false);
  };
  if (toggleMessage) {
    setTimeout(ab, 3000);
  }
  function Message() {
    return (
      <div className="message_cart">
        <div className="text-center">
          <i className="fs-3 fa-solid fa-check"></i>
          <p>Đặt hàng thành công</p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h4>vui lòng điền đầy đủ thông tin trước khi thanh toán</h4>
      <form className="mt-3 login" onSubmit={handleSubmit(onSubmit)}>
        <div className="my-2 position-relative">
          <label>Họ và tên:</label>
          <input
            {...register("fullName", {
              minLength: 9,
              required: true,
            })}
            placeholder="Họ và tên ..."
          />
          {errors.fullName?.type === "minLength" && (
            <p className="m-0 message_form">Vui lòng nhập tối thiểu 9 kí tự</p>
          )}
          {errors.fullName?.type === "required" && (
            <p className="m-0 message_form">Vui lòng nhập họ tên đầy đủ</p>
          )}
        </div>
        <div className="my-2 position-relative">
          <label>Số điện thoại:</label>
          <input
            {...register("phoneNumber", {
              minLength: 10,
              required: true,
            })}
            placeholder="Số điện thoại ..."
          />
          {errors.phoneNumber?.type === "minLength" && (
            <p className="m-0 message_form">
              Vui lòng nhập đầy đủ số điện thoại của bạn
            </p>
          )}
          {errors.phoneNumber?.type === "required" && (
            <p className="m-0 message_form">
              Vui lòng nhập số điện thoại cảu bạn
            </p>
          )}
        </div>
        <div className="my-2 position-relative">
          <label>Địa chỉ:</label>
          <input
            {...register("address", {
              required: true,
            })}
            placeholder="Địa chỉ ..."
          />
          {errors.address?.type === "required" && (
            <p className="m-0 message_form">Vui lòng nhập địa chỉ của bạn</p>
          )}
        </div>
        <div className="my-2 position-relative">
          <label>Ghi chú thêm:</label>
          <textarea
            {...register("note", {
              required: true,
            })}
            className="login_textarea"
            placeholder="Địa chỉ cụ thể, ghi chú cho đơn hàng ..."
          />

          {errors.note?.type === "required" && (
            <p className="m-0 message_form">Vui lòng nhập trường này</p>
          )}
        </div>
        <button className="btn_thanhtoan" type="submit">
          Thanh toán
        </button>
      </form>
      {toggleMessage && <Message />}
    </div>
  );
}
