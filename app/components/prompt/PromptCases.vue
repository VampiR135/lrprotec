<script setup lang="ts">
const caseItem = {
  object: 'Кровля',
  region: 'Регион уточняется',
  area: '1 800 м²',
  problem: 'Многослойная кровля, влага в слоях, слабые узлы и световые элементы',
  state: 'Требуется обследование, дренажные решения и аэрация в необходимых зонах',
  works: 'Обследование, подготовка, герметизация узлов, нанесение покрытия',
  result: 'Описание результата будет добавлено после подтверждённых данных объекта',
}
</script>

<template>
  <section class="p-section cases">
    <div class="p-container">
      <p class="p-eyebrow">Кейсы</p>
      <h2 class="p-title">Реальные объекты</h2>
      <p class="p-lead">Карточки готовы к заполнению подтверждёнными данными и фото до/после.</p>

      <article class="case">
        <div class="case__meta">
          <span>{{ caseItem.object }}</span>
          <span>{{ caseItem.region }}</span>
          <span>{{ caseItem.area }}</span>
        </div>
        <h3>Кровля 1 800 м²</h3>
        <dl>
          <div><dt>Проблема</dt><dd>{{ caseItem.problem }}</dd></div>
          <div><dt>Состояние</dt><dd>{{ caseItem.state }}</dd></div>
          <div><dt>Работы</dt><dd>{{ caseItem.works }}</dd></div>
          <div><dt>Результат</dt><dd>{{ caseItem.result }}</dd></div>
        </dl>
        <div class="case__photos">
          <div>Фото «до» — заглушка</div>
          <div>Фото «после» — заглушка</div>
        </div>
        <NuxtLink to="/blank/keysy" class="p-btn p-btn--ghost">Все кейсы</NuxtLink>
      </article>
    </div>
  </section>
</template>

<style scoped>
.cases {
  background: var(--p-paper);
}

.case {
  margin-top: 1.75rem;
  padding: 1.5rem;
  background: var(--p-white);
  border: 1px solid var(--p-line);
}

.case__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.85rem;
}

.case__meta span {
  padding: 0.3rem 0.55rem;
  background: var(--p-paper);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.case h3 {
  font-size: 1.35rem;
  margin-bottom: 1rem;
}

.case dl {
  display: grid;
  gap: 0.75rem;
  margin: 0 0 1.25rem;
}

.case dt {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--p-amber-deep);
}

.case dd {
  margin: 0.25rem 0 0;
  color: var(--p-slate);
  line-height: 1.5;
}

.case__photos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.case__photos div {
  min-height: 8rem;
  display: grid;
  place-items: center;
  background: var(--p-paper);
  border: 1px dashed var(--p-line);
  color: var(--p-muted);
  font-size: 0.85rem;
  font-weight: 600;
}

@media (max-width: 640px) {
  .case__photos {
    grid-template-columns: 1fr;
  }
}
</style>
