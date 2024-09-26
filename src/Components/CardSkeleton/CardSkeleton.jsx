import React from "react";

const CardSkeleton = () => {
  return (
    <div className="card-compact w-80 animate-pulse">
      <figure className="h-64 overflow-hidden bg-gray-200">
        {/* Skeleton for image */}
        <div className="w-full h-full bg-gray-300"></div>
      </figure>
      <div className="card-body flex flex-col justify-between p-4 space-y-4">
        {/* Skeleton for title */}
        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
        {/* Skeleton for category */}
        {/* <div className="h-4 bg-gray-200 rounded w-1/2"></div> */}
        <div className="flex items-center space-x-2">
          {/* Skeleton for price */}
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          <div className="flex space-x-1">
            {/* Skeleton for rating stars */}
            <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
            <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
            <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
            <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CardSkeleton;
