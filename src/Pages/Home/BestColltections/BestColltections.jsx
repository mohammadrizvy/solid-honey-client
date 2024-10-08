import React from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import ProductCard from "../../../Components/PoductCard/ProductCard";
import CardSkeleton from "../../../Components/CardSkeleton/CardSkeleton"; // Import your CardSkeleton component
import useProduct from "../../../Hooks/useProduct";
import axios from "axios";

const BestCollections = () => {
  const { data: bestProduct = [], refetch, isLoading, error } = useProduct();

 const handleAddToCart = async (productId) => {
   console.log("addded to the cart product : ", productId);
   try {
     const response = await axios.post(
       `${import.meta.env.VITE_BACKEND_URL}/cart/entry/`,
       { productId } // Send productId in an object
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
     refetch();
   } catch (error) {
     console.error(
       "Error:",
       error.response ? error.response.data : error.message
     );
   }
 };

  return (
    <div>
      <Toaster />
      <section className="py-14">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-5xl mx-auto text-left sm:text-center">
            <h2 className="text-3xl leading-tight sm:text-4xl lg:text-5xl lg:leading-tight">
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

          <div className="grid grid-cols-1 gap-6 sm:mt-12 xl:mt-20 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-14">
            {isLoading
              ? Array(6)
                  .fill(0)
                  .map((_, index) => <CardSkeleton key={index} />)
              : bestProduct.map((product) => (
                  
                    <ProductCard
                      product={product}
                      handleAddToCart={handleAddToCart}
                    />
                ))}
          </div>
          <div className="flex justify-center mt-5">
            <Link to={"allproducts"}>
            <button className="btn bg-[#D19E47] underline text-white px-6 py-2">
              See more
            </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BestCollections;
