<script setup lang="ts">
const objects = ['Заводы', 'Склады', 'Ангары', 'Производственные корпуса', 'Резервуары', 'Технические сооружения', 'Бетонные и металлические конструкции']
</script>

<template>
  <section class="p-section industrial">
    <div class="p-container">
      <p class="p-eyebrow">Промышленная гидроизоляция</p>
      <h2 class="p-title">Гидроизоляционные решения для промышленных объектов</h2>
      <p class="p-lead industrial__accent">
        Для объектов, где цена ошибки измеряется не стоимостью ремонта, а остановкой эксплуатации.
      </p>
      <ul class="industrial__list">
        <li v-for="item in objects" :key="item">{{ item }}</li>
      </ul>
      <a href="#p-lead" class="p-btn p-btn--primary">Обсудить объект с инженером</a>
    </div>
  </section>
</template>

<style scoped>
.industrial {
  background: var(--p-graphite);
  color: #fff;
}

.industrial :deep(.p-eyebrow) {
  color: var(--p-amber);
}

.industrial :deep(.p-lead) {
  color: var(--p-muted-dark);
}

.industrial__accent {
  font-weight: 600;
  max-width: 52ch;
}

.industrial__list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin: 1.75rem 0;
}

.industrial__list li {
  padding: 0.55rem 0.8rem;
  border: 1px solid var(--p-line-dark);
  font-size: 0.88rem;
  font-weight: 700;
}
</style>
