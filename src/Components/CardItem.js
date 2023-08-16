import React from "react";
import { Link, useParams } from "react-router-dom"; // Add this line
import Footer from "./Footer";
import YouTube from "react-youtube";

// ... (product and reviews definitions) ...
const products = [
  {
    id: 1,
    name: "Inception",
    description:
      "Inception is a 2010 science fiction action film directed by Christopher Nolan.",
    href: "#",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
    imageAlt: "Inception Movie Poster",
    year: "2010",
    productUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
  },
  {
    id: 2,
    name: "The Social Network",
    description:
      "The Social Network is a 2010 biographical drama film about the founding of Facebook.",
    href: "#",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/The_Social_Network_film_poster.png/220px-The_Social_Network_film_poster.png",
    imageAlt: "The Social Network Movie Poster",
    year: "2010",
    productUrl: "https://www.youtube.com/embed/lB95KLmpLR4",
  },
  {
    id: 3,
    name: "Mad Max: Fury Road",
    description:
      "Mad Max: Fury Road is a 2015 action film set in a post-apocalyptic wasteland.",
    href: "#",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/en/6/6e/Mad_Max_Fury_Road.jpg",
    imageAlt: "Mad Max: Fury Road Movie Poster",
    year: "2015",
    productUrl: "https://www.youtube.com/embed/hEJnMQG9ev8",
  },
  {
    id: 4,
    name: "Avengers: Infinity War",
    description:
      "Avengers: Infinity War is a 2018 superhero film produced by Marvel Studios.",
    href: "#",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg",
    imageAlt: "Avengers: Infinity War Movie Poster",
    year: "2018",
    productUrl: "https://www.youtube.com/embed/QwievZ1Tx-8",
  },
  
  {
    id: 5,
    name: "Parasite",
    description:
      "Parasite is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho.",
    href: "#",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png",
    imageAlt: "Parasite Movie Poster",
    year: "2019",
    productUrl: "https://www.youtube.com/embed/SEUXfv87Wpk",
  },
  {
    id: 6,
    name: "Joker",
    description:
      "Joker is a 2019 psychological thriller film based on DC Comics characters.",
    href: "#",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Joker_%282019_film%29_poster.jpg/220px-Joker_%282019_film%29_poster.jpg",
    imageAlt: "Joker Movie Poster",
    year: "2019",
    productUrl: "https://www.youtube.com/embed/zAGVQLHvwOY",
  },
  
  {
    id: 7,
    name: "1917",
    description:
      "1917 is a 2019 war film directed, co-written, and produced by Sam Mendes.",
    href: "#",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/en/f/fe/1917_%282019%29_Film_Poster.jpeg",
    imageAlt: "1917 Movie Poster",
    year: "2019",
    productUrl: "https://www.youtube.com/embed/YqNYrYUiMfg",
  },
  
  {
    id: 8,
    name: "Soul",
    description:
      "Soul is a 2020 computer-animated fantasy comedy-drama film produced by Pixar Animation Studios.",
    href: "#",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/en/3/39/Soul_%282020_film%29_poster.jpg",
    imageAlt: "Soul Movie Poster",
    year: "2020",
    productUrl: "https://youtu.be/xOsLIiBStEs",
  },
  {
    id: 9,
    name: "Nomadland",
    description:
      "Nomadland is a 2020 drama film directed by Chloé Zhao, based on the 2017 non-fiction book.",
    href: "#",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Nomadland_poster.jpeg/220px-Nomadland_poster.jpeg",
    imageAlt: "Nomadland Movie Poster",
    year: "2020",
    productUrl: "https://youtu.be/6sxCFZ8_d84",
  },
  {
    id: 10,
    name: "Dune",
    description:
      "Dune is a 2021 epic science fiction film directed by Denis Villeneuve, based on the 1965 novel.",
    href: "#",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Dune_%282021_film%29.jpg/220px-Dune_%282021_film%29.jpg",
    imageAlt: "Dune Movie Poster",
    year: "2021",
    productUrl: "https://www.youtube.com/embed/n9xhJrPXop4",
  },
  // More products...
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ProductDetail({ product }) {
  const [selectedSize, setSelectedSize] = React.useState(product.sizes[0]);

  return (
    <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
      {/* ... rest of the component code ... */}
    </div>
  );
}

export default function Carditem() {
  const { id } = useParams(); // Add this line to extract the productId from the URL
  console.log(id);
  // Find the product with the matching ID
  const product = products.find((p) => p.id === Number(id));
  const [showPreview, setShowPreview] = React.useState(false);
  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  console.log(product.productUrl);
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-4xl lg:px-8">
          {/* Product */}
          <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
            {/* Product image */}
            <div className="lg:col-span-4 lg:row-end-1">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* Product details */}
            <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
              <div className="flex flex-col-reverse">
                <div className="mt-4">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {product.name}
                  </h1>
                  <h2 id="information-heading" className="sr-only">
                    Movie information
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    Version {product.name}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-gray-500">{product.description}</p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                <button
                  type="button"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Released {product.year}
                </button>
                <button
                  onClick={togglePreview}
                  type="button"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-50 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Preview
                </button>
              </div>

              <div className="mt-10 border-t border-gray-200 pt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>
                <div className="prose prose-sm mt-4 text-gray-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Conditional rendering of the preview div */}
      {showPreview && (
        <div className=" flex justify-center bottom-0 left-0 m-auto right-0 p-4 bg-white border-t">
          {/* Embed the YouTube video player here */}
          {/* <YouTube
            videoId={product.productUrl}
            opts={{ width: "80%", height: 400 }}
          /> */}
          
          <iframe
            width="853"
            height="480"
            src={product.productUrl}
            title="Dune Official Trailer"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      )}
      <Footer />
    </>
  );
}
