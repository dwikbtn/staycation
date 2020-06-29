import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

export default function Button(props) {
  // menambahkan classsname baru ttergantung pada type props
  const className = [props.className];
  if (props.isPrimary) className.push("btn-primary");
  if (props.isLarge) className.push("btn-lg");
  if (props.isSmall) className.push("btn-sm");
  if (props.isBlock) className.push("btn-isBlock");
  if (props.hasShadow) className.push("btn-shadow");
  //memastikan jika onclick maka akan mendapatkan proptypes.func (lihat bagian bawah)
  const onClick = () => {
    if (props.onClick) props.onClick();
  };
  //menambahkan loading bar jika ipe props isDisabled/props isLoading
  if (props.isDisabled || props.isLoading) {
    if (props.isDisabled) className.push("disabled");
    return (
      <span className={className.join(" ")} style={props.style}>
        {props.isLoading ? (
          <>
            <span className="spinner-border spinner-border-sm mx-5"></span>
            <span className="sr-only">Loading...</span>
          </>
        ) : (
          props.children
        )}
      </span>
    );
  }

  if (props.type === "link") {
    //jika link mengarah ke luar website
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          //menambahkab spasi
          className={className.join(" ")}
          style={props.style}
          // kepentingan Search Engine optimizer
          target={props.target === "_blank" ? "_blank" : undefined}
          rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {" "}
          {props.children}{" "}
        </a>
      );
    } else {
      return (
        //jika link mengarah ke dalam website
        <Link
          to={props.href}
          className={className.join(" ")}
          style={props.style}
          onClick={onClick}
        >
          {props.children}
        </Link>
      );
    }
  }
  return (
    <button
      className={className.join(" ")}
      style={props.style}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
}
// proptypes digunakan untuk mengecek tipe di dalam props, jika tipe berbeda maka akan muncul pesan error di console
Button.propTypes = {
  //oneof => object bisa saja button atau link
  type: propTypes.oneOf(["button", "link"]),
  onClick: propTypes.func,
  href: propTypes.string,
  target: propTypes.string,
  className: propTypes.string,
  isExternal: propTypes.bool,
  isPrimary: propTypes.bool,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isBlock: propTypes.bool,
  hasShadow: propTypes.bool,
};
