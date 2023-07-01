<template>
  <section class="lg:px-40 px-5 pb-40 container mx-auto">
    <!------------------------------ section1 -------------------------------------->
    <div
      class="relative bg-[#E6E6EB] w-full rounded overflow-hidden h-56 my-10"
    >
      <img
        class="absolute mx-auto h-full rounded w-full object-cover"
        src="../assets/Block.png"
        alt="img"
      />
      <div class="absolute px-20 py-10 leading-10 font-medium">
        <h1 class="text-3xl font-bold">40% OFF</h1>
        <p class="text-lg">
          Best deals this week. Fresh flowers, plants and gifts
        </p>
        <button
          class="text-sm bg-black text-white flex gap-3 p-4 mt-5 rounded items-center"
        >
          Shop now <img src="../assets/arrow.svg" alt="img" />
        </button>
      </div>
    </div>

    <!------------------------------ section2 -------------------------------------->
    <div class="grid grid-cols-2 gap-10 overflow-hidden pb-2">
      <div class="relative bg-[#E6E6EB] w-full rounded overflow-hidden h-56">
        <img
          class="absolute mx-auto rounded sm:h-72 h-60 w-full object-cover"
          src="../assets/grid1.png"
          alt="img"
        />
        <div class="absolute px-20 py-10 leading-10 font-medium">
          <h1 class="text-3xl font-bold">Nice little gifts</h1>
          <p class="text-lg">for loved ones</p>
          <button class="text-sm flex gap-3 py-4 mt-5 rounded items-center">
            View now <img src="../assets/arrow2.svg" alt="img" />
          </button>
        </div>
      </div>
      <div class="relative bg-[#E6E6EB] w-full rounded overflow-hidden h-56">
        <img
          class="absolute mx-auto rounded sm:h-72 h-60 w-full object-cover"
          src="../assets/grid2.png"
          alt="img"
        />
        <div class="absolute px-20 py-10 leading-10 font-medium">
          <h1 class="text-3xl font-bold">Plants</h1>
          <p class="text-lg">for home comfort</p>
          <button class="text-sm flex gap-3 py-4 mt-5 rounded items-center">
            View now <img src="../assets/arrow2.svg" alt="img" />
          </button>
        </div>
      </div>
    </div>

    <!------------------------------ section3 -------------------------------------->
    <div>
      <button
        class="text-2xl font-medium flex justify-between w-full py-10 mt-10 rounded items-center"
      >
        New
        <div class="flex gap-5 pr-20">
          <img
            class="cursor-pointer"
            @click="News('minus')"
            src="../assets/back.svg"
            alt="img"
          />
          <img
            class="cursor-pointer"
            @click="News('plus')"
            src="../assets/arrow2.svg"
            alt="img"
          />
        </div>
      </button>
      <div id="new" class="flex gap-10 overflow-hidden overflow-x-auto">
        <div
          class="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-2 gap-10 min-w-fit overflow-hidden"
          v-for="i in 3"
          :key="i"
        >
          <div class="font-medium w-72">
            <div class="cart">
              <img
                class="sm:h-72 bg-[#E6E6EB] h-60 w-full rounded object-cover"
                src="../assets/Block1.jpg"
                alt="img"
              />
              <div class="hover hidden gap-10 justify-center -mt-14 mb-8 z-10">
                <p class="cursor-pointer bg-white p-2 rounded">
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
                <i @click="router.push('/flowers/red_tulips')" class="bx bx-search cursor-pointer bg-white p-2 rounded"></i>
              </div>
            </div>
            <div class="text-center">
              <h1 class="text-lg py-2 mt-3">Red Tulips</h1>
              <p class="text-sm">
                46 $ &nbsp;&nbsp;&nbsp;
                <span class="font-semibold line-through text-gray-500"
                  >60 $</span
                >
              </p>
            </div>
          </div>
          <div class="font-medium">
            <div class="cart">
              <img
                class="sm:h-72 bg-[#E6E6EB] h-60 w-full rounded object-cover"
                src="../assets/Block2.png"
                alt="img"
              />
              <div class="hover hidden gap-10 justify-center -mt-14 mb-8 z-10">
                <p class="cursor-pointer bg-white p-2 rounded">
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
                <i @click="router.push('/flowers/red_tulips')" class="bx bx-search cursor-pointer bg-white p-2 rounded"></i>
              </div>
            </div>
            <div class="text-center">
              <h1 class="text-lg py-2 mt-3">White roses, 7pc.</h1>
              <p class="text-sm">44 $</p>
            </div>
          </div>
          <div class="font-medium">
            <div class="cart">
              <img
                class="sm:h-72 bg-[#E6E6EB] h-60 w-full rounded object-cover"
                src="../assets/Block3.png"
                alt="img"
              />
              <div class="hover hidden gap-10 justify-center -mt-14 mb-8 z-10">
                <p class="cursor-pointer bg-white p-2 rounded">
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
                <i @click="router.push('/flowers/red_tulips')" class="bx bx-search cursor-pointer bg-white p-2 rounded"></i>
              </div>
            </div>
            <div class="text-center">
              <h1 class="text-lg py-2 mt-3">Bouqueet “Dream”</h1>
              <p class="text-sm">53 $</p>
            </div>
          </div>
          <div class="font-medium">
            <div class="cart">
              <img
                class="sm:h-72 bg-[#E6E6EB] h-60 w-full rounded object-cover"
                src="../assets/Block4.png"
                alt="img"
              />
              <div class="hover hidden gap-10 justify-center -mt-14 mb-8 z-10">
                <p class="cursor-pointer bg-white p-2 rounded">
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
                <i @click="router.push('/flowers/red_tulips')" class="bx bx-search cursor-pointer bg-white p-2 rounded"></i>
              </div>
            </div>
            <div class="text-center">
              <h1 class="text-lg py-2 mt-3">White lilies, 21 pc.</h1>
              <p class="text-sm">70 $</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!------------------------------ section4 -------------------------------------->
    <div>
      <button
        class="text-2xl font-medium flex justify-between w-full gap-3 py-10 mt-10 rounded items-center"
      >
        Relevant
        <div class="flex gap-5 pr-20">
          <img
            class="cursor-pointer"
            @click="Relevant('minus')"
            src="../assets/back.svg"
            alt="img"
          />
          <img
            class="cursor-pointer"
            @click="Relevant('plus')"
            src="../assets/arrow2.svg"
            alt="img"
          />
        </div>
      </button>
      <div id="relevant" class="flex gap-10 overflow-hidden overflow-x-auto">
        <div
          class="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-2 gap-10 min-w-fit overflow-hidden"
          v-for="i in 3"
          :key="i"
        >
          <div class="font-medium w-72">
            <div class="cart">
              <img
                class="sm:h-72 bg-[#E6E6EB] h-60 w-full rounded object-cover"
                src="../assets/Block1.jpg"
                alt="img"
              />
              <div class="hover hidden gap-10 justify-center -mt-14 mb-8 z-10">
                <p class="cursor-pointer bg-white p-2 rounded">
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
                <i @click="router.push('/flowers/red_tulips')" class="bx bx-search cursor-pointer bg-white p-2 rounded"></i>
              </div>
            </div>
            <div class="text-center">
              <h1 class="text-lg py-2 mt-3">Red Tulips</h1>
              <p class="text-sm">
                46 $ &nbsp;&nbsp;&nbsp;
                <span class="font-semibold line-through text-gray-500"
                  >60 $</span
                >
              </p>
            </div>
          </div>
          <div class="font-medium">
            <div class="cart">
              <img
                class="sm:h-72 bg-[#E6E6EB] h-60 w-full rounded object-cover"
                src="../assets/Block2.png"
                alt="img"
              />
              <div class="hover hidden gap-10 justify-center -mt-14 mb-8 z-10">
                <p class="cursor-pointer bg-white p-2 rounded">
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
                <i @click="router.push('/flowers/red_tulips')" class="bx bx-search cursor-pointer bg-white p-2 rounded"></i>
              </div>
            </div>
            <div class="text-center">
              <h1 class="text-lg py-2 mt-3">White roses, 7pc.</h1>
              <p class="text-sm">44 $</p>
            </div>
          </div>
          <div class="font-medium">
            <div class="cart">
              <img
                class="sm:h-72 bg-[#E6E6EB] h-60 w-full rounded object-cover"
                src="../assets/Block3.png"
                alt="img"
              />
              <div class="hover hidden gap-10 justify-center -mt-14 mb-8 z-10">
                <p class="cursor-pointer bg-white p-2 rounded">
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
                <i @click="router.push('/flowers/red_tulips')" class="bx bx-search cursor-pointer bg-white p-2 rounded"></i>
              </div>
            </div>
            <div class="text-center">
              <h1 class="text-lg py-2 mt-3">Bouqueet “Dream”</h1>
              <p class="text-sm">53 $</p>
            </div>
          </div>
          <div class="font-medium">
            <div class="cart">
              <img
                class="sm:h-72 bg-[#E6E6EB] h-60 w-full rounded object-cover"
                src="../assets/Block4.png"
                alt="img"
              />
              <div class="hover hidden gap-10 justify-center -mt-14 mb-8 z-10">
                <p class="cursor-pointer bg-white p-2 rounded">
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
                <i @click="router.push('/flowers/red_tulips')" class="bx bx-search cursor-pointer bg-white p-2 rounded"></i>
              </div>
            </div>
            <div class="text-center">
              <h1 class="text-lg py-2 mt-3">White lilies, 21 pc.</h1>
              <p class="text-sm">70 $</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const router = useRouter();
