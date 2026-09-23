<script setup lang="ts">
const open = ref(false)

const links = [
  { href: '#pains', label: 'Задачи' },
  { href: '#solution', label: 'Решение' },
  { href: '#tech', label: 'Технология' },
  { href: '#products', label: 'Система' },
  { href: '#lead', label: 'Расчёт' },
]

function close() {
  open.value = false
}
</script>

<template>
  <header class="header" :class="{ 'header--open': open }">
    <div class="container header__inner">
      <a href="#top" class="logo" @click="close">
        <span class="logo__mark">LRP</span>
        <span class="logo__text">
          <span class="logo__name">Liquid Rubber Protection</span>
          <span class="logo__sub">Гидроизоляционные системы</span>
        </span>
      </a>

      <nav class="nav" :aria-hidden="!open">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="nav__link"
          @click="close"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="header__actions">
        <a href="tel:+79093578222" class="header__phone">+7 909 357-82-22</a>
        <a href="#lead" class="btn btn--primary header__cta" @click="close">
          Заказать звонок
        </a>
        <button
          type="button"
          class="burger"
          :aria-expanded="open"
          aria-label="Меню"
          @click="open = !open"
        >
          <span />
          <span />
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  height: var(--header-h);
  background: color-mix(in srgb, var(--lrp-black) 88%, transparent);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--lrp-line);
}

.header__inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-width: 0;
}

.logo__mark {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  background: var(--lrp-red);
  color: #fff;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.04em;
}

.logo__text {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.logo__name {
  font-family: var(--font-display);
  font-size: 0.92rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.logo__sub {
  font-size: 0.7rem;
  color: var(--lrp-muted);
}

.nav {
  display: none;
  gap: 1.35rem;
}

.nav__link {
  font-size: 0.88rem;
  color: var(--lrp-text-dim);
  transition: color 0.2s ease;
}

.nav__link:hover {
  color: #fff;
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.header__phone {
  display: none;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.95rem;
  margin-right: 0.35rem;
  padding-right: 1.35rem;
  border-right: 1px solid var(--lrp-line);
}

.header__cta {
  display: none;
}

.burger {
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid var(--lrp-line);
  background: transparent;
  display: grid;
  place-content: center;
  gap: 6px;
  cursor: pointer;
}

.burger span {
  display: block;
  width: 1.1rem;
  height: 2px;
  background: var(--lrp-text);
  transition: transform 0.25s var(--ease-out);
}

.header--open .burger span:first-child {
  transform: translateY(4px) rotate(45deg);
}

.header--open .burger span:last-child {
  transform: translateY(-4px) rotate(-45deg);
}

@media (max-width: 959px) {
  .header--open .nav {
    display: flex;
    flex-direction: column;
    position: absolute;
    inset: var(--header-h) 0 auto;
    padding: 1.25rem 1.25rem 1.5rem;
    background: var(--lrp-charcoal);
    border-bottom: 1px solid var(--lrp-line);
  }
}

@media (min-width: 960px) {
  .nav {
    display: flex;
  }

  .header__phone {
    display: inline;
  }

  .header__cta {
    display: inline-flex;
  }

  .burger {
    display: none;
  }
}
</style>
