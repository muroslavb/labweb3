<script setup lang="ts">
import { computed, ref } from 'vue'
import UserCard from '@/components/UserCard.vue'
import { users } from '@/data/users'
import type { Gender } from '@/types/user'

type GenderFilter = 'all' | Gender
type AgeFilter = 'all' | 'adult'
type SortKey = 'name' | 'age'
type SortDir = 'asc' | 'desc'
interface Sort { key: SortKey; dir: SortDir }

const genderFilter = ref<GenderFilter>('all')
const ageFilter = ref<AgeFilter>('all')
const sort = ref<Sort | null>(null)

const genderOptions: { value: GenderFilter; label: string }[] = [
  { value: 'all', label: 'Всі' },
  { value: 'male', label: 'Чоловіки' },
  { value: 'female', label: 'Жінки' },
]
const ageOptions: { value: AgeFilter; label: string }[] = [
  { value: 'all', label: 'Всі' },
  { value: 'adult', label: '18 +' },
]
const sortOptions: { key: SortKey; dir: SortDir; label: string }[] = [
  { key: 'name', dir: 'asc', label: 'Ім’я ↑' },
  { key: 'name', dir: 'desc', label: 'Ім’я ↓' },
  { key: 'age', dir: 'asc', label: 'Вік ↑' },
  { key: 'age', dir: 'desc', label: 'Вік ↓' },
]

// Спочатку фільтрація, потім сортування копії — тому сортування не ламає фільтри
const visibleUsers = computed(() => {
  const filtered = users.filter(
    (user) =>
      (genderFilter.value === 'all' || user.gender === genderFilter.value) &&
      (ageFilter.value === 'all' || user.dob.age >= 18),
  )
  if (!sort.value) return filtered

  const { key, dir } = sort.value
  const factor = dir === 'asc' ? 1 : -1
  return [...filtered].sort((a, b) =>
    key === 'age'
      ? (a.dob.age - b.dob.age) * factor
      : `${a.name.first} ${a.name.last}`.localeCompare(`${b.name.first} ${b.name.last}`, 'uk') *
        factor,
  )
})

function isSortActive(option: Sort): boolean {
  return sort.value?.key === option.key && sort.value.dir === option.dir
}

function resetAll(): void {
  genderFilter.value = 'all'
  ageFilter.value = 'all'
  sort.value = null
}
</script>

<template>
  <section class="users">
    <div class="users__toolbar">
      <div class="users__group" role="group" aria-label="Стать">
        <button
          v-for="option in genderOptions"
          :key="option.value"
          type="button"
          class="users__btn"
          :class="{ 'users__btn--active': genderFilter === option.value }"
          :aria-pressed="genderFilter === option.value"
          @click="genderFilter = option.value"
        >
          {{ option.label }}
        </button>
      </div>

      <div class="users__group" role="group" aria-label="Вік">
        <button
          v-for="option in ageOptions"
          :key="option.value"
          type="button"
          class="users__btn"
          :class="{ 'users__btn--active': ageFilter === option.value }"
          :aria-pressed="ageFilter === option.value"
          @click="ageFilter = option.value"
        >
          {{ option.label }}
        </button>
      </div>

      <div class="users__group" role="group" aria-label="Сортування">
        <button
          v-for="option in sortOptions"
          :key="option.label"
          type="button"
          class="users__btn"
          :class="{ 'users__btn--active': isSortActive(option) }"
          :aria-pressed="isSortActive(option)"
          @click="sort = { key: option.key, dir: option.dir }"
        >
          {{ option.label }}
        </button>
      </div>

      <button type="button" class="users__btn users__btn--reset" @click="resetAll">
        Очистити все
      </button>
    </div>

    <p v-if="visibleUsers.length === 0" class="users__empty">Список юзерів пустий</p>
    <ul v-else class="users__list">
      <li v-for="user in visibleUsers" :key="user.id">
        <UserCard :user="user" />
      </li>
    </ul>
  </section>
</template>

<style scoped>
.users__toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 20px;
  margin-bottom: 20px;
}
.users__group { display: flex; gap: 6px; }
.users__btn {
  padding: 6px 14px;
  color: inherit;
  cursor: pointer;
  background: #fff;
  border: 1px solid #c3cde0;
  border-radius: 8px;
}
.users__btn:focus-visible { outline: 2px solid #3b82d9; outline-offset: 2px; }
.users__btn--active { color: #fff; background: #2b4a8a; border-color: #2b4a8a; }
.users__btn--reset { margin-left: auto; }
.users__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.users__empty { padding: 40px 0; text-align: center; color: #55648a; }

@media (max-width: 520px) {
  .users__list { grid-template-columns: 1fr; }
}
</style>
