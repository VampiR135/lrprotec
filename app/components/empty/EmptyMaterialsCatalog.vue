<script setup lang="ts">
import { ref } from 'vue'

const activeCategory = ref<'all' | 'spray' | 'mast' | 'inj'>('all')

const materials = [
  {
    code: 'SPRAY-TEC ROOF B-200',
    category: 'spray',
    target: 'Кровля',
    title: 'Напыляемая бесшовная система для кровель',
    desc: 'Формирует единый непрерывный эластичный ковер, в точности повторяющий геометрию основания. Идеально для ремонта без демонтажа старого ковра.',
    specs: [
      { label: 'Расход на слой 2 мм', val: '2.8–3.2 кг/м²' },
      { label: 'Относительное удлинение', val: '> 850%' },
      { label: 'Водонепроницаемость', val: 'W16 (1.6 МПа)' },
      { label: 'Температура эксплуатации', val: 'от -45°C до +95°C' },
    ],
  },
  {
    code: 'SPRAY-TEC BASE B-250',
    category: 'spray',
    target: 'Фундамент и бетон',
    title: 'Напыляемая гидроизоляция для подземных сооружений',
    desc: 'Усиленная полимерно-битумная система повышенной плотности для защиты фундаментов, стилобатов, подвалов и резервуаров от давления грунтовых вод.',
    specs: [
      { label: 'Расход на слой 3 мм', val: '3.8–4.2 кг/м²' },
      { label: 'Адгезия к бетону', val: '> 2.0 МПа' },
      { label: 'Стойкость к агрессивным грунтам', val: 'Высокая (pH 3–12)' },
      { label: 'Водонепроницаемость', val: 'W18' },
    ],
  },
  {
    code: 'SPRAY-TEC MET B-300',
    category: 'spray',
    target: 'Металлоконструкции',
    title: 'Гидроизоляционная и антикоррозионная защита металла',
    desc: 'Специализированный состав с ингибиторами коррозии для металлических кровель, ангаров, резервуаров и трубопроводов во влажной среде.',
    specs: [
      { label: 'Расход на слой 1.5 мм', val: '2.0–2.4 кг/м²' },
      { label: 'Адгезия к стали', val: '> 2.2 МПа' },
      { label: 'Стойкость к солевому туману', val: '> 1 500 часов' },
      { label: 'Эластичность', val: '> 600%' },
    ],
  },
  {
    code: 'PRO-TEC MAST S-200',
    category: 'mast',
    target: 'Узлы и примыкания',
    title: 'Высокоэластичная мастика для ответственных сопряжений',
    desc: 'Однокомпонентный полимерно-битумный состав для ручной герметизации парапетов, трубных проходок, деформационных швов и локального ремонта.',
    specs: [
      { label: 'Фасовка', val: 'Ведро 20 кг' },
      { label: 'Относительное удлинение', val: '> 900%' },
      { label: 'Способ нанесения', val: 'Шпатель, кисть, валик' },
      { label: 'Армирование', val: 'Стеклосетка / геотекстиль' },
    ],
  },
  {
    code: 'PRO-TEC TOP A-200',
    category: 'mast',
    target: 'Финишная защита',
    title: 'Акриловое светостойкое покрытие',
    desc: 'Эластичная защитная краска-мембрана для защиты битумно-полимерных слоев от ультрафиолетового старения и снижения нагрева конструкции.',
    specs: [
      { label: 'Расход в 2 слоя', val: '0.4–0.6 кг/м²' },
      { label: 'Коэффициент светоотражения', val: '> 82%' },
      { label: 'Цвета', val: 'Серый, белый, кирпичный' },
      { label: 'Стойкость к УФ', val: 'УФ-стабилизированная' },
    ],
  },
  {
    code: 'ИНЪЕКЦИОННЫЕ СМОЛЫ LRP',
    category: 'inj',
    target: 'Активные протечки',
    title: 'Система Filler-Flex-1K / Filler-Hard-1K / Filler-Dry-2K',
    desc: 'Полиуретановые смолы для экстренной остановки напорных течей через трещины, рабочие и холодные швы бетона непосредственно изнутри здания.',
    specs: [
      { label: 'Filler-Flex-1K', val: 'Мгновенное вспенивание с водой' },
      { label: 'Filler-Hard-1K', val: 'Монолитное заполнение пор' },
      { label: 'Давление нагнетания', val: 'до 200 бар' },
      { label: 'Назначение', val: 'Ликвидация аварийных течей' },
    ],
  },
]

