<script setup lang="ts">
const zones = ['Фундамент', 'Подземные стены', 'Цоколь', 'Бетон', 'Подвальные помещения', 'Технические помещения']
const problems = ['Грунтовая влага', 'Капиллярный подсос', 'Давление воды', 'Трещины', 'Разрушение старой гидроизоляции']
</script>

<template>
  <section id="p-foundation" class="p-section foundation">
    <div class="p-container foundation__layout">
      <div>
        <p class="p-eyebrow">Фундамент</p>
        <h2 class="p-title">Защита фундамента от воды начинается с правильной гидроизоляции</h2>
        <p class="p-lead">
          Подземные зоны работают в постоянном контакте с влагой. Ошибка здесь дорого
          обходится всей конструкции.
        </p>
        <a href="#p-lead" class="p-btn p-btn--dark">Рассчитать гидроизоляцию фундамента</a>
      </div>
      <div class="foundation__panels">
        <div>
          <h3>Зоны</h3>
          <ul>
            <li v-for="item in zones" :key="item">{{ item }}</li>
          </ul>
        </div>
        <div>
          <h3>Типовые проблемы</h3>
          <ul>
            <li v-for="item in problems" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.foundation {
  background: var(--p-paper);
}

.foundation__layout {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 2rem;
  align-items: start;
}

.foundation .p-btn {
  margin-top: 1.5rem;
}

.foundation__panels {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.85rem;
}

.foundation__panels > div {
  background: var(--p-white);
  border: 1px solid var(--p-line);
  padding: 1.2rem;
}

.foundation h3 {
  font-size: 0.95rem;
  margin-bottom: 0.75rem;
}

.foundation ul {
  display: grid;
  gap: 0.45rem;
}

.foundation li {
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--p-slate);
}

@media (max-width: 900px) {
  .foundation__layout,
  .foundation__panels {
    grid-template-columns: 1fr;
  }
}
</style>
