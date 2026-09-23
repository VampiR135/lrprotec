<script setup lang="ts">
type Status = 'idle' | 'loading' | 'ok' | 'error'

const type = ref('кровля')
const area = ref('')
const condition = ref('неизвестно')
const region = ref('')
const problem = ref('')
const photoName = ref('')
const status = ref<Status>('idle')

function onFile(e: Event) {
  const input = e.target as HTMLInputElement
  photoName.value = input.files?.[0]?.name || ''
}

async function submit() {
  status.value = 'idle'
  if (!area.value.trim() || !region.value.trim()) {
    status.value = 'error'
    return
  }
  status.value = 'loading'
  await new Promise(r => setTimeout(r, 700))
  console.info('[calc]', {
    type: type.value,
    area: area.value,
    condition: condition.value,
    region: region.value,
    problem: problem.value,
    photo: photoName.value,
    source: 'calculator',
  })
  status.value = 'ok'
}
</script>

<template>
  <section id="p-calc" class="p-section calc">
    <div class="p-container calc__layout">
      <div>
        <p class="p-eyebrow">Калькулятор</p>
        <h2 class="p-title">Предварительный расчёт по объекту</h2>
        <p class="p-lead">
          Мы не показываем фиктивную точную цену. Предварительная оценка стоимости будет
          рассчитана специалистом после анализа объекта.
        </p>
      </div>

      <form class="calc__form" @submit.prevent="submit">
        <div class="p-field">
          <label for="calc-type">Тип объекта</label>
          <select id="calc-type" v-model="type">
            <option value="кровля">Кровля</option>
            <option value="фундамент">Фундамент</option>
            <option value="промышленный объект">Промышленный объект</option>
            <option value="другое">Другое</option>
          </select>
        </div>
        <div class="p-field">
          <label for="calc-area">Площадь, м²</label>
          <input id="calc-area" v-model="area" type="text" inputmode="numeric" placeholder="Например, 1200" required>
        </div>
        <div class="p-field">
          <label for="calc-condition">Состояние</label>
          <select id="calc-condition" v-model="condition">
            <option value="новое основание">Новое основание</option>
            <option value="требуется ремонт">Требуется ремонт</option>
            <option value="сильные повреждения">Сильные повреждения</option>
            <option value="неизвестно">Неизвестно</option>
          </select>
        </div>
        <div class="p-field">
          <label for="calc-region">Регион</label>
          <input id="calc-region" v-model="region" type="text" placeholder="Город или регион" required>
        </div>
        <div class="p-field">
          <label for="calc-problem">Опишите проблему</label>
          <textarea id="calc-problem" v-model="problem" placeholder="Протечки, состояние покрытия…" />
        </div>
        <div class="p-field">
          <label for="calc-photo">Фотография объекта</label>
          <input id="calc-photo" type="file" accept="image/*" @change="onFile">
          <span v-if="photoName" class="calc__file">{{ photoName }}</span>
        </div>
        <button type="submit" class="p-btn p-btn--primary p-btn--block" :disabled="status === 'loading'">
          {{ status === 'loading' ? 'Отправка…' : 'Получить предварительный расчёт' }}
        </button>
        <p v-if="status === 'ok'" class="p-status p-status--ok" role="status">
          Заявка отправлена. Специалист рассчитает предварительную оценку после анализа объекта.
        </p>
        <p v-else-if="status === 'error'" class="p-status p-status--error" role="alert">
          Укажите площадь и регион.
        </p>
        <p v-else-if="status === 'loading'" class="p-status p-status--loading">Отправляем данные…</p>
      </form>
    </div>
  </section>
</template>

<style scoped>
.calc {
  background: var(--p-paper);
}

.calc__layout {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 2rem;
  align-items: start;
}

.calc__form {
  display: grid;
  gap: 0.85rem;
  padding: 1.35rem;
  background: var(--p-white);
  border: 1px solid var(--p-line);
}

.calc__file {
  font-size: 0.8rem;
  color: var(--p-muted);
}

@media (max-width: 860px) {
  .calc__layout {
    grid-template-columns: 1fr;
  }
}
</style>
