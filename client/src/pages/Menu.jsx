import React, { useState, useRef, useEffect } from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";

import { useGetMenusQuery, useGetInfoQuery } from "../services/menuApi";
const Menu = () => {
  const shopID = "63900dc12ba021e0a889d9e8";
  const [menu, setMenu] = useState([]);

  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState({ name: "pizza", index: 0 });
  const { data, isFetching } = useGetMenusQuery(shopID);
  const { data: info, isFetching: loading } = useGetInfoQuery(shopID);

  useEffect(() => {
    setMenu(data?.result);
    setCategories((prev) => [
      ...prev,
      ...Array.from(new Set(data?.result.map((d) => d.category_name))),
    ]);
    // setActive(data)
  }, [data]);

  const ref = useRef(null);
  const menuRef = useRef(null);

  const handleClickCate = async (item, index) => {
    const scroll = index - active.index;
    ref.current.scrollLeft += scroll * 120;

    setActive({ name: item, index: index });
    console.log(menuRef.current);
  };

  if (isFetching || loading) return <div>Loading.......</div>;
  return (
    <div className="relative z-0 h-screen w-full ">
      <div className="fixed z-10  top-0 w-full bg-white dark:bg-dark dark:text-white  border-b">
        <div className={`${styles.paddingX}    w-full mt-2`}>
          {/* Category title */}
          <div className="flex justify-between ">
            {/* <p className="font-bold text-2xl ">Category</p> */}
            <img
              className="rounded-[5px] w-[50px] h-[50px] mt-1 "
              src={info?.result?.logo}
            />
            <p className="text-3xl font-bold mt-2">{info?.result?.name} </p>
          </div>
        </div>

        {/* Category bar */}
        <div
          ref={ref}
          className={`min-w-screen  pl-2 category   overflow-x-scroll scroll-smooth h-[35px]   mt-6 pb-1  flex  text-sm  `}
        >
          {categories.map((item, index) => (
            <div
              onClick={() => handleClickCate(item, index)}
              key={index}
              className={` dark:text-white flex  rounded-[10px]    ${
                active.name === item
                  ? ` ${styles.bg} text-white `
                  : `${styles.text}`
              } items-center text-center justify-center py-1   `}
            >
              <button className="w-32 mx-4">{item}</button>
            </div>
          ))}
        </div>
      </div>

      <div className={`px-5  dark:text-white h-screen`}>
        {/* Menu Body */}
        <div
          className={`mt-[120px] cursor-pointer w-full h-full  overflow-y-scroll  flex flex-col   `}
        >
          {menu?.map((e, index) => (
            <div key={index} ref={menuRef}>
              {index === 0 ||
              e.category_name !== menu[index - 1].category_name ? (
                <p
                  id={e.category_name}
                  className={`${styles.heroHeadText} mt-4 `}
                >
                  {e.category_name}
                </p>
              ) : (
                <div id="null"></div>
              )}
              <div>
                <Link to={`/detail/${index}`} state={{ data: e }}>
                  <div
                    className={` h-full w-full  flex flex-row-reverse   border-y dark:border-gray-700   drop-shadow-sm   transition-all py-2 max-h-[200px] `}
                  >
                    <img
                      className="rounded-[5px] w-[100px] h-[100px] object-center object-cover"
                      src={e.image}
                    />
                    <div className="max-h-[100px] flex-1 flex justify-start  h-full">
                      <div className="">
                        <p className=" mt-2 flex-1 text-left  items-center   text-base font-semibold ">
                          {e.name.length < 21
                            ? e.name
                            : e.name.substring(0, 21) + "..."}
                        </p>
                        <p className="h-[46px] flex-1 text-left  items-center  text-sm  text-secondary ">
                          {e.description.length < 62
                            ? e.description
                            : e.description.substring(0, 60) + "..."}
                        </p>
                        <p
                          className={`text-lg flex pt-1  ${styles.text} font-mono font-bold `}
                        >
                          ${e.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
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
