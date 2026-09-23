<script setup lang="ts">
import { ref } from 'vue'

const isMobileOpen = ref(false)
const solutionsOpen = ref(false)

function closeMenu() {
  isMobileOpen.value = false
  solutionsOpen.value = false
}

function scrollToSection(id: string) {
  closeMenu()
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <header class="lrp-header">
    <div class="lrp-header__container">
      <!-- Логотип -->
      <a href="#hero" class="lrp-brand" @click.prevent="scrollToSection('hero')">
        <div class="lrp-brand__badge">LRP</div>
        <div class="lrp-brand__text">
          <span class="lrp-brand__title">LIQUID RUBBER PROTECTION</span>
          <span class="lrp-brand__subtitle">Технологии бесшовной гидроизоляции</span>
        </div>
      </a>

      <!-- Десктопное меню -->
      <nav class="lrp-nav" aria-label="Основная навигация">
        <!-- Решения с выпадающим списком -->
        <div class="lrp-nav__item lrp-nav__dropdown" @mouseenter="solutionsOpen = true" @mouseleave="solutionsOpen = false">
          <button class="lrp-nav__btn" :aria-expanded="solutionsOpen" @click="solutionsOpen = !solutionsOpen">
            <span>Решения</span>
            <svg class="lrp-icon" :class="{ 'lrp-icon--rotate': solutionsOpen }" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <div v-show="solutionsOpen" class="lrp-dropdown">
            <a href="#roof" class="lrp-dropdown__link" @click.prevent="scrollToSection('roof')">
              <strong>Кровля</strong>
              <small>Ремонт и защита без демонтажа старого пирога</small>
            </a>
            <a href="#foundation" class="lrp-dropdown__link" @click.prevent="scrollToSection('foundation')">
              <strong>Фундамент</strong>
              <small>Защита бетона, подвалов и подземных сооружений</small>
            </a>
            <a href="#industrial" class="lrp-dropdown__link" @click.prevent="scrollToSection('industrial')">
              <strong>Промышленная гидроизоляция</strong>
              <small>Заводы, склады, цеха и технические резервуары</small>
            </a>
          </div>
        </div>

        <a href="#materials" class="lrp-nav__link" @click.prevent="scrollToSection('materials')">Материалы</a>
        <a href="#tech" class="lrp-nav__link" @click.prevent="scrollToSection('tech')">Технология</a>
        <a href="#cases" class="lrp-nav__link" @click.prevent="scrollToSection('cases')">Кейсы</a>
        <a href="#school" class="lrp-nav__link" @click.prevent="scrollToSection('school')">Школа</a>
        <a href="#partners" class="lrp-nav__link" @click.prevent="scrollToSection('partners')">Партнёрам</a>
        <a href="#about" class="lrp-nav__link" @click.prevent="scrollToSection('about')">О компании</a>
        <a href="#contacts" class="lrp-nav__link" @click.prevent="scrollToSection('contacts')">Контакты</a>
      </nav>

      <!-- Контакты и CTA -->
      <div class="lrp-header__actions">
        <a href="tel:+79093578222" class="lrp-header__phone">
          <span class="lrp-phone-dot"></span>
          <span>+7 (909) 357-82-22</span>
        </a>
        <button class="lrp-header__cta" @click="scrollToSection('lead')">
          Получить расчёт
        </button>
        <!-- Бургер кнопка -->
        <button
          class="lrp-burger"
          :class="{ 'lrp-burger--active': isMobileOpen }"
          aria-label="Меню"
          @click="isMobileOpen = !isMobileOpen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <!-- Мобильное меню -->
    <transition name="fade">
      <div v-if="isMobileOpen" class="lrp-mobile-menu">
        <div class="lrp-mobile-menu__inner">
          <div class="lrp-mobile-menu__group">
            <span class="lrp-mobile-menu__label">Направления гидроизоляции</span>
            <a href="#roof" class="lrp-mobile-menu__link" @click.prevent="scrollToSection('roof')">Кровля</a>
            <a href="#foundation" class="lrp-mobile-menu__link" @click.prevent="scrollToSection('foundation')">Фундамент и бетон</a>
            <a href="#industrial" class="lrp-mobile-menu__link" @click.prevent="scrollToSection('industrial')">Промышленная гидроизоляция</a>
          </div>
          <div class="lrp-mobile-menu__group">
            <span class="lrp-mobile-menu__label">Разделы</span>
            <a href="#materials" class="lrp-mobile-menu__link" @click.prevent="scrollToSection('materials')">Материалы LRP</a>
            <a href="#tech" class="lrp-mobile-menu__link" @click.prevent="scrollToSection('tech')">Технология</a>
            <a href="#economy" class="lrp-mobile-menu__link" @click.prevent="scrollToSection('economy')">Экономика решения</a>
            <a href="#calculator" class="lrp-mobile-menu__link" @click.prevent="scrollToSection('calculator')">Калькулятор расчёта</a>
            <a href="#cases" class="lrp-mobile-menu__link" @click.prevent="scrollToSection('cases')">Кейсы объектов</a>
            <a href="#school" class="lrp-mobile-menu__link" @click.prevent="scrollToSection('school')">Школа жидкой резины</a>
            <a href="#partners" class="lrp-mobile-menu__link" @click.prevent="scrollToSection('partners')">Партнёрская программа</a>
            <a href="#docs" class="lrp-mobile-menu__link" @click.prevent="scrollToSection('docs')">Документы и стандарты</a>
            <a href="#about" class="lrp-mobile-menu__link" @click.prevent="scrollToSection('about')">О компании</a>
            <a href="#contacts" class="lrp-mobile-menu__link" @click.prevent="scrollToSection('contacts')">Контакты</a>
          </div>

          <div class="lrp-mobile-menu__footer">
            <a href="tel:+79093578222" class="lrp-mobile-menu__tel">+7 (909) 357-82-22</a>
            <button class="lrp-header__cta lrp-header__cta--block" @click="scrollToSection('lead')">
              Получить расчёт объекта
            </button>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.lrp-header {
  position: sticky;
  top: 0;
  z-index: 90;
  background: rgba(18, 20, 23, 0.94);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  color: #fff;
  height: 4.5rem;
  display: flex;
  align-items: center;
}

.lrp-header__container {
  width: 100%;
  max-width: 1240px;
  margin-inline: auto;
  padding-inline: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.lrp-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: inherit;
  flex-shrink: 0;
}

.lrp-brand__badge {
  background: var(--p-amber, #e6a317);
  color: #121417;
  font-weight: 900;
  font-size: 0.95rem;
  letter-spacing: 0.05em;
  padding: 0.35rem 0.55rem;
  line-height: 1;
  border-radius: 2px;
}

.lrp-brand__text {
  display: flex;
  flex-direction: column;
}

.lrp-brand__title {
  font-weight: 800;
  font-size: 0.88rem;
  letter-spacing: 0.02em;
  color: #ffffff;
}

.lrp-brand__subtitle {
  font-size: 0.68rem;
  color: #9ca3af;
  letter-spacing: -0.01em;
}

.lrp-nav {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.lrp-nav__link,
.lrp-nav__btn {
  font-size: 0.875rem;
  font-weight: 600;
  color: #d1d5db;
  text-decoration: none;
  background: transparent;
  border: 0;
  cursor: pointer;
  padding: 0.4rem 0;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: inherit;
  transition: color 0.15s ease;
}

.lrp-nav__link:hover,
.lrp-nav__btn:hover {
  color: #ffb81c;
}

.lrp-nav__dropdown {
  position: relative;
}

.lrp-icon {
  width: 10px;
  height: 10px;
  transition: transform 0.2s ease;
}

.lrp-icon--rotate {
  transform: rotate(180deg);
}

.lrp-dropdown {
  position: absolute;
  top: 100%;
  left: -1rem;
  width: 290px;
  background: #1a1d22;
  border: 1px solid #323842;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.4);
  padding: 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  z-index: 100;
  border-radius: 4px;
}

.lrp-dropdown__link {
  display: flex;
  flex-direction: column;
  padding: 0.6rem 0.75rem;
  border-radius: 2px;
  text-decoration: none;
  color: #e5e7eb;
  transition: background 0.15s ease, color 0.15s ease;
}

.lrp-dropdown__link strong {
  font-size: 0.88rem;
  color: #fff;
}

.lrp-dropdown__link small {
  font-size: 0.72rem;
  color: #9ca3af;
  margin-top: 0.15rem;
  line-height: 1.3;
}

.lrp-dropdown__link:hover {
  background: #2a3038;
}

.lrp-dropdown__link:hover strong {
  color: #ffb81c;
}

.lrp-header__actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
}

.lrp-header__phone {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.88rem;
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
  transition: color 0.15s ease;
}

.lrp-header__phone:hover {
  color: #ffb81c;
}

.lrp-phone-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 8px #22c55e;
}

.lrp-header__cta {
  background: #e6a317;
  color: #121417;
  font-weight: 800;
  font-size: 0.85rem;
  padding: 0.6rem 1.15rem;
  border: 0;
  cursor: pointer;
  font-family: inherit;
  letter-spacing: 0.01em;
  transition: background 0.2s ease, transform 0.15s ease;
  white-space: nowrap;
}

.lrp-header__cta:hover {
  background: #ffb81c;
}

.lrp-header__cta:active {
  transform: translateY(1px);
}

.lrp-header__cta--block {
  width: 100%;
  padding: 0.85rem;
}

.lrp-burger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 26px;
  height: 18px;
  background: transparent;
  border: 0;
  cursor: pointer;
  padding: 0;
}

.lrp-burger span {
  display: block;
  height: 2px;
  width: 100%;
  background: #fff;
  transition: all 0.25s ease;
}

.lrp-burger--active span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.lrp-burger--active span:nth-child(2) {
  opacity: 0;
}

.lrp-burger--active span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Мобильное меню */
.lrp-mobile-menu {
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #121417;
  overflow-y: auto;
  border-top: 1px solid #2a3038;
  z-index: 85;
}

.lrp-mobile-menu__inner {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.lrp-mobile-menu__group {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.lrp-mobile-menu__label {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #ffb81c;
}

.lrp-mobile-menu__link {
  font-size: 1.05rem;
  font-weight: 600;
  color: #e5e7eb;
  text-decoration: none;
  padding-block: 0.25rem;
}

.lrp-mobile-menu__footer {
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid #2a3038;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.lrp-mobile-menu__tel {
  font-size: 1.15rem;
  font-weight: 800;
  color: #fff;
  text-decoration: none;
}

@media (max-width: 1080px) {
  .lrp-nav {
    display: none;
  }
  .lrp-burger {
    display: flex;
  }
}

@media (max-width: 600px) {
  .lrp-header__phone {
    display: none;
  }
}
</style>
