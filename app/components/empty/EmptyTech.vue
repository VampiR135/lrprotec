<script setup lang="ts">
import { ref } from 'vue'

const activeStep = ref(2) // default step: напыление

const techSteps = [
  {
    id: 1,
    title: '01. Основание',
    subtitle: 'Подготовка и обеспыливание',
    desc: 'Очистка поверхности от мусора, ревизия старого рулонного ковра или бетона. Устранение отслоений, расшивка трещин, сушка локальных зон и праймирование битумно-полимерным праймером LRP для гарантированной адгезии.',
    layerColor: '#64748b',
    layerHeight: '20px',
    stats: 'Адгезия к бетону > 1.8 МПа',
  },
  {
    id: 2,
    title: '02. Нанесение',
    subtitle: 'Двухкомпонентное холодное напыление',
    desc: 'Материал SPRAY-TEC напыляется специальной установкой под давлением совместно с раствором катализатора-отвердителя. Скорость полимеризации — 3-5 секунд. Состав моментально распадается на полимерно-битумную мембрану и техническую воду.',
    layerColor: '#ffb81c',
    layerHeight: '35px',
    stats: 'Производительность: до 1500 м²/смена',
  },
  {
    id: 3,
    title: '03. Мембрана',
    subtitle: 'Формирование монолитного барьера',
    desc: 'Образуется сплошной резиноподобный ковер толщиной 2.0-3.5 мм без единого шва. Покрытие точно повторяет контур любых парапетов, трубных проходок, деформационных швов и световых зенитных фонарей.',
    layerColor: '#121417',
    layerHeight: '28px',
    stats: 'Относительное удлинение > 800%',
  },
  {
    id: 4,
    title: '04. Защита',
    subtitle: 'Финишное светостойкое покрытие',
    desc: 'Нанесение алифатического или акрилового слоя PRO-TEC TOP A-200. Предотвращает фотодеструкцию полимера от УФ-излучения, снижает нагрев кровли летом за счёт высокой отражающей способности и повышает износостойкость.',
    layerColor: '#38bdf8',
    layerHeight: '16px',
    stats: 'Снижение температуры кровли до 15°C',
  },
]
</script>

