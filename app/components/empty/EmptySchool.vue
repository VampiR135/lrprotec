<script setup lang="ts">
function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const modules = [
  { num: '01', title: 'Теория и материаловедение', desc: 'Химия битумно-полимерных эмульсий, физико-механические свойства, нормативная база ГОСТ.' },
  { num: '02', title: 'Подготовка оснований', desc: 'Методы обеспыливания, сушки, вскрытия вздутий, устройство разуклонок и праймирование.' },
  { num: '03', title: 'Оборудование высокого давления', desc: 'Устройство двухкомпонентных насосных станций, форсунки, промывка и регламент ТО.' },
  { num: '04', title: 'Технология напыления и толщина', desc: 'Постановка факела, равномерность слоя, контроль расхода и катализатора.' },
  { num: '05', title: 'Сложные узлы и примыкания', desc: 'Ручная разделка парапетов, трубных проходок, деформационных швов мастикой PRO-TEC MAST.' },
  { num: '06', title: 'Инструментальный контроль качества', desc: 'Испытание адгезии на отрыв, толщинометрия сырого и сухого слоя, дефектоскопия.' },
  { num: '07', title: 'Разбор типовых ошибок', desc: 'Анализ рекламаций на реальных объектах: непромес, перерасход, расслоение.' },
  { num: '08', title: 'Практика на полигоне', desc: 'Отработка навыков на реальных макетах кровли, фундаментных блоков и металлоконструкций.' },
]
</script>

<template>
  <section id="school" class="school-section">
    <div class="school-container">
      <div class="school-badge">Экосистема развития LRP</div>

      <div class="school-header">
        <div class="school-header__main">
          <h2 class="school-title">Школа жидкой резины</h2>
          <p class="school-sub">
            Обучаем специалистов технологии профессиональной гидроизоляции. Практический курс от инженеров-разработчиков материалов и практикующих технадзоров.
          </p>
        </div>

        <div class="school-career">
          <div class="career-title">Траектория партнёра:</div>
          <div class="career-steps">
            <span>Теория</span> →
            <span>Практика</span> →
            <span>Аттестация</span> →
            <span>Первый объект с куратором</span> →
            <span>Собственный бизнес</span>
          </div>
        </div>
      </div>

      <!-- Модули обучения -->
      <div class="school-modules">
        <div v-for="m in modules" :key="m.num" class="module-card">
          <span class="module-num">{{ m.num }}</span>
          <h4>{{ m.title }}</h4>
          <p>{{ m.desc }}</p>
        </div>
      </div>

      <div class="school-footer">
        <div class="school-footer__insight">
          <strong>Выпускники Школы LRP получают:</strong>
          <p>
            Официальное свидетельство аттестованного подрядчика, скидку на закупку оборудования и сырья LRP, а также передачу коммерческих заявок на гидроизоляцию в своём регионе.
          </p>
        </div>
        <button class="p-btn p-btn--primary" @click="scrollTo('lead')">
          Узнать об обучении и датах курса
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.school-section {
  padding: clamp(4rem, 7vw, 6rem) 0;
  background: #1a1d22;
  color: #ffffff;
  border-bottom: 1px solid #323842;
}

.school-container {
  width: 100%;
  max-width: 1240px;
  margin-inline: auto;
  padding-inline: 1.5rem;
}

.school-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #ffb81c;
  margin-bottom: 0.75rem;
}

.school-header {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2.5rem;
  align-items: center;
  margin-bottom: 3.5rem;
}

.school-title {
  font-size: clamp(2rem, 3.8vw, 2.8rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0 0 0.85rem;
}

.school-sub {
  font-size: 1.05rem;
  color: #9ca3af;
  line-height: 1.55;
  margin: 0;
}

.school-career {
  background: #252a32;
  border: 1px solid #323842;
  padding: 1.5rem;
  border-radius: 2px;
}

.career-title {
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #ffb81c;
  margin-bottom: 0.75rem;
}

.career-steps {
  font-size: 0.88rem;
  font-weight: 700;
  color: #e5e7eb;
  line-height: 1.6;
}

.career-steps span {
  color: #ffffff;
}

.school-modules {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  margin-bottom: 3rem;
}

.module-card {
  background: #121417;
  border: 1px solid #2a3038;
  padding: 1.5rem 1.25rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.module-card:hover {
  transform: translateY(-3px);
  border-color: #ffb81c;
}

.module-num {
  font-size: 1.15rem;
  font-weight: 800;
  color: #ffb81c;
  font-family: var(--font-display, inherit);
  margin-bottom: 0.5rem;
}

.module-card h4 {
  font-size: 0.98rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.45rem;
  line-height: 1.35;
}

.module-card p {
  font-size: 0.8rem;
  color: #9ca3af;
  line-height: 1.45;
  margin: 0;
}

.school-footer {
  background: #252a32;
  border: 1px solid #374151;
  padding: 2rem 2.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.school-footer__insight strong {
  display: block;
  font-size: 1.05rem;
  color: #ffb81c;
  margin-bottom: 0.35rem;
}

.school-footer__insight p {
  font-size: 0.9rem;
  color: #d1d5db;
  max-width: 65ch;
  line-height: 1.5;
  margin: 0;
}

.p-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  padding: 0.75rem 1.75rem;
  border: 0;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 800;
  border-radius: 2px;
  white-space: nowrap;
}

.p-btn--primary {
  background: #e6a317;
  color: #121417;
}

.p-btn--primary:hover {
  background: #ffb81c;
}

@media (max-width: 1080px) {
  .school-header {
    grid-template-columns: 1fr;
  }
  .school-modules {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 680px) {
  .school-modules {
    grid-template-columns: 1fr;
  }
  .school-footer {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
