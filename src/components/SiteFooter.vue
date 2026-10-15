<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-slate-200/70 dark:border-slate-800/70">
    <div class="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8">
      <p class="font-mono text-xs text-slate-500 dark:text-slate-400">
        © {{ year }} Chey Channy.      </p>
      <a
        href="#top"
        class="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5">
          <path d="M12 19V5m-6 6 6-6 6 6" />
        </svg>
      </a>
    </div>
  </footer>
</template>
