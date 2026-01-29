<template>
  <footer class="bg-gray-900 text-white">
    <!-- Main Footer Content -->
    <div class="container-custom py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        <!-- Column 1: Logo & Tagline -->
        <div>
          <div class="flex items-center space-x-3 mb-4">
            <img 
              :src="images.logo.png" 
              alt="Solergy" 
              class="h-12 w-auto"
            >
            <div>
              <h3 class="text-xl font-bold">Solergy</h3>
              <p class="text-sm text-gray-400">Solar Harmony</p>
            </div>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed mb-4">
            Empowering Life with Solar Harmony. Leading solar energy provider in Bihar offering residential and commercial solutions.
          </p>
          
          <!-- Contact Info -->
          <div class="space-y-2 text-sm">
            <a href="tel:9973953809" class="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 9973953809</span>
            </a>
            <a href="mailto:solergysystems7@gmail.com" class="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>solergysystems7@gmail.com</span>
            </a>
          </div>
        </div>

        <!-- Column 2: Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/" class="text-gray-400 hover:text-white transition-colors text-sm">
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="text-gray-400 hover:text-white transition-colors text-sm">
                About Us
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/blog" class="text-gray-400 hover:text-white transition-colors text-sm">
                Blogs & News
              </NuxtLink>
            </li>
            <li>
              <a href="#contact" class="text-gray-400 hover:text-white transition-colors text-sm">
                Contact Form
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 3: Social Media & Services -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Our Services</h3>
          <ul class="space-y-2 mb-6">
            <li class="text-gray-400 text-sm">• Residential Solar Systems</li>
            <li class="text-gray-400 text-sm">• Commercial Projects</li>
            <li class="text-gray-400 text-sm">• Solar Water Heaters</li>
            <li class="text-gray-400 text-sm">• UPS & Inverters</li>
            <li class="text-gray-400 text-sm">• O&M Services</li>
          </ul>

          <h4 class="text-sm font-semibold mb-3">Follow Us</h4>
          <div class="flex space-x-4">
            <!-- Facebook -->
            <a 
              href="https://www.facebook.com/share/1G3hTsUD1T/?mibextid=wwXIfr" 
              class="social-icon"
              aria-label="Facebook"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <!-- twitter -->
            <a 
              href="https://x.com/solergysystems7?s=11" 
              class="social-icon"
              aria-label="Twitter"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2H21.5l-7.16 8.19L22 22h-6.828l-5.35-6.6L3.78 22H.5l7.68-8.79L2 2h7l4.84 5.99L18.244 2z"/>
              </svg>
            </a>

            <!-- Instagram -->
            <a 
              href="https://www.instagram.com/solergysystems_pvtltd/" 
              class="social-icon" 
              aria-label="Instagram"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-800">
      <div class="container-custom py-6">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-gray-400 text-sm text-center md:text-left">
            © {{ currentYear }} Solergy Systems. All rights reserved.
          </p>
          <p class="text-gray-400 text-sm">
            Bazar Samiti Road, Near Mahila Thana, Infront of Tathagat Gas Agency, Hajipur, Bihar - 844101
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const images = useImages();
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.social-icon {
  @apply w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110;
}
</style>
