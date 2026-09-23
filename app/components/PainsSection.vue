<script setup lang="ts">
const pains = [
  {
    title: 'Снова протекает после «ремонта»',
    text: 'Рулонка и точечные заплатки не держат узлы. Вода находит шов снова и снова.',
  },
  {
    title: 'Швы и примыкания — слабое место',
    text: 'Углы, проходки, стыки материалов. Там, где классическое покрытие рвётся первым.',
  },
  {
    title: 'Демонтаж съедает бюджет',
    text: 'Срывать старое покрытие — простой объекта, мусор, сроки. Часто это лишнее.',
  },
  {
    title: 'Вода уже внутри конструкции',
    text: 'Поверхностной мембраны мало: нужны инъекции в зоне фильтрации и трещин.',
  },
  {
    title: 'Металл ржавеет, подвал сыреет',
    text: 'Разные зоны здания требуют разных решений — не одной «универсальной мастики».',
  },
  {
    title: 'Лоскутный ремонт без системы',
    text: 'Каждый год новый подрядчик и новый слой. Нет единой инженерной защиты.',
  },
]
</script>

<template>
  <section id="pains" class="section pains">
    <div class="container">
      <div class="pains__head">
        <p class="eyebrow">Боли объекта</p>
        <h2 class="section-title">Если узнаёте свой объект — вам нужна система, а не «ещё один слой»</h2>
        <p class="section-lead">
          Типовые сценарии, с которых начинается обращение: повторные протечки,
          слабые узлы, дорогой демонтаж и отсутствие цельного решения.
        </p>
      </div>

      <div class="pains__grid">
        <article v-for="(item, i) in pains" :key="item.title" class="pain">
          <span class="pain__num">0{{ i + 1 }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pains {
  background: var(--lrp-charcoal);
  border-block: 1px solid var(--lrp-line);
}

.pains__head {
  margin-bottom: clamp(2rem, 5vw, 3rem);
}

.pains__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;
  background: var(--lrp-line);
  border: 1px solid var(--lrp-line);
}

.pain {
  background: var(--lrp-charcoal);
  padding: 1.5rem 1.35rem 1.6rem;
}

.pain__num {
  display: block;
  margin-bottom: 1rem;
  font-family: var(--font-display);
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  color: var(--lrp-red);
}

.pain h3 {
  font-size: 1.15rem;
  margin-bottom: 0.65rem;
}

.pain p {
  color: var(--lrp-text-dim);
  font-size: 0.95rem;
}

@media (max-width: 900px) {
  .pains__grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 560px) {
  .pains__grid {
    grid-template-columns: 1fr;
  }
}
</style>
