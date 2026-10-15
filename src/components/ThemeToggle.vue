<script setup>
import { useTheme } from '../composables/useTheme'

const { isDark, toggle } = useTheme()
</script>

<template>
  <button
    type="button"
    @click="toggle"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    class="group relative grid h-9 w-9 place-items-center rounded-lg border border-slate-300 bg-white/60 text-slate-600 transition-all duration-300 hover:border-indigo-500/60 hover:text-indigo-600 dark:border-slate-700 dark:bg-ink-800/60 dark:text-slate-300 dark:hover:border-indigo-400/60 dark:hover:text-indigo-400"
  >
    <!-- sun -->
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
      stroke-linecap="round" class="h-[18px] w-[18px] transition-all duration-300"
      :class="isDark ? 'scale-0 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
    <!-- moon -->
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
      stroke-linecap="round" stroke-linejoin="round" class="absolute h-[18px] w-[18px] transition-all duration-300"
      :class="isDark ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-90 opacity-0'">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  </button>
</template>
