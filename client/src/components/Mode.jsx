import React from "react";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
const Mode = ({ props }) => {
  return (
    <div
      className=" pr-3"
      onClick={() => {
        localStorage.setItem("mode", !props.state);
        props.onChange({
          state: !props.state,
        });
      }}
    >
      {props.state ? (
        <>
          <MdOutlineLightMode className=" w-[25px] h-[25px]  " />
        </>
      ) : (
        <>
          <MdOutlineNightlight className="w-[25px] h-[25px]   text-white" />
        </>
      )}
    </div>
  );
};

export default Mode;
