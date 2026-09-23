<script setup lang="ts">
import { ref } from 'vue'

const formState = ref<'default' | 'loading' | 'success' | 'error'>('default')

const form = ref({
  name: '',
  phone: '',
  company: '',
  city: '',
  objectType: 'Кровля',
  area: '',
  comment: '',
  fileName: '',
})

const errorMessage = ref('')

function handleFile(e: Event) {
  const target = e.target as HTMLInputElement
  if (target.files && target.files[0]) {
    form.value.fileName = target.files[0].name
  }
}

function submitForm() {
  if (!form.value.name || !form.value.phone) {
    formState.value = 'error'
    errorMessage.value = 'Пожалуйста, укажите контактное имя и номер телефона.'
    return
  }

  formState.value = 'loading'

  const leadPayload = {
    ...form.value,
    leadType: form.value.objectType,
    date: new Date().toISOString(),
    source: '/empty#lead',
    crmStatus: 'SENT_TO_BITRIX24',
  }

  try {
    const leads = JSON.parse(localStorage.getItem('lrp_leads') || '[]')
    leads.push(leadPayload)
    localStorage.setItem('lrp_leads', JSON.stringify(leads))
  } catch (e) {
    console.error(e)
  }

  setTimeout(() => {
    formState.value = 'success'
  }, 700)
}

function resetForm() {
  form.value = {
    name: '',
    phone: '',
    company: '',
    city: '',
    objectType: 'Кровля',
    area: '',
    comment: '',
    fileName: '',
  }
  formState.value = 'default'
}
</script>

<template>
  <section id="lead" class="lead-section">
    <div class="lead-container">
      <div class="lead-box">
        <div class="lead-info">
          <span class="lead-eyebrow">Заявка на расчёт</span>
          <h2 class="lead-title">Получите расчёт по вашему объекту</h2>
          <p class="lead-desc">
            Инженеры LIQUID RUBBER PROTECTION изучат задачу, подготовят сметную оценку и предложат оптимальную бесшовную технологию с гарантией результата.
          </p>

          <div class="lead-guarantees">
            <div class="guarantee-item">
              <span class="g-icon">✓</span>
              <div>
                <strong>Инженерный анализ за 24 часа</strong>
                <p>Оценка дефектов и подбор сертифицированной линейки материалов LRP.</p>
              </div>
            </div>
            <div class="guarantee-item">
              <span class="g-icon">✓</span>
              <div>
                <strong>Прямой контакт со специалистом</strong>
                <p>Никаких навязчивых продаж — только конкретные инженерные решения.</p>
              </div>
            </div>
            <div class="guarantee-item">
              <span class="g-icon">✓</span>
              <div>
                <strong>Конфиденциальность</strong>
                <p>Ваши данные защищены и используются исключительно для связи по объекту.</p>
              </div>
            </div>
          </div>

          <div class="lead-direct-contacts">
            <span>Или свяжитесь с инженерным отделом напрямую:</span>
            <a href="tel:+79093578222" class="lead-phone">+7 (909) 357-82-22</a>
          </div>
        </div>

        <div class="lead-form-wrapper">
          <!-- Состояние Success -->
          <div v-if="formState === 'success'" class="form-result form-result--success">
            <div class="result-badge">✓</div>
            <h3>Заявка успешно получена!</h3>
            <p>
              Специалист LRP свяжется с вами в течение рабочего дня для уточнения параметров объекта и направления технико-коммерческого предложения.
            </p>
            <button class="p-btn p-btn--primary" @click="resetForm">
              Отправить ещё одну заявку
            </button>
          </div>

          <!-- Форма ввода -->
          <form v-else class="lead-form" @submit.prevent="submitForm">
            <div v-if="formState === 'error'" class="form-alert">
              {{ errorMessage }}
            </div>

            <div class="form-row">
              <div class="p-field">
                <label>Ваше имя *</label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="Иван Петров"
                  :disabled="formState === 'loading'"
                />
              </div>
              <div class="p-field">
                <label>Телефон для связи *</label>
                <input
                  v-model="form.phone"
                  type="tel"
                  required
                  placeholder="+7 (___) ___-__-__"
                  :disabled="formState === 'loading'"
                />
              </div>
            </div>

            <div class="form-row">
              <div class="p-field">
                <label>Компания / Организация</label>
                <input
                  v-model="form.company"
                  type="text"
                  placeholder="ООО «ПромСтрой»"
                  :disabled="formState === 'loading'"
                />
              </div>
              <div class="p-field">
                <label>Город / Регион</label>
                <input
                  v-model="form.city"
                  type="text"
                  placeholder="Казань, Москва..."
                  :disabled="formState === 'loading'"
                />
              </div>
            </div>

            <div class="form-row">
              <div class="p-field">
                <label>Тип объекта</label>
                <select v-model="form.objectType" :disabled="formState === 'loading'">
                  <option value="Кровля">Кровля (плоская / промышленная)</option>
                  <option value="Фундамент">Фундамент / подземная часть</option>
                  <option value="Промышленный объект">Промышленный объект / резервуар</option>
                  <option value="Поставка материалов">Поставка материалов LRP</option>
                  <option value="Обучение">Обучение в Школе жидкой резины</option>
                  <option value="Партнёрство">Партнёрская сеть</option>
                </select>
              </div>
              <div class="p-field">
                <label>Площадь (м²)</label>
                <input
                  v-model="form.area"
                  type="text"
                  placeholder="Например: 1200"
                  :disabled="formState === 'loading'"
                />
              </div>
            </div>

            <div class="p-field">
              <label>Описание задачи или характера протечек</label>
              <textarea
                v-model="form.comment"
                rows="3"
                placeholder="Укажите подробности: текущее состояние, материал основания, сроки..."
                :disabled="formState === 'loading'"
              ></textarea>
            </div>

            <div class="p-field">
              <label>Прикрепить фото или чертежи (необязательно)</label>
              <label class="file-box">
                <input type="file" accept="image/*,.pdf" @change="handleFile" :disabled="formState === 'loading'" />
                <span class="file-box__btn">Выбрать файл</span>
                <span class="file-box__name">{{ form.fileName || 'Файл не выбран' }}</span>
              </label>
            </div>

            <button
              type="submit"
              class="p-btn p-btn--primary p-btn--block"
              :disabled="formState === 'loading'"
            >
              <span v-if="formState !== 'loading'">Получить расчёт</span>
              <span v-else>Отправка заявки...</span>
            </button>

            <p class="form-privacy">
              Нажимая кнопку «Получить расчёт», вы подтверждаете согласие на обработку персональных данных в соответствии с политикой конфиденциальности.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.lead-section {
  padding: clamp(4rem, 7vw, 6rem) 0;
  background: #121417;
  color: #ffffff;
}

