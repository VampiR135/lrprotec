<script setup lang="ts">
const directions = [
  {
    to: '/blank/krovlja',
    title: 'Кровля',
    text: 'Защищаем кровлю от протечек и продлеваем срок её эксплуатации',
    cta: 'Решения для кровли',
    mascot: 'otter',
  },
  {
    to: '/blank/fundament',
    title: 'Фундамент',
    text: 'Защищаем фундамент и подземные конструкции от воздействия воды',
    cta: 'Решения для фундамента',
    mascot: 'rhino',
  },
]
</script>

<template>
  <section id="p-protect" class="p-section dirs">
    <div class="p-container">
      <p class="p-eyebrow">Что мы защищаем</p>
      <h2 class="p-title">Два основных направления</h2>
      <div class="dirs__grid">
        <NuxtLink
          v-for="item in directions"
          :key="item.to"
          :to="item.to"
          class="dir"
          :class="`dir--${item.mascot}`"
        >
          <div class="dir__mascot" aria-hidden="true">
            <svg v-if="item.mascot === 'otter'" viewBox="0 0 80 48" fill="none">
              <ellipse cx="28" cy="28" rx="18" ry="12" stroke="currentColor" stroke-width="2" />
              <path d="M42 24c10-2 22-8 28-18" stroke="currentColor" stroke-width="2" />
              <circle cx="22" cy="24" r="2" fill="currentColor" />
            </svg>
            <svg v-else viewBox="0 0 80 48" fill="none">
              <path d="M12 34h40l8-10-6-8H28l-8 8-8 10z" stroke="currentColor" stroke-width="2" />
              <path d="M20 16l6-8h18l6 8" stroke="currentColor" stroke-width="2" />
              <circle cx="28" cy="28" r="2" fill="currentColor" />
            </svg>
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
          <span class="dir__cta">{{ item.cta }}</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.dirs__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 2rem;
}

.dir {
  display: block;
  padding: 1.75rem 1.5rem;
  background: var(--p-white);
  border: 1px solid var(--p-line);
  transition:
    transform 0.25s var(--p-ease),
    border-color 0.25s var(--p-ease),
    background 0.25s var(--p-ease);
}

.dir:hover {
  transform: translateY(-4px);
  border-color: var(--p-amber);
  background: color-mix(in srgb, var(--p-amber) 6%, var(--p-white));
}

.dir__mascot {
  width: 4.5rem;
  color: var(--p-blue);
  margin-bottom: 1.1rem;
}

.dir h3 {
  font-size: 1.45rem;
  margin-bottom: 0.6rem;
}

.dir p {
  color: var(--p-muted);
  line-height: 1.5;
  max-width: 34ch;
}

.dir__cta {
  display: inline-block;
  margin-top: 1.25rem;
  font-size: 0.9rem;
  font-weight: 800;
  color: var(--p-amber-deep);
}

@media (max-width: 720px) {
  .dirs__grid {
    grid-template-columns: 1fr;
  }
}
</style>
