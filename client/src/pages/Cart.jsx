import React, { useState } from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";

const Cart = () => {
  const [remove, setRemove] = useState(false);
  const orders = [
    {
      count: 1,
      name: "Bacon & Goats Cheese Salad 腌肉山羊芝士沙律Bacon & Goats Cheese Salad 腌肉山羊芝士沙律",
      price: 45,
    },
    {
      count: 1,
      name: "Bacon & Goats Cheese Salad 腌肉山羊芝士沙律Bacon & Goats Cheese Salad 腌肉山羊芝士沙律",
      price: 45,
    },
    {
      count: 1,
      name: "Bacon & Goats Cheese Salad 腌肉山羊芝士沙律Bacon & Goats Cheese Salad 腌肉山羊芝士沙律",
      price: 45,
    },
    {
      count: 1,
      name: "Bacon & Goats Cheese Salad 腌肉山羊芝士沙律Bacon & Goats Cheese Salad 腌肉山羊芝士沙律",
      price: 45,
    },
    {
      count: 1,
      name: "Bacon & Goats Cheese Salad 腌肉山羊芝士沙律Bacon & Goats Cheese Salad 腌肉山羊芝士沙律",
      price: 45,
    },
    {
      count: 1,
      name: "Bacon & Goats Cheese Salad 腌肉山羊芝士沙律Bacon & Goats Cheese Salad 腌肉山羊芝士沙律",
      price: 45,
    },
    {
      count: 1,
      name: "Bacon & Goats Cheese Salad 腌肉山羊芝士沙律Bacon & Goats Cheese Salad 腌肉山羊芝士沙律",
      price: 45,
    },
    {
      count: 1,
      name: "Bacon & Goats Cheese Salad 腌肉山羊芝士沙律Bacon & Goats Cheese Salad 腌肉山羊芝士沙律",
      price: 45,
    },
    {
      count: 1,
      name: "Bacon & Goats Cheese Salad 腌肉山羊芝士沙律Bacon & Goats Cheese Salad 腌肉山羊芝士沙律",
      price: 45,
    },
    {
      count: 1,
      name: "Bacon & Goats Cheese Salad 腌肉山羊芝士沙律Bacon & Goats Cheese Salad 腌肉山羊芝士沙律",
      price: 45,
    },
    {
      count: 1,
      name: "Bacon & Goats Cheese Salad 腌肉山羊芝士沙律Bacon & Goats Cheese Salad 腌肉山羊芝士沙律",
      price: 45,
    },
    {
      count: 2,
      name: "Bacon & Goats Cheese Salad 腌肉山羊芝士沙律",
      price: 80,
    },
    {
      count: 1,
      name: "Fusilli螺蛳粉",
      price: 35,
    },
  ];
  return (
    <div className="relative z-0 bg-white dark:text-white dark:bg-dark ">
      {/* Navbar */}
      <div className="fixed top-0  z-1 w-full  bg-white dark:bg-gray-800 pt-3">
        <div
          className={`${styles.text} flex justify-between py-3 px-3 border-b`}
        >
          <Link to="/menu">
            <div>{"<--"}</div>
          </Link>
          <div>购物车</div>
          <button onClick={() => setRemove(!remove)}>
            {remove ? "完成" : "编辑"}
          </button>
        </div>
      </div>

      {/* Body */}

      <div className="w-ful h-full pt-[60px]  mx-2  border-t dark:border-gray-700 dark:text-white ">
        {orders.map((order) => (
          <div className="w-full flex justify-between py-5  border-b dark:border-gray-700 min-h-[80px] ">
            <div className="flex gap-4  w-full">
              {remove && (
                <button className="bg-red-500 rounded-full w-[20px] text-white h-[20px] flex justify-center mt-1">
                  <p className="h-full text-sm font-bold ">-</p>
                </button>
              )}

              <p className={`${styles.text} font-bold`}>{order.count}x</p>
              <p className={`w-[250px] `}>{order.name}</p>
            </div>

            <div className="w-full flex justify-end">
              <p className={`font-bold text-right`}>${order.price}.00</p>
            </div>
          </div>
        ))}
      </div>

      {/* recommend */}
      <div className="m-2 w-full h-full bg-white dark:text-white dark:bg-dark ">
        <div className="flex justify-start my-2">
          <p>People also added</p>
        </div>

        <div className="flex w-screen  pl-2 category  border-b dark:border-gray-700  overflow-x-scroll bg-gray-200/10 scroll-smooth h-[80px] p-1 gap-5 ">
          <div className="min-w-[280px] flex  h-full   bg-white drop-shadow-md  dark:text-white dark:bg-dark  rounded-md  ">
            <img
              className="rounded-md object-cover w-[60px] h-[60px] mt-2 mx-2"
              src="https://cdn.discordapp.com/attachments/1008571069797507102/1069963298176520222/xvh7ihmff7jjoqh_food_recipe_8044202e-50cf-4c80-94cf-c0367aabd460.png"
            />
            <div className=" h-full  mt-2 ">
              <p className="font-bold w-[180px] text-sm  ">
                {orders[0].name.length < 37
                  ? orders[0].name
                  : orders[0].name.substring(0, 35) + "..."}
              </p>
              <p className="text-sm">$38.00</p>
            </div>
            <div
              className={`${styles.text} bg-white drop-shadow-md my-3 rounded-md  dark:text-white dark:bg-dark  `}
            >
              <p className="w-full mt-1.5 text-2xl ">+</p>
            </div>
          </div>
          <div className="min-w-[280px] flex  h-full   bg-white drop-shadow-md  rounded-md dark:text-white dark:bg-dark   ">
            <img
              className="rounded-md object-cover w-[60px] h-[60px] mt-2 mx-2"
              src="https://cdn.discordapp.com/attachments/1008571069797507102/1069963298176520222/xvh7ihmff7jjoqh_food_recipe_8044202e-50cf-4c80-94cf-c0367aabd460.png"
            />
            <div className=" h-full  mt-2 ">
              <p className="font-bold w-[180px] text-sm  ">
                {orders[1].name.length < 37
                  ? orders[1].name
                  : orders[1].name.substring(0, 35) + "..."}
              </p>
              <p className="text-sm">$38.00</p>
            </div>
            <div
              className={`${styles.text} bg-white drop-shadow-md my-3 rounded-md dark:text-white dark:bg-dark  `}
            >
              <p className="w-full mt-1.5 text-2xl ">+</p>
            </div>
          </div>
        </div>
      </div>

      {/* Total */}
      <div className="mx-3 mt-5 bg-white dark:text-white dark:bg-dark ">
        <div className="flex justify-between text-secondary my-2">
          <p>Total</p>
          <p className="w-[60px]">$161.00</p>
        </div>
        <div className="w-full flex justify-between text-secondary text-left">
          <p className="">Fees</p>
          <p className="w-[60px]">${161 * 0.1}</p>
        </div>
      </div>

      {/* Ads */}
      <div className=" mt-5 dark:text-white dark:bg-gray-800 ">
        <div className={`flex justify-between ${styles.bg} my-2 py-3`}>
          <p className="w-full text-white mx-4 font-bold ">
            这次你的订单将有机会获得免单优惠
          </p>
        </div>
      </div>
      <div className="h-[140px] bg-white dark:bg-dark dark:text-white "></div>

      {/* Pay */}
      <div className="w-full flex justify-center ">
        <div className=" h-[120px] w-full fixed bottom-0 bg-white dark:bg-gray-800 dark:text-white px-4">
          <div className="w-full flex justify-between   font-bold ">
            <p className="text-base text-secondary ">Total</p>
            <p className="text-base ">$177.1</p>
          </div>
          <div className=" mt-3">
            <button
              className={`${styles.bg} w-full text-white  py-2  font-bold text-2xl rounded-md `}
            >
              结账
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
