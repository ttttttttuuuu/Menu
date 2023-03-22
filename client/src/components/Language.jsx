import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { IoLanguage } from "react-icons/io5";
const Language = () => {
  const { t, i18n } = useTranslation();

  const [select, setSelect] = useState("");
  function handleClick(lang) {
    console.log("1", lang);
    setSelect(lang);
    i18n.changeLanguage(lang);
  }
  return (
    <div className={`w-full flex justify-end   `} id="top">
      <button
        className={` cursor-pointer rounded-2xl mr-5 
        }`}
        onClick={() => handleClick(select.includes("en") ? "zh" : "en")}
      >
        <IoLanguage className=" w-[25px] h-[25px] hover:text-[#764ba2] dark:text-white" />
      </button>
    </div>
  );
};

export default Language;
