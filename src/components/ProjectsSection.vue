<script setup>
import { ref, computed } from 'vue'

const activeCategory = ref('All')

const categories = ['All', 'Web', 'UI/UX']

const projects = [
  {
    title: 'Calendar',
    blurb: 'Frontend project',
    category: 'Web',
    link: 'https://calendar.cheychanny0.workers.dev/', 
    image: '/images/calendar.png'
  },
  {
    title: 'Product List',
    blurb: 'Frontend project',
    category: 'Web',
    link: 'https://product-management.cheychanny0.workers.dev/', 
    image: '/images/product-management.png'
  },
  {
    title: 'Simple Store',
    blurb: 'Frontend project',
    category: 'Web',
    link: 'https://cozy-closet-web.vercel.app/', 
    image: '/images/store.png'
  },
  {
    title: 'Discount Calculator',
    blurb: 'Frontend project',
    category: 'Web',
    link: 'https://my-discount-calculator-ny.vercel.app/',
    image: '/images/discount.png'
  },
  {
    title: 'Student Management System',
    blurb: 'Dashboard Design',
    category: 'UI/UX',
    link: 'https://student-dashboard-ui.cheychanny0.workers.dev/',
    image: '/images/sms-ui.png' 
  }
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') return projects
  return projects.filter(p => p.category === activeCategory.value)
})
</script>

<template>
  <section id="projects" class="bg-slate-50/60 dark:bg-[#030712] py-20 px-6 text-slate-800 dark:text-slate-100 transition-colors duration-300 font-sans">
    <div class="mx-auto max-w-6xl">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto">
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900 dark:text-white">
          My Projects
        </h2>
        <p class="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
        </p>
      </div>

      <!-- Category Filter Tabs -->
      <div class="mt-8 flex justify-center">
        <div class="inline-flex gap-1.5 rounded-2xl bg-white dark:bg-[#0B0F19] p-1.5 border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
          <button
            v-for="category in categories"
            :key="category"
            @click="activeCategory = category"
            class="rounded-xl px-5 py-2 text-xs font-semibold transition-all duration-200"
            :class="activeCategory === category
              ? 'bg-slate-900 text-white dark:bg-[#00E5FF] dark:text-slate-950 shadow-md'
              : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        <a
          v-for="project in filteredProjects"
          :key="project.title"
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative aspect-square overflow-hidden rounded-2xl bg-white dark:bg-[#0B0F19] border border-slate-200/80 dark:border-slate-800/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md block"
        >
          <!-- Background Image -->
          <img
            :src="project.image"
            :alt="project.title"
            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <!-- Floating Card Overlay -->
          <div class="absolute bottom-3 left-3 right-3 rounded-xl bg-white/90 dark:bg-[#0E1422]/90 p-3.5 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/50 shadow-lg flex items-center justify-between transition-transform duration-300">
            <div class="min-w-0 pr-2">
              <p class="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-none mb-1 truncate">
                {{ project.blurb }}
              </p>
              <h3 class="text-xs font-bold text-slate-900 dark:text-white leading-tight truncate">
                {{ project.title }}
              </h3>
            </div>

            <!-- Arrow Icon -->
            <div 
              class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 transition-colors group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-[#00E5FF] dark:group-hover:text-slate-950 dark:group-hover:border-[#00E5FF]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3.5 h-3.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </div>
        </a>
      </div>

    </div>
  </section>
</template>