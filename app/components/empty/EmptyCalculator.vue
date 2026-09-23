<script setup lang="ts">
import { ref, computed } from 'vue'

const objectType = ref('roof')
const area = ref(800)
const condition = ref('repair')
const region = ref('')
const description = ref('')
const uploadedFileName = ref('')
const isSubmitting = ref(false)
const isSubmitted = ref(false)

const recommendedSystem = computed(() => {
  if (objectType.value === 'roof') {
    return {
      title: 'Система LRP SPRAY-TEC ROOF B-200 + мастика PRO-TEC MAST',
      thickness: '2.5 – 3.0 мм',
      time: Math.ceil(area.value / 800) + ' смен(ы)',
      tech: 'Бесшовное напыление с армированием узлов и установкой аэраторов',
    }
  } else if (objectType.value === 'foundation') {
    return {
      title: 'Система LRP SPRAY-TEC BASE B-250 (+ инъекционные смолы при течах)',
      thickness: '3.0 – 4.0 мм',
      time: Math.ceil(area.value / 600) + ' смен(ы)',
      tech: 'Бесшовная мембрана высокой плотности с защитной дренажной мембраной',
    }
  } else {
    return {
      title: 'Комплексная индустриальная система LRP SPRAY-TEC MET / BASE',
      thickness: 'Индивидуально по ТУ',
      time: Math.ceil(area.value / 700) + ' смен(ы)',
      tech: 'Инженерный проект гидроизоляции с учётом агрессивности среды',
    }
  }
})

function handleFileChange(e: Event) {
  const target = e.target as HTMLInputElement
  if (target.files && target.files[0]) {
    uploadedFileName.value = target.files[0].name
  }
}

function submitCalculator() {
  isSubmitting.value = true

  const leadData = {
    type: 'Калькулятор: ' + objectType.value,
    area: area.value,
    condition: condition.value,
    region: region.value || 'Не указан',
    description: description.value,
    fileName: uploadedFileName.value,
    recommended: recommendedSystem.value.title,
    date: new Date().toISOString(),
    source: '/empty#calculator',
  }

  // CRM persistence (Bitrix24 mock / localStorage)
  try {
    const existing = JSON.parse(localStorage.getItem('lrp_leads') || '[]')
    existing.push(leadData)
    localStorage.setItem('lrp_leads', JSON.stringify(existing))
  } catch (err) {
    console.error('CRM save error:', err)
  }

  setTimeout(() => {
    isSubmitting.value = false
    isSubmitted.value = true
  }, 600)
}

function resetForm() {
  isSubmitted.value = false
  description.value = ''
  uploadedFileName.value = ''
}
</script>

