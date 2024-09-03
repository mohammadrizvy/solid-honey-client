import React, { useEffect, useState } from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
const ForYouProducts = () => {

  const [bestProduct, setBestProduct] = useState([]);

  useEffect(() => {
    fetch("/mockProductData.json")
      .then((res) => res.json())
      .then((data) => setBestProduct(data));
  }, []);

  console.log("Best Selling : ", bestProduct);

    return (
      <div>
        <section className="py-14">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-5xl mx-auto text-left sm:text-center">
              <h2 className="text-3xl  leading-tight  sm:text-4xl lg:text-5xl lg:leading-tight">
                আপনার জন্য বিশেষ
              </h2>
              <p className="mt-4 text-sm">
                আমাদের বিশেষ সেবা এবং পণ্যগুলি শুধুমাত্র আপনার জন্য প্রস্তুত করা
                হয়েছে। আমরা আপনার ব্যক্তিগত পছন্দ ও প্রয়োজনের কথা মাথায় রেখে
                এই সংগ্রহ তৈরি করেছি। এখানে আপনি পাবেন এমন পণ্য যা আপনার
                দৈনন্দিন জীবনে আরও সেরা মান এবং সুবিধা যোগ করবে। প্রতিটি আইটেম
                আমাদের বিশেষজ্ঞদের দ্বারা মনোযোগ সহকারে নির্বাচিত হয়েছে, যাতে
                আপনি সর্বোচ্চ গুণমান ও সেবা নিশ্চিত করতে পারেন। আমাদের লক্ষ্য
                হলো আপনার অভিজ্ঞতাকে আরও উন্নত এবং আরামদায়ক করে তোলা। আপনার
                জন্য আমরা সর্বদা সেরা, নতুন এবং বিশেষ কিছু নিয়ে আসছি।
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 m sm:mt-12 xl:mt-20 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-14 ">
              {bestProduct.map((items) => (
                <div key={items.id} className=" card-compact w-80 ">
                  <figure className="h- overflow-hidden">
                    <img
                      className="transform hover:scale-105 transition duration-300"
                      src={items.image}
                      alt=""
                    />
                  </figure>
                  <div className="card-body flex flex-col justify-between">
                    <h2 className="card-title -mt-2">{items.title}</h2>
                    <p className="text-small -mt-2 ">{items.category}</p>
                    <div className="flex -mt-1">
                      <p className="text-small flex gap-2 font-semibold">
                        {" "}
                        <FaBangladeshiTakaSign />
                        {items.price} BDT
                      </p>
                      <div className="flex items-center">
                        <p className="flex">
                          <IoMdStar
                            color="black"
                            className="size-4 text-black"
                          />
                          <IoMdStar
                            color="black"
                            className="size-4 text-black"
                          />
                          <IoMdStar
                            color="black"
                            className="size-4 text-black"
                          />
                          <IoMdStar
                            color="black"
                            className="size-4 text-black"
                          />
                        </p>
                        <p className="text-sm">({items.rating})</p>
                      </div>
                    </div>
                    <div className="card-actions justify-between ">
                      <button className="btn btn-sm bg-[#D19E47] text-white w-[50%]">
                        Add to cart
                      </button>
                      <button className="btn bg-[#F9EEDD] btn-sm  border-none w-[40%]">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-5">
              <button className="btn bg-[#D19E47] underline text-white px-6 py-2">
                Load more
              </button>
            </div>
          </div>
        </section>
      </div>
    );
};

export default ForYouProducts;