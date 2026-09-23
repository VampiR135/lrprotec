<template>
  <section class="p-section about">
    <div class="p-container about__layout">
      <div>
        <p class="p-eyebrow">О компании</p>
        <h2 class="p-title">Liquid Rubber Protection</h2>
        <p class="p-lead">
          Мы объединяем материал, технологию и профессиональное нанесение в единое решение
          по гидроизоляции.
        </p>
        <NuxtLink to="/blank/o-kompanii" class="p-btn p-btn--dark">Подробнее о компании</NuxtLink>
      </div>
      <ul>
        <li>Технологичность</li>
        <li>Инженерный подход</li>
        <li>Работа с подрядчиками</li>
        <li>Обучение специалистов</li>
        <li>Региональное развитие</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: var(--p-white);
  border-block: 1px solid var(--p-line);
}

.about__layout {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 2rem;
  align-items: start;
}

.about .p-btn {
  margin-top: 1.5rem;
}

.about ul {
  display: grid;
  gap: 0.55rem;
}

.about li {
  padding: 0.9rem 1rem;
  border-left: 3px solid var(--p-amber);
  background: var(--p-paper);
  font-weight: 700;
}

@media (max-width: 800px) {
  .about__layout {
    grid-template-columns: 1fr;
  }
}
</style>
