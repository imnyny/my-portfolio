<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import ThemeToggle from './ThemeToggle.vue'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
]

const open = ref(false)
const scrolled = ref(false)

const onScroll = () => (scrolled.value = window.scrollY > 8)
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="scrolled
      ? 'border-b border-slate-200/70 bg-ink-50/85 backdrop-blur-md dark:border-slate-800/70 dark:bg-ink-900/85'
      : 'border-b border-transparent bg-transparent'"
  >
    <nav class="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6" aria-label="Main">
      <a href="#top" class="font-mono text-sm font-bold tracking-tight text-slate-900 dark:text-white">
        <span class="text-indigo-500">&lt;</span>channy<span class="text-emerald-500">/&gt;</span>
      </a>

      <ul class="hidden items-center gap-8 md:flex">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            class="font-mono text-xs uppercase tracking-widest text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
          >{{ link.label }}</a>
        </li>
      </ul>

      <div class="flex items-center gap-3">
        <ThemeToggle />
        <a href="#contact" class="btn-primary hidden !px-4 !py-2 md:inline-flex">Hire me</a>
        <button
          type="button"
          class="grid h-9 w-9 place-items-center rounded-lg border border-slate-300 text-slate-600 dark:border-slate-700 dark:text-slate-300 md:hidden"
          :aria-expanded="open"
          aria-label="Toggle navigation menu"
          @click="open = !open"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="h-5 w-5">
            <path v-if="!open" d="M4 7h16M4 12h16M4 17h16" />
            <path v-else d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- mobile menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="-translate-y-2 opacity-0"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="-translate-y-2 opacity-0"
    >
      <div v-if="open" class="border-t border-slate-200/70 bg-ink-50/95 backdrop-blur-md dark:border-slate-800/70 dark:bg-ink-900/95 md:hidden">
        <ul class="space-y-1 px-6 py-4">
          <li v-for="link in links" :key="link.href">
            <a
              :href="link.href"
              class="block rounded-lg px-3 py-2 font-mono text-sm text-slate-600 hover:bg-indigo-500/10 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
              @click="open = false"
            >{{ link.label }}</a>
          </li>
          <li>
            <a href="#contact" class="btn-primary mt-2 w-full justify-center" @click="open = false">Hire me</a>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>
