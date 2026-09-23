<script setup lang="ts">
function scrollToCalc() {
  const el = document.getElementById('calculator') || document.getElementById('lead')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="mobile-cta-bar" role="region" aria-label="Быстрые действия">
    <button class="mobile-cta-btn mobile-cta-btn--calc" @click="scrollToCalc">
      <svg viewBox="0 0 20 20" fill="none" class="m-icon">
        <path d="M6 3h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="currentColor" stroke-width="1.8"/>
        <path d="M7 7h6M7 11h2M11 11h2M7 14h2M11 14h2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      </svg>
      <span>Рассчитать</span>
    </button>
    <a href="tel:+79093578222" class="mobile-cta-btn mobile-cta-btn--call">
      <svg viewBox="0 0 20 20" fill="none" class="m-icon">
        <path d="M2 3a1 1 0 011-1h3.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" fill="currentColor"/>
      </svg>
      <span>Позвонить</span>
    </a>
  </div>
</template>

<style scoped>
.mobile-cta-bar {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 80;
  background: rgba(18, 20, 23, 0.96);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-top: 1px solid #2a3038;
  padding: 0.65rem 1rem;
  gap: 0.65rem;
}

.mobile-cta-btn {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  min-height: 2.85rem;
  padding: 0.5rem 1rem;
  font-family: inherit;
  font-size: 0.9rem;
  font-weight: 800;
  border-radius: 2px;
  text-decoration: none;
  border: 0;
  cursor: pointer;
  transition: opacity 0.15s ease;
}

.mobile-cta-btn:active {
  opacity: 0.85;
}

.mobile-cta-btn--calc {
  background: #e6a317;
  color: #121417;
}

.mobile-cta-btn--call {
  background: #252a32;
  color: #ffffff;
  border: 1px solid #374151;
}

.m-icon {
  width: 16px;
  height: 16px;
}

@media (max-width: 768px) {
  .mobile-cta-bar {
    display: flex;
  }
}
</style>
