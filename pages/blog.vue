<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <div class="bg-gradient-to-br from-primary to-blue-600 text-white">
      <div class="container-custom py-16 md:py-20">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Solar Energy News & Insights</h1>
          <p class="text-xl text-blue-100 max-w-3xl mx-auto">
            Stay updated with the latest developments in solar energy and renewable power from India's leading news sources
          </p>
        </div>

        <!-- Search & Filter Bar -->
        <div class="mt-8 max-w-2xl mx-auto">
          <div class="relative">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search articles..."
              class="w-full px-6 py-4 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-xl"
            />
            <svg class="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- News Articles Grid -->
    <section class="section">
      <div class="container-custom">
        <!-- Loading State -->
        <div v-if="loading" class="text-center py-12">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p class="mt-4 text-gray-600">Loading latest news...</p>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="card p-8 text-center bg-red-50 border border-red-200">
          <svg class="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 class="text-xl font-semibold text-red-800 mb-2">Unable to Load News</h3>
          <p class="text-red-600">{{ error }}</p>
        </div>

        <!-- Articles Grid -->
        <div v-else>
          <div class="flex justify-between items-center mb-8">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900">
              Latest Articles <span class="text-primary">({{ filteredArticles.length }})</span>
            </h2>
            <select 
              v-model="sortBy" 
              class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="date">Newest First</option>
              <option value="title">Title A-Z</option>
            </select>
          </div>

          <!-- No Results -->
          <div v-if="filteredArticles.length === 0" class="text-center py-12">
            <svg class="w-20 h-20 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 class="text-xl font-semibold text-gray-700 mb-2">No articles found</h3>
            <p class="text-gray-500">Try adjusting your search query</p>
          </div>

          <!-- Articles Grid -->
          <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article 
              v-for="article in filteredArticles" 
              :key="article.link"
              class="card overflow-hidden hover-lift group"
            >
              <!-- Article Image -->
              <div class="relative h-48 bg-gradient-to-br from-primary/10 to-blue-500/10 overflow-hidden">
                <img
                  v-if="article.image"
                  :src="article.image"
                  :alt="article.title"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  @error="handleImageError"
                />
                <div v-else class="w-full h-full flex items-center justify-center">
                  <svg class="w-16 h-16 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <!-- Category Badge -->
                <div class="absolute top-4 left-4">
                  <span class="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full shadow-lg">
                    {{ article.source }}
                  </span>
                </div>
              </div>

              <!-- Article Content -->
              <div class="p-6">
                <!-- Date & Reading Time -->
                <div class="flex items-center text-sm text-gray-500 mb-3">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{{ formatDate(article.pubDate) }}</span>
                  <span class="mx-2">•</span>
                  <span>{{ article.readTime }} min read</span>
                </div>

                <!-- Title -->
                <h3 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {{ article.title }}
                </h3>

                <!-- Description -->
                <p class="text-gray-600 mb-4 line-clamp-3">
                  {{ article.description }}
                </p>

                <!-- Read More Button -->
                <a 
                  :href="article.link" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center text-primary font-semibold hover:text-blue-600 transition-colors"
                >
                  Read Full Article
                  <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

definePageMeta({
  layout: 'default'
});

// SEO Meta Tags
useHead({
  title: 'Solar Energy News & Updates - Solergy Systems',
  meta: [
    {
      name: 'description',
      content: 'Stay updated with the latest solar energy news, insights, and developments from India\'s leading renewable energy sources.'
    }
  ]
});

interface Article {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  source: string;
  image?: string;
  readTime: number;
}

// Reactive State
const articles = ref<Article[]>([]);
const loading = ref(true);
const error = ref('');
const searchQuery = ref('');
const sortBy = ref('date');

