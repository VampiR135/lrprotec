<script setup lang="ts">
const docs = [
  'Сертификаты',
  'Технические документы',
  'Инструкции',
  'Паспорта материалов',
  'Технические характеристики',
  'Рекомендации по применению',
]
</script>

<template>
  <section class="p-section docs">
    <div class="p-container">
      <p class="p-eyebrow">Качество</p>
      <h2 class="p-title">Документы и техническая информация</h2>
      <p class="p-lead">Карточки готовы. Файлы появятся после загрузки подтверждённых документов.</p>
      <ul class="docs__grid">
        <li v-for="item in docs" :key="item">
          <strong>{{ item }}</strong>
          <span>Документ будет добавлен</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.docs {
  background: var(--p-paper);
}

.docs__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.85rem;
  margin-top: 1.75rem;
}

.docs__grid li {
  padding: 1.15rem;
  background: var(--p-white);
  border: 1px solid var(--p-line);
  display: grid;
  gap: 0.35rem;
}

.docs__grid strong {
  font-size: 0.95rem;
}

.docs__grid span {
  font-size: 0.82rem;
  color: var(--p-muted);
}

@media (max-width: 800px) {
  .docs__grid {
    grid-template-columns: 1fr;
  }
}
</style>
