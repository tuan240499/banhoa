import { memo, useState } from "react";
import { NavLink } from "react-router-dom";

function HeaderBottom({ data }) {
  return (
    <div className="heder_bottom   container">
      <div className="d-flex justify-content-around">
        {data.map((item, index) => {
          return (
            <NavLink
              key={index}
              to={`/${item.url}`}
              className={`button_page_header `}
            >
              {item.item}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default memo(HeaderBottom);
