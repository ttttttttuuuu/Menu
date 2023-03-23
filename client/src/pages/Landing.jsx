import React, { useState, useEffect } from "react";
import { styles } from "../styles";
import { Language, Mode } from "../components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useGetInfoQuery } from "../services/menuApi";
const Landing = (props) => {
  const shopID = "63900dc12ba021e0a889d9e8";
  const { data, isFetching } = useGetInfoQuery(shopID);

  const [info, setInfo] = useState([]);
  const fetchInfo = async () => {
    setInfo(data);
    setInfo((prev) => ({
      ...prev,
      logo: "https://cdn.discordapp.com/attachments/1008571141507534928/1061645975703269406/Gabriel_P223_Logo_H_letter_whit_book_microscope_science_trevel__b834b375-e5ce-47ed-9dfa-2e9c0aa589bc.png",
    }));
    setInfo((prev) => ({
      ...prev,
      category: 89,
    }));
  };
  useEffect(() => {
    fetchInfo();
  }, [data]);
  if (isFetching) return <div>Loading.......</div>;
  return (
    <section className="relative w-full h-screen mx-auto flex justify-center">
      <div className={`${styles.paddingX} mt-20 max-w-7xl `}>
        {/* DIV CLASS */}
        <div className=" flex justify-end">
          <Language />
          <Mode props={props} />
        </div>
        {/* BG IMAGE */}
        <div className=" p-10">
          <img
            src={info.logo}
            alt="banner"
            className=" object-contain rounded-2xl w-[300px] h-[300px] "
          />
        </div>
        {/* TITLE */}
        <div className="">
          <p className={`${styles.sectionSubText}`}>{info.category}+ Items</p>
          <p className={`${styles.sectionHeadText}`}>{info.name}</p>
        </div>

        {/* Button */}
        <div className="w-full  text-center mt-20">
          <Link to="/menu">
            {/* ${styles.button} */}
            <button
              className={`w-full  py-5 rounded-md text-white text-3xl font-bold ${styles.bg}  `}
            >
              Start
            </button>
          </Link>

          <p className={`text-gray-400 mt-10 text-sm  mr-7`}>
            No:
            <span className={`${styles.sectionHeadText} text-black`}>12</span>
          </p>
        </div>
      </div>
      {/* Footer */}
      <div className="absolute bottom-0  w-full text-center  ">
        {/* <p className={`${styles.sectionSubText} `}>
            No:
            <span className={`${styles.sectionHeadText} text-black`}>12</span>
          </p> */}

        <p className="dark:text-white italic">{info.address?.[0].name}</p>
        <p className={`${styles.sectionSubText} font-mono`}>
          {info["working-hours-start"] + "-" + info["working-hours-end"]}
        </p>
      </div>
    </section>
  );
};

export default Landing;
