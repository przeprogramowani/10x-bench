<template>
  <div class="flex flex-col gap-4 w-full max-w-2xl mx-auto">
    <div
      v-for="row in rows"
      :key="row.label"
      class="flex items-center justify-between gap-4 px-5 py-3 rounded-lg bg-white/5 border border-white/10"
    >
      <span class="text-xs uppercase tracking-wider opacity-60 w-20">{{ row.label }}</span>
      <span class="flex-1 text-right font-serif text-xl opacity-70 line-through decoration-rose-400/70">
        {{ row.from }}
      </span>
      <carbon:arrow-right class="text-2xl opacity-60 shrink-0" />
      <span class="flex-1 font-serif text-xl font-semibold text-emerald-300">
        {{ row.to }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Row {
  label: string
  from: string
  to: string
}

const rows: Row[] = [
  { label: 'Framework', from: 'Gatsby', to: 'Astro' },
  { label: 'Hosting', from: 'Netlify', to: 'Cloudflare' },
  { label: 'Widoki', from: 'PUG', to: 'Svelte' },
]
</script>
