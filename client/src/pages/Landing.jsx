import React from "react";
import { styles } from "../styles";
import { Language, Mode } from "../components";
import { Link } from "react-router-dom";
const Landing = (props) => {
  return (
    <section className="relative w-full h-full mx-auto flex justify-center">
      <div className={`${styles.paddingX} mt-20 max-w-7xl `}>
        {/* DIV CLASS */}
        <div className=" flex justify-end">
          <Language />
          <Mode props={props} />
        </div>
        {/* BG IMAGE */}
        <div className=" p-10">
          <img
            src="https://cdn.discordapp.com/attachments/1008571069797507102/1069963298176520222/xvh7ihmff7jjoqh_food_recipe_8044202e-50cf-4c80-94cf-c0367aabd460.png"
            alt="banner"
            className=" object-contain rounded-2xl "
          />
        </div>
        {/* TITLE */}
        <div className="">
          <p className={`${styles.sectionSubText}`}>312+ Foods</p>
          <p className={`${styles.sectionHeadText}`}>
            Delicious Variant and Fast Delivery
          </p>
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

        {/* <p className="dark:text-white">@contact.com</p> */}
      </div>
    </section>
  );
};

export default Landing;
