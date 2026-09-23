<script setup lang="ts">
function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const foundationZones = [
  { title: 'Монолитные фундаменты', desc: 'Плитные, ленточные и свайные ростверки при высоком УГВ' },
  { title: 'Подземные паркинги', desc: 'Стены и полы заглубленных автостоянок торговых и жилых комплексов' },
  { title: 'Цокольные этажи', desc: 'Защита от капиллярного подсоса влаги в несущие стены первого этажа' },
  { title: 'Подвальные помещения', desc: 'Сухие складские и технические зоны без сырости и плесени' },
  { title: 'Технические резервуары', desc: 'Пожарные емкости, отстойники и очистные подземные сооружения' },
  { title: 'Тоннели и переходы', desc: 'Конструкции, испытывающие постоянное гидростатическое давление' },
]

const foundationRisks = [
  { name: 'Гидростатическое давление', desc: 'Грунтовые воды вызывают постоянный напор на стыки блоков и холодные швы' },
  { name: 'Капиллярный подсос', desc: 'Микропоры бетона втягивают влагу вверх, разрушая отделку внутри здания' },
  { name: 'Агрессивная среда грунта', desc: 'Сульфаты и соли в почве разъедают цементный камень и арматуру' },
  { name: 'Деформации и усадочные трещины', desc: 'Жесткие битумные обмазки лопаются при подвижках грунта' },
]
</script>

<template>
  <section id="foundation" class="found-section">
    <div class="found-container">
      <div class="section-head">
        <span class="section-eyebrow">Направление: Фундамент</span>
        <h2 class="section-title">Защита фундамента от воды начинается с правильной гидроизоляции</h2>
        <p class="section-lead">
          Ошибки в подземной гидроизоляции невозможно исправить простой косметикой. Мы создаём непрерывную эластичную броню SPRAY-TEC BASE B-250 и ликвидируем внутренние протечки инъекционными смолами.
        </p>
      </div>

      <!-- Главный блок с инженерным фото и описанием -->
      <div class="found-showcase">
        <div class="found-showcase__media">
          <img
            src="/foundation-engineering.jpg"
            alt="Гидроизоляция подземного монолитного фундамента жидкой резиной LRP"
            class="found-img"
            loading="lazy"
          />
          <div class="found-showcase__badge">
            <span class="badge-title">SPRAY-TEC BASE B-250</span>
            <span class="badge-sub">Водонепроницаемость W16 • Высокая стойкость к солям грунта</span>
          </div>
        </div>

        <div class="found-showcase__content">
          <span class="content-tag">Инженерный подход LRP</span>
          <h3>Почему стандартная рулонная гидроизоляция подводит в грунте?</h3>
          <p>
            Рулонная гидроизоляция прижимается грунтом, но не имеет сплошной адгезии. Малейший прокол или дефект стыка приводит к тому, что вода заливает все пространство между бетоном и гидроизоляцией, выходя наружу за десятки метров от места повреждения.
          </p>
          <div class="found-compare">
            <div class="compare-item">
              <span class="compare-icon compare-icon--ok">✓</span>
              <div>
                <strong>Монолитная адгезия SPRAY-TEC</strong>
                <p>Жидкая резина намертво связывается с бетоном. При локальном повреждении вода не может мигрировать под покрытием.</p>
              </div>
            </div>
            <div class="compare-item">
              <span class="compare-icon compare-icon--ok">✓</span>
              <div>
                <strong>Инъектирование активных течей</strong>
                <p>Если вода уже пробила швы, мы применяем полиуретановые смолы Filler-Flex/Filler-Hard, мгновенно останавливающие фонтанирующую течь изнутри.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Зоны и риски -->
      <div class="found-details">
        <div class="detail-block">
          <h4>Зоны применения</h4>
          <div class="zones-grid">
            <div v-for="z in foundationZones" :key="z.title" class="zone-card">
              <h5>{{ z.title }}</h5>
              <p>{{ z.desc }}</p>
            </div>
          </div>
        </div>

        <div class="detail-block">
          <h4>Типовые угрозы подземных конструкций</h4>
          <div class="risks-grid">
            <div v-for="r in foundationRisks" :key="r.name" class="risk-card">
              <h5>{{ r.name }}</h5>
              <p>{{ r.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA блок -->
      <div class="found-action">
        <div class="found-action__info">
          <h4>Защитите подземную часть здания на этапе строительства или эксплуатации</h4>
          <p>Проведем геологический аудит уровня воды и предложим надёжное комплексное решение.</p>
        </div>
        <button class="p-btn p-btn--primary" @click="scrollTo('lead')">
          Рассчитать гидроизоляцию фундамента
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.found-section {
  padding: clamp(4rem, 7vw, 6rem) 0;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
}

.found-container {
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

.found-showcase {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 2.5rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  overflow: hidden;
  margin-bottom: 3rem;
}

.found-showcase__media {
  position: relative;
  min-height: 380px;
  background: #121417;
}

.found-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.found-showcase__badge {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(18, 20, 23, 0.92) 100%);
  padding: 1.5rem 1.25rem 1rem;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.badge-title {
  font-size: 0.95rem;
  font-weight: 800;
  color: #ffb81c;
  letter-spacing: 0.05em;
}

.badge-sub {
  font-size: 0.75rem;
  color: #cbd5e1;
  margin-top: 0.15rem;
}

.found-showcase__content {
  padding: clamp(1.5rem, 3vw, 2.5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.content-tag {
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #c4870a;
  margin-bottom: 0.4rem;
}

.found-showcase__content h3 {
  font-size: 1.45rem;
  font-weight: 800;
  color: #121417;
  line-height: 1.25;
  margin: 0 0 1rem;
}

.found-showcase__content p {
  font-size: 0.92rem;
  color: #4b5563;
  line-height: 1.55;
  margin: 0 0 1.5rem;
}

.found-compare {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.compare-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.compare-icon--ok {
  background: #dcfce7;
  color: #15803d;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: 800;
  font-size: 0.75rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.compare-item strong {
  display: block;
  font-size: 0.92rem;
  color: #121417;
}

.compare-item p {
  font-size: 0.82rem;
  color: #64748b;
  line-height: 1.4;
  margin: 0.15rem 0 0;
}

.found-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2.5rem;
}

.detail-block h4 {
  font-size: 1.15rem;
  font-weight: 800;
  color: #121417;
  margin: 0 0 1.25rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e2e8f0;
}

.zones-grid,
.risks-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.85rem;
}

.zone-card,
.risk-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  padding: 1rem;
}

.zone-card h5,
.risk-card h5 {
  font-size: 0.88rem;
  font-weight: 700;
  color: #121417;
  margin: 0 0 0.25rem;
}

.zone-card p,
.risk-card p {
  font-size: 0.78rem;
  color: #64748b;
  line-height: 1.4;
  margin: 0;
}

.found-action {
  background: #1e293b;
  color: #ffffff;
  padding: 1.75rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  border-radius: 2px;
}

.found-action__info h4 {
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0 0 0.35rem;
}

.found-action__info p {
  font-size: 0.88rem;
  color: #94a3b8;
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

@media (max-width: 960px) {
  .found-showcase {
    grid-template-columns: 1fr;
  }
  .found-details {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .zones-grid,
  .risks-grid {
    grid-template-columns: 1fr;
  }
  .found-action {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
