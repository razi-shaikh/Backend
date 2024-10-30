import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderHistory = () => {
  const navigate = useNavigate()
  const order = {
    id: '#46199271460087',
    date: '14 January, 2022',
    totalAmount: 499,
    status: 'Pending',
    items: [
      {
        id: 1,
        name: 'Apple Watch Series 7',
        variant: 'Golden',
        price: 359.00,
        image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70',
      },
      {
        id: 2,
        name: 'Beylob 90 Speaker',
        variant: 'Space Gray',
        price: 49.00,
        image: 'https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70',
      },
    ],
  };

  return (
    <div className="container mx-auto p-6 max-w-6xl mt-6">
      <h2 className="text-2xl font-semibold mb-2">Order History</h2>
      <p className="text-gray-600 mb-4">Check the status of recent and old orders.</p>
      <div className='bg-white rounded-lg flex flex-col my-7' style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
        <div className=" p-6 flex flex-col lg:flex-row gap-6">
          {/* order detail */}
          <div className="w-full lg:w-1/3 lg:flex-col border-b lg:border-b-0 lg:border-r border-gray-200 pr-6 sm:flex sm:flex-row sm:gap-6 md:gap-8 lg:gap-0 grid grid-cols-2 ">
            <div className="mb-4">
              <h3 className="text-gray-600">Order ID</h3>
              <p className="font-semibold">{order.id}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-gray-600">Expected Date</h3>
              <p className="font-semibold">{order.date}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-gray-600">Total Amount</h3>
              <p className="font-semibold">${order.totalAmount}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-gray-600">Order Status</h3>
              <p className="font-semibold text-yellow-500 flex items-center">
                <span className="material-icons text-sm mr-1">*</span>{order.status}
              </p>
            </div>
          </div>
          {/* image */}
          <div className="w-full lg:w-2/3">
            {order.items.map(item => (
              <div key={item.id} className="flex items-center border-gray-200 py-4">
                <img src={item.image} alt={item.name} className="rounded-md w-[120px] h-[120px] object-cover object-top mr-4" />
                <div className="flex-grow">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">{item.variant}</p>
                  <button className="mt-2 bg-transparent border border-gray-500 text-gray-700 hover:bg-gray-200 px-4 py-2 rounded"
                    onClick={() => (navigate(`/product/5`))}>View Product</button>
                </div>
                <p className="font-semibold">${item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
        {/* button */}
        <div className="flex gap-4 m-6 border-t pt-4 justify-end">
          <button className="bg-transparent border border-gray-500 text-gray-700 py-2 px-4 rounded hover:bg-gray-200"
            onClick={() => (navigate(`/account/order/5`))}>View Order</button>
          <button className="bg-transparent border border-gray-500 text-gray-700 py-2 px-4 rounded hover:bg-gray-200">View Invoice</button>
        </div>
      </div>
    </div >
  );
};

export default OrderHistory;