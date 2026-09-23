<template>
  <section class="hero">
    <div class="hero__visual" aria-hidden="true">
      <div class="hero__plane hero__plane--roof" />
      <div class="hero__plane hero__plane--coat" />
      <div class="hero__grain" />
    </div>
    <div class="p-container hero__content">
      <p class="hero__brand">Liquid Rubber Protection</p>
      <h1>Бесшовная гидроизоляция, которая защищает конструкцию от воды</h1>
      <p class="hero__lead">
        Кровли, фундаменты и промышленные конструкции. Материалы и профессиональное
        нанесение жидкой резины.
      </p>
      <div class="hero__cta">
        <a href="#p-lead" class="p-btn p-btn--primary">Получить расчёт</a>
        <NuxtLink to="/blank/tehnologiya" class="p-btn p-btn--ghost-light">Посмотреть технологию</NuxtLink>
        <NuxtLink to="/blank/partneram" class="p-btn p-btn--ghost-light">Стать партнёром</NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: min(88vh, 760px);
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  color: #fff;
  background: var(--p-graphite);
}

.hero__visual {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero__plane {
  position: absolute;
  inset: 0;
}

.hero__plane--roof {
  background:
    linear-gradient(115deg, transparent 35%, color-mix(in srgb, var(--p-blue) 45%, transparent) 36%, transparent 70%),
    linear-gradient(180deg, #252a32 0%, #14171c 100%);
}

.hero__plane--coat {
  background:
    radial-gradient(ellipse 50% 40% at 78% 60%, color-mix(in srgb, var(--p-amber) 28%, transparent), transparent 70%),
    linear-gradient(105deg, transparent 48%, color-mix(in srgb, #000 35%, transparent) 49%, transparent 80%);
  opacity: 0.95;
}

.hero__grain {
  position: absolute;
  inset: 0;
  opacity: 0.18;
  background-image: repeating-linear-gradient(
    -18deg,
    transparent 0 10px,
    color-mix(in srgb, #fff 8%, transparent) 10px 11px
  );
}

.hero__content {
  position: relative;
  z-index: 1;
  padding-block: clamp(4rem, 10vw, 6rem) clamp(3rem, 7vw, 4.5rem);
}

.hero__brand {
  display: inline-block;
  margin-bottom: 1rem;
  padding: 0.4rem 0.7rem;
  background: var(--p-amber);
  color: var(--p-ink);
  font-size: 0.82rem;
  font-weight: 800;
}

.hero h1 {
  font-size: clamp(2.1rem, 5.5vw, 3.6rem);
  max-width: 16ch;
}

.hero__lead {
  margin-top: 1.15rem;
  max-width: 42ch;
  color: var(--p-muted-dark);
  font-size: 1.05rem;
  line-height: 1.55;
}

.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-top: 1.75rem;
}
</style>
