<script setup lang="ts">
const factors = [
  'Демонтаж',
  'Вывоз',
  'Подготовка',
  'Простой объекта',
  'Повторный ремонт',
  'Последствия протечек',
  'Повреждение утеплителя',
  'Повреждение внутренних помещений',
]
</script>

<template>
  <section class="p-section economy">
    <div class="p-container economy__layout">
      <div>
        <p class="p-eyebrow">Экономика решения</p>
        <h2 class="p-title">Стоимость гидроизоляции — это не только цена материала</h2>
        <p class="p-lead">
          Сравнивать нужно не цену покрытия, а стоимость решения проблемы на горизонте
          эксплуатации объекта.
        </p>
        <a href="#p-calc" class="p-btn p-btn--dark">Рассчитать стоимость решения</a>
      </div>
      <ul class="economy__list">
        <li v-for="item in factors" :key="item">{{ item }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.economy {
  background: var(--p-white);
  border-block: 1px solid var(--p-line);
}

.economy__layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
}

.economy .p-btn {
  margin-top: 1.5rem;
}

.economy__list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.65rem;
}

.economy__list li {
  padding: 0.95rem 1rem;
  background: var(--p-paper);
  border-left: 3px solid var(--p-amber);
  font-weight: 700;
  font-size: 0.92rem;
}

@media (max-width: 800px) {
  .economy__layout,
  .economy__list {
    grid-template-columns: 1fr;
  }
}
</style>
