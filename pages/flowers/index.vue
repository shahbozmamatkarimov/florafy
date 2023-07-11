<template>
  <section class="mx-auto container">
    <p class="text-sm font-medium">Home / Flowers</p>
    <h1 class="font-medium md:text-3xl text-lg">All Flowers</h1>

    <!-------------------------- filter --------------------------->
    <div class="flex justify-between my-5 border-b-2 md:pb-4">
      <div @click="store.filter = true" class="md:hidden">
        <img src="../../assets/filter.svg" alt="filter" />
      </div>
      <div class="md:flex lg:gap-20 gap-5 hidden">
        <select class="outline-none pr-4">
          <option selected disabled>Sort by</option>
          <option value="1">Sort by</option>
        </select>
        <select class="outline-none pr-4">
          <option selected disabled>Color</option>
          <option value="1">Color</option>
        </select>
        <select class="outline-none pr-4">
          <option selected disabled>Price</option>
          <option value="1">Price</option>
        </select>
        <select class="outline-none pr-4">
          <option selected disabled>Flower type</option>
          <option value="1">Flower type</option>
        </select>
        <select class="outline-none pr-4">
          <option selected disabled>Occasion</option>
          <option value="1">Occasion</option>
        </select>
      </div>
      <p>24 items</p>
    </div>

    <!--------------------------------------- flowers ------------------------------------>
    <div
      @click="event"
      class="relative grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-10 gap-5 min-w-fit"
    >
      <div
        :id="`img${i}`"
        class="font-medium hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:border-gray-200 duration-500 rounded-lg overflow-hidden border-2 border-white"
        v-for="i in 12"
        :key="i"
      >
        <div class="cart">
          <img
            class="xl:h-72 bg-[#E6E6EB] md:h-60 sm:h-52 h-60 w-full rounded-md object-cover"
            src="../../assets/Block1.jpg"
            alt="img"
          />
          <div class="flex justify-center items-center">
            <div
              class="hover absolute hidden sm:gap-14 gap-7 duration-1000 justify-center -mt-10 mb-8 z-10"
            >
              <p
                @click="animateFunc(i)"
                class="flex justify-center items-center duration-1000 cursor-pointer bg-white h-9 w-9 rounded"
              >
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
              <i
                @click="router.push('/flowers/red_tulips')"
                class="flex justify-center items-center bx bx-search cursor-pointer bg-white h-9 w-9 rounded"
              ></i>
            </div>
          </div>
        </div>
        <div class="text-center">
          <h1 class="md:text-lg text-sm md:py-2 md:mt-3 mt-2">
            Red Tulips {{ i }}
          </h1>
          <p class="md:text-sm text-xs">
            46 $ &nbsp;&nbsp;&nbsp;
            <span class="font-semibold line-through text-gray-500">60 $</span>
          </p>
        </div>
      </div>
    </div>
    <button
      class="bg-black rounded px-16 py-1 text-white block md:my-20 my-5 mx-auto"
    >
      See more
    </button>

    <!------------------------------- Modal --------------------------------------------->
    <!-- Main modal -->
    <div
      v-show="store.filter"
      class="absolute flex justify-center items-center top-0 left-0 min-h-screen min-w-full right-0 z-50 w-full overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)]"
    >
      <div class="relative w-full min-h-screen">
        <!-- Modal content -->
        <div
          class="relative min-h-screen bg-white rounded-lg shadow dark:bg-gray-700"
        >
          <!-- Modal header -->
          <div
            class="flex items-start justify-between p-4 rounded-t dark:border-gray-600"
          >
            <div></div>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200"
            >
              <i class="bx bx-x text-3xl"></i>
            </button>
          </div>
          <!-- Modal body -->
          <div class="overflow-hidden overflow-y-auto max-h-[78vh]">
            <p v-for="i in 20" :key="i"
              class="flex items-center py-3 my-0 border-b-2 px-3 justify-between text-sm font-medium leading-relaxed text-gray-500 dark:text-gray-400"
            >
              Sorty by {{ i }} <i class="bx bxs-down-arrow text-sm"></i>
            </p>
          </div>
          <!-- Modal footer -->
          <div
            class="fixed bottom-0 grid grid-cols-2 p-6 bg-white w-full gap-5 border-gray-200 rounded-b dark:border-gray-600"
          >
            <button
              type="button"
              class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              I accept
            </button>
            <button
              type="button"
              class="text-gray-500 w-full bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useCart } from "../../composable/cart";
const cart = useCart();

const store = reactive({
  filter: false,
});
const animate = reactive({
  animate: [],
  clientX: 0,
  clientY: 0,
});

const router = useRouter();

function event(e) {
  animate.clientX = e.clientX;
  animate.clientY = e.clientY;
}

function animateFunc(id) {
  const img = document.querySelector(`#img${id}`);
  for (let i in animate.animate) {
    let img1 = document.querySelector(`#img${animate.animate[i]}`);
    img1.classList.remove("img");
  }
  img.className += " img";
  animate.animate.push(id);
  setTimeout(() => {
    img.className += " hidden";
    cart.Cart();
    console.log(cart.cart1.value);
  }, 1990);
}

// onBeforeUnmount(()=>{
//   alert('Hello')
// })

// onUnmount() {
//     console.log('unmount')
//     window.removeEventListener('resize', this.someMethod)
//   }
</script>

<style lang="scss" scoped>
.cart:hover {
  .hover {
    display: flex;
    animation: hover 2s linear;
  }
}

@keyframes hover {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
}

@keyframes animatename {
  0% {
    transform: scale(2);
    right: 40%;
    top: 25%;
  }
  80% {
    transform: scale(2);
    right: 40%;
    top: 25%;
  }
  100% {
    transform: scale(0);
    right: 0;
    top: -23%;
  }
}
.img {
  position: absolute;
  z-index: 99;
  background-color: black;
  color: white;
  border-radius: 5px;
  animation: animatename 2s linear;
  animation: animation-name animation-duration animation-direction;
  .cart {
    .hover {
      display: none;
    }
  }
}

@media (max-width: 550px) {
  .cart img {
    height: 13rem;
  }
}

@media (max-width: 450px) {
  .cart img {
    height: 10rem;
  }
}

@media (max-width: 350px) {
  .cart img {
    height: 8rem;
  }
}
</style>
