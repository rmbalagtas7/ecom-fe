import React from "react";

const features = [
  { name: "Gold Purity", description: "Crafted from 18K solid gold for lasting elegance." },
  { name: "Gemstone", description: "Embedded with premium-quality diamonds and sapphires." },
  { name: "Weight", description: "Approximately 5.2 grams (varies by design)." },
  { name: "Finish", description: "Polished to a high shine for a luxurious look." },
  { name: "Packaging", description: "Comes in an elegant velvet jewelry box." },
  { name: "Care Instructions", description: "Avoid harsh chemicals; clean with a soft cloth." },
];


const ProductsFeatures = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Technical Specifications
          </h2>
          <p className="mt-4 text-gray-500">
            This exquisite gold jewelry piece is masterfully crafted to highlight timeless elegance and sophistication. Designed with precision, each piece features high-quality gold and carefully selected gemstones, ensuring a luxurious and radiant finish. Perfect for any occasion, it adds a touch of glamour to your collection.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-03-detail-01.jpg"
            className="rounded-lg bg-gray-100"
          />
          <img
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-03-detail-02.jpg"
            className="rounded-lg bg-gray-100"
          />
          <img
            alt="Side of walnut card tray with card groove and recessed card area."
            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-03-detail-03.jpg"
            className="rounded-lg bg-gray-100"
          />
          <img
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-03-detail-04.jpg"
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsFeatures;
