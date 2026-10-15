<script setup lang="ts">
import { computed, ref } from 'vue'
import type { User } from '@/types/user'

const props = defineProps<{ user: User }>()

const isDetailsVisible = ref(false)

const age = computed(() => props.user.dob.age)

const ageGroup = computed<'minor' | 'young' | 'adult' | 'senior'>(() => {
  if (age.value < 18) return 'minor'
  if (age.value <= 30) return 'young'
  if (age.value <= 50) return 'adult'
  return 'senior'
})

const birthDate = computed(() =>
  new Date(props.user.dob.date).toLocaleDateString('uk-UA'),
)
const fullName = computed(
  () => `${props.user.name.title}. ${props.user.name.first} ${props.user.name.last}`,
)
const altText = computed(() => `${props.user.name.first} ${props.user.name.last}`)
</script>

<template>
  <article
    class="user-card"
    :class="{
      'user-card--minor': ageGroup === 'minor',
      'user-card--young': ageGroup === 'young',
      'user-card--adult': ageGroup === 'adult',
      'user-card--senior': ageGroup === 'senior',
    }"
  >
    <img class="user-card__photo" :src="user.picture" :alt="altText" width="96" height="96" />

    <div class="user-card__body">
      <h2 class="user-card__name">{{ fullName }}</h2>
      <p class="user-card__meta">
        {{ user.gender === 'female' ? 'Жінка' : 'Чоловік' }}
        <span v-if="age > 18"> · {{ age }} років</span>
      </p>

      <dl class="user-card__info">
        <dt>Дата народження</dt>
        <dd>{{ birthDate }}</dd>
        <dt>Адреса</dt>
        <dd>
          {{ user.location.street.number }} {{ user.location.street.name }},
          {{ user.location.city }}, {{ user.location.state }}, {{ user.location.country }}
          {{ user.location.postcode }}
        </dd>
        <dt>Часовий пояс</dt>
        <dd>{{ user.location.timezone.offset }} ({{ user.location.timezone.description }})</dd>
        <dt>Email</dt>
        <dd>{{ user.email }}</dd>
        <dt>Телефон</dt>
        <dd>{{ user.phone }}</dd>
        <dt>Мобільний</dt>
        <dd>{{ user.cell }}</dd>
      </dl>

      <ul class="user-card__hobbies">
        <li v-for="hobby in user.hobbies" :key="hobby" class="user-card__hobby">{{ hobby }}</li>
      </ul>

      <button
        class="user-card__toggle"
        type="button"
        :aria-expanded="isDetailsVisible"
        @click="isDetailsVisible = !isDetailsVisible"
      >
        {{ isDetailsVisible ? 'Приховати деталі' : 'Показати деталі' }}
      </button>
      <p v-show="isDetailsVisible" class="user-card__details">{{ user.details }}</p>
    </div>
  </article>
</template>

<style scoped>
.user-card {
  --accent: #6b7fa8;
  --tint: #ffffff;
  display: flex;
  gap: 16px;
  padding: 16px;
  background: var(--tint);
  border: 1px solid #dde4f0;
  border-left: 6px solid var(--accent);
  border-radius: 12px;
}
.user-card--minor { --accent: #f2a93b; --tint: #fff7e8; }
.user-card--young { --accent: #3b82d9; --tint: #eef5ff; }
.user-card--adult { --accent: #3fa67a; --tint: #eefaf4; }
.user-card--senior { --accent: #8b5fc7; --tint: #f5eefc; }

.user-card__photo {
  flex: none;
  width: 96px;
  height: 96px;
  object-fit: cover;
  border-radius: 12px;
}
.user-card__body { min-width: 0; }
.user-card__name { margin: 0; font-size: 1.15rem; }
.user-card__meta { margin: 2px 0 10px; color: #55648a; }
.user-card__info {
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 2px 12px;
  margin: 0 0 10px;
  font-size: 0.9rem;
}
.user-card__info dt { color: #55648a; }
.user-card__info dd { margin: 0; overflow-wrap: anywhere; }
.user-card__hobbies {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 0 0 10px;
  padding: 0;
  list-style: none;
}
.user-card__hobby {
  padding: 2px 10px;
  font-size: 0.8rem;
  background: #fff;
  border: 1px solid var(--accent);
  border-radius: 999px;
}
.user-card__toggle {
  padding: 4px 10px;
  color: inherit;
  cursor: pointer;
  background: #fff;
  border: 1px solid #c3cde0;
  border-radius: 8px;
}
.user-card__toggle:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
.user-card__details { margin: 8px 0 0; font-size: 0.9rem; }

@media (max-width: 520px) {
  .user-card { flex-direction: column; }
}
</style>
