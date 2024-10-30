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

const OrderDetail = () => {

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

  const steps = [
    { title: 'Placed', date: '10/05/2003', active: true },
    { title: 'Order Confirmed', date: '10/05/2003', active: true },
    { title: 'Shipped', date: '10/05/2003', active: true },
    { title: 'Out for Delivery', date: '10/05/2003', active: true },
    { title: 'Delivered', date: '10/05/2003', active: false },
  ];

  const StepIndicator = () => {
    return (
      <div className="flex flex-col md:flex-row md:justify-between mb-12 relative">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start md:items-center mb-4 md:mb-0 md:mr-8 relative">
            <div className={`flex items-center justify-center w-9 h-9 rounded-full ${step.active ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-100 border-gray-300 text-black'
              }`}>
              {index + 1}
            </div>
            <div className="ml-4">
              <h3 className={`text-lg font-semibold ${step.active ? 'text-black' : 'text-gray-500'}`}>{step.title}</h3>
              <p className="text-sm text-gray-500">{step.date}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto">
      <section className="py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
        <div className="container px-4 mx-auto">
          <div className="row justify-content-center">

            {/*  */}
            <div className='flex justify-between mb-12 mx-4'>
              <div>
                <h2 className='font-bold text-2xl'>Order ID 1234</h2>
              </div>
              <div>
                <button className="bg-transparent border border-gray-500 text-gray-700 py-2 px-4 rounded hover:bg-gray-200">View Invoice</button>
              </div>
            </div>

            {/* StepIndicator */}
            <StepIndicator />

            {/* address */}
            <div className='flex gap-6 flex-col sm:flex-row'>
              <div className="bg-blue-50 dark:bg-slate-800 rounded-xl p-4 md:p-6 mb-4 sm:w-[50%]">
                <h6 className="font-medium text-2xl opacity-50">Billing Address</h6>
                <h6 className="font-medium text-2xl">Company</h6>
                <div className="mt-4">
                  <h2>
                    362 Ridgewood Dr,
                    Soldotna, Alaska
                  </h2>
                  <h2>USA 99669</h2>
                  <h2 className=" font-medium">9967908218</h2>
                  <h2 className=" font-medium opacity-50">skrazi9913@gmail.com</h2>
                </div>
              </div>
              <div className="bg-blue-50 dark:bg-slate-800 rounded-xl p-4 md:p-6 mb-4 sm:w-[50%]">
                <h6 className="font-medium text-2xl opacity-50">Delivery Address</h6>
                <h6 className="font-medium text-2xl">Razi</h6>
                <div className="mt-4">
                  <h2>
                    Plot No 17, Line No L, Room No 2, Road No 9, Baiganwadi, Govandi, Mumbai,
                  </h2>
                  <h2>India - 400043</h2>
                  <h2 className=" font-medium">9967908218</h2>
                  <h2 className=" font-medium opacity-50">skrazi9913@gmail.com</h2>
                </div>
              </div>
            </div>

            {/* product detail and payment */}
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
                            button={true} />
                        </Fragment>
                      ))}
                    </div>
                    {/* sidebar */}
                    <div className="w-full lg:w-1/3">
                      <Sidebar button="hidden" />
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/* end */}

          </div>
        </div>
      </section>
    </div>

  );
};

export default OrderDetail









