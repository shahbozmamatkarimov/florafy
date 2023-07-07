<template>
  <section class="xl:px-40 px-5 pb-40 container mx-auto">
    <!------------------------------ slider -------------------------------------->
    <div class="carousel-wrapper overflow-hidden">
      <div class="carousel-container rounded-lg">
        <div class="carousel">
          <div
            class="lg:w-[1216px] md:w-[992px] sm:w-[768px] w-full lg:h-[482px] sm:h-[300px] h-[220px]"
          >
            <div
              class="flex items-center relative bg-[#E6E6EB] lg:w-[1216px] md:w-[992px] sm:w-[768px] w-full h-full border overflow-hidden my-10"
            >
              <img
                class="absolute mx-auto h-full rounded w-full object-cover"
                src="../assets/Block.png"
                alt="img"
              />
              <div
                class="absolute md:px-20 px-10 py-10 md:mb-0 mb-10 leading-10 font-medium"
              >
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
          </div>

          <div
            class="lg:w-[1216px] md:w-[992px] sm:w-[768px] w-full lg:h-[482px] sm:h-[300px] h-[220px]"
          >
            <div
              class="flex items-center relative bg-[#E6E6EB] lg:w-[1216px] md:w-[992px] sm:w-[768px] w-full h-full border overflow-hidden my-10"
            >
              <img
                class="absolute mx-auto rounded h-full w-full object-cover"
                src="../assets/grid1.png"
                alt="img"
              />
              <div
                class="absolute md:px-20 px-10 py-10 md:mb-0 mb-10 leading-10 font-medium"
              >
                <h1 class="text-3xl font-bold">Nice little gifts</h1>
                <p class="text-lg">for loved ones</p>
                <button
                  class="text-sm flex gap-3 py-4 mt-5 rounded items-center"
                >
                  View now <img src="../assets/arrow2.svg" alt="img" />
                </button>
              </div>
            </div>
          </div>
          <div
            class="lg:w-[1216px] md:w-[992px] sm:w-[768px] w-full lg:h-[482px] sm:h-[300px] h-[220px]"
          >
            <div
              class="flex items-center relative bg-[#E6E6EB] lg:w-[1216px] md:w-[992px] sm:w-[768px] w-full h-full border overflow-hidden my-10"
            >
              <img
                class="absolute mx-auto rounded h-full w-full object-cover"
                src="../assets/grid2.png"
                alt="img"
              />
              <div
                class="absolute md:px-20 px-10 py-10 md:mb-0 mb-10 leading-10 font-medium"
              >
                <h1 class="text-3xl font-bold">Plants</h1>
                <p class="text-lg">for home comfort</p>
                <button
                  class="text-sm flex gap-3 py-4 mt-5 rounded items-center"
                >
                  View now <img src="../assets/arrow2.svg" alt="img" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!------------------------------ slider end -------------------------------------->

    <!------------------------------ section3 -------------------------------------->
    <div class="pt-20">
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
        <div class="sm:flex hidden gap-10 min-w-fit overflow-hidden">
          <div
            v-for="i in 12"
            :key="i"
            class="font-medium 2xl:w-[17.2rem] lg:w-[19rem] md:w-[13.5rem] w-72"
          >
            <div class="cart">
              <img
                class="lg:h-72 h-60 bg-[#E6E6EB] w-full rounded object-cover"
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
                <i
                  @click="router.push('/flowers/red_tulips')"
                  class="bx bx-search cursor-pointer bg-white p-2 rounded"
                ></i>
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
        </div>
        <div class="sm:hidden grid grid-cols-2 gap-10 w-full overflow-hidden">
          <div v-for="i in store.show1" :key="i" class="font-medium">
            <div class="cart">
              <img
                class="lg:h-72 h-40 bg-[#E6E6EB] w-full rounded object-cover"
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
                <i
                  @click="router.push('/flowers/red_tulips')"
                  class="bx bx-search cursor-pointer bg-white p-2 rounded"
                ></i>
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
        </div>
      </div>
      <div class="sm:hidden flex justify-center items-center">
        <button
          @click="addShow1"
          class="flex items-center gap-2 text-sm font-medium border-2 border-[#595CFF] py-3 px-5 rounded mt-10"
        >
          <img src="../assets/show.svg" alt="" /> See more
        </button>
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
        <div class="sm:flex hidden gap-10 min-w-fit overflow-hidden">
          <div
            v-for="i in 12"
            :key="i"
            class="font-medium 2xl:w-[17.2rem] lg:w-[19rem] md:w-[13.5rem] w-72"
          >
            <div class="cart">
              <img
                class="lg:h-72 h-60 bg-[#E6E6EB] w-full rounded object-cover"
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
                <i
                  @click="router.push('/flowers/red_tulips')"
                  class="bx bx-search cursor-pointer bg-white p-2 rounded"
                ></i>
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
        </div>
        <div class="sm:hidden grid grid-cols-2 gap-10 w-full overflow-hidden">
          <div v-for="i in store.show2" :key="i" class="font-medium">
            <div class="cart">
              <img
                class="lg:h-72 h-40 bg-[#E6E6EB] w-full rounded object-cover"
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
                <i
                  @click="router.push('/gifts/red_tulips')"
                  class="bx bx-search cursor-pointer bg-white p-2 rounded"
                ></i>
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
        </div>
      </div>
      <div class="sm:hidden flex justify-center items-center">
        <button
          @click="addShow2"
          class="flex items-center gap-2 text-sm font-medium border-2 border-[#595CFF] py-3 px-5 rounded mt-10"
        >
          <img src="../assets/show.svg" alt="" /> See more
        </button>
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
  show1: 4,
  show2: 4,
  slider: 1,
});