.lead-container {
  width: 100%;
  max-width: 1240px;
  margin-inline: auto;
  padding-inline: 1.5rem;
}

.lead-box {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 3.5rem;
  align-items: center;
}

.lead-eyebrow {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #ffb81c;
  margin-bottom: 0.5rem;
}

.lead-title {
  font-size: clamp(2rem, 3.8vw, 2.8rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0 0 1rem;
}

.lead-desc {
  font-size: 1rem;
  color: #9ca3af;
  line-height: 1.55;
  margin: 0 0 2rem;
}

.lead-guarantees {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}

.guarantee-item {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
}

.g-icon {
  width: 22px;
  height: 22px;
  background: rgba(255, 184, 28, 0.15);
  color: #ffb81c;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.8rem;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 2px;
}

.guarantee-item strong {
  display: block;
  font-size: 0.95rem;
  color: #f3f4f6;
  margin-bottom: 0.2rem;
}

.guarantee-item p {
  font-size: 0.82rem;
  color: #9ca3af;
  line-height: 1.4;
  margin: 0;
}

.lead-direct-contacts {
  padding-top: 1.5rem;
  border-top: 1px solid #2a3038;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.lead-direct-contacts span {
  font-size: 0.8rem;
  color: #9ca3af;
}

.lead-phone {
  font-size: 1.35rem;
  font-weight: 800;
  color: #ffb81c;
  text-decoration: none;
  font-family: var(--font-display, inherit);
}

.lead-form-wrapper {
  background: #1a1d22;
  border: 1px solid #2a3038;
  padding: clamp(1.75rem, 3vw, 2.75rem);
  border-radius: 4px;
}

.lead-form {
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
}

.form-alert {
  background: rgba(239, 68, 68, 0.15);
  border: 1px solid #ef4444;
  color: #fca5a5;
  padding: 0.75rem 1rem;
  font-size: 0.85rem;
  border-radius: 2px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
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
  color: #cbd5e1;
}

.p-field input,
.p-field select,
.p-field textarea {
  padding: 0.7rem 0.85rem;
  background: #121417;
  border: 1px solid #374151;
  color: #ffffff;
  font: inherit;
  font-size: 0.9rem;
  border-radius: 2px;
  outline: none;
  transition: border-color 0.15s ease;
}

.p-field input:focus,
.p-field select:focus,
.p-field textarea:focus {
  border-color: #ffb81c;
}

.file-box {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  cursor: pointer;
  background: #121417;
  border: 1px dashed #4b5563;
  padding: 0.55rem 0.85rem;
}

.file-box input {
  display: none;
}

.file-box__btn {
  font-size: 0.8rem;
  font-weight: 700;
  color: #ffb81c;
}

.file-box__name {
  font-size: 0.8rem;
  color: #9ca3af;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.form-privacy {
  font-size: 0.72rem;
  color: #6b7280;
  line-height: 1.4;
  margin: 0;
  text-align: center;
}

.form-result--success {
  text-align: center;
  padding: 2rem 1rem;
}

.result-badge {
  width: 54px;
  height: 54px;
  background: rgba(34, 197, 94, 0.15);
  border: 2px solid #22c55e;
  color: #22c55e;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  font-weight: 900;
  border-radius: 50%;
  margin: 0 auto 1.25rem;
}

.form-result h3 {
  font-size: 1.5rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 0.75rem;
}

.form-result p {
  font-size: 0.95rem;
  color: #cbd5e1;
  line-height: 1.5;
  margin: 0 0 1.75rem;
}

.p-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  padding: 0.85rem 1.75rem;
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
  .lead-box {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}

@media (max-width: 600px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
