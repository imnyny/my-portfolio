<template>
  <section id="top" class="relative overflow-hidden pt-16">
    <!-- ambient background: soft glows kept -->
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div
        class="absolute -top-32 right-[-10%] h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl dark:bg-indigo-500/20" />
      <div
        class="absolute bottom-[-20%] left-[-10%] h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/15" />
    </div>

    <div class="section relative grid items-center gap-14 pb-24 pt-16 md:pt-24 lg:grid-cols-2">
      <!-- left: intro -->
      <div class="animate-fade-up">
        <!-- Top greeting -->
        <p
          class="inline-flex items-center gap-2 mb-4 text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-200 sm:text-3xl">
          Hi! I'm Channy
          <svg
            class="w-8 h-8 text-amber-400 transition-transform duration-300 ease-in-out hover:rotate-12 hover:scale-125"
            fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11m0-5.5a1.5 1.5 0 013 0v3">
            </path>
          </svg>
        </p>

        <!-- Main Heading -->
        <h1 class="text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
          Frontend web developer based in Kampong Spue.
        </h1>

        <!-- Subheading Paragraph -->
        <p class="mt-6 max-w-lg text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          I am a Frontend developer from Kampong Spue, Cambodia with some experience of Teaching and Sharing!
        </p>

        <!-- Action Buttons -->
        <div class="mt-9 flex flex-wrap items-center gap-4">
          <a href="#contact"
            class="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-500 hover:shadow-indigo-500/35 active:translate-y-0">
            contact me
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" class="h-4 w-4">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </a>


          <a href="https://docs.google.com/document/d/14rRw_26X668i3lxgSKEjLYPFl2WQwVqcOS1YabtkCPs/edit?usp=sharing"
            target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-8 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-800">
            my resume
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" class="h-4 w-4">
              <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" />
            </svg>
          </a>
        </div>
      </div>

      <!-- right: Image Section (Still / Static) -->
      <div class="animate-fade-up lg:pl-6" style="animation-delay:.15s">
        <div class="relative mx-auto max-w-md">
          <!-- Ambient Glow behind image -->
          <div
            class="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-indigo-500 to-emerald-500 opacity-30 blur-xl dark:opacity-40">
          </div>

          <!-- Static Image Container -->
          <div
            class="relative overflow-hidden rounded-2xl bg-slate-100 p-2 shadow-2xl dark:bg-slate-800/80 ring-1 ring-slate-900/10 dark:ring-white/10">
            <img src="https://i.pinimg.com/originals/c9/bc/21/c9bc210aa88b1e56726b1261a704351a.gif" alt=""
              class="h-auto w-full rounded-2xl object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>