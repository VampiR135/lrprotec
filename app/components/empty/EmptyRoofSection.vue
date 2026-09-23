<script setup lang="ts">
function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const roofObjects = [
  { name: 'Плоские кровли', desc: 'Рулонные, битумные, ПВХ и мембранные покрытия больших площадей' },
  { name: 'Промышленные здания', desc: 'Заводские цеха, производственные комбинаты и ТЭЦ' },
  { name: 'Логистические склады', desc: 'Распределительные центры, ангары и терминалы класса A/B' },
  { name: 'Торговые центры и моллы', desc: 'Кровли с обилием климатического оборудования и проходок' },
  { name: 'Производственные здания', desc: 'Объекты с вибрационными и температурными нагрузками' },
  { name: 'Коммерческая недвижимость', desc: 'Офисные центры, гостиницы и эксплуатируемые стилобаты' },
]

const roofProblems = [
  'Растрескивание и расслоение старого рулонного ковра',
  'Пузыри и скопление запертой влаги в теплоизоляции',
  'Застой воды в разуклонках и контруклонах',
  'Разгерметизация парапетов и примыканий к стенам',
  'Протечки вокруг вентиляционных шахт и трубных проходок',
  'Разрушение водоприёмных воронок и ливнестоков',
]

const roofSteps = [
  {
    num: '01',
    title: 'Инженерное обследование',
    desc: 'Диагностика состояния влагомерами и тепловизором. Картирование зон увлажнения утеплителя и скрытых дефектов основания.',
  },
  {
    num: '02',
    title: 'Подготовка и аэрация',
    desc: 'Удаление мусора, вскрытие вздутий и установка кровельных дефлекторов-аэраторов для естественного осушения пирога.',
  },
  {
    num: '03',
    title: 'Герметизация узлов',
    desc: 'Армирование геотекстилем и обработка всех сопряжений, парапетов и проходок эластичной мастикой PRO-TEC MAST S-200.',
  },
  {
    num: '04',
    title: 'Напыление SPRAY-TEC ROOF B-200',
    desc: 'Механизированное нанесение бесшовной двухкомпонентной мембраны толщиной от 2.5 до 3.5 мм единым монолитным слоем.',
  },
  {
    num: '05',
    title: 'Нанесение финиша PRO-TEC TOP',
    desc: 'Защитное акриловое покрытие с высокой отражающей способностью для защиты от УФ и перегрева конструкции.',
  },
  {
    num: '06',
    title: 'Инструментальный технадзор',
    desc: 'Проверка толщины мембраны микрометром, контроль адгезии и испытание швов/узлов на водонепроницаемость.',
  },
]
</script>

<template>
  <section id="roof" class="roof-section">
    <div class="roof-container">
      <div class="section-head">
        <span class="section-eyebrow">Направление: Кровля</span>
        <h2 class="section-title">Гидроизоляция кровли без демонтажа всей конструкции</h2>
        <p class="section-lead">
          Технология бесшовного напыления LRP позволяет восстановить герметичность старой кровли в 2-3 раза быстрее и на 40-50% дешевле капитального ремонта с разбором пирога.
        </p>
      </div>

      <!-- Объекты и проблемы -->
      <div class="roof-analysis">
        <div class="analysis-col">
          <div class="analysis-col__head">
            <span class="analysis-badge">Целевые объекты</span>
            <h3>Типы защищаемых кровель</h3>
          </div>
          <div class="objects-grid">
            <div v-for="obj in roofObjects" :key="obj.name" class="object-item">
              <strong>{{ obj.name }}</strong>
              <p>{{ obj.desc }}</p>
            </div>
          </div>
        </div>

        <div class="analysis-col analysis-col--warn">
          <div class="analysis-col__head">
            <span class="analysis-badge analysis-badge--warn">Типовые дефекты</span>
            <h3>С какими проблемами мы работаем</h3>
          </div>
          <ul class="problems-list">
            <li v-for="prob in roofProblems" :key="prob">
              <span class="prob-marker">✕</span>
              <span>{{ prob }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Порядок работ (Решение) -->
      <div class="roof-flow">
        <div class="roof-flow__head">
          <span class="flow-eyebrow">Технологический регламент</span>
          <h3>Порядок выполнения кровельных работ</h3>
        </div>

        <div class="flow-steps">
          <div v-for="step in roofSteps" :key="step.num" class="flow-step">
            <div class="flow-step__top">
              <span class="step-num">{{ step.num }}</span>
              <h4>{{ step.title }}</h4>
            </div>
            <p>{{ step.desc }}</p>
          </div>
        </div>
      </div>

      <!-- CTA блок -->
      <div class="roof-action">
        <div class="roof-action__info">
          <h4>Требуется надёжный ремонт или устройство новой кровли?</h4>
          <p>Инженер LRP проведёт предварительный расчёт и подберёт систему под параметры вашего объекта.</p>
        </div>
        <button class="p-btn p-btn--primary" @click="scrollTo('lead')">
          Получить расчёт кровли
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.roof-section {
  padding: clamp(4rem, 7vw, 6rem) 0;
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
}

.roof-container {
  width: 100%;
  max-width: 1240px;
  margin-inline: auto;
  padding-inline: 1.5rem;
}

.section-head {
  max-width: 760px;
  margin-bottom: 3rem;
}

.section-eyebrow {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #c4870a;
  margin-bottom: 0.5rem;
}

.section-title {
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 800;
  color: #121417;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.section-lead {
  margin-top: 0.85rem;
  font-size: 1.05rem;
  color: #4b5563;
  line-height: 1.55;
}

.roof-analysis {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2rem;
  margin-bottom: 3.5rem;
}

.analysis-col {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
}

.analysis-col--warn {
  background: #fefce8;
  border-color: #fef08a;
}

.analysis-badge {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #0284c7;
  margin-bottom: 0.35rem;
}

.analysis-badge--warn {
  color: #b45309;
}

.analysis-col__head h3 {
  font-size: 1.25rem;
  font-weight: 800;
  color: #121417;
  margin: 0 0 1.25rem;
}

.objects-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.object-item {
  padding: 0.85rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
}

.object-item strong {
  display: block;
  font-size: 0.92rem;
  color: #121417;
  margin-bottom: 0.25rem;
}

.object-item p {
  font-size: 0.78rem;
  color: #64748b;
  line-height: 1.4;
  margin: 0;
}

.problems-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.problems-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  font-size: 0.88rem;
  color: #451a03;
  line-height: 1.45;
}

.prob-marker {
  color: #dc2626;
  font-weight: 800;
  font-size: 0.85rem;
  margin-top: 2px;
}

.roof-flow {
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  padding: 2.25rem;
  margin-bottom: 2.5rem;
}

.flow-eyebrow {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #0284c7;
  margin-bottom: 0.35rem;
}

.roof-flow__head h3 {
  font-size: 1.35rem;
  font-weight: 800;
  color: #121417;
  margin: 0 0 1.75rem;
}

.flow-steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.flow-step {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
}

.flow-step__top {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 0.65rem;
}

.step-num {
  font-size: 1.15rem;
  font-weight: 800;
  color: #e6a317;
  font-family: var(--font-display, inherit);
}

.flow-step h4 {
  font-size: 0.95rem;
  font-weight: 700;
  color: #121417;
  margin: 0;
}

.flow-step p {
  font-size: 0.82rem;
  color: #64748b;
  line-height: 1.45;
  margin: 0;
}

.roof-action {
  background: #121417;
  color: #ffffff;
  padding: 1.75rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  border-radius: 2px;
}

.roof-action__info h4 {
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0 0 0.35rem;
}

.roof-action__info p {
  font-size: 0.88rem;
  color: #9ca3af;
  margin: 0;
}

.p-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  padding: 0.7rem 1.5rem;
  border: 0;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 800;
  border-radius: 2px;
  white-space: nowrap;
  transition: background 0.2s ease;
}

.p-btn--primary {
  background: #e6a317;
  color: #121417;
}

.p-btn--primary:hover {
  background: #ffb81c;
}

@media (max-width: 1024px) {
  .roof-analysis {
    grid-template-columns: 1fr;
  }
  .flow-steps {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 720px) {
  .objects-grid {
    grid-template-columns: 1fr;
  }
  .flow-steps {
    grid-template-columns: 1fr;
  }
  .roof-action {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