<template>
  <section id="calculator" class="calc-section">
    <div class="calc-container">
      <div class="section-head">
        <span class="section-eyebrow">Инженерный калькулятор</span>
        <h2 class="section-title">Предварительный расчёт по вашему объекту</h2>
        <p class="section-lead">
          Мы не вводим клиентов в заблуждение фиктивной фиксированной ценой, так как каждый объект имеет свою специфику узлов и основания. Заполните параметры для формирования детального технико-коммерческого предложения.
        </p>
      </div>

      <div class="calc-box">
        <!-- Левая часть: форма ввода параметров -->
        <div class="calc-form">
          <!-- 1. Тип объекта -->
          <div class="calc-group">
            <label class="calc-label">1. Тип защищаемого объекта:</label>
            <div class="calc-chips">
              <button
                type="button"
                class="calc-chip"
                :class="{ 'calc-chip--active': objectType === 'roof' }"
                @click="objectType = 'roof'"
              >
                Кровля
              </button>
              <button
                type="button"
                class="calc-chip"
                :class="{ 'calc-chip--active': objectType === 'foundation' }"
                @click="objectType = 'foundation'"
              >
                Фундамент
              </button>
              <button
                type="button"
                class="calc-chip"
                :class="{ 'calc-chip--active': objectType === 'industrial' }"
                @click="objectType = 'industrial'"
              >
                Промышленный объект
              </button>
              <button
                type="button"
                class="calc-chip"
                :class="{ 'calc-chip--active': objectType === 'other' }"
                @click="objectType = 'other'"
              >
                Другое
              </button>
            </div>
          </div>

          <!-- 2. Площадь с ползунком и вводом -->
          <div class="calc-group">
            <div class="area-head">
              <label class="calc-label">2. Ориентировочная площадь:</label>
              <div class="area-val-badge">
                <input v-model.number="area" type="number" min="50" max="50000" class="area-input" />
                <span>м²</span>
              </div>
            </div>
            <input
              v-model.number="area"
              type="range"
              min="50"
              max="10000"
              step="50"
              class="area-slider"
            />
            <div class="area-markers">
              <span>50 м²</span>
              <span>1 000 м²</span>
              <span>5 000 м²</span>
              <span>10 000+ м²</span>
            </div>
          </div>

          <!-- 3. Состояние конструкции -->
          <div class="calc-group">
            <label class="calc-label">3. Текущее состояние основания:</label>
            <select v-model="condition" class="calc-select">
              <option value="new">Новое основание (новостройка / чистый бетон / профлист)</option>
              <option value="repair">Требуется плановый ремонт (протечки, старый рулонный ковер)</option>
              <option value="damaged">Сильные повреждения (множественные протечки, намокание утеплителя)</option>
              <option value="unknown">Неизвестно (требуется выезд инженера и аудит)</option>
            </select>
          </div>

          <!-- 4. Регион -->
          <div class="calc-group">
            <label class="calc-label">4. Город / Регион объекта:</label>
            <input
              v-model="region"
              type="text"
              placeholder="Например: Москва, Казань, Екатеринбург, Самара..."
              class="calc-input"
            />
          </div>

          <!-- 5. Описание и фото -->
          <div class="calc-group">
            <label class="calc-label">5. Опишите проблему (необязательно):</label>
            <textarea
              v-model="description"
              rows="3"
              placeholder="Характер протечек, высота парапетов, наличие оборудования на кровле..."
              class="calc-textarea"
            ></textarea>
          </div>

          <div class="calc-group">
            <label class="calc-label">Прикрепить фото или план объекта:</label>
            <label class="file-upload">
              <input type="file" accept="image/*,.pdf" @change="handleFileChange" />
              <span class="file-upload__btn">📎 Загрузить файл</span>
              <span class="file-upload__name">{{ uploadedFileName || 'Файл не выбран (JPG, PNG, PDF)' }}</span>
            </label>
          </div>
        </div>

        <!-- Правая часть: вывод инженерных параметров и форма заявки -->
        <div class="calc-summary">
          <div class="summary-card">
            <span class="summary-eyebrow">Рекомендуемая инженерная спецификация</span>
            <h3 class="summary-system">{{ recommendedSystem.title }}</h3>

            <div class="summary-specs">
              <div class="summary-row">
                <span>Расчётная площадь:</span>
                <strong>{{ area }} м²</strong>
              </div>
              <div class="summary-row">
                <span>Толщина монолитной мембраны:</span>
                <strong>{{ recommendedSystem.thickness }}</strong>
              </div>
              <div class="summary-row">
                <span>Ориентировочные сроки работ:</span>
                <strong>{{ recommendedSystem.time }}</strong>
              </div>
              <div class="summary-row">
                <span>Особенности технологии:</span>
                <small>{{ recommendedSystem.tech }}</small>
              </div>
            </div>

            <!-- Уведомление по ТЗ -->
            <div class="summary-disclaimer">
              <svg viewBox="0 0 20 20" fill="none" class="disc-icon">
                <circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="1.8"/>
                <path d="M10 6v5M10 14h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
              </svg>
              <p>
                <strong>Внимание:</strong> Предварительная оценка стоимости будет рассчитана специалистом после анализа объекта и параметров основания.
              </p>
            </div>

            <!-- Форма подтверждения -->
            <div v-if="!isSubmitted" class="summary-cta-form">
              <button
                type="button"
                class="p-btn p-btn--primary p-btn--block"
                :disabled="isSubmitting"
                @click="submitCalculator"
              >
                <span v-if="!isSubmitting">Получить предварительный расчёт</span>
                <span v-else>Формирование расчёта...</span>
              </button>
            </div>

            <div v-else class="summary-success">
              <span class="success-icon">✓</span>
              <h4>Заявка на расчёт сформирована!</h4>
              <p>
                Инженер LRP свяжется с вами для уточнения параметров основания и отправки ТКП.
              </p>
              <button class="reset-btn" @click="resetForm">Рассчитать другой объект</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.calc-section {
  padding: clamp(4rem, 7vw, 6rem) 0;
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
}

