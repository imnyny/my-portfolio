<script setup>
const skills = ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Nuxt.js', 'Tailwind CSS', 'TypeScript', 'Git']

const highlights = [
  {
    icon: 'code',
    label: 'Skills & Tech',
    detail: 'HTML, CSS, JS, Vue, Nuxt, Tailwind',
  },
  {
    icon: 'academic',
    label: 'Education',
    detail: 'BTI in Information Technology',
  },
  {
    icon: 'briefcase',
    label: 'Projects',
    detail: 'Built modern web apps & tools',
  }
]

const tools = [
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' }
]
</script>

<template>
  <section id="about" class="scroll-mt-16 py-12">
    <div class="mx-auto max-w-6xl px-6">
      
      <!-- Eyebrow & Title -->
      <div class="mb-8">
        <p class="font-mono text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
          INTRODUCTION
        </p>
        <h2 class="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          About me
        </h2>
      </div>

      <!-- Main Layout -->
      <div class="grid gap-12 lg:grid-cols-12 lg:items-center">
        
        <!-- Left: Image & Badge -->
        <div class="relative lg:col-span-5 flex justify-center">
          <div class="relative w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/50 backdrop-blur">
            <div class="aspect-square w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
              <img 
                src="/images/me.png" 
                alt="Chey Channy" 
                class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              >
            </div>

          </div>
        </div>

        <!-- Right: Bio & Cards Grid -->
        <div class="space-y-8 lg:col-span-7">
          
          <!-- Bio Paragraph -->
          <p class="text-base leading-relaxed text-slate-600 dark:text-slate-300">
            I'm <strong class="text-slate-900 dark:text-white">Chey Channy</strong>, an IT student and passionate Frontend Developer based in Kampong Speu. I focus on building clean, responsive, and user-friendly web interfaces using modern technologies like Vue, Nuxt, and Tailwind CSS.
          </p>

          <!-- 3 Bento Cards -->
          <div class="grid gap-4 sm:grid-cols-3">
            <div 
              v-for="card in highlights" 
              :key="card.label"
              class="group rounded-xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 dark:border-slate-800/80 dark:bg-slate-900/40 dark:hover:bg-slate-900/80"
            >
              <!-- Icons -->
              <div class="mb-3 text-indigo-600 dark:text-indigo-400">
                <svg v-if="card.icon === 'code'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-6 w-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
                <svg v-else-if="card.icon === 'academic'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-6 w-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147L12 14.6l7.74-4.453M12 4.5l8.25 4.5L12 13.5 3.75 9 12 4.5zM4.5 12v4.5l7.5 4.125 7.5-4.125V12" />
                </svg>
                <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-6 w-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 .966-.784 1.75-1.75 1.75H5.5a1.75 1.75 0 0 1-1.75-1.75v-4.25m16.5 0a2.25 2.25 0 0 0-2.25-2.25H5.5A2.25 2.25 0 0 0 3.25 14.15m16.5 0v-4.25A2.25 2.25 0 0 0 17.5 7.65H5.5A2.25 2.25 0 0 0 3.25 9.9v4.25" />
                </svg>
              </div>

              <h3 class="font-semibold text-slate-900 dark:text-white">{{ card.label }}</h3>
              <p class="mt-1 font-mono text-xs text-slate-500 dark:text-slate-400">{{ card.detail }}</p>
            </div>
          </div>

          <!-- Tools I Use -->
          <div>
            <p class="mb-3 font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Tools I use
            </p>
            <div class="flex flex-wrap items-center gap-3">
              <div 
                v-for="tool in tools" 
                :key="tool.name"
                class="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white transition-transform hover:scale-110 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-slate-700"
                :title="tool.name"
              >
                <img :src="tool.icon" :alt="tool.name" class="h-5 w-5" />
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>