<script setup lang="ts">
const effects = [
  'Протечки',
  'Разрушение слоёв кровли',
  'Коррозия',
  'Намокание утеплителя',
  'Разрушение бетона',
  'Повреждение отделки',
  'Плесень',
  'Повторные ремонты',
]
</script>

<template>
  <section class="p-section problem">
    <div class="p-container problem__layout">
      <div>
        <p class="p-eyebrow">Проблема</p>
        <h2 class="p-title">Вода разрушает конструкцию постепенно</h2>
        <p class="p-lead">
          Проблема часто начинается с небольшой протечки, а заканчивается капитальным
          ремонтом конструкции. Ниже — типичная цепочка последствий.
        </p>
      </div>
      <ul class="problem__list">
        <li v-for="(item, i) in effects" :key="item">
          <span>{{ String(i + 1).padStart(2, '0') }}</span>
          {{ item }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.problem {
  background: var(--p-graphite);
  color: #fff;
}

.problem :deep(.p-eyebrow) {
  color: var(--p-amber);
}

.problem :deep(.p-lead) {
  color: var(--p-muted-dark);
}

.problem__layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
}

.problem__list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

.problem__list li {
  display: flex;
  gap: 0.75rem;
  align-items: baseline;
  padding: 0.9rem 0.95rem;
  border: 1px solid var(--p-line-dark);
  background: color-mix(in srgb, #fff 3%, transparent);
  font-weight: 600;
  font-size: 0.95rem;
}

.problem__list span {
  color: var(--p-amber);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
}

@media (max-width: 860px) {
  .problem__layout,
  .problem__list {
    grid-template-columns: 1fr;
  }
}
</style>