const store = reactive({
  scrollNews: 0,
  scroll1: true,
  scroll1End: 1,
  scrollRelevant: 0,
  scroll: true,
  scrollEnd: 1,
});

function News(e) {
  let scroll = document.querySelector("#new");
  if (scroll.scrollLeft > 0) {
    store.scroll1End = Math.ceil(scroll.scrollLeft / 314) * 314;
  }
  if (e == "minus") {
    store.scroll1 = true;
  }
  store.scrollEnd = scroll.scrollLeft;
  if (store.scroll) {
    if (e == "plus") {
      store.scroll1End += 314;
    } else if (store.scroll1End != 0) {
      store.scroll1End -= 314;
    } else {
      return;
    }
    scroll.scrollTo(store.scroll1End, 0);
    if (scroll.scrollLeft == store.scrollEnd) {
      store.scroll1 = false;
      store.scroll1End -= 314;
    }
  }
}

function Relevant(e) {
  let scroll = document.querySelector("#relevant");
  if (scroll.scrollLeft > 0) {
    store.scrollRelevant = Math.ceil(scroll.scrollLeft / 314) * 314;
  }
  if (e == "minus") {
    store.scroll = true;
  }
  store.scrollEnd = scroll.scrollLeft;
  if (store.scroll) {
    if (e == "plus") {
      store.scrollRelevant += 314;
    } else if (store.scrollRelevant != 0) {
      store.scrollRelevant -= 314;
    } else {
      return;
    }
    scroll.scrollTo(store.scrollRelevant, 0);
    if (scroll.scrollLeft == store.scrollEnd) {
      store.scroll = false;
      store.scrollRelevant -= 314;
    }
  }
}
</script>

<style lang="scss" scoped>
.cart:hover{
  .hover{
    display: flex;
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
  /*outline: 100px solid red;*/
  animation: animatename 2s linear;
  animation: animation-name animation-duration animation-direction;
}
</style>
