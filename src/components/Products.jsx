import React from "react";

const products = [
  {
    id: 1,
    name: "18K Gold Ring",
    href: "#",
    imageSrc:
      "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/daffney1-n/diamond/diamond-Brillant_AAA/stone2/diamond-Brillant_AAA/stone3/diamond-Brillant_AAA/alloycolour/yellow.jpg",
    imageAlt: "Elegant 18K gold ring with diamond.",
    price: "₱25,000",
    color: "Gold",
  },
  {
    id: 2,
    name: "Gold Necklace",
    href: "#",
    imageSrc:
      "https://images.meesho.com/images/products/447573252/ho07a_512.webp",
    imageAlt: "Luxury gold necklace with intricate design.",
    price: "₱45,000",
    color: "Gold",
  },
  {
    id: 3,
    name: "Gold Bangle",
    href: "#",
    imageSrc:
      "https://cherishedmomentsshop.com/cdn/shop/products/Bangle_Classic_GOLD_NEW_1000x1000.jpg?v=1721678819",
    imageAlt: "Classic gold bangle bracelet.",
    price: "₱30,500",
    color: "Gold",
  },
  {
    id: 4,
    name: "Gold Earrings",
    href: "#",
    imageSrc:
      "https://down-ph.img.susercontent.com/file/42bb10afe76ff54801b923f3f9c95c36",
    imageAlt: "Elegant gold earrings with gemstone.",
    price: "₱18,700",
    color: "Gold",
  },
];

const Products = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center">
          Featured Products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