.calc-container {
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

.calc-box {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2.5rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: clamp(1.5rem, 3vw, 2.5rem);
}

.calc-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.calc-group {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.calc-label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #1e293b;
}

.calc-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.calc-chip {
  padding: 0.6rem 1rem;
  font-size: 0.85rem;
  font-weight: 700;
  background: #ffffff;
  border: 1px solid #cbd5e1;
  color: #334155;
  cursor: pointer;
  border-radius: 2px;
  font-family: inherit;
  transition: all 0.15s ease;
}

.calc-chip:hover {
  border-color: #ffb81c;
}

.calc-chip--active {
  background: #121417;
  color: #ffb81c;
  border-color: #121417;
}

.area-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.area-val-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  background: #ffffff;
  border: 1px solid #cbd5e1;
  padding: 0.25rem 0.65rem;
}

.area-input {
  width: 75px;
  font-size: 1.1rem;
  font-weight: 800;
  color: #121417;
  border: 0;
  outline: none;
  font-family: inherit;
}

.area-slider {
  width: 100%;
  accent-color: #ffb81c;
  cursor: pointer;
  margin-top: 0.4rem;
}

.area-markers {
  display: flex;
  justify-content: space-between;
  font-size: 0.72rem;
  color: #94a3b8;
}

.calc-select,
.calc-input,
.calc-textarea {
  width: 100%;
  padding: 0.75rem 0.95rem;
  background: #ffffff;
  border: 1px solid #cbd5e1;
  color: #121417;
  font: inherit;
  font-size: 0.9rem;
  border-radius: 2px;
  outline: none;
  transition: border-color 0.15s ease;
}

.calc-select:focus,
.calc-input:focus,
.calc-textarea:focus {
  border-color: #ffb81c;
}

.file-upload {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  cursor: pointer;
}

.file-upload input {
  display: none;
}

.file-upload__btn {
  padding: 0.6rem 1rem;
  background: #ffffff;
  border: 1px solid #cbd5e1;
  font-size: 0.82rem;
  font-weight: 700;
  color: #334155;
  border-radius: 2px;
}

.file-upload__name {
  font-size: 0.8rem;
  color: #64748b;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.calc-summary {
  display: flex;
  flex-direction: column;
}

.summary-card {
  background: #121417;
  color: #ffffff;
  padding: 2rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.summary-eyebrow {
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #ffb81c;
  margin-bottom: 0.45rem;
}

.summary-system {
  font-size: 1.25rem;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.3;
  margin: 0 0 1.5rem;
}

.summary-specs {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #2a3038;
  margin-bottom: 1.5rem;
}

.summary-row {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.summary-row span {
  font-size: 0.78rem;
  color: #9ca3af;
}

.summary-row strong {
  font-size: 1rem;
  color: #f3f4f6;
}

.summary-row small {
  font-size: 0.82rem;
  color: #d1d5db;
  line-height: 1.4;
}

.summary-disclaimer {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  background: rgba(255, 184, 28, 0.1);
  border: 1px solid rgba(255, 184, 28, 0.3);
  padding: 0.85rem;
  border-radius: 2px;
  margin-bottom: 1.75rem;
}

.disc-icon {
  width: 18px;
  height: 18px;
  color: #ffb81c;
  flex-shrink: 0;
  margin-top: 1px;
}

.summary-disclaimer p {
  font-size: 0.78rem;
  color: #e5e7eb;
  line-height: 1.45;
  margin: 0;
}

.summary-cta-form {
  margin-top: auto;
}

.summary-success {
  margin-top: auto;
  text-align: center;
  padding: 1.5rem;
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.success-icon {
  font-size: 2rem;
  color: #22c55e;
  display: block;
  margin-bottom: 0.5rem;
}

.summary-success h4 {
  font-size: 1.15rem;
  color: #ffffff;
  margin: 0 0 0.4rem;
}

.summary-success p {
  font-size: 0.85rem;
  color: #cbd5e1;
  margin: 0 0 1rem;
}

.reset-btn {
  background: transparent;
  border: 0;
  color: #ffb81c;
  font-weight: 700;
  cursor: pointer;
  text-decoration: underline;
}

.p-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  padding: 0.75rem 1.5rem;
  border: 0;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 800;
  border-radius: 2px;
  transition: background 0.2s ease;
}

.p-btn--primary {
  background: #e6a317;
  color: #121417;
}

.p-btn--primary:hover {
  background: #ffb81c;
}

.p-btn--block {
  width: 100%;
}

@media (max-width: 960px) {
  .calc-box {
    grid-template-columns: 1fr;
  }
}
</style>
