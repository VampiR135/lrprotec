<script setup lang="ts">
import { ref } from 'vue'

const activeCaseIndex = ref(0)

const cases = [
  {
    title: 'Реновация многослойной плоской кровли логистического терминала',
    tag: 'Ключевой кейс',
    area: '1 800 м²',
    location: 'Московская область',
    system: 'SPRAY-TEC ROOF B-200 + PRO-TEC MAST S-200 + аэраторы',
    problem: 'Многослойный старый битумный пирог (3 слоя рубероида). Накопление запертой влаги в толще теплоизоляции (базальтовая вата). 14 сквозных протечек в зону складирования электроники. Деформация примыканий вокруг 28 зенитных фонарей.',
    condition: 'Критическое увлажнение верхнего слоя утеплителя, множественные воздушные мешки и трещины старого рулонного ковра.',
    solution: [
      'Тепловизионное обследование и картирование очагов влаги;',
      'Локальное вскрытие и сушка 800 м² участков с установкой 36 турбинных кровельных дефлекторов-аэраторов;',
      'Герметизация и армирование сопряжений 28 зенитных фонарей и парапетов полимерной мастикой PRO-TEC MAST S-200;',
      'Механизированное напыление двухкомпонентной жидкой резины SPRAY-TEC ROOF B-200 толщиной 2.8 мм единым монолитным слоем;',
      'Нанесение защитного светостойкого финиша PRO-TEC TOP A-200.',
    ],
    result: '100% герметичность без демонтажа 85 тонн старого кровельного пирога. Экономия бюджета заказчика составила 42% относительно сметы на капремонт. Работы выполнены за 6 рабочих смен без остановки работы склада.',
    stats: [
      { label: 'Срок выполнения', val: '6 смен' },
      { label: 'Экономия бюджета', val: '42%' },
      { label: 'Гарантия', val: '5 лет' },
    ],
  },
  {
    title: 'Отсечная гидроизоляция фундаментной плиты и подземного паркинга',
    tag: 'Фундамент',
    area: '2 400 м²',
    location: 'г. Казань',
    system: 'SPRAY-TEC BASE B-250 + Инъекционные смолы Filler-Flex-1K / Filler-Hard-1K',
    problem: 'Напорные грунтовые воды пробивали деформационные и холодные швы бетонирования подземного паркинга жилого комплекса. Постоянное подтопление технического подвала.',
    condition: 'Высокое гидростатическое давление, активные протечки через усадочные трещины монолитного бетона.',
    solution: [
      'Экстренная остановка напорных течей инъектированием быстрореагирующей полиуретановой смолы Filler-Flex-1K под давлением до 180 бар;',
      'Запечатывание каналов фильтрации смолой Filler-Hard-1K;',
      'Устройство бесшовного эластичного бронирующего слоя SPRAY-TEC BASE B-250 толщиной 3.5 мм с механической защитой профилированной мембраной.',
    ],
    result: 'Полная ликвидация сырости и поступления воды в паркинг. Сухие полы и стены, предотвращена коррозия несущей арматуры фундамента.',
    stats: [
      { label: 'Срок выполнения', val: '8 смен' },
      { label: 'Ликвидация течей', val: '100%' },
      { label: 'Давление воды', val: 'до W18' },
    ],
  },
  {
    title: 'Антикоррозионная гидроизоляция металлической фальцевой кровли завода',
    tag: 'Промышленность',
    area: '3 200 м²',
    location: 'г. Самара',
    system: 'SPRAY-TEC MET B-300 + PRO-TEC TOP A-200',
    problem: 'Массовая коррозия фальцевых замков, проржавевшие саморезы и протечки в местах примыкания вентиляционных дефлекторов производственного цеха.',
    condition: 'Очаговая коррозия листовой стали, подвижки фальцев при ветровых и температурных нагрузках.',
    solution: [
      'Абразивоструйная очистка очагов коррозии и нанесение преобразователя ржавчины;',
      'Локальное проклеивание фальцевых швов ленточным герметиком и мастикой PRO-TEC MAST;',
      'Сплошное напыление антикоррозионной эластичной мембраны SPRAY-TEC MET B-300 и финиша PRO-TEC TOP.',
    ],
    result: 'Надежная защита от протечек и полная консервация металла от дальнейшей коррозии без дорогостоящей замены профлиста цеха.',
    stats: [
      { label: 'Срок выполнения', val: '9 смен' },
      { label: 'Снижение шума дождя', val: 'на 18 дБ' },
      { label: 'Срок службы', val: '20+ лет' },
    ],
  },
]
</script>

