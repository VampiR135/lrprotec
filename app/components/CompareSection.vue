<script setup lang="ts">
const rows = [
  { label: 'Швы и стыки', old: 'Есть — типичная точка протечки', ours: 'Бесшовная мембрана' },
  { label: 'Демонтаж старого покрытия', old: 'Часто обязателен', ours: 'Часто не требуется' },
  { label: 'Огневые работы', old: 'Нужны при наплавлении', ours: 'Холодное напыление' },
  { label: 'Сложные узлы', old: 'Слабое место рулонки', ours: 'Отдельные материалы системы' },
  { label: 'Подход', old: 'Материал «в ведре»', ours: 'Инженерная система под задачу' },
]
</script>

<template>
  <section class="section compare">
    <div class="container">
      <div class="compare__head">
        <p class="eyebrow">Сравнение</p>
        <h2 class="section-title">Почему не очередной рулонный «ремонт»</h2>
        <p class="section-lead">
          Формат убеждения как у сильных продающих лендингов — но на логике
          системы Liquid Rubber Protection.
        </p>
      </div>

      <div class="table-wrap" role="region" aria-label="Сравнение решений" tabindex="0">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Критерий</th>
              <th scope="col">Типовой подход</th>
              <th scope="col">Liquid Rubber Protection</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in rows" :key="row.label">
              <th scope="row">{{ row.label }}</th>
              <td>{{ row.old }}</td>
              <td class="ours">{{ row.ours }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="compare__cta">
        <a href="#lead" class="btn btn--primary">Рассчитать стоимость за 1 минуту</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.compare {
  background: var(--lrp-charcoal);
  border-block: 1px solid var(--lrp-line);
}

.compare__head {
  margin-bottom: clamp(2rem, 5vw, 3rem);
}

.table-wrap {
  overflow-x: auto;
  border: 1px solid var(--lrp-line);
}

.table {
  width: 100%;
  min-width: 640px;
  border-collapse: collapse;
  font-size: 0.95rem;
}

.table th,
.table td {
  padding: 1rem 1.1rem;
  text-align: left;
  border-bottom: 1px solid var(--lrp-line);
  vertical-align: top;
}

.table thead th {
  font-family: var(--font-display);
  font-weight: 600;
  background: var(--lrp-surface);
}

.table tbody th {
  font-weight: 600;
  color: var(--lrp-text);
  width: 24%;
}

.table td {
  color: var(--lrp-text-dim);
}

.table td.ours {
  color: var(--lrp-text);
  background: color-mix(in srgb, var(--lrp-red) 10%, transparent);
}

.compare__cta {
  margin-top: 1.75rem;
}
</style>
