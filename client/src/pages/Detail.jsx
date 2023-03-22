import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
const Detail = () => {
  const ref = useRef(null);
  const [count, setCount] = useState(1);
  const options = [
    {
      title: "Choose One - Salad",
      state: true,
      options: [
        { name: "Roast Chicken Salad烤鸡沙律", price: 0 },
        { name: "Bacon & Goats Cheese Salad 腌肉山羊芝士沙律", price: 0 },
        { name: "Bacon & Goats Cheese Salad 腌肉山羊芝士沙律", price: 0 },
        { name: "Tuna Salad 吞拿鱼沙律", price: 0 },
        { name: "Roast Chicken Salad烤鸡沙律", price: 0 },
        { name: "Bacon & Goats Cheese Salad 腌肉山羊芝士沙律", price: 0 },
        { name: "Bacon & Goats Cheese Salad 腌肉山羊芝士沙律", price: 0 },
        { name: "Tuna Salad 吞拿鱼沙律", price: 0 },
      ],
    },
    {
      title: "Choice of Salad Base",
      state: true,
      options: [
        { name: "Brown Rice & Quinoa Base 粗米", price: 20 },
        { name: "Mixed Lettuce 混合生菜", price: 0 },
        { name: "Fusilli螺蛳粉", price: 0 },
        { name: "Baby Spinach嫩菠菜", price: 0 },
      ],
    },
    {
      title: "Choose One - Soup or Drink",
      state: true,
      options: [
        { name: "Daily Vegan Sop 每日速食汤", price: 0 },
        { name: "Coke", price: 0 },
        { name: "Sprite", price: 0 },
        { name: "Soda Water", price: 0 },
      ],
    },
    {
      title: "I knead slice of bread 面包一片",
      state: false,
      options: [{ name: "Slice of Bread 面包一片", price: 0 }],
    },
  ];
  return (
    <div className="w-full h-screen flex justify-center ">
      <div className="relative z-0">
        {/* Image */}
        <div className="w-full  mt-3 relative">
          <img
            className="rounded-t-2xl"
            src="https://cdn.discordapp.com/attachments/1008571069797507102/1069963298176520222/xvh7ihmff7jjoqh_food_recipe_8044202e-50cf-4c80-94cf-c0367aabd460.png"
          />
          <Link to="/menu">
            <div
              className={`   ${
                (styles.text, styles.bg)
              } font-bold text-2xl rounded-full absolute z-1 top-10 left-5 w-[50px] h-[50px]`}
            >
              <p className="flex justify-center items-center h-full "> X</p>
            </div>
          </Link>
        </div>
        {/* Options */}
        <div className="pt-3 bg-gray-100/50 dark:bg-gray-100/10 dark:text-white ">
          {/* TITLE */}
          <div className=" border-b dark:border-gray-700 mx-2">
            <p className="font-bold text-3xl">
              Salad Lunch Set for 1 一人沙律餐
            </p>
            <p className="text-secondary text-sm mt-1 mb-2">
              Choose 1 Salad 1 Soup or Drink & Slice of Bread
              套餐包困沙律一份。果汁或是日餐汤一盒，可免费加配田园沙律
            </p>
          </div>
        </div>
        <div className=" bg-white dark:bg-dark dark:text-white ">
          {options.map((item) => (
            <>
              {/* Choose title */}
              <div className="mt-5 border-b dark:border-gray-700 mx-2">
                <div className="flex justify-between mb-3">
                  <p className="font-bold text-xl">{item.title}</p>
                  <p>{item.state ? "必填" : ""}</p>
                </div>
              </div>
              {/* Body */}

              {item.options.map((option) => (
                <div className="bg-white dark:bg-dark dark:text-white  border-b dark:border-gray-700 w-full flex justify-between p-2 text-sm">
                  <div className="font-semibold pl-1 py-2">{option.name}</div>
                  <div className="pr-3">
                    <input type="checkbox" className="  mt-3" />
                  </div>
                </div>
              ))}
            </>
          ))}
        </div>
        <div className="h-36 bg-white dark:bg-dark dark:text-white "></div>
        {/* Cart */}
        <div className="w-full flex justify-center">
          <div className=" h-[120px] w-full fixed bottom-0 bg-white dark:bg-dark dark:text-white ">
            <div className="w-full flex justify-center gap-8 m-1 font-bold">
              <button
                className={`border-2  w-[28px] h-[28px] rounded-full ${
                  count > 1
                    ? `${(styles.bg, styles.text)}`
                    : "text-gray-200  border-gray-200"
                } flex justify-center items-center mt-1 text-2xl`}
                onClick={() => setCount((prev) => (prev > 1 ? prev - 1 : prev))}
              >
                -
              </button>
              <button className="text-3xl ">{count}</button>
              <button
                className={`border-2  w-[28px] h-[28px] rounded-full ${
                  (styles.bg, styles.text)
                } flex justify-center items-center mt-1 text-2xl`}
                onClick={() => setCount((prev) => prev + 1)}
              >
                <p className="mb-0.5"> +</p>
              </button>
            </div>
            <div className="mx-3 my-6">
              <button
                className={`${styles.bg} w-full text-white  py-2  font-bold text-2xl rounded-md `}
              >
                加入购物车
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
