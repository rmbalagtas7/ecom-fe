import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import ProductDetails from "../components/ProductDetails.jsx";

const products = [
  {
    id: 1,
    name: "18K Gold Ring",
    category: "Rings",
    price: "25,000",
    images: [
      "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/daffney1-n/diamond/diamond-Brillant_AAA/stone2/diamond-Brillant_AAA/stone3/diamond-Brillant_AAA/alloycolour/yellow.jpg",
      "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/daffney1-n/diamond/diamond-Brillant_AAA/stone2/diamond-Brillant_AAA/stone3/diamond-Brillant_AAA/alloycolour/yellow.jpg",
      "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/daffney1-n/diamond/diamond-Brillant_AAA/stone2/diamond-Brillant_AAA/stone3/diamond-Brillant_AAA/alloycolour/yellow.jpg",
    ],
  },
  {
    id: 2,
    name: "Gold Necklace",
    category: "Necklaces",
    price: "45,000",
    images: [
      "https://images.meesho.com/images/products/447573252/ho07a_512.webp",
      "https://images.meesho.com/images/products/447573252/ho07a_512.webp",
      "https://images.meesho.com/images/products/447573252/ho07a_512.webp"
    ],
  },
  {
    id: 3,
    name: "Gold Bangle",
    category: "Bracelets",
    price: "30,500",
    images: [
      "https://cherishedmomentsshop.com/cdn/shop/products/Bangle_Classic_GOLD_NEW_1000x1000.jpg?v=1721678819",
      "https://cherishedmomentsshop.com/cdn/shop/products/Bangle_Classic_GOLD_NEW_1000x1000.jpg?v=1721678819",
      "https://cherishedmomentsshop.com/cdn/shop/products/Bangle_Classic_GOLD_NEW_1000x1000.jpg?v=1721678819"
    ],
  },
  {
    id: 4,
    name: "Gold Earrings",
    category: "Earrings",
    price: "18,700",
    images: [
      "https://down-ph.img.susercontent.com/file/42bb10afe76ff54801b923f3f9c95c36",
      "https://down-ph.img.susercontent.com/file/42bb10afe76ff54801b923f3f9c95c36",
      "https://down-ph.img.susercontent.com/file/42bb10afe76ff54801b923f3f9c95c36",
    ],
  },
  {
    id: 5,
    name: "Gold Bracelet",
    category: "Bracelets",
    price: "28,000",
    images: [
      "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/19418proti/diamond/diamond-Brillant_AAA/alloycolour/yellow.jpg",
      "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/19418proti/diamond/diamond-Brillant_AAA/alloycolour/yellow.jpg",
      "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/19418proti/diamond/diamond-Brillant_AAA/alloycolour/yellow.jpg",
    ],
  },
  {
    id: 6,
    name: "Diamond Stud Earrings",
    category: "Earrings",
    price: "35,000",
    images: [
      "https://luccerings.com/cdn/shop/files/hdfvscs_2048x.jpg?v=1716218790",
      "https://luccerings.com/cdn/shop/files/hdfvscs_2048x.jpg?v=1716218790",
      "https://luccerings.com/cdn/shop/files/hdfvscs_2048x.jpg?v=1716218790",
    ],
  },
  {
    id: 7,
    name: "Gold Pendant",
    category: "Necklaces",
    price: "22,500",
    images: [
      "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/men-lewis/alloycolour/yellow.jpg",
      "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/men-lewis/alloycolour/yellow.jpg",
      "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/men-lewis/alloycolour/yellow.jpg",
    ],
  },
  {
    id: 8,
    name: "Platinum Wedding Band",
    category: "Rings",
    price: "50,000",
    images: [
      "https://cdn-media.glamira.com/media/product/newgeneration/view/3/sku/GWD-H6818008-MEN/alloycolour/white/width/w6/profile/prA/surface/polished.jpg",
      "https://cdn-media.glamira.com/media/product/newgeneration/view/3/sku/GWD-H6818008-MEN/alloycolour/white/width/w6/profile/prA/surface/polished.jpg",
      "https://cdn-media.glamira.com/media/product/newgeneration/view/3/sku/GWD-H6818008-MEN/alloycolour/white/width/w6/profile/prA/surface/polished.jpg",
    ],
  },
];


const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

const categories = ["All", "Rings", "Necklaces", "Bracelets", "Earrings"];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Products({ setCartCount, cart, setCart }) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState({});

  const [open, setOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setCartCount(cart.length + 1);
  };

  const handleViewDetails = (product) => {
    setOpen(true);
    setSelectedProduct(product);
  };


  // Filter products based on search and category
  const filteredProducts = products.filter((product) => {
    return selectedCategory === "All" || product.category === selectedCategory;
  });

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Dialog
          open={mobileFiltersOpen}
          onClose={setMobileFiltersOpen}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        key={category}
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedCategory(category);
                        }}
                        className={`w-full text-left px-4 py-2 rounded-md ${
                          selectedCategory === category
                            ? "bg-gray-300 text-dark"
                            : "hover:bg-gray-200"
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="md:text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              All Products
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white ring-1 shadow-2xl ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <a
                          href={option.href}
                          className={classNames(
                            option.current
                              ? "font-medium text-gray-900"
                              : "text-gray-500",
                            "block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden"
                          )}
                        >
                          {option.name}
                        </a>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon aria-hidden="true" className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        key={category}
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedCategory(category);
                        }}
                        className={`w-full text-left px-4 py-2 rounded-md ${
                          selectedCategory === category
                            ? "bg-gray-300 text-dark"
                            : "hover:bg-gray-200"
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <button
                      onClick={() => handleViewDetails(product)}
                      key={product.id}
                      className="group relative p-4 rounded-md shadow-md bg-white hover:shadow-lg transition"
                    >
                      <div className="relative">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full lg:h-65 object-cover rounded-md"
                        />
                        {/* Transparent Overlay with Text at the Bottom */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gray-200 bg-opacity-30 text-dark text-xs font-medium py-2 text-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 font-mono">
                          Click to View Details
                        </div>
                      </div>
                      <div className="mt-4">
                        <h3 className="text-sm font-semibold">
                          {product.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.category}
                        </p>
                        <p className="text-sm font-medium text-gray-900 float-right">
                          ₱{product.price}
                        </p>
                      </div>
                    </button>
                  ))
                ) : (
                  <p className="text-gray-500 col-span-full">
                    No products found.
                  </p>
                )}
              </div>
            </div>
          </section>
          <ProductDetails open={open} setOpen={setOpen} productDetail={selectedProduct} />
        </main>
      </div>
    </div>
  );
}