const filteredMaterials = computed(() => {
  if (activeCategory.value === 'all') return materials
  return materials.filter(m => m.category === activeCategory.value)
})

const requestedModal = ref<string | null>(null)

function requestTechPass(code: string) {
  requestedModal.value = code
}

function closeModal() {
  requestedModal.value = null
}
</script>

<template>
  <section id="materials" class="mat-section">
    <div class="mat-container">
      <div class="section-head">
        <span class="section-eyebrow">Материалы LRP</span>
        <h2 class="section-title">Сертифицированная линейка гидроизоляционных систем</h2>
        <p class="section-lead">
          Мы производим и поставляем материалы для бесшовной гидроизоляции, разработанные под жесткие климатические условия России с подтвержденными испытаниями.
        </p>
      </div>

      <!-- Фильтр категорий -->
      <div class="mat-filters">
        <button
          class="mat-filter-btn"
          :class="{ 'mat-filter-btn--active': activeCategory === 'all' }"
          @click="activeCategory = 'all'"
        >
          Все материалы
        </button>
        <button
          class="mat-filter-btn"
          :class="{ 'mat-filter-btn--active': activeCategory === 'spray' }"
          @click="activeCategory = 'spray'"
        >
          Напыляемые системы (SPRAY-TEC)
        </button>
        <button
          class="mat-filter-btn"
          :class="{ 'mat-filter-btn--active': activeCategory === 'mast' }"
          @click="activeCategory = 'mast'"
        >
          Мастики и финиш (PRO-TEC)
        </button>
        <button
          class="mat-filter-btn"
          :class="{ 'mat-filter-btn--active': activeCategory === 'inj' }"
          @click="activeCategory = 'inj'"
        >
          Инъекционные смолы (FILLER)
        </button>
      </div>

      <!-- Сетка карточек материалов -->
      <div class="mat-grid">
        <div v-for="mat in filteredMaterials" :key="mat.code" class="mat-card">
          <div class="mat-card__header">
            <span class="mat-tag">{{ mat.target }}</span>
            <span class="mat-badge-code">{{ mat.code }}</span>
          </div>

          <h3 class="mat-card__title">{{ mat.title }}</h3>
          <p class="mat-card__desc">{{ mat.desc }}</p>

          <div class="mat-specs">
            <div v-for="s in mat.specs" :key="s.label" class="mat-spec-row">
              <span class="spec-label">{{ s.label }}:</span>
              <span class="spec-val">{{ s.val }}</span>
            </div>
          </div>

          <div class="mat-card__footer">
            <button class="mat-pass-btn" @click="requestTechPass(mat.code)">
              <svg viewBox="0 0 20 20" fill="none" class="doc-icon">
                <path d="M4 4a2 2 0 012-2h5l5 5v9a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" stroke="currentColor" stroke-width="1.8"/>
                <path d="M11 2v5h5" stroke="currentColor" stroke-width="1.8"/>
              </svg>
              <span>Запросить техпаспорт</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Модальное окно запроса техпаспорта -->
    <div v-if="requestedModal" class="mat-modal-backdrop" @click.self="closeModal">
      <div class="mat-modal">
        <button class="mat-modal__close" @click="closeModal">✕</button>
        <h4>Запрос паспорта качества: {{ requestedModal }}</h4>
        <p>Укажите контактные данные инженера или снабженца для отправки технического паспорта и сертификатов ГОСТ Р.</p>
        <form class="mat-modal__form" @submit.prevent="closeModal">
          <div class="p-field">
            <label>Ваше имя</label>
            <input type="text" required placeholder="Константин" />
          </div>
          <div class="p-field">
            <label>Телефон / WhatsApp</label>
            <input type="tel" required placeholder="+7 (___) ___-__-__" />
          </div>
          <div class="p-field">
            <label>Email для отправки PDF</label>
            <input type="email" required placeholder="snabs@company.ru" />
          </div>
          <button type="submit" class="p-btn p-btn--primary">
            Получить документацию
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mat-section {
  padding: clamp(4rem, 7vw, 6rem) 0;
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
}

