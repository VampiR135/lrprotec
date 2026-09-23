<script setup lang="ts">
function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const industrialSectors = [
  {
    title: 'Заводы и фабрики',
    desc: 'Производственные цеха с непрерывным циклом, химической средой и повышенными требованиями к пожарной безопасности.',
  },
  {
    title: 'Логистические хабы и склады',
    desc: 'Крупногабаритные складские комплексы, где протечка крыши ведёт к порче дорогостоящих партий товара.',
  },
  {
    title: 'Металлические ангары и своды',
    desc: 'Защита фальцевых кровель, сэндвич-панелей и металлоконструкций от коррозии материалом SPRAY-TEC MET B-300.',
  },
  {
    title: 'Пожарные и технические резервуары',
    desc: 'Внутренняя и внешняя гидроизоляция емкостей для хранения воды, стоков и технологических растворов.',
  },
  {
    title: 'Очистные и гидротехнические сооружения',
    desc: 'Защита массивных железобетонных конструкций от биокоррозии, вымывания и агрессивных сред.',
  },
  {
    title: 'Энергетические объекты и ТЭЦ',
    desc: 'Кровли машинных залов, кабельные коллекторы, фундаменты трансформаторных подстанций.',
  },
]
</script>

<template>
  <section id="industrial" class="ind-section">
    <div class="ind-container">
      <div class="ind-badge">Премиальный B2B сектор</div>

      <div class="ind-head">
        <h2 class="ind-title">Гидроизоляционные решения для промышленных объектов</h2>
        <div class="ind-accent">
          <p class="ind-accent__quote">
            «Для объектов, где цена ошибки измеряется не стоимостью ремонта, а риском остановки производственного цикла и многомиллионными простоями.»
          </p>
        </div>
      </div>

      <div class="ind-grid">
        <div v-for="sec in industrialSectors" :key="sec.title" class="ind-card">
          <div class="ind-card__dot"></div>
          <h4>{{ sec.title }}</h4>
          <p>{{ sec.desc }}</p>
        </div>
      </div>

      <div class="ind-banner">
        <div class="ind-banner__text">
          <h3>Инженерная служба сопровождения объектов LRP</h3>
          <p>
            Предоставляем полный цикл: от инструментального аудита конструкций и разработки индивидуального технологического регламента до шеф-монтажа и гарантийных обязательств.
          </p>
        </div>
        <button class="p-btn p-btn--primary" @click="scrollTo('lead')">
          Обсудить объект с инженером
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ind-section {
  padding: clamp(4rem, 7vw, 6rem) 0;
  background: #121417;
  color: #ffffff;
  border-bottom: 1px solid #2a3038;
}

.ind-container {
  width: 100%;
  max-width: 1240px;
  margin-inline: auto;
  padding-inline: 1.5rem;
}

.ind-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #ffb81c;
  margin-bottom: 0.75rem;
}

.ind-head {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2rem;
  align-items: center;
  margin-bottom: 3.5rem;
}

.ind-title {
  font-size: clamp(2rem, 3.8vw, 2.8rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0;
}

.ind-accent {
  background: rgba(255, 184, 28, 0.08);
  border-left: 3px solid #ffb81c;
  padding: 1.25rem 1.5rem;
}

.ind-accent__quote {
  font-size: 0.98rem;
  font-weight: 600;
  color: #f3f4f6;
  line-height: 1.5;
  margin: 0;
}

.ind-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-bottom: 3rem;
}

.ind-card {
  background: #1a1d22;
  border: 1px solid #2a3038;
  padding: 1.65rem 1.5rem;
  position: relative;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.ind-card:hover {
  transform: translateY(-4px);
  border-color: #ffb81c;
}

.ind-card__dot {
  width: 8px;
  height: 8px;
  background: #ffb81c;
  border-radius: 50%;
  margin-bottom: 1rem;
}

.ind-card h4 {
  font-size: 1.15rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.5rem;
}

.ind-card p {
  font-size: 0.88rem;
  color: #9ca3af;
  line-height: 1.5;
  margin: 0;
}

.ind-banner {
  background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
  border: 1px solid #374151;
  padding: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.ind-banner__text h3 {
  font-size: 1.35rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.4rem;
}

.ind-banner__text p {
  font-size: 0.95rem;
  color: #cbd5e1;
  max-width: 60ch;
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
  .ind-head {
    grid-template-columns: 1fr;
  }
  .ind-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 720px) {
  .ind-grid {
    grid-template-columns: 1fr;
  }
  .ind-banner {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
