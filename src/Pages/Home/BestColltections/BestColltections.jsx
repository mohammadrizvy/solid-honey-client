import { StarIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import useProduct from "../../../Hooks/useProduct";
import toast, { Toaster } from "react-hot-toast";


const BestColltections = () => {

  const {data : bestProduct = [] , refetch , isLoading , error} = useProduct()

  console.log("Best Selling : " , bestProduct )

  const handleAddToCart = (ProductId) => {
    
    toast.success("Added to the cart.", {
      style: {
        
        padding: "16px",
        color: "#713200",
      },
      iconTheme: {
        primary: "#D19E47",
        secondary: "#F9EEDD",
      },
    });

    console.log(ProductId)

  }

  

  return (
    <div>
      <Toaster/>
      <section className="py-14">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-5xl mx-auto text-left sm:text-center">
            <h2 className="text-3xl  leading-tight  sm:text-4xl lg:text-5xl lg:leading-tight">
              আমাদের জনপ্রিয় সংগ্রহ আইটেম
            </h2>
            <p className="mt-4 text-sm">
              আপনার পছন্দের মধু প্রকারের মধ্যে বেছে নিতে পারেন আমাদের বিশেষ
              সংগ্রহ থেকে। এই সংগ্রহে রয়েছে বিভিন্ন ধরণের মধু যা প্রাকৃতিকভাবে
              সৃষ্ট এবং গুণগতভাবে উন্নত। প্রতিটি মধু কাঁচামাল থেকে প্রস্তুত করা
              হয়েছে, যাতে আপনি পাবেন একেবারে সতেজ এবং সুস্বাদু মধু। আমাদের
              লক্ষ্য হলো আপনার খাদ্যাভ্যাসকে আরও সুস্থ ও সুস্বাদু করে তোলা।
              এখানে আপনি পাবেন সুন্দরবনের খাঁটি মধু, কালোজিরা ফুলের মধু এবং আরও
              অনেক জনপ্রিয় মধু যা আপনার দৈনন্দিন খাদ্যতালিকায় বৈচিত্র্য এনে
              দেবে। আমাদের সংগ্রহে উপলব্ধ প্রতিটি মধু আপনাকে নিশ্চিত করবে যে
              আপনি খাঁটি এবং প্রাকৃতিক পণ্য পাচ্ছেন।
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
                        <IoMdStar color="black" className="size-4 text-black" />
                        <IoMdStar color="black" className="size-4 text-black" />
                        <IoMdStar color="black" className="size-4 text-black" />
                        <IoMdStar color="black" className="size-4 text-black" />
                      </p>
                      <p className="text-sm">({items.rating})</p>
                    </div>
                  </div>
                  <div className="card-actions justify-between ">
                    <button onClick={() => {handleAddToCart(items.id)}} className="btn btn-sm bg-[#D19E47] text-white w-[50%]">
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
              See more
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BestColltections;