.mat-container {
  width: 100%;
  max-width: 1240px;
  margin-inline: auto;
  padding-inline: 1.5rem;
}

.section-head {
  max-width: 740px;
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

.mat-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
}

.mat-filter-btn {
  padding: 0.55rem 1.1rem;
  font-size: 0.85rem;
  font-weight: 700;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  color: #475569;
  cursor: pointer;
  border-radius: 2px;
  font-family: inherit;
  transition: all 0.15s ease;
}

.mat-filter-btn:hover {
  background: #e2e8f0;
  color: #121417;
}

.mat-filter-btn--active {
  background: #121417;
  color: #ffb81c;
  border-color: #121417;
}

.mat-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.mat-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.mat-card:hover {
  transform: translateY(-4px);
  border-color: #ffb81c;
  box-shadow: 0 16px 32px -8px rgba(0, 0, 0, 0.08);
}

.mat-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.85rem;
}

.mat-tag {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #c4870a;
}

.mat-badge-code {
  font-size: 0.72rem;
  font-weight: 800;
  background: #f1f5f9;
  color: #121417;
  padding: 0.2rem 0.5rem;
  border-radius: 2px;
}

.mat-card__title {
  font-size: 1.15rem;
  font-weight: 800;
  color: #121417;
  margin: 0 0 0.5rem;
  line-height: 1.25;
}

.mat-card__desc {
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.45;
  margin: 0 0 1.25rem;
}

.mat-specs {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  background: #f8fafc;
  padding: 0.85rem;
  border-radius: 2px;
  margin-top: auto;
  margin-bottom: 1.25rem;
}

.mat-spec-row {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  font-size: 0.78rem;
}

.spec-label {
  color: #64748b;
}

.spec-val {
  font-weight: 700;
  color: #1e293b;
  text-align: right;
}

.mat-card__footer {
  margin-top: 0.25rem;
}

.mat-pass-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  width: 100%;
  padding: 0.6rem;
  font-size: 0.82rem;
  font-weight: 700;
  background: transparent;
  border: 1px solid #cbd5e1;
  color: #334155;
  cursor: pointer;
  border-radius: 2px;
  font-family: inherit;
  transition: all 0.15s ease;
}

.mat-pass-btn:hover {
  background: #121417;
  color: #ffb81c;
  border-color: #121417;
}

.doc-icon {
  width: 14px;
  height: 14px;
}

/* Modal */
.mat-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 120;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.mat-modal {
  background: #ffffff;
  max-width: 480px;
  width: 100%;
  padding: 2rem;
  position: relative;
  border-top: 4px solid #ffb81c;
}

.mat-modal__close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: 0;
  font-size: 1.25rem;
  cursor: pointer;
  color: #64748b;
}

.mat-modal h4 {
  font-size: 1.25rem;
  font-weight: 800;
  color: #121417;
  margin: 0 0 0.5rem;
}

.mat-modal p {
  font-size: 0.88rem;
  color: #64748b;
  margin: 0 0 1.5rem;
  line-height: 1.45;
}

.mat-modal__form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.p-field {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.p-field label {
  font-size: 0.78rem;
  font-weight: 700;
  color: #475569;
}

.p-field input {
  padding: 0.65rem 0.85rem;
  border: 1px solid #cbd5e1;
  font: inherit;
  font-size: 0.9rem;
}

.p-field input:focus {
  outline: none;
  border-color: #ffb81c;
}

.p-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.85rem;
  padding: 0.7rem 1.25rem;
  border: 0;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.92rem;
  font-weight: 800;
}

.p-btn--primary {
  background: #e6a317;
  color: #121417;
}

.p-btn--primary:hover {
  background: #ffb81c;
}

@media (max-width: 1024px) {
  .mat-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 680px) {
  .mat-grid {
    grid-template-columns: 1fr;
  }
}
</style>
