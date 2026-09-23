<script setup lang="ts">
const pillars = [
  { title: 'Кровля', code: 'Spray-Tec Roof B-200', text: 'Непрерывная эластичная мембрана для плоских и сложных кровель.' },
  { title: 'Фундамент и бетон', code: 'Spray-Tec Base B-250', text: 'Защита подземных и бетонных конструкций от воды и влаги.' },
  { title: 'Металл', code: 'Spray-Tec Met B-300', text: 'Гидро- и антикоррозионная защита металлоконструкций.' },
  { title: 'Узлы и примыкания', code: 'Pro-Tec Mast S-200', text: 'Эластичная герметизация там, где обычно появляются протечки.' },
  { title: 'Доп. защита', code: 'Pro-Tec Top A-200', text: 'Акриловое покрытие в составе комплексных решений.' },
  { title: 'Активные протечки', code: 'Инъекционные системы', text: 'Работа внутри конструкции: трещины, швы, каналы фильтрации.' },
]
</script>

<template>
  <section id="solution" class="section solution">
    <div class="container solution__layout">
      <div class="solution__intro">
        <p class="eyebrow">Решение</p>
        <h2 class="section-title">Один объект — несколько задач. Одна инженерная система</h2>
        <p class="section-lead">
          Liquid Rubber Protection объединяет технологии в единую защиту здания:
          от кровли до подземной части, от узлов до инъекций при активных протечках.
        </p>
        <p class="solution__quote">
          Мы не продаём материал.<br>
          Мы решаем проблему воды.
        </p>
        <a href="#lead" class="btn btn--primary">Рассчитать стоимость</a>
      </div>

      <div class="solution__grid">
        <article v-for="item in pillars" :key="item.code" class="pillar">
          <h3>{{ item.title }}</h3>
          <p class="pillar__code">{{ item.code }}</p>
          <p class="pillar__text">{{ item.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.solution__layout {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: clamp(2rem, 5vw, 3.5rem);
  align-items: start;
}

.solution__quote {
  margin: 1.75rem 0 1.75rem;
  padding-left: 1rem;
  border-left: 3px solid var(--lrp-red);
  font-family: var(--font-display);
  font-size: clamp(1.2rem, 2.5vw, 1.55rem);
  font-weight: 600;
  line-height: 1.3;
}

.solution__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.85rem;
}

.pillar {
  padding: 1.2rem 1.15rem 1.3rem;
  background: var(--lrp-surface);
  border-left: 2px solid var(--lrp-red);
}

.pillar h3 {
  font-size: 1.05rem;
}

.pillar__code {
  margin-top: 0.35rem;
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--lrp-red);
}

.pillar__text {
  margin-top: 0.65rem;
  font-size: 0.92rem;
  color: var(--lrp-text-dim);
}

@media (max-width: 900px) {
  .solution__layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .solution__grid {
    grid-template-columns: 1fr;
  }
}
</style>
