<template>
  <section class="p-section reviews">
    <div class="p-container">
      <p class="p-eyebrow">Отзывы</p>
      <h2 class="p-title">Отзывы клиентов</h2>
      <p class="p-lead">Реальные отзывы появятся здесь после согласования. Фиктивные тексты не публикуем.</p>
      <div class="reviews__grid">
        <div class="reviews__slot">Заглушка отзыва 1</div>
        <div class="reviews__slot">Заглушка отзыва 2</div>
        <div class="reviews__slot">Заглушка отзыва 3</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reviews {
  background: var(--p-white);
  border-block: 1px solid var(--p-line);
}

.reviews__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.85rem;
  margin-top: 1.75rem;
}

.reviews__slot {
  min-height: 9rem;
  display: grid;
  place-items: center;
  border: 1px dashed var(--p-line);
  background: var(--p-paper);
  color: var(--p-muted);
  font-weight: 700;
  font-size: 0.9rem;
}

@media (max-width: 800px) {
  .reviews__grid {
    grid-template-columns: 1fr;
  }
}
</style>
