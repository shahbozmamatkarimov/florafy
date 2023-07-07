<template>
  <div class="sm:flex">
    <header
      class="sm:min-w-[20rem] sm:max-w-[20rem] w-full overflow-y-auto max-h-screen border-r"
      :class="{ 'sm:block hidden': store.toggle }"
    >
      <nav>
        <ProfileNav />
      </nav>
    </header>
    <main class="w-full overflow-y-auto max-h-screen">
      <section class="sm:mt-12 mt-12">
        <router-view></router-view>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ProfileNav } from '../components'
import { useNavbar } from '../stores/UserNav'

const store = useNavbar()
</script>