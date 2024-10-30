import React, { Fragment, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import ProductItem from "../ProductItem/ProductItem";

const productList = [
  {
    img: "https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70",
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
    img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio19.jpg",
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

const Cart = () => {
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
      <section className="ezy__epcart2 light py-10 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
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
                    review={true}
                  />
                </Fragment>
              ))}
            </div>

            {/* sidebar */}
            <div className="w-full lg:w-1/3">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </div>

  );
};

export default Cart