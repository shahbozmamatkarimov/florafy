<template>
  <!-- Footer container -->
  <footer class="text-center pb-40 lg:text-left bg-[#F9F9FB] py-10">
    <div class="grid lg:grid-cols-4 container leading-7 text-black mx-auto px-40">
      <div class="leading-10">
        <h1>Title</h1>
        <p>+998991234567</p>
        <div class="flex gap-5 pt-2">
          <i class="border-2 border-black hover:bg-neutral-600 hover:text-white cursor-pointer p-2 rounded-full bx bxl-instagram"></i>
          <i class="border-2 border-black hover:bg-neutral-600 hover:text-white cursor-pointer p-2 rounded-full bx bx-phone"></i>
          <i class="border-2 border-black hover:bg-neutral-600 hover:text-white cursor-pointer p-2 rounded-full bx bxl-facebook"></i>
        </div>
      </div>
      <div>
        <ul>
          <li class="pb-2">Help</li>
          <li>Contact us</li>
          <li>Delivery information</li>
          <li>Payment information</li>
          <li>Customer service</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div>
        <ul>
          <li class="pb-2">About us</li>
          <li>Our Stores</li>
          <li>Flower care</li>
          <li>Site map</li>
        </ul>
      </div>
      <div>
        <ul>
          <li class="pb-2">Legal</li>
          <li>Privacy policy</li>
          <li>Terms & Conditions</li>
          <li>Cookie policy</li>
          <li>Item 4</li>
          <li>Item 5</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.router-link-active {
  color: #edae30;
  transition-duration: 1s;
  font-weight: bold;
}
</style>
