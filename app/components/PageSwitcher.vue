<script setup lang="ts">
const pages = [
  { to: '/', label: 'Лендинг' },
  { to: '/blank', label: 'Cursor' },
  { to: '/empty', label: 'Gemini' },
] as const

const route = useRoute()

function isActive(to: string) {
  if (to === '/') return route.path === '/'
  return route.path === to || route.path.startsWith(`${to}/`)
}
</script>

<template>
  <div class="switcher" role="navigation" aria-label="Переключатель страниц">
    <NuxtLink
      v-for="page in pages"
      :key="page.to"
      :to="page.to"
      class="switcher__btn"
      :class="{ 'switcher__btn--active': isActive(page.to) }"
    >
      {{ page.label }}
    </NuxtLink>
  </div>
</template>

<style scoped>
.switcher {
  position: fixed;
  z-index: 100;
  right: 1rem;
  bottom: 1rem;
  display: flex;
  gap: 0.35rem;
  padding: 0.35rem;
  background: var(--lrp-surface);
  border: 1px solid var(--lrp-line);
}

.switcher__btn {
  min-height: 2.25rem;
  padding: 0.4rem 0.85rem;
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--lrp-text-dim);
  background: transparent;
  border: 0;
  transition:
    color 0.2s ease,
    background 0.2s ease;
}

.switcher__btn:hover {
  color: var(--lrp-text);
}

.switcher__btn--active {
  background: var(--lrp-red);
  color: #fff;
}
</style>
