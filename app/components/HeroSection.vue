<script setup lang="ts">
const stats = [
  { value: 'Бесшовно', label: 'единая мембрана' },
  { value: '0 ₽', label: 'обследование объекта' },
  { value: 'Система', label: 'кровля · бетон · металл' },
]
</script>

<template>
  <section id="top" class="hero">
    <div class="hero__media" aria-hidden="true">
      <img
        src="/hero-otter.jpg"
        alt=""
        class="hero__img"
        width="1600"
        height="900"
      >
      <div class="hero__shade" />
    </div>

    <div class="container hero__content">
      <p class="hero__brand">Liquid Rubber Protection</p>
      <h1 class="hero__title">
        Гидроизоляция,<br>
        которая держит воду
      </h1>
      <p class="hero__lead">
        Инженерные системы бесшовной защиты для кровли, фундамента и металла.
        Не продаём материал — решаем проблему воды.
      </p>

      <div class="hero__cta">
        <a href="#lead" class="btn btn--primary">Получить инженерное решение</a>
        <a href="#solution" class="btn btn--ghost">Как это работает</a>
      </div>

      <dl class="hero__stats">
        <div v-for="stat in stats" :key="stat.label" class="hero__stat">
          <dt>{{ stat.value }}</dt>
          <dd>{{ stat.label }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: min(92vh, 820px);
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  isolation: isolate;
}

.hero__media {
  position: absolute;
  inset: 0;
  z-index: -1;
}

.hero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 65% center;
  animation: hero-zoom 18s var(--ease-out) both;
}

.hero__shade {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(10, 10, 10, 0.92) 0%, rgba(10, 10, 10, 0.72) 48%, rgba(10, 10, 10, 0.35) 100%),
    linear-gradient(180deg, rgba(10, 10, 10, 0.25) 0%, rgba(10, 10, 10, 0.85) 100%);
}

.hero__content {
  width: 100%;
  padding-block: clamp(4rem, 10vw, 6.5rem) clamp(3rem, 7vw, 4.5rem);
}

.hero__brand {
  display: inline-block;
  margin-bottom: 1rem;
  padding: 0.45rem 0.75rem;
  background: var(--lrp-red);
  color: #fff;
  font-family: var(--font-display);
  font-size: clamp(0.85rem, 1.5vw, 1rem);
  font-weight: 600;
  font-style: italic;
  letter-spacing: 0.02em;
  animation: rise 0.8s var(--ease-out) both;
}

.hero__title {
  font-size: clamp(2.4rem, 7vw, 4.6rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  max-width: 12ch;
  animation: rise 0.9s var(--ease-out) 0.08s both;
}

.hero__lead {
  margin-top: 1.25rem;
  max-width: 38ch;
  font-size: clamp(1rem, 2vw, 1.15rem);
  color: var(--lrp-text-dim);
  animation: rise 0.9s var(--ease-out) 0.16s both;
}

.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.75rem;
  animation: rise 0.9s var(--ease-out) 0.24s both;
}

.hero__stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: clamp(2.5rem, 6vw, 3.5rem);
  padding-top: 1.5rem;
  border-top: 1px solid color-mix(in srgb, #fff 16%, transparent);
  animation: rise 0.9s var(--ease-out) 0.32s both;
}

.hero__stat dt {
  font-family: var(--font-display);
  font-size: clamp(1.1rem, 2.4vw, 1.45rem);
  font-weight: 700;
}

.hero__stat dd {
  margin: 0.2rem 0 0;
  font-size: 0.82rem;
  color: var(--lrp-muted);
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes hero-zoom {
  from {
    transform: scale(1.08);
  }
  to {
    transform: scale(1);
  }
}

@media (max-width: 640px) {
  .hero__stats {
    grid-template-columns: 1fr;
  }
}
</style>
