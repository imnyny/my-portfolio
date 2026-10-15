<script setup>
const services = [
  {
    title: 'Web Development',
    description: 'Building fast, accessible, and responsive websites using modern frameworks like Vue.js and Tailwind CSS.',
    accent: 'from-blue-500 to-cyan-400',
    icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>`
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive user interfaces, interactive wireframes, and pixel-perfect design systems.',
    accent: 'from-fuchsia-500 to-pink-500',
    icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>`
  },
  {
    title: 'Graphic Design',
    description: 'Creating stunning visual assets, brand identity materials, marketing banners, and modern vector illustrations.',
    accent: 'from-amber-400 to-orange-500',
    icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072m-6.853 0a3.75 3.75 0 000 5.304m0-5.304L15 10.5m-5.25 5.25L15 10.5" /></svg>`
  }
]
</script>

<template>
  <section id="services" class="relative scroll-mt-16 bg-slate-50 px-6 py-24 border-y border-slate-200/80 dark:bg-[#030712] dark:border-slate-800/80 transition-colors duration-300">
    <div class="mx-auto max-w-6xl">
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto">
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900 dark:text-white">
          Services I Offer
        </h2>
        <p class="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Delivering tailored digital solutions for your business
        </p>
      </div>

      <!-- Services Grid -->
      <div class="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div
          v-for="service in services"
          :key="service.title"
          class="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-slate-800/80 dark:bg-[#0B0F19] dark:hover:border-slate-700 dark:hover:shadow-2xl dark:hover:shadow-indigo-500/5"
        >
          <div>
            <!-- Icon with Gradient Background -->
            <div class="mb-6 inline-flex items-center justify-center rounded-xl p-3 text-white shadow-md bg-gradient-to-r" :class="service.accent">
              <span v-html="service.icon" class="flex items-center justify-center"></span>
            </div>

            <!-- Title -->
            <h3 class="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {{ service.title }}
            </h3>

            <!-- Description -->
            <p class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {{ service.description }}
            </p>
          </div>

          <!-- Bottom Accent Bar -->
          <div class="mt-8 h-1 w-12 rounded-full bg-slate-200 group-hover:w-full dark:bg-slate-800 transition-all duration-500">
            <div class="h-full rounded-full bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500" :class="service.accent"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>