<template>
  <section class="p-section partners">
    <div class="p-container">
      <p class="p-eyebrow">Партнёрам</p>
      <h2 class="p-title">Станьте партнёром Liquid Rubber Protection</h2>
      <p class="p-lead">
        Для строительных компаний, кровельщиков, гидроизоляционных компаний, подрядчиков
        и региональных представителей.
      </p>

      <div class="partners__model">
        <div>
          <h3>LRP</h3>
          <p>Технология + материалы + обучение + заявки</p>
        </div>
        <div class="partners__arrow" aria-hidden="true">→</div>
        <div>
          <h3>Партнёр</h3>
          <p>Выполнение работ на своей территории</p>
        </div>
      </div>

      <p class="partners__income">
        Потенциал дохода партнёра — до 300 000 ₽ в месяц.
        Фактический доход зависит от региона, количества объектов, стоимости работ и загрузки партнёра.
      </p>
      <NuxtLink to="/blank/partneram" class="p-btn p-btn--dark">Стать партнёром</NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.partners {
  background: var(--p-white);
  border-block: 1px solid var(--p-line);
}

.partners__model {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1rem;
  align-items: center;
  margin: 1.75rem 0 1.25rem;
}

.partners__model > div:not(.partners__arrow) {
  padding: 1.2rem;
  background: var(--p-paper);
  border: 1px solid var(--p-line);
}

.partners__model h3 {
  font-size: 1rem;
  margin-bottom: 0.4rem;
}

.partners__model p {
  color: var(--p-muted);
  font-size: 0.92rem;
}

.partners__arrow {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--p-amber-deep);
}

.partners__income {
  max-width: 60ch;
  margin-bottom: 1.35rem;
  color: var(--p-slate);
  line-height: 1.55;
  font-size: 0.95rem;
}

@media (max-width: 700px) {
  .partners__model {
    grid-template-columns: 1fr;
  }

  .partners__arrow {
    justify-self: center;
    transform: rotate(90deg);
  }
}
</style>
