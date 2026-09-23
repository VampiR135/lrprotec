<template>
  <div class="pm" aria-label="Быстрые действия">
    <a href="#p-lead" class="pm__btn pm__btn--main">Рассчитать</a>
    <a href="#p-lead" class="pm__btn">Оставить заявку</a>
  </div>
</template>

<style scoped>
.pm {
  position: fixed;
  z-index: 35;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 0.5rem;
  padding: 0.65rem 0.85rem calc(0.65rem + env(safe-area-inset-bottom));
  background: color-mix(in srgb, var(--p-white) 94%, transparent);
  border-top: 1px solid var(--p-line);
  backdrop-filter: blur(8px);
}

.pm__btn {
  min-height: 2.85rem;
  display: grid;
  place-items: center;
  font-size: 0.9rem;
  font-weight: 700;
  border: 1px solid var(--p-line);
  background: var(--p-white);
}

.pm__btn--main {
  background: var(--p-amber);
  border-color: var(--p-amber);
}

@media (min-width: 768px) {
  .pm {
    display: none;
  }
}
</style>
