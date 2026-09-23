<template>
  <section class="final">
    <div class="p-container final__inner">
      <h2>Есть объект, который нужно защитить от воды?</h2>
      <p>
        Отправьте параметры объекта — специалист LRP оценит задачу и предложит оптимальное решение.
      </p>
      <div class="final__cta">
        <a href="#p-lead" class="p-btn p-btn--primary">Получить расчёт</a>
        <a href="#p-lead" class="p-btn p-btn--ghost-light">Обсудить объект</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.final {
  background: var(--p-graphite);
  color: #fff;
  padding: clamp(3.5rem, 7vw, 5.5rem) 0;
}

.final h2 {
  font-size: clamp(1.7rem, 3.5vw, 2.5rem);
  max-width: 18ch;
}

.final p {
  margin-top: 1rem;
  max-width: 46ch;
  color: var(--p-muted-dark);
  line-height: 1.55;
}

.final__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-top: 1.5rem;
}
</style>
