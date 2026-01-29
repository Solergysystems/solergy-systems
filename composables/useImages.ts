/**
 * Image assets reference for Solergy website
 * All images are optimized and available in JPG format
 */

export const useImages = () => {
  return {
    // Logo (PNG with transparent background)
    logo: {
      png: '/images/logo.png'
    },

    // Hero Carousel Images (1-6)
    hero: [
      {
        id: 1,
        jpg: '/images/1.jpg'
      },
      {
        id: 2,
        jpg: '/images/2.jpg'
      },
      {
        id: 3,
        avif: '/images/3.avif',
        jpg: '/images/3.jpg' // fallback if needed
      },
      {
        id: 4,
        jpg: '/images/4.jpg'
      },
      {
        id: 5,
        jpg: '/images/5.jpg'
      },
      {
        id: 6,
        jpg: '/images/6.jpg'
      }
    ],

    // PM Surya Ghar Yojana Banner
    suryaGhar: {
      webp: '/images/surya ghar yojna.webp',
      jpg: '/images/surya ghar yojna.jpg'
    }
  }
}
