import React, { Fragment, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import ProductItem from "../ProductItem/ProductItem";

const productList = [
  {
    img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio14.jpg",
    title:
      "ABUK Home Appliance Surge Protector Voltage Brownout Plug Outlet Power Strip Surge Protector With Pass Button",
    price: "158",
    qty: 2,
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio20.jpg",
    title:
      "Forsining 3d Logo Design Hollow Engraving Black Gold Case Leather Skeleton Mechanical Watches Men Luxury Brand Heren Horloge",
    price: "7,390",
    qty: 2,
  },
  {
    img: "https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/g/6/k/m-sksh-dt1105-pcbl-fubar-original-imafux247zhqym2z-bb.jpeg?q=70",
    title:
      "Factory Brand Wholesale 5# Zinc Accessories Custom Hook Slider Metal #5 For Clothing garment jacket",
    price: "21,452",
    qty: 2,
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio15.jpg",
    title:
      "Factory Direct Sales Stainless Steel Heat Resistant Custom Compression Spring Manufacturer Spring Steel",
    price: "17,652",
    qty: 2,
  },
];

const OrderSummary = () => {
  const [products, setProducts] = useState([...productList]);

  const onChange = (e, index) => {
    const { value } = e.target;

    setProducts([
      ...products.slice(0, index),
      {
        ...products[index],
        qty: value,
      },
      ...products.slice(index + 1),
    ]);
  };

  return (
    <div className=' max-w-7xl  mx-auto '>
      <section className="light py-2 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* products  */}
            <div className="bg-blue-50 dark:bg-slate-800 rounded-xl w-full lg:w-2/3">
              {products.map((item, i) => (
                <Fragment key={i}>
                  {!!i && <hr className="my-4 dark:border-slate-700" />}
                  <ProductItem
                    item={item}
                    index={i}
                    onChange={onChange}
                    key={i}
                    button={true}
                    review={true} />
                </Fragment>
              ))}
            </div>
            {/* sidebar */}
            <div className="w-full lg:w-1/3">
              <div className="bg-blue-50 dark:bg-slate-800 rounded-xl p-4 md:p-6 mb-4">
                <h6 className="font-medium text-2xl">Razi</h6>
                <div className="mt-4">
                  <h2>
                    Plot No 17, Line No L, Room No 2, Road No 9, Baiganwadi, Govandi, Mumbai,
                  </h2>
                  <h2>India - 400043</h2>
                  <h2 className=" font-medium">9967908218</h2>
                  <h2 className=" font-medium">skrazi9913@gmail.com</h2>
                </div>
              </div>
              {/* Coupon */}
              <div className='flex mb-4'>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter Coupon Code" required />
                <button className="bg-[#3871ED] text-white  py-2 px-5 rounded ml-3">
                  Apply
                </button>
              </div>
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderSummary