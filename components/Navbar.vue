<template>
  <nav>
    <div
      class="flex justify-between items-center container mx-auto py-3 xl:px-40"
    >
      <div>
        <h1><i class="bx bxs-map"></i> Toshkent</h1>
      </div>
      <div class="flex gap-4 items-center">
        <i class="bx bx-search-alt-2 cursor-pointer text-2xl"></i>
        <p @click="cart.toggle = true" class="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 group-hover:opacity-50 opacity-70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </p>
        <div
          class="absolute top-0 right-0 z-10 bg-white duration-1000"
          :class="cart.toggle ? 'translate-x-0' : 'translate-x-full'"
        >
          <div
            class="sticky top-0 w-full float-right border min-h-screen max-h-screen overflow-hidden overflow-y-auto shadow-lg shadow-gray-500 p-5"
          >
            <h1
              class="fixed w-[90%] bg-white z-10 top-0 pt-5 border-b flex justify-between items-center font-medium pb-2"
            >
              <span class="text-2xl">Your cart</span
              ><i
                @click="cart.toggle = false"
                class="bx bx-x text-[#AFB1BD] text-4xl cursor-pointer"
              ></i>
            </h1>
            <div class="relative overflow-x-auto mb-5 mt-20">
              <table class="text-sm text-left">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="flex gap-5 pb-5" v-for="i in 5" :key="i">
                    <td class="w-24 h-24">
                      <img
                        class="w-full h-full object-cover rounded"
                        src="../assets/Block1.jpg"
                        alt="img"
                      />
                    </td>
                    <th class="flex text-gray-900 whitespace-nowrap">
                      <div>
                        <div class="text-base font-medium">Red Tulips</div>
                        <p class="py-4">
                          <i
                            class="bx bx-plus bg-[#E6E6EB] p-1 rounded-full"
                          ></i>
                          <input
                            class="w-8 ml-5 mr-2 bg-transparent font-medium outline-none"
                            max="999"
                            type="number"
                            value="25"
                            required
                          />
                          <i
                            class="bx bx-minus bg-[#E6E6EB] p-1 rounded-full"
                          ></i>
                        </p>
                      </div>
                    </th>
                    <th class="ml-20 font-medium">46 $</th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="flex justify-between gap-5 pb-10">
              <button
                class="w-[70%] py-1 text-start px-3 rounded border-2 border-gray-300 bg-[#E6E6EB]"
              >
                Add promocode
              </button>
              <button class="w-[30%] py-1 rounded border-2 border-[#595CFF] hover:bg-[#595CFF] hover:text-white">
                Apply
              </button>
            </div>
            <div>
              <hr />
              <h1 class="flex w-full justify-between py-4">
                <span>Shipping</span><span>Free</span>
              </h1>
              <hr />
              <h1 class="flex w-full justify-between py-4">
                <span>Order</span><span>46 $</span>
              </h1>
              <button
                class="bg-[#595CFF] flex items-center gap-3 px-16 py-2 mx-auto my-5 rounded-lg text-white"
              >
                Checkout <img src="../assets/arrow.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ul class="flex justify-center items-center text-lg py-6">
      <li class="cursor-pointer px-10">
        <router-link to="/">Asosiy</router-link>
      </li>
      <li class="cursor-pointer px-10">
        <router-link to="/flowers">Gullar</router-link>
      </li>
      <li class="cursor-pointer px-10">
        <router-link to="/gifts">Sovg'alar</router-link>
      </li>
      <li class="cursor-pointer px-10">
        <router-link to="/about">Haqimizda</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const cart = reactive({
  toggle: false,
});
</script>

<style lang="scss" scoped>
.router-link-active {
  border-bottom: 5px solid white;
}
</style>
