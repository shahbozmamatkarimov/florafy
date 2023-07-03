<template>
  <div>
    <header>
      <Navbar />
    </header>
    <main id="main" class="overflow-y-auto max-h-screen overflow-hidden">
      <slot />
      <Footer />
    </main>
  </div>
</template>

<script setup>
const route = useRoute();
watch(
  () => route.fullPath,
  async () => {
    let main = document.querySelector("#main");
    main.scrollTo(0, 0);
    routerUrl.value = route.fullPath;
  }
);
</script>

<style lang="scss" scoped></style>
