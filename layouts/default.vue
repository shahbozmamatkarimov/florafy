<template>
  <div>
    <header>
      <Navbar />
    </header>
    <main class="overflow-y-auto max-h-screen overflow-hidden">
      <slot />
      <Footer />
    </main>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