<template>
  <section id="tech" class="tech-section">
    <div class="tech-container">
      <div class="section-head">
        <span class="section-eyebrow">Технология</span>
        <h2 class="section-title">Почему бесшовная гидроизоляция работает иначе</h2>
        <p class="section-lead">
          В традиционных рулонных и мембранных системах 90% протечек происходит в местах швов и стыков. Жидкая резина LRP формирует абсолютно монолитный барьер, повторяющий любую сложную геометрию.
        </p>
      </div>

      <!-- Преимущества списком карточек -->
      <div class="tech-advantages">
        <div class="tech-adv">
          <div class="tech-adv__icon">01</div>
          <h4>Отсутствие швов и стыков</h4>
          <p>Единый монолитный ковер исключает человеческий фактор некачественной проварки или склейки рулонов.</p>
        </div>
        <div class="tech-adv">
          <div class="tech-adv__icon">02</div>
          <h4>Эластичность более 800%</h4>
          <p>Мембрана растягивается при температурных колебаниях и трещинах основания, не теряя герметичности.</p>
        </div>
        <div class="tech-adv">
          <div class="tech-adv__icon">03</div>
          <h4>Сложная геометрия и примыкания</h4>
          <p>Трубы, аэраторы, углы и парапеты герметизируются монолитно с общим гидроизоляционным полем.</p>
        </div>
        <div class="tech-adv">
          <div class="tech-adv__icon">04</div>
          <h4>Высокая скорость нанесения</h4>
          <p>Одна мобильная бригада покрывает до 1 000 – 1 500 м² за смену, сокращая сроки сдачи в 4–5 раз.</p>
        </div>
        <div class="tech-adv">
          <div class="tech-adv__icon">05</div>
          <h4>Без демонтажа старой кровли</h4>
          <p>Напыление поверх существующего битумного пирога экономит бюджет на демонтаже, вывозе мусора и исключает риск затопления объекта во время работ.</p>
        </div>
        <div class="tech-adv">
          <div class="tech-adv__icon">06</div>
          <h4>100% адгезия к основанию</h4>
          <p>Исключена подкровельная миграция воды: если в случае механического повреждения возникнет прокол, вода не распространится под ковром.</p>
        </div>
      </div>

      <!-- Интерактивная послойная схема -->
      <div class="tech-interactive">
        <div class="tech-interactive__header">
          <h3>Интерактивная послойная схема формирования системы</h3>
          <p>Кликните по этапу, чтобы увидеть работу слоёв и технические характеристики</p>
        </div>

        <div class="tech-interactive__body">
          <!-- Левая колонка: шаги -->
          <div class="tech-steps-list">
            <button
              v-for="step in techSteps"
              :key="step.id"
              class="tech-step-btn"
              :class="{ 'tech-step-btn--active': activeStep === step.id }"
              @click="activeStep = step.id"
            >
              <div class="tech-step-btn__num">{{ step.id }}</div>
              <div class="tech-step-btn__info">
                <strong>{{ step.title }}</strong>
                <span>{{ step.subtitle }}</span>
              </div>
            </button>
          </div>

          <!-- Правая колонка: визуализация слоя и параметры -->
          <div class="tech-interactive__detail">
            <div class="layer-visual">
              <div class="layer-visual__title">Сечение гидроизоляционного узла:</div>
              <div class="layers-stack">
                <div
                  class="stack-layer stack-layer--top"
                  :class="{ 'stack-layer--highlight': activeStep === 4 }"
                  @click="activeStep = 4"
                >
                  <span class="stack-layer__name">PRO-TEC TOP A-200 (УФ-защита и светоотражение)</span>
                </div>
                <div
                  class="stack-layer stack-layer--coat"
                  :class="{ 'stack-layer--highlight': activeStep === 3 || activeStep === 2 }"
                  @click="activeStep = 3"
                >
                  <span class="stack-layer__name">Бесшовная мембрана LRP SPRAY-TEC (2.5–3.5 мм)</span>
                </div>
                <div
                  class="stack-layer stack-layer--base"
                  :class="{ 'stack-layer--highlight': activeStep === 1 }"
                  @click="activeStep = 1"
                >
                  <span class="stack-layer__name">Подготовленное основание + праймер адгезионный</span>
                </div>
              </div>
            </div>

            <div class="tech-info-card">
              <div class="tech-info-card__badge">{{ techSteps[activeStep - 1].subtitle }}</div>
              <h4>{{ techSteps[activeStep - 1].title }}</h4>
              <p class="tech-info-card__desc">{{ techSteps[activeStep - 1].desc }}</p>
              <div class="tech-info-card__metric">
                <span class="metric-label">Инженерный норматив:</span>
                <span class="metric-value">{{ techSteps[activeStep - 1].stats }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tech-section {
  padding: clamp(4rem, 7vw, 6rem) 0;
  background: #1a1d22;
  color: #ffffff;
  border-bottom: 1px solid #323842;
}

.tech-container {
  width: 100%;
  max-width: 1240px;
  margin-inline: auto;
  padding-inline: 1.5rem;
}

.section-head {
  max-width: 740px;
  margin-bottom: 3rem;
}

.section-eyebrow {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #ffb81c;
  margin-bottom: 0.5rem;
}

.section-title {
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.section-lead {
  margin-top: 0.85rem;
  font-size: 1.05rem;
  color: #9ca3af;
  line-height: 1.55;
}

.tech-advantages {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-bottom: 3.5rem;
}

.tech-adv {
  background: #252a32;
  border: 1px solid #323842;
  padding: 1.5rem;
  border-radius: 2px;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.tech-adv:hover {
  border-color: #ffb81c;
  transform: translateY(-3px);
}

.tech-adv__icon {
  font-size: 0.82rem;
  font-weight: 800;
  color: #ffb81c;
  margin-bottom: 0.75rem;
  letter-spacing: 0.05em;
}

.tech-adv h4 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.5rem;
}

.tech-adv p {
  font-size: 0.88rem;
  color: #9ca3af;
  line-height: 1.5;
  margin: 0;
}

.tech-interactive {
  background: #121417;
  border: 1px solid #323842;
  padding: 2.25rem;
  border-radius: 4px;
}

.tech-interactive__header h3 {
  font-size: 1.35rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.35rem;
}

.tech-interactive__header p {
  font-size: 0.88rem;
  color: #9ca3af;
  margin: 0 0 1.75rem;
}

.tech-interactive__body {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 2rem;
  align-items: stretch;
}

.tech-steps-list {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.tech-step-btn {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.15rem;
  background: #1a1d22;
  border: 1px solid #323842;
  color: #d1d5db;
  text-align: left;
  cursor: pointer;
  border-radius: 2px;
  font-family: inherit;
  transition: all 0.2s ease;
}

.tech-step-btn:hover {
  background: #252a32;
  color: #ffffff;
}

.tech-step-btn--active {
  background: #252a32;
  border-color: #ffb81c;
  color: #ffffff;
  box-shadow: inset 4px 0 0 #ffb81c;
}

.tech-step-btn__num {
  font-size: 1rem;
  font-weight: 800;
  color: #ffb81c;
  background: rgba(255, 184, 28, 0.12);
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  flex-shrink: 0;
}

.tech-step-btn__info {
  display: flex;
  flex-direction: column;
}

.tech-step-btn__info strong {
  font-size: 0.92rem;
}

.tech-step-btn__info span {
  font-size: 0.75rem;
  color: #9ca3af;
  margin-top: 0.15rem;
}

.tech-interactive__detail {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.layer-visual {
  background: #1a1d22;
  border: 1px solid #323842;
  padding: 1.25rem 1.5rem;
}

.layer-visual__title {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #9ca3af;
  margin-bottom: 0.85rem;
}

.layers-stack {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stack-layer {
  padding: 0.85rem 1rem;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  border: 1px solid transparent;
}

.stack-layer__name {
  font-size: 0.85rem;
  font-weight: 600;
}

.stack-layer--top {
  background: #0284c7;
  color: #ffffff;
}

.stack-layer--coat {
  background: #0a0a0a;
  color: #ffb81c;
  border-color: #333;
}

.stack-layer--base {
  background: #475569;
  color: #f1f5f9;
}

.stack-layer--highlight {
  box-shadow: 0 0 12px rgba(255, 184, 28, 0.4);
  border-color: #ffb81c;
  transform: scale(1.01);
}

.tech-info-card {
  background: #1a1d22;
  border: 1px solid #323842;
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.tech-info-card__badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #ffb81c;
  margin-bottom: 0.5rem;
}

.tech-info-card h4 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.65rem;
}

.tech-info-card__desc {
  font-size: 0.95rem;
  color: #d1d5db;
  line-height: 1.6;
  margin: 0 0 1.25rem;
}

.tech-info-card__metric {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #323842;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.metric-label {
  font-size: 0.82rem;
  color: #9ca3af;
}

.metric-value {
  font-size: 0.95rem;
  font-weight: 800;
  color: #ffb81c;
}

@media (max-width: 1080px) {
  .tech-advantages {
    grid-template-columns: repeat(2, 1fr);
  }
  .tech-interactive__body {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .tech-advantages {
    grid-template-columns: 1fr;
  }
}
</style>
