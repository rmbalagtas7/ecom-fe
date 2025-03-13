import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const product = {
  name: "Neon LED Light",
  price: "$29.99",
  rating: 4.5,
  reviewCount: 230,
  images: [
    "https://your-image-url-1.jpg",
    "https://your-image-url-2.jpg",
    "https://your-image-url-3.jpg",
    "https://your-image-url-4.jpg",
  ],
};

const ProductDetails = ({ open, setOpen, productDetail }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const mainSliderRef = useRef(null);

  //console.log(productDetail);
  const settingsMain = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
  };

  const settingsThumbs = {
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    centerMode: false,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  const handleThumbnailClick = (index) => {
    setSelectedImage(index);
    mainSliderRef.current.slickGoTo(index);
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      {/* Backdrop */}
      <DialogBackdrop className="fixed inset-0 bg-gray-500/75 transition-opacity" />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-lg bg-white rounded-lg shadow-lg p-4 sm:p-6 relative">
          {/* Close Button at the Top-Right Inside the Modal */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition cursor-pointer z-10"
          >
            <XMarkIcon className="w-6 h-6 text-gray-700 hover:text-gray-900" />
          </button>

          {/* Main Image */}
          <div className="relative mt-6">
            {productDetail?.images?.length > 0 ? (
              <Slider {...settingsMain} ref={mainSliderRef}>
                {productDetail.images.map((image, index) => (
                  <div key={index} className="flex justify-center">
                    <img
                      src={image}
                      alt={`Product image ${index + 1}`}
                      className="w-full h-64 md:h-80 object-cover rounded-md"
                    />
                  </div>
                ))}
              </Slider>
            ) : (
              <p className="text-gray-500 text-center">No images available</p>
            )}
          </div>

          {/* Thumbnail Images */}
          <div className="mt-4 px-2">
            <Slider {...settingsThumbs} className="flex items-center">
              {productDetail?.images?.length > 0 ? (
                productDetail.images.map((image, index) => (
                  <div key={index} className="px-1">
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className={`w-16 mt-1 h-16 md:w-20 md:h-20 object-cover rounded-md cursor-pointer transition-all mx-auto ${
                        selectedImage === index ? "ring-2 ring-blue-500" : ""
                      }`}
                      onClick={() => handleThumbnailClick(index)}
                    />
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center w-full">
                  No thumbnails available
                </p>
              )}
            </Slider>
          </div>

          {/* Product Details */}
          <div className="mt-6 text-center">
            <h2 className="text-xl font-bold text-gray-900">
              {productDetail.name}
            </h2>
            <p className="text-lg text-gray-900 mt-2">{productDetail.price}</p>

            {/* Reviews */}
            <div className="flex justify-center items-center mt-3">
              {[...Array(5)].map((_, index) => (
                <StarIcon
                  key={index}
                  className={`h-5 w-5 ${
                    product.rating > index ? "text-yellow-500" : "text-gray-300"
                  }`}
                />
              ))}
              <p className="ml-2 text-sm text-indigo-600">
                {product.reviewCount} reviews
              </p>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white rounded-md mt-4 ">
              Add to Cart
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default ProductDetails;
