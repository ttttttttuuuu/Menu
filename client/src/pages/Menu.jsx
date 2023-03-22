import React, { useState, useRef } from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
const Menu = () => {
  const array = [
    "All 全部",
    "Salad 沙拉",
    "Steak 牛排",
    "Chicken 肌肉",
    "Main 主食",
    "Appetizer 開胃菜",
    "Drinks 饮品",
    "Dessert 甜品",
  ];
  const menu = [
    {
      name: "All",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak",
    },
    { name: "Salad", description: "" },
    { name: "Steak", description: "" },
    { name: "Chicken", description: "" },
    { name: "Main", description: "" },
    { name: "Appetizer", description: "" },
    { name: "Drinks", description: "" },
    { name: "Dessert", description: "" },
  ];

  const [active, setActive] = useState({ name: "All 全部", index: 0 });

  const ref = useRef(null);

  const handleClickCate = async (item, index) => {
    console.log(ref);
    const scroll = index - active.index;
    // ref.current?.scrollIntoView({ behavior: "smooth" });
    ref.current.scrollLeft += scroll * 140;
    setActive({ name: item, index: index });
  };
  return (
    <div className="relative z-0 h-screen w-full ">
      <div className="fixed z-10  top-0 w-full bg-white dark:bg-dark dark:text-white">
        <div className={`${styles.paddingX}    w-full mt-2`}>
          {/* Category title */}
          <div className="flex justify-between ">
            {/* <p className="font-bold text-2xl ">Category</p> */}
            <img
              className="rounded-[5px] w-[50px] h-[50px] mt-1 "
              src="https://cdn.discordapp.com/attachments/1008571069797507102/1069963298176520222/xvh7ihmff7jjoqh_food_recipe_8044202e-50cf-4c80-94cf-c0367aabd460.png"
            />
            <p className="text-3xl font-bold mt-2">YALLA FOOD </p>
          </div>
        </div>

        {/* Category bar */}
        <div
          ref={ref}
          className={`w-[350px]  pl-2 category  border-b    overflow-x-scroll scroll-smooth h-[35px]   mt-6 pb-1  flex  text-sm `}
        >
          {array.map((item, index) => (
            <div
              onClick={() => handleClickCate(item, index)}
              key={index}
              className={` dark:text-white flex flex-1  rounded-[10px]  ${
                active.name === item
                  ? ` ${styles.bg} text-white `
                  : `${styles.text}`
              } items-center text-center justify-center    `}
            >
              <button className="w-[130px]  ">{item}</button>
            </div>
          ))}
        </div>
      </div>

      <div className={`px-5  dark:text-white h-screen`}>
        {/* Menu Body */}
        <div
          className={`mt-[120px] cursor-pointer w-full h-full  overflow-y-scroll  flex flex-col   `}
        >
          {menu.map((e) => (
            <Link to="/detail/1">
              <div
                className={`w-full  flex flex-row-reverse   border-b border-gray-800/1   drop-shadow-sm   transition-all py-2 `}
              >
                <img
                  className="rounded-[5px] w-[100px] h-[100px] "
                  src="https://cdn.discordapp.com/attachments/1008571069797507102/1069963298176520222/xvh7ihmff7jjoqh_food_recipe_8044202e-50cf-4c80-94cf-c0367aabd460.png"
                />
                <div className="flex-1 flex justify-start  h-full">
                  <div>
                    <p className="min-h-[30px] mt-2 flex-1 text-left  items-center   text-2xl font-semibold ">
                      {e.name}
                    </p>
                    <p className="flex-1 text-left  items-center  text-sm  text-secondary ">
                      {e.description.length < 72
                        ? e.description
                        : e.description.substring(0, 70) + "..."}
                    </p>
                    <p className="flex min-h-[20px] pt-1">$1000</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="h-[90px] bg-white dark:bg-dark dark:text-white "></div>
      {/* Cart */}
      <div className="w-full flex justify-center">
        <div className=" h-[90px] w-full fixed bottom-0 bg-white dark:bg-dark dark:text-white ">
          <div className="w-full flex justify-center gap-8 m-1 font-bold">
            {/* <button className="text-3xl ">{count}</button> */}
          </div>
          <div className="mx-3 mt-6 flex ">
            <Link
              to="/cart"
              className={`${styles.bg} w-full text-white  py-2  font-bold text-2xl rounded-md flex justify-between cursor-pointer `}
            >
              <p className="flex-1  text-lg text-left pl-4 ">1</p>

              <p className="w-full flex justify-center flex-1 text-xl">
                查看购物车
              </p>
              <p className=" flex-1 text-lg text-right pr-3">$45.00</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
