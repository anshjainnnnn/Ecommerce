export const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '/',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '/',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', id: 'top', href: '/women/clothing/tops' },
            { name: 'Dresses', id: 'women_dress', href: '/women/clothing/dresses' },
            { name: 'Women Jeans', id: 'women_jeans', href: '/women/clothing/jeans' },
            { name: 'Lengha Choli', id: 'lengha_choli', href: '/women/clothing/lengha' },
            { name: 'Sweaters', id: 'sweater', href: '/women/clothing/sweaters' },
            { name: 'T-Shirts', id: 't-shirt', href: '/women/clothing/t-shirts' },
            { name: 'Jackets', id: 'jacket', href: '/women/clothing/jackets' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', id: 'watch', href: '/women/accessories/watches' },
            { name: 'Wallets', id: 'wallet', href: '/women/accessories/wallets' },
            { name: 'Bags', id: 'bag', href: '/women/accessories/bags' },
            { name: 'Sunglasses', id: 'sunglasse', href: '/women/accessories/sunglasses' },
            { name: 'Hats', id: 'hat', href: '/women/accessories/hats' },
            { name: 'Belts', id: 'belt', href: '/women/accessories/belts' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Puma', id: 'Puma', href: '/women/brands/puma' },
            { name: 'Nike', id: 'Nike', href: '/women/brands/nike' },
            { name: 'Peter England', id: 'peterengland', href: '/women/brands/peter-england' },
            { name: 'Rolex', id: 'rolex', href: '/women/brands/rolex' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt: 'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Mens Kurtas', id: 'mens_kurta', href: '/men/clothing/kurtas' },
            { name: 'Shirt', id: 'shirt', href: '/men/clothing/shirts' },
            { name: 'Men Jeans', id: 'men_jeans', href: '/men/clothing/jeans' },
            { name: 'Sweaters', id: 'Sweaters', href: '/men/clothing/sweaters' },
            { name: 'T-Shirts', id: 't-shirt', href: '/men/clothing/t-shirts' },
            { name: 'Jackets', id: 'Jackets', href: '/men/clothing/jackets' },
            { name: 'Activewear', id: 'Activewear', href: '/men/clothing/activewear' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', id: 'Watches', href: '/men/accessories/watches' },
            { name: 'Wallets', id: 'Wallets', href: '/men/accessories/wallets' },
            { name: 'Bags', id: 'Bags', href: '/men/accessories/bags' },
            { name: 'Sunglasses', id: 'Sunglasses', href: '/men/accessories/sunglasses' },
            { name: 'Hats', id: 'Hats', href: '/men/accessories/hats' },
            { name: 'Belts', id: 'Belts', href: '/men/accessories/belts' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Puma', id: 'Puma', href: '/men/brands/puma' },
            { name: 'Nike', id: 'Nike', href: '/men/brands/nike' },
            { name: 'Peter England', id: 'peterengland', href: '/men/brands/peter-england' },
            { name: 'Rolex', id: 'rolex', href: '/men/brands/rolex' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', id: '/', href: '/' },
    { name: 'Stores', id: '/', href: '/' },
  ],
};