function addShow1() {
  store.show1 += 4;
}

function addShow2() {
  store.show2 += 4;
}

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
  }, 1990);
}
</script>

<style lang="scss" scoped>
.cart:hover {
  .hover {
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
  border-radius: 5px;
  animation: animatename 2s linear;
  animation: animation-name animation-duration animation-direction;
  .cart {
    .hover {
      display: none;
    }
  }
}

// carousel

/* normal carousel NON HOVER styles */
.carousel-wrapper {
  width: 100%;
  height: 482px;
  display: flex;
  align-items: center;
}

.carousel {
  display: flex;
  width: 1216px;
  animation: sliding 12s infinite;
}

@keyframes sliding {
  0% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(-1216px);
  }
  30% {
    transform: translateX(-1216px);
  }
  40% {
    transform: translateX(-2432px);
  }
  50% {
    transform: translateX(-2432px);
  }
  60% {
    transform: translateX(-1216px);
  }
  70% {
    transform: translateX(-1216px);
  }
  80% {
    transform: translateX(0);
  }
}

@media screen and (max-width: 992px) {
  .carousel-wrapper {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
  }

  .carousel {
    display: flex;
    width: 992px;
    animation: sliding 12s infinite;
  }

  /*.carousel:hover {
    animation-play-state: paused;
  }*/

  @keyframes sliding {
    30% {
      transform: translateX(0);
    }
    35% {
      transform: translateX(-992px);
    }
    65% {
      transform: translateX(-992px);
    }
    70% {
      transform: translateX(-1984px);
    }
    98% {
      transform: translateX(-1984px);
    }
    100% {
      transform: translateX(0);
    }
  }
}

@media screen and (max-width: 768px) {
  .carousel-wrapper {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
  }

  .carousel {
    display: flex;
    width: 768px;
    animation: sliding 12s infinite;
  }

  /*.carousel:hover {
    animation-play-state: paused;
  }*/

  @keyframes sliding {
    30% {
      transform: translateX(0);
    }
    35% {
      transform: translateX(-768px);
    }
    65% {
      transform: translateX(-768px);
    }
    70% {
      transform: translateX(-1536px);
    }
    98% {
      transform: translateX(-1536px);
    }
    100% {
      transform: translateX(0);
    }
  }
}

@media screen and (max-width: 600px) {
  .carousel-wrapper {
    width: 100%;
    height: 220px;
    display: flex;
    align-items: center;
  }

  .carousel {
    display: flex;
    width: 500px;
    animation: sliding 12s ease;
  }

  /*.carousel:hover {
    animation-play-state: paused;
  }*/

  @keyframes sliding {
    30% {
      transform: translateX(0);
    }
    35% {
      transform: translateX(-500px);
    }
    65% {
      transform: translateX(-500px);
    }
    70% {
      transform: translateX(-1000px);
    }
    98% {
      transform: translateX(-1000px);
    }
    100% {
      transform: translateX(0);
    }
  }
}
</style>