// Mock Solar Energy News Data (In production, this would be fetched from RSS feeds)
const mockArticles: Article[] = [
  {
    title: 'India Achieves 180 GW Renewable Energy Capacity Milestone',
    description: 'India has crossed the 180 GW mark in installed renewable energy capacity, reinforcing its commitment to clean energy transition and climate goals.',
    link: 'https://economictimes.indiatimes.com/industry/renewables',
    pubDate: new Date('2026-01-24').toISOString(),
    source: 'Economic Times',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800',
    readTime: 5
  },
  {
    title: 'Solar Panel Prices Drop 40% in 2025, Making Solar More Affordable',
    description: 'Significant reduction in solar panel manufacturing costs has made solar installations more accessible to residential and commercial consumers across India.',
    link: 'https://economictimes.indiatimes.com/industry/renewables',
    pubDate: new Date('2026-01-23').toISOString(),
    source: 'The Hindu',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800',
    readTime: 4
  },
  {
    title: 'Bihar Government Announces New Solar Subsidy Scheme for Rural Areas',
    description: 'State government launches comprehensive solar subsidy program targeting rural households, offering up to 60% subsidy on solar installations.',
    link: 'https://economictimes.indiatimes.com/industry/renewables',
    pubDate: new Date('2026-01-22').toISOString(),
    source: 'Times of India',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800',
    readTime: 6
  },
  {
    title: 'India\'s Largest Solar Park Becomes Operational in Rajasthan',
    description: 'The 5000 MW solar park in Rajasthan starts full operations, capable of powering over 2 million homes with clean renewable energy.',
    link: 'https://economictimes.indiatimes.com/industry/renewables',
    pubDate: new Date('2026-01-21').toISOString(),
    source: 'Economic Times',
    image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800',
    readTime: 5
  },
  {
    title: 'PM Surya Ghar Yojana Reaches 10 Lakh Installation Target',
    description: 'Government\'s flagship rooftop solar program successfully completes 1 million installations across India, benefiting households with free electricity.',
    link: 'https://economictimes.indiatimes.com/industry/renewables',
    pubDate: new Date('2026-01-20').toISOString(),
    source: 'The Hindu',
    image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800',
    readTime: 4
  },
  {
    title: 'Solar Energy Storage Technology Breakthrough in India',
    description: 'Indian researchers develop cost-effective battery storage solution that could revolutionize solar energy utilization and grid stability.',
    link: 'https://economictimes.indiatimes.com/industry/renewables',
    pubDate: new Date('2026-01-19').toISOString(),
    source: 'Times of India',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800',
    readTime: 7
  },
  {
    title: 'Corporate India Embraces Solar: 500 Companies Go 100% Renewable',
    description: 'Over 500 major Indian corporations achieve 100% renewable energy targets, with solar power forming the backbone of their energy strategy.',
    link: 'https://economictimes.indiatimes.com/industry/renewables',
    pubDate: new Date('2026-01-18').toISOString(),
    source: 'Economic Times',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800',
    readTime: 5
  },
  {
    title: 'New Solar Water Heater Mandate for Buildings in 10 States',
    description: 'Ten Indian states implement mandatory solar water heater installation in new residential and commercial buildings to promote clean energy adoption.',
    link: 'https://economictimes.indiatimes.com/industry/renewables',
    pubDate: new Date('2026-01-17').toISOString(),
    source: 'The Hindu',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800',
    readTime: 4
  },
  {
    title: 'Solar Exports from India Cross $5 Billion Mark',
    description: 'India emerges as major solar equipment exporter, with domestic manufacturers shipping panels and components worth over $5 billion globally.',
    link: 'https://economictimes.indiatimes.com/industry/renewables',
    pubDate: new Date('2026-01-16').toISOString(),
    source: 'Times of India',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800',
    readTime: 6
  }
];

// Computed Properties
const filteredArticles = computed(() => {
  let filtered = articles.value;

  // Search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(article =>
      article.title.toLowerCase().includes(query) ||
      article.description.toLowerCase().includes(query)
    );
  }

  // Sort
  if (sortBy.value === 'date') {
    filtered.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
  } else if (sortBy.value === 'title') {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  }

  return filtered;
});

// Methods
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  
  return date.toLocaleDateString('en-IN', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
};

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  target.style.display = 'none';
};

// Lifecycle
onMounted(async () => {
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In production, you would fetch from RSS feeds here
    // For now, using mock data
    articles.value = mockArticles;
    
    loading.value = false;
  } catch (err) {
    error.value = 'Failed to load articles. Please try again later.';
    loading.value = false;
  }
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

article {
  animation: fadeIn 0.5s ease-out;
}
</style>
