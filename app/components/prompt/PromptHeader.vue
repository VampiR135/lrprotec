<script setup lang="ts">
const open = ref(false)
const solutionsOpen = ref(false)

const solutionLinks = [
  { to: '/blank/krovlja', label: 'Кровля' },
  { to: '/blank/fundament', label: 'Фундамент' },
  { to: '/blank/promyshlennaya', label: 'Промышленная гидроизоляция' },
]

const links = [
  { to: '/blank/materialy', label: 'Материалы' },
  { to: '/blank/tehnologiya', label: 'Технология' },
  { to: '/blank/keysy', label: 'Кейсы' },
  { to: '/blank/shkola', label: 'Школа' },
  { to: '/blank/partneram', label: 'Партнёрам' },
  { to: '/blank/o-kompanii', label: 'О компании' },
]

function close() {
  open.value = false
  solutionsOpen.value = false
}
</script>

<template>
  <header class="ph" :class="{ 'ph--open': open }">
    <div class="p-container ph__inner">
      <NuxtLink to="/blank" class="ph__logo" @click="close">
        <span class="ph__mark">LRP</span>
        <span class="ph__name">Liquid Rubber Protection</span>
      </NuxtLink>

      <nav class="ph__nav" :aria-hidden="String(!open)">
        <div class="ph__drop" @mouseenter="solutionsOpen = true" @mouseleave="solutionsOpen = false">
          <button type="button" class="ph__link ph__link--btn" @click="solutionsOpen = !solutionsOpen">
            Решения
          </button>
          <div v-show="solutionsOpen" class="ph__menu">
            <NuxtLink
              v-for="item in solutionLinks"
              :key="item.to"
              :to="item.to"
              @click="close"
            >
              {{ item.label }}
            </NuxtLink>
          </div>
        </div>
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="ph__link"
          @click="close"
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink to="/blank/kontakty" class="ph__link" @click="close">Контакты</NuxtLink>
      </nav>

      <div class="ph__actions">
        <a href="#p-lead" class="p-btn p-btn--primary ph__cta" @click="close">Получить расчёт</a>
        <button type="button" class="ph__burger" :aria-expanded="open" aria-label="Меню" @click="open = !open">
          <span /><span />
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.ph {
  position: sticky;
  top: 0;
  z-index: 40;
  height: var(--p-header);
  background: color-mix(in srgb, var(--p-white) 92%, transparent);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--p-line);
}

.ph__inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.ph__logo {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  min-width: 0;
}

.ph__mark {
  display: grid;
  place-items: center;
  width: 2.4rem;
  height: 2.4rem;
  background: var(--p-graphite);
  color: var(--p-amber);
  font-size: 0.78rem;
  font-weight: 800;
}

.ph__name {
  font-size: 0.92rem;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ph__nav {
  display: none;
  align-items: center;
  gap: 1.1rem;
}

.ph__link,
.ph__link--btn {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--p-slate);
  background: none;
  border: 0;
  padding: 0;
  cursor: pointer;
  font-family: inherit;
}

.ph__link:hover,
.ph__link--btn:hover {
  color: var(--p-ink);
}

.ph__drop {
  position: relative;
}

.ph__menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 16rem;
  padding: 0.5rem;
  background: var(--p-white);
  border: 1px solid var(--p-line);
  display: grid;
}

.ph__menu a {
  padding: 0.65rem 0.75rem;
  font-size: 0.88rem;
  font-weight: 600;
}

.ph__menu a:hover {
  background: var(--p-paper);
}

.ph__actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.ph__cta {
  display: none;
}

.ph__burger {
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid var(--p-line);
  background: transparent;
  display: grid;
  place-content: center;
  gap: 6px;
  cursor: pointer;
}

.ph__burger span {
  width: 1.1rem;
  height: 2px;
  background: var(--p-ink);
}

@media (max-width: 1099px) {
  .ph--open .ph__nav {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    position: absolute;
    inset: var(--p-header) 0 auto;
    max-height: calc(100vh - var(--p-header));
    overflow: auto;
    padding: 1rem var(--p-pad) 1.5rem;
    background: var(--p-white);
    border-bottom: 1px solid var(--p-line);
    gap: 0.85rem;
  }

  .ph--open .ph__menu {
    position: static;
    border: 0;
    padding: 0.25rem 0 0.5rem 0.75rem;
  }
}

@media (min-width: 1100px) {
  .ph__nav {
    display: flex;
  }

  .ph__cta {
    display: inline-flex;
  }

  .ph__burger {
    display: none;
  }
}
</style>
