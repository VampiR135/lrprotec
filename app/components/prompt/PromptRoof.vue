<script setup lang="ts">
const objects = ['Плоские кровли', 'Промышленные здания', 'Склады', 'Торговые объекты', 'Производственные здания', 'Коммерческая недвижимость']
const problems = ['Протечки', 'Старый рулонный материал', 'Разрушенные слои', 'Застой воды', 'Примыкания', 'Проходки', 'Парапеты', 'Водоприёмные зоны']
const steps = ['Обследование', 'Подготовка основания', 'Локальный ремонт', 'Обработка проблемных зон', 'Нанесение жидкой резины', 'Контроль результата']
</script>

<template>
  <section id="p-roof" class="p-section roof">
    <div class="p-container">
      <p class="p-eyebrow">Кровля</p>
      <h2 class="p-title">Гидроизоляция кровли без демонтажа всей конструкции</h2>
      <p class="p-lead">Типовые объекты, типичные проблемы и понятный порядок работ.</p>

      <div class="roof__cols">
        <div>
          <h3>Объекты</h3>
          <ul>
            <li v-for="item in objects" :key="item">{{ item }}</li>
          </ul>
        </div>
        <div>
          <h3>Проблемы</h3>
          <ul>
            <li v-for="item in problems" :key="item">{{ item }}</li>
          </ul>
        </div>
        <div>
          <h3>Решение</h3>
          <ol>
            <li v-for="(item, i) in steps" :key="item"><span>{{ i + 1 }}</span>{{ item }}</li>
          </ol>
        </div>
      </div>

      <a href="#p-lead" class="p-btn p-btn--primary roof__cta">Получить расчёт кровли</a>
    </div>
  </section>
</template>

<style scoped>
.roof {
  background: var(--p-white);
  border-block: 1px solid var(--p-line);
}

.roof__cols {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
  margin-top: 2rem;
}

.roof h3 {
  font-size: 1rem;
  margin-bottom: 0.85rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--p-amber);
}

.roof ul,
.roof ol {
  display: grid;
  gap: 0.45rem;
}

.roof li {
  font-size: 0.95rem;
  color: var(--p-slate);
  font-weight: 600;
}

.roof ol li {
  display: flex;
  gap: 0.6rem;
  align-items: baseline;
}

.roof ol span {
  color: var(--p-amber-deep);
  font-size: 0.8rem;
}

.roof__cta {
  margin-top: 1.75rem;
}

@media (max-width: 860px) {
  .roof__cols {
    grid-template-columns: 1fr;
  }
}
</style>
