<script setup lang="ts">
function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="hero" class="hero-section">
    <!-- Фоновое изображение промышленного напыления кровли -->
    <div class="hero-backdrop">
      <img
        src="/roof-application.jpg"
        alt="Нанесение бесшовной жидкой резины LRP на промышленной кровле"
        class="hero-img"
        loading="eager"
      />
      <div class="hero-overlay"></div>
    </div>

    <div class="hero-container">
      <div class="hero-badge">
        <span class="hero-badge__dot"></span>
        <span class="hero-badge__text">LIQUID RUBBER PROTECTION • РОССИЙСКИЙ ПРОИЗВОДИТЕЛЬ И ИНЖЕНЕРНЫЙ ПАРТНЁР</span>
      </div>

      <h1 class="hero-title">
        Бесшовная гидроизоляция, которая защищает конструкцию от воды
      </h1>

      <p class="hero-subtitle">
        Кровли, фундаменты и промышленные конструкции. Материалы и профессиональное нанесение жидкой резины.
      </p>

      <div class="hero-cta">
        <button class="hero-btn hero-btn--primary" @click="scrollTo('lead')">
          Получить расчёт
          <svg viewBox="0 0 16 16" fill="none" class="hero-btn__icon">
            <path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button class="hero-btn hero-btn--secondary" @click="scrollTo('tech')">
          Посмотреть технологию
        </button>
        <button class="hero-btn hero-btn--ghost" @click="scrollTo('partners')">
          Стать партнёром
        </button>
      </div>

      <!-- Инженерные ключевые метрики -->
      <div class="hero-metrics">
        <div class="hero-metric">
          <span class="hero-metric__val">0 швов</span>
          <span class="hero-metric__desc">Монолитная эластичная мембрана по всей площади</span>
        </div>
        <div class="hero-metric">
          <span class="hero-metric__val">> 800%</span>
          <span class="hero-metric__desc">Относительное удлинение без разрыва при осадке</span>
        </div>
        <div class="hero-metric">
          <span class="hero-metric__val">1 500 м²</span>
          <span class="hero-metric__desc">Скорость нанесения бригадой за одну рабочую смену</span>
        </div>
        <div class="hero-metric">
          <span class="hero-metric__val">Без демонтажа</span>
          <span class="hero-metric__desc">Ремонт кровель поверх существующего рулонного ковра</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  min-height: calc(100vh - 4.5rem);
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #121417;
  color: #ffffff;
  padding-block: clamp(3rem, 7vw, 6rem);
}

.hero-backdrop {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: brightness(0.65) contrast(1.1);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(18, 20, 23, 0.85) 0%, rgba(18, 20, 23, 0.65) 50%, rgba(18, 20, 23, 0.95) 100%),
    linear-gradient(90deg, rgba(18, 20, 23, 0.95) 0%, rgba(18, 20, 23, 0.7) 60%, rgba(18, 20, 23, 0.85) 100%);
}

.hero-container {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1240px;
  margin-inline: auto;
  padding-inline: 1.5rem;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(230, 163, 23, 0.12);
  border: 1px solid rgba(230, 163, 23, 0.35);
  padding: 0.35rem 0.85rem;
  border-radius: 2px;
  margin-bottom: 1.5rem;
}

.hero-badge__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #ffb81c;
}

.hero-badge__text {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #ffb81c;
}

.hero-title {
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.025em;
  max-width: 22ch;
  color: #ffffff;
  text-shadow: 0 2px 16px rgba(0, 0, 0, 0.5);
}

.hero-subtitle {
  margin-top: 1.35rem;
  font-size: clamp(1.05rem, 2vw, 1.25rem);
  line-height: 1.55;
  color: #d1d5db;
  max-width: 48ch;
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 2.25rem;
}

.hero-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  font-weight: 700;
  padding: 0.85rem 1.75rem;
  border-radius: 2px;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.2s cubic-bezier(0.22, 1, 0.36, 1);
  border: 0;
  text-decoration: none;
}

.hero-btn:active {
  transform: translateY(1px);
}

.hero-btn--primary {
  background: #e6a317;
  color: #121417;
}

.hero-btn--primary:hover {
  background: #ffb81c;
  box-shadow: 0 8px 24px rgba(230, 163, 23, 0.35);
}

.hero-btn__icon {
  width: 16px;
  height: 16px;
  transition: transform 0.2s ease;
}

.hero-btn--primary:hover .hero-btn__icon {
  transform: translateX(3px);
}

.hero-btn--secondary {
  background: #2a3038;
  color: #ffffff;
  border: 1px solid #3a4554;
}

.hero-btn--secondary:hover {
  background: #3a4554;
  border-color: #4b5563;
}

.hero-btn--ghost {
  background: transparent;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.hero-btn--ghost:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: #ffffff;
}

.hero-metrics {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  margin-top: 3.5rem;
  padding-top: 2.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.hero-metric {
  display: flex;
  flex-direction: column;
}

.hero-metric__val {
  font-size: clamp(1.4rem, 2.8vw, 2.1rem);
  font-weight: 800;
  color: #ffb81c;
  line-height: 1.1;
  font-family: var(--font-display, inherit);
}

.hero-metric__desc {
  margin-top: 0.4rem;
  font-size: 0.8rem;
  line-height: 1.4;
  color: #9ca3af;
}

@media (max-width: 960px) {
  .hero-metrics {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 520px) {
  .hero-cta {
    flex-direction: column;
    width: 100%;
  }
  .hero-btn {
    width: 100%;
  }
  .hero-metrics {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
