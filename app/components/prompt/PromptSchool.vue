<script setup lang="ts">
const topics = ['Теория', 'Технология', 'Подготовка основания', 'Оборудование', 'Нанесение', 'Контроль качества', 'Типовые ошибки', 'Практика']
</script>

<template>
  <section class="p-section school">
    <div class="p-container school__layout">
      <div>
        <p class="p-eyebrow">Экосистема LRP</p>
        <h2 class="p-title">Школа жидкой резины</h2>
        <p class="p-lead">Обучаем специалистов технологии профессиональной гидроизоляции.</p>
        <NuxtLink to="/blank/shkola" class="p-btn p-btn--primary">Узнать об обучении</NuxtLink>
      </div>
      <ul class="school__topics">
        <li v-for="item in topics" :key="item">{{ item }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.school {
  background: color-mix(in srgb, var(--p-amber) 10%, var(--p-paper));
}

.school__layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
}

.school .p-btn {
  margin-top: 1.5rem;
}

.school__topics {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.55rem;
}

.school__topics li {
  padding: 0.85rem 0.95rem;
  background: var(--p-white);
  border: 1px solid var(--p-line);
  font-weight: 700;
  font-size: 0.9rem;
}

@media (max-width: 800px) {
  .school__layout,
  .school__topics {
    grid-template-columns: 1fr;
  }
}
</style>
