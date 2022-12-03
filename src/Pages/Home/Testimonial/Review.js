import React from "react";

const Review = ({ review }) => {
  const { name, img, details, location } = review;
  return (
    <section className="text-gray-600 body-font">
      <div className="flex flex-wrap -m-4">
        <div className="p-4 ">
          <div className="h-full bg-gray-100 p-8 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="block w-5 h-5 text-gray-400 mb-4"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed mb-6">{details}</p>
            <a className="inline-flex items-center">
              <div className="avatar">
                <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={img} />
                </div>
              </div>
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium text-gray-900">
                  {name}
                </span>
                <span className="text-gray-500 text-sm">{location}</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
