const products = [
    {
      id: 1,
      name: 'Memory',
      description: ' is a 2022 American action thriller film directed by Martin Campbell from a screenplay by Dario Scardapane.',
      href: '#',
      imageSrc: 'https://upload.wikimedia.org/wikipedia/en/7/77/Memory_official_logo.png?20220326035529',
      imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      year: '2022',
    },
    {
        id: 1,
        name: 'Carter',
        description: ' is a 2022 South Korean action thriller film directed by Jung Byung-gil, who co-wrote the film with Jung Byeong-sik.',
        href: '#',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Carter_%282022_film%29_poster.jpg/220px-Carter_%282022_film%29_poster.jpg',
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        year: '2022',
      },
      {
        id: 1,
        name: 'Memory',
        description: ' is a 2022 American action thriller film directed by Martin Campbell from a screenplay by Dario Scardapane.',
        href: '#',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/en/7/77/Memory_official_logo.png?20220326035529',
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        year: '2019',
      }
      ,
      {
        id: 1,
        name: 'Memory',
        description: ' is a 2022 American action thriller film directed by Martin Campbell from a screenplay by Dario Scardapane.',
        href: '#',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/en/7/77/Memory_official_logo.png?20220326035529',
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        year: '2019',
      },
      {
        id: 1,
        name: 'Memory',
        description: ' is a 2022 American action thriller film directed by Martin Campbell from a screenplay by Dario Scardapane.',
        href: '#',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/en/7/77/Memory_official_logo.png?20220326035529',
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        year: '2022',
      },
      {
        id: 1,
        name: 'Memory',
        description: ' is a 2022 American action thriller film directed by Martin Campbell from a screenplay by Dario Scardapane.',
        href: '#',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/en/7/77/Memory_official_logo.png?20220326035529',
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        year: '2019',
      }
    // More products...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-0 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
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
                  <a
                    href={product.href}
                    className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                  >
                    View more<span className="sr-only">, {product.name}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  