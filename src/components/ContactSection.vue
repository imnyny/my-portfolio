<script setup>
import { reactive, ref } from 'vue'

const form = reactive({ name: '', email: '', message: '' })
const errors = reactive({ name: '', email: '', message: '' })
const status = ref('idle') // idle | sent

const socials = [
  {
    label: 'GitHub',
    handle: 'github.com/cheychanny',
    href: 'https://github.com/imnyny',
    iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/github.svg'
  },
  {
    label: 'LinkedIn',
    handle: 'in/cheychanny',
    href: 'https://www.linkedin.com/in/chey-channy-b27199444',
    iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/linkedin.svg'
  },
  {
    label: 'Telegram',
    handle: 't.me/cheychanny',
    href: 'https://t.me/helloimny',
    iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/telegram.svg'
  }
]

function validate() {
  errors.name = form.name.trim() ? '' : 'Please tell me your name.'
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+\$/.test(form.email.trim())
    ? ''
    : 'A valid email keeps the reply from getting lost.'
  errors.message = form.message.trim().length >= 10 ? '' : 'A few more words — at least 10 characters.'
  return !errors.name && !errors.email && !errors.message
}

function submit() {
  if (!validate()) return
  const body = encodeURIComponent(`From: ${form.name} <${form.email}>\n\n${form.message}`)
  window.location.href = `mailto:chey.channy.dev@gmail.com?subject=Project inquiry from ${encodeURIComponent(form.name)}&body=${body}`
  status.value = 'sent'
}

const fieldClass =
  'w-full rounded-lg border border-slate-300 bg-white/70 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 dark:border-slate-700 dark:bg-ink-950/60 dark:text-white dark:placeholder:text-slate-500'
</script>

<template>
  <section id="contact" class="scroll-mt-16 border-t border-slate-200/70 bg-white/50 dark:border-slate-800/70 dark:bg-ink-950/40">
    <div class="section grid gap-14 lg:grid-cols-2">
      <!-- left: pitch + socials -->
      <div>
        <p class="eyebrow mb-3">Contact</p>
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Let's build something that loads fast and lasts.</h2>
        <p class="mt-5 max-w-md text-[15px] leading-relaxed">
          Have a product idea, a redesign, or a frontend that needs rescuing? Send a message.
        </p>

        <ul class="mt-9 space-y-3">
          <li v-for="item in socials" :key="item.label">
            <a
              :href="item.href"
              target="_blank"
              rel="noopener"
              class="card group flex items-center gap-4 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <span class="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-slate-100 ring-1 ring-slate-200 transition-colors group-hover:bg-indigo-500/10 dark:bg-ink-800 dark:ring-slate-700">
                <img 
                  :src="item.iconUrl" 
                  :alt="item.label" 
                  class="h-[18px] w-[18px] object-contain dark:invert" 
                />
              </span>
              <span class="min-w-0">
                <span class="block font-display text-sm font-semibold text-slate-900 dark:text-white">{{ item.label }}</span>
                <span class="block truncate font-mono text-xs text-slate-500 dark:text-slate-400">{{ item.handle }}</span>
              </span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="ml-auto h-4 w-4 shrink-0 text-slate-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-indigo-500 dark:text-slate-600">
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <!-- right: form -->
      <div class="card p-6 sm:p-8">
        <form v-if="status !== 'sent'" novalidate class="space-y-5" @submit.prevent="submit">
          <div class="grid gap-5 sm:grid-cols-2">
            <div>
              <label for="name" class="mb-1.5 block font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">Name</label>
              <input 
                id="name" 
                v-model.trim="form.name" 
                type="text" 
                placeholder="Your name" 
                :class="fieldClass" 
                @input="errors.name = ''"
              />
              <p v-if="errors.name" class="mt-1.5 font-mono text-xs text-rose-500">{{ errors.name }}</p>
            </div>
            <div>
              <label for="email" class="mb-1.5 block font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">Email</label>
              <input 
                id="email" 
                v-model.trim="form.email" 
                type="email" 
                placeholder="you@company.com" 
                :class="fieldClass" 
                @input="errors.email = ''"
              />
              <p v-if="errors.email" class="mt-1.5 font-mono text-xs text-rose-500">{{ errors.email }}</p>
            </div>
          </div>
          <div>
            <label for="message" class="mb-1.5 block font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">Message</label>
            <textarea 
              id="message" 
              v-model.trim="form.message" 
              rows="6" 
              placeholder="What are we building?" 
              :class="fieldClass"
              @input="errors.message = ''"
            ></textarea>
            <p v-if="errors.message" class="mt-1.5 font-mono text-xs text-rose-500">{{ errors.message }}</p>
          </div>
          <button type="submit" class="btn-primary w-full justify-center">
            Send message
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
              <path d="m22 7-11 11M22 7 15 22l-4-9-9-4 20-2Z" />
            </svg>
          </button>
        </form>

        <div v-else class="flex min-h-full flex-col items-center justify-center py-16 text-center">
          <span class="grid h-14 w-14 place-items-center rounded-full bg-emerald-500/15 text-emerald-500 ring-1 ring-emerald-500/30">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="h-7 w-7">
              <path d="m4.5 12.5 5 5 10-11" />
            </svg>
          </span>
          <h3 class="mt-5 text-xl">Message ready to send</h3>
          <p class="mt-2 max-w-xs text-sm">
            Your email client should have opened with everything filled in. If not, reach me at
            <span class="font-mono text-xs">chey.channy.dev@gmail.com</span>.
          </p>
          <button type="button" class="btn-ghost mt-6" @click="status = 'idle'">Write another message</button>
        </div>
      </div>
    </div>
  </section>
</template>