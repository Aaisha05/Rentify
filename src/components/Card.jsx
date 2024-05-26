import * as React from 'react';

export default function ImgMediaCard({ image, place, area, no_of_bedrooms, no_of_bathrooms  }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 flex flex-col justify-between">
      <img className="w-full h-80 object-cover" src={image}  />
      <div className="px-6 py-4">
        <div className="font-normal text-xl mb-2">{place}</div>
        <p className="text-gray-500 text-base mb-4">
          {area}
        </p>
        <p className="text-black text-normal">
            No. of bedrooms:
          {no_of_bedrooms}
        </p>
        <p className="text-black text-normal">
            No. of bathrooms:
          {no_of_bathrooms}
        </p>
      </div>
      <div className="px-6 py-4 flex justify-center">
        <button className="text-white bg-black text-sm rounded-lg py-2 px-4 ">
          I'm Interested
        </button>
      </div>
    </div>
  );
}
