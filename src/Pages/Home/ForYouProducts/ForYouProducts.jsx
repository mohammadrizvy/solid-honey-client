import React from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import useProduct from "../../../Hooks/useProduct";
import axios from "axios";
import toast from "react-hot-toast";

const ForYouProducts = () => {
  const { data: product = [], refetch, isLoading, error } = useProduct();

  const handleAddToCart = async (product) => {
    console.log(product)
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/add/to/cart/entry/`,
        { product } // Send productId in an object
      );
      console.log("Success:", response.data);
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
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load products.</p>;

  return (
    <div>
      <section className="py-14">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-5xl mx-auto text-left sm:text-center">
            <h2 className="text-3xl leading-tight sm:text-4xl lg:text-5xl lg:leading-tight">
              আপনার জন্য বিশেষ
            </h2>
            <p className="mt-4 text-sm">{/* Description content */}</p>
          </div>

          <div className="grid grid-cols-1 gap-6 m sm:mt-12 xl:mt-20 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-14 ">
            {product.map((items) => (
              <div key={items.id} className="card-compact w-80 ">
                <figure className="h- overflow-hidden">
                  <img
                    className="transform hover:scale-105 transition duration-300"
                    src={items.image}
                    alt={items.title}
                  />
                </figure>
                <div className="card-body flex flex-col justify-between">
                  <h2 className="card-title -mt-2">{items.title}</h2>
                  <p className="text-small -mt-2 ">{items.category}</p>
                  <div className="flex -mt-1">
                    <p className="text-small flex gap-2 font-semibold">
                      <FaBangladeshiTakaSign />
                      {items.price} BDT
                    </p>
                    <div className="flex items-center">
                      <p className="flex">
                        {Array(4)
                          .fill()
                          .map((_, i) => (
                            <IoMdStar
                              key={i}
                              color="black"
                              className="size-4 text-black"
                            />
                          ))}
                      </p>
                      <p className="text-sm">({items.rating})</p>
                    </div>
                  </div>
                  <div className="card-actions justify-between ">
                    <button
                      onClick={() => handleAddToCart(items)}
                      className="btn btn-sm bg-[#D19E47] text-white w-[50%]"
                    >
                      Add to cart
                    </button>
                    <button className="btn bg-[#F9EEDD] btn-sm border-none w-[40%]">
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
