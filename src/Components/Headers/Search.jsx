import { useRef, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
function Search() {
  const Navigation = useNavigate();
  const [value, setValue] = useState("");

  const handleSubmit = async () => {
    if (value.trim().length > 0) {
      Navigation(`/search/${value}`);
    } else {
    }
    setValue("");
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="d-flex position-relative input-search">
      <form className="text-center">
        <input
          className="ps-2"
          placeholder="Tìm kiếm gì đó ..."
          onChange={(e) => handleChange(e)}
          value={value}
        />
        <i onClick={handleSubmit} className="fa-solid fa-magnifying-glass"></i>
      </form>
    </div>
  );
}
export default Search;
