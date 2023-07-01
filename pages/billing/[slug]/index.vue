<template>
  <section class="grid grid-cols-2 px-40 pb-40 container mx-auto">
    <div>
      <p class="h-12 text-sm font-medium">
        Level 1 / Level 2 / Level 3 / Level 4
      </p>
      <h1 class="font-medium text-3xl">Checkout</h1>
      <div class="flex items-center gap-5 py-20">
        <p class="flex gap-2 items-center">
          <span
            class="flex justify-center items-center pb-1 w-6 h-6 border bg-[#595CFF] text-white rounded-full"
            >1</span
          ><span>Contacts</span>
        </p>
        <span class="inline-block h-[0.2rem] w-16 bg-black"></span>
        <p class="flex gap-2 items-center">
          <span
            class="flex justify-center items-center pb-1 w-6 h-6 border bg-[#595CFF] text-white rounded-full"
            >2</span
          ><span>Shiping</span>
        </p>
        <span class="inline-block h-[0.2rem] w-16 bg-black"></span>
        <p class="flex gap-2 items-center">
          <span
            class="flex justify-center items-center pb-1 w-6 h-6 border border-[#595CFF] rounded-full"
            >3</span
          ><span>Payment</span>
        </p>
      </div>
      <div class="flex flex-col gap-10 w-[77%]">
        <div class="flex flex-col gap-5">
          <h1>Payment card</h1>
          <div class="flex gap-5">
            <input
              class="border py-2 pl-3 outline-none rounded w-[55%]"
              type="text"
              placeholder="0000 0000 0000 0000"
            />
            <input
              class="border py-2 pl-3 outline-none rounded w-[15%]"
              type="text"
              placeholder="00/00"
            />
          </div>
        </div>
        <div class="w-[73%]">
          <h1 class="flex justify-between py-2">
            <span>Discount</span><span>$ -6</span>
          </h1>
          <h1 class="flex justify-between py-2 border-y">
            <span>Price</span><span>$ 46</span>
          </h1>
          <h1 class="flex justify-between py-2">
            <span>Total price</span><span>$ 40</span>
          </h1>
        </div>
        <div class="flex justify-between">
          <button @click="router.back()" class="flex items-center gap-3 w-44 py-2 rounded">
            <img src="../../../assets/back2.svg" alt="" /> Back step
          </button>
          <button
            class="flex justify-center items-center mr-5 bg-[#595CFF] gap-3 w-44 py-2 text-white rounded"
          >
            Make a payment
          </button>
        </div>
      </div>
    </div>
    <div class="mt-40">
      <div class="w-[60%] float-right rounded-lg">
        <div class="w-full cursor-pointer border py-3 rounded-lg mb-5">
          <img class="mx-auto" src="../../../assets/uzum.png" alt="uzum" />
        </div>
        <div class="w-full cursor-pointer border py-3 rounded-lg">
          <img class="mx-auto" src="../../../assets/payme.png" alt="payme" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

const router = useRouter()
</script>

<style lang="scss" scoped></style>