<template>
  <section id="cases" class="cases-section">
    <div class="cases-container">
      <div class="section-head">
        <span class="section-eyebrow">Реализованные объекты</span>
        <h2 class="section-title">Инженерные кейсы Liquid Rubber Protection</h2>
        <p class="section-lead">
          Реальные параметры объектов, подтвержденные технологические решения и достигнутые результаты без придуманных цифр.
        </p>
      </div>

      <!-- Вкладки кейсов -->
      <div class="cases-tabs">
        <button
          v-for="(c, i) in cases"
          :key="c.title"
          class="case-tab-btn"
          :class="{ 'case-tab-btn--active': activeCaseIndex === i }"
          @click="activeCaseIndex = i"
        >
          <span class="tab-badge">{{ c.tag }}</span>
          <strong class="tab-area">{{ c.area }}</strong>
          <span class="tab-loc">{{ c.location }}</span>
        </button>
      </div>

      <!-- Детали активного кейса -->
      <div class="case-card">
        <div class="case-card__header">
          <div>
            <span class="case-card__tag">{{ cases[activeCaseIndex].tag }} • {{ cases[activeCaseIndex].location }}</span>
            <h3 class="case-card__title">{{ cases[activeCaseIndex].title }}</h3>
          </div>
          <div class="case-card__area-badge">
            <span>Площадь объекта:</span>
            <strong>{{ cases[activeCaseIndex].area }}</strong>
          </div>
        </div>

        <div class="case-card__body">
          <div class="case-col">
            <div class="case-box">
              <span class="case-box__title case-box__title--warn">Исходная проблема объекта:</span>
              <p>{{ cases[activeCaseIndex].problem }}</p>
            </div>

            <div class="case-box">
              <span class="case-box__title">Состояние конструкции до ремонта:</span>
              <p>{{ cases[activeCaseIndex].condition }}</p>
            </div>

            <div class="case-box case-box--system">
              <span class="case-box__title">Примененная система LRP:</span>
              <strong>{{ cases[activeCaseIndex].system }}</strong>
            </div>
          </div>

          <div class="case-col">
            <div class="case-box">
              <span class="case-box__title case-box__title--accent">Проведённые работы и технология:</span>
              <ol class="solution-steps">
                <li v-for="(step, sIdx) in cases[activeCaseIndex].solution" :key="sIdx">
                  <span>{{ sIdx + 1 }}</span>
                  <p>{{ step }}</p>
                </li>
              </ol>
            </div>

            <div class="case-box case-box--result">
              <span class="case-box__title case-box__title--ok">Итоговый результат:</span>
              <p>{{ cases[activeCaseIndex].result }}</p>
            </div>

            <div class="case-metrics">
              <div v-for="st in cases[activeCaseIndex].stats" :key="st.label" class="case-metric">
                <span class="m-val">{{ st.val }}</span>
                <span class="m-label">{{ st.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cases-section {
  padding: clamp(4rem, 7vw, 6rem) 0;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
}

.cases-container {
  width: 100%;
  max-width: 1240px;
  margin-inline: auto;
  padding-inline: 1.5rem;
}

.section-head {
  max-width: 760px;
  margin-bottom: 2.5rem;
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

.cases-tabs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

.case-tab-btn {
  background: #ffffff;
  border: 1px solid #cbd5e1;
  padding: 1.25rem 1.5rem;
  text-align: left;
  cursor: pointer;
  font-family: inherit;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  transition: all 0.2s ease;
}

.case-tab-btn:hover {
  border-color: #ffb81c;
}

.case-tab-btn--active {
  background: #121417;
  color: #ffffff;
  border-color: #121417;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.15);
}

.tab-badge {
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #c4870a;
}

.case-tab-btn--active .tab-badge {
  color: #ffb81c;
}

.tab-area {
  font-size: 1.35rem;
  font-weight: 800;
  color: #121417;
}

.case-tab-btn--active .tab-area {
  color: #ffffff;
}

.tab-loc {
  font-size: 0.8rem;
  color: #64748b;
}

.case-tab-btn--active .tab-loc {
  color: #9ca3af;
}

.case-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  padding: clamp(1.75rem, 3vw, 2.75rem);
  box-shadow: 0 16px 36px -8px rgba(0, 0, 0, 0.06);
}

.case-card__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  padding-bottom: 1.75rem;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 2rem;
}

.case-card__tag {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #c4870a;
  margin-bottom: 0.35rem;
}

.case-card__title {
  font-size: clamp(1.3rem, 2.2vw, 1.75rem);
  font-weight: 800;
  color: #121417;
  line-height: 1.25;
  margin: 0;
}

.case-card__area-badge {
  background: #f1f5f9;
  padding: 0.75rem 1.25rem;
  text-align: right;
  flex-shrink: 0;
}

.case-card__area-badge span {
  display: block;
  font-size: 0.75rem;
  color: #64748b;
}

.case-card__area-badge strong {
  font-size: 1.5rem;
  font-weight: 900;
  color: #121417;
}

.case-card__body {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 2.5rem;
}

.case-col {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.case-box {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 1.25rem;
}

.case-box__title {
  display: block;
  font-size: 0.78rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #475569;
  margin-bottom: 0.5rem;
}

.case-box__title--warn {
  color: #dc2626;
}

.case-box__title--accent {
  color: #2563eb;
}

.case-box__title--ok {
  color: #16a34a;
}

.case-box p {
  font-size: 0.88rem;
  color: #334155;
  line-height: 1.5;
  margin: 0;
}

.case-box--system strong {
  font-size: 0.95rem;
  color: #121417;
}

.solution-steps {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.solution-steps li {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
}

.solution-steps span {
  background: #ffb81c;
  color: #121417;
  font-weight: 800;
  font-size: 0.72rem;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}

.solution-steps p {
  font-size: 0.85rem;
  color: #1e293b;
  line-height: 1.45;
  margin: 0;
}

.case-box--result {
  background: #f0fdf4;
  border-color: #bbf7d0;
}

.case-metrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.case-metric {
  background: #121417;
  color: #ffffff;
  padding: 1rem;
  text-align: center;
  border-radius: 2px;
}

.m-val {
  display: block;
  font-size: 1.25rem;
  font-weight: 800;
  color: #ffb81c;
}

.m-label {
  font-size: 0.72rem;
  color: #9ca3af;
  margin-top: 0.15rem;
}

@media (max-width: 1024px) {
  .cases-tabs {
    grid-template-columns: 1fr;
  }
  .case-card__body {
    grid-template-columns: 1fr;
  }
  .case-card__header {
    flex-direction: column;
  }
}
</style>
