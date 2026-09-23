<script setup lang="ts">
type Status = 'idle' | 'loading' | 'ok' | 'error'

const name = ref('')
const phone = ref('')
const company = ref('')
const city = ref('')
const type = ref('кровля')
const area = ref('')
const comment = ref('')
const status = ref<Status>('idle')

async function submit() {
  status.value = 'idle'
  if (!name.value.trim() || !phone.value.trim()) {
    status.value = 'error'
    return
  }
  status.value = 'loading'
  await new Promise(r => setTimeout(r, 700))
  console.info('[lead]', {
    name: name.value,
    phone: phone.value,
    company: company.value,
    city: city.value,
    type: type.value,
    area: area.value,
    comment: comment.value,
    source: 'lead-form',
  })
  status.value = 'ok'
  name.value = ''
  phone.value = ''
  company.value = ''
  city.value = ''
  area.value = ''
  comment.value = ''
}
</script>

<template>
  <section id="p-lead" class="p-section lead">
    <div class="p-container lead__layout">
      <div>
        <p class="p-eyebrow">Заявка</p>
        <h2 class="p-title">Получите расчёт по вашему объекту</h2>
        <p class="p-lead">
          Укажите параметры — специалист свяжется для уточнения задачи и предложит решение.
        </p>
      </div>
      <form class="lead__form" @submit.prevent="submit">
        <div class="lead__grid">
          <div class="p-field">
            <label for="lead-name">Имя</label>
            <input id="lead-name" v-model="name" required autocomplete="name">
          </div>
          <div class="p-field">
            <label for="lead-phone">Телефон</label>
            <input id="lead-phone" v-model="phone" type="tel" required autocomplete="tel">
          </div>
          <div class="p-field">
            <label for="lead-company">Компания</label>
            <input id="lead-company" v-model="company" autocomplete="organization">
          </div>
          <div class="p-field">
            <label for="lead-city">Город</label>
            <input id="lead-city" v-model="city" autocomplete="address-level2">
          </div>
          <div class="p-field">
            <label for="lead-type">Тип объекта</label>
            <select id="lead-type" v-model="type">
              <option value="кровля">Кровля</option>
              <option value="фундамент">Фундамент</option>
              <option value="промышленный объект">Промышленный объект</option>
              <option value="материалы">Материалы</option>
              <option value="другое">Другое</option>
            </select>
          </div>
          <div class="p-field">
            <label for="lead-area">Площадь, м²</label>
            <input id="lead-area" v-model="area" inputmode="numeric">
          </div>
        </div>
        <div class="p-field">
          <label for="lead-comment">Комментарий</label>
          <textarea id="lead-comment" v-model="comment" />
        </div>
        <div class="p-field">
          <label for="lead-photos">Фотографии объекта</label>
          <input id="lead-photos" type="file" accept="image/*" multiple>
        </div>
        <button type="submit" class="p-btn p-btn--primary p-btn--block" :disabled="status === 'loading'">
          {{ status === 'loading' ? 'Отправка…' : 'Получить расчёт' }}
        </button>
        <p v-if="status === 'ok'" class="p-status p-status--ok" role="status">
          Заявка получена. Специалист свяжется с вами для уточнения параметров объекта.
        </p>
        <p v-else-if="status === 'error'" class="p-status p-status--error" role="alert">
          Укажите имя и телефон.
        </p>
      </form>
    </div>
  </section>
</template>

<style scoped>
.lead {
  background: var(--p-white);
  border-block: 1px solid var(--p-line);
}

.lead__layout {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 2rem;
}

.lead__form {
  display: grid;
  gap: 0.85rem;
  padding: 1.35rem;
  background: var(--p-paper);
  border: 1px solid var(--p-line);
}

.lead__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.85rem;
}

@media (max-width: 800px) {
  .lead__layout,
  .lead__grid {
    grid-template-columns: 1fr;
  }
}
</style>
