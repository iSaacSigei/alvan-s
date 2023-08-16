import { Link, useParams } from "react-router-dom"
const products = [
  {
    id: 1,
    name: 'Inception',
    description: 'Inception is a 2010 science fiction action film directed by Christopher Nolan.',
    href: '#',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg',
    imageAlt: 'Inception Movie Poster',
    year: '2010',
  },
  {
    id: 2,
    name: 'The Social Network',
    description: 'The Social Network is a 2010 biographical drama film about the founding of Facebook.',
    href: '#',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/The_Social_Network_film_poster.png/220px-The_Social_Network_film_poster.png',
    imageAlt: 'The Social Network Movie Poster',
    year: '2010',
  },
  {
    id: 3,
    name: 'Mad Max: Fury Road',
    description: 'Mad Max: Fury Road is a 2015 action film set in a post-apocalyptic wasteland.',
    href: '#',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/en/6/6e/Mad_Max_Fury_Road.jpg',
    imageAlt: 'Mad Max: Fury Road Movie Poster',
    year: '2015',
  },
  {
    id: 4,
    name: 'Avengers: Infinity War',
    description: 'Avengers: Infinity War is a 2018 superhero film produced by Marvel Studios.',
    href: '#',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg',
    imageAlt: 'Avengers: Infinity War Movie Poster',
    year: '2018',
  },
  {
    id: 5,
    name: 'Parasite',
    description: 'Parasite is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho.',
    href: '#',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png',
    imageAlt: 'Parasite Movie Poster',
    year: '2019',
  },
  {
    id: 6,
    name: 'Joker',
    description: 'Joker is a 2019 psychological thriller film based on DC Comics characters.',
    href: '#',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Joker_%282019_film%29_poster.jpg/220px-Joker_%282019_film%29_poster.jpg',
    imageAlt: 'Joker Movie Poster',
    year: '2019',
  },
  {
    id: 7,
    name: '1917',
    description: '1917 is a 2019 war film directed, co-written, and produced by Sam Mendes.',
    href: '#',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/en/f/fe/1917_%282019%29_Film_Poster.jpeg',
    imageAlt: '1917 Movie Poster',
    year: '2019',
  },
  {
    id: 8,
    name: 'Soul',
    description: 'Soul is a 2020 computer-animated fantasy comedy-drama film produced by Pixar Animation Studios.',
    href: '#',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/en/3/39/Soul_%282020_film%29_poster.jpg',
    imageAlt: 'Soul Movie Poster',
    year: '2020',
  },
  {
    id: 9,
    name: 'Nomadland',
    description: 'Nomadland is a 2020 drama film directed by Chloé Zhao, based on the 2017 non-fiction book.',
    href: '#',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Nomadland_poster.jpeg/220px-Nomadland_poster.jpeg',
    imageAlt: 'Nomadland Movie Poster',
    year: '2020',
  },
  {
    id: 10,
    name: 'Dune',
    description: 'Dune is a 2021 epic science fiction film directed by Denis Villeneuve, based on the 1965 novel.',
    href: '#',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Dune_%282021_film%29.jpg/220px-Dune_%282021_film%29.jpg',
    imageAlt: 'Dune Movie Poster',
    year: '2021',
  },
  // More products...
];
  export default function Example() {
 
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-0 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-6 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id}>
                <div className="relative">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="relative mt-4">
                    <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                  </div>
                  <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-lg font-semibold text-white">{product.year}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    to={`/movie/${product.id}`}
                    className="relative flex items-center justify-center rounded-md border border-transparent bg-red-400 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                  >
                    View more<span className="sr-only">, {product.name}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  