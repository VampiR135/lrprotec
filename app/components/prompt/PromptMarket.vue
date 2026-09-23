<template>
  <section class="p-section market">
    <div class="p-container market__box">
      <p class="p-eyebrow">Рынок</p>
      <h2 class="p-title">В России ежегодно требуются миллионы квадратных метров ремонта кровель</h2>
      <p class="market__stat">3 500 000 м²</p>
      <p class="market__note">кровель нуждаются в ремонте ежегодно</p>
      <p class="p-lead">Рынок существует. Задача — правильно решить проблему заказчика.</p>
    </div>
  </section>
</template>

<style scoped>
.market {
  background: var(--p-graphite);
  color: #fff;
}

.market :deep(.p-eyebrow) {
  color: var(--p-amber);
}

.market :deep(.p-lead) {
  color: var(--p-muted-dark);
}

.market__stat {
  margin-top: 1.5rem;
  font-size: clamp(2.4rem, 7vw, 4rem);
  font-weight: 800;
  color: var(--p-amber);
  letter-spacing: -0.03em;
}

.market__note {
  margin: 0.35rem 0 1rem;
  font-weight: 700;
  color: #fff;
}
</style>
