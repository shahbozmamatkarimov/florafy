<template>
  <section class="md:pb-40 pb-20 container mx-auto">
    <a-carousel
      class="lg:h-[482px] md:h-[400px] sm:h-[350px] h-[220px] shadow border rounded-md"
      autoplay
    >
      <div class="w-full lg:h-[482px] md:h-[400px] sm:h-[350px] h-[220px]">
        <div
          class="flex items-center relative bg-[#E6E6EB] border-2 w-full h-full overflow-hidden"
        >
          <img
            class="absolute mx-auto h-full rounded w-full object-cover"
            src="../assets/Block.png"
            alt="img"
          />
          <div class="absolute md:px-20 px-10 md:py-10 leading-10 font-medium">
            <h1 class="md:text-3xl text-lg font-bold">40% OFF</h1>
            <p class="text-lg">
              Best deals this week. Fresh flowers, plants and gifts
            </p>
            <button
              class="text-sm bg-black text-white flex gap-3 p-4 md:mt-5 mt-2 rounded items-center"
            >
              Shop now <img src="../assets/arrow.svg" alt="img" />
            </button>
          </div>
        </div>
      </div>
      <div class="w-full lg:h-[482px] md:h-[400px] sm:h-[350px] h-[220px]">
        <div
          class="flex items-center relative bg-[#E6E6EB] border w-full h-full overflow-hidden"
        >
          <img
            class="absolute mx-auto rounded h-full w-full object-cover"
            src="../assets/grid1.png"
            alt="img"
          />
          <div
            class="absolute md:px-20 px-10 md:py-10 md:leading-10 font-medium"
          >
            <h1 class="md:text-3xl text-2xl font-bold">Nice little gifts</h1>
            <p class="md:text-lg text-sm">for loved ones</p>
            <button
              class="text-sm flex gap-3 py-4 md:mt-5 mt-2 rounded items-center"
            >
              View now <img src="../assets/arrow2.svg" alt="img" />
            </button>
          </div>
        </div>
      </div>
      <div class="w-full lg:h-[482px] md:h-[400px] sm:h-[350px] h-[220px]">
        <div
          class="flex items-center relative bg-[#E6E6EB] border w-full h-full overflow-hidden"
        >
          <img
            class="absolute mx-auto rounded h-full w-full object-cover"
            src="../assets/grid2.png"
            alt="img"
          />
          <div
            class="absolute md:px-20 px-10 md:py-10 md:leading-10 font-medium"
          >
            <h1 class="md:text-3xl text-2xl font-bold">Plants</h1>
            <p class="md:text-lg text-sm">for home comfort</p>
            <button
              class="text-sm flex gap-3 py-4 md:mt-5 mt-2 rounded items-center"
            >
              View now <img src="../assets/arrow2.svg" alt="img" />
            </button>
          </div>
        </div>
      </div>
    </a-carousel>

    <!------------------------------ section3 -------------------------------------->
    <div class="md:pt-20">
      <button
        class="text-2xl font-medium flex justify-between w-full py-10 mt-10 rounded items-center"
      >
        New
        <div class="hidden sm:flex gap-5 pr-20">
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
        <div class="relative sm:flex hidden gap-10 min-w-fit overflow-hidden">
          <div
            v-for="i in 12"
            :key="i"
            class="hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:border-gray-200 duration-500 my-3 border-2 border-white rounded-md font-medium 2xl:w-[17.2rem] lg:w-[19rem] md:w-[13.5rem] w-72"
          >
            <div class="cart">
              <img
                class="lg:h-72 h-60 bg-[#E6E6EB] w-full rounded object-cover"
                src="../assets/Block1.jpg"
                alt="img"
              />
              <div class="flex justify-center items-center">
                <div
                  class="hover absolute hidden sm:gap-14 gap-7 duration-1000 justify-center -mt-10 mb-8 z-10"
                >
                  <p
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
              <h1 class="text-lg md:py-2 md:mt-3 mt-2">Red Tulips</h1>
              <p class="text-sm">
                46 $ &nbsp;&nbsp;&nbsp;
                <span class="font-semibold line-through text-gray-500"
                  >60 $</span
                >
              </p>
            </div>
          </div>
        </div>

        <div
          class="relative mainCart sm:hidden grid grid-cols-2 gap-5 py-3 px-2 w-full overflow-hidden"
        >
          <div
            v-for="i in store.show1"
            :key="i"
            class="hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:border-gray-200 duration-500 border-2 border-white rounded-md font-medium"
          >
            <div class="cart">
              <img
                class="lg:h-72 h-60 bg-[#E6E6EB] w-full rounded object-cover"
                src="../assets/Block1.jpg"
                alt="img"
              />
              <div class="flex justify-center items-center">
                <div
                  class="hover absolute hidden sm:gap-14 gap-7 duration-1000 justify-center -mt-10 mb-8 z-10"
                >
                  <p
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
              <h1 class="text-lg md:py-2 md:mt-3 mt-2">Red Tulips</h1>
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
        <div class="hidden sm:flex gap-5 pr-20">
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
      <div
        id="relevant"
        class="relative flex gap-10 overflow-hidden overflow-x-auto"
      >
        <div class="sm:flex hidden gap-10 min-w-fit overflow-hidden">
          <div
            v-for="i in 12"
            :key="i"
            class="hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:border-gray-200 duration-500 my-3 border-2 border-white rounded-md font-medium 2xl:w-[17.2rem] lg:w-[19rem] md:w-[13.5rem] w-72"
          >
            <div class="cart">
              <img
                class="lg:h-72 h-60 bg-[#E6E6EB] w-full rounded object-cover"
                src="../assets/Block1.jpg"
                alt="img"
              />
              <div class="flex justify-center items-center">
                <div
                  class="hover absolute hidden sm:gap-14 gap-7 duration-1000 justify-center -mt-10 mb-8 z-10"
                >
                  <p
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
              <h1 class="text-lg md:py-2 md:mt-3 mt-2">Red Tulips</h1>
              <p class="text-sm">
                46 $ &nbsp;&nbsp;&nbsp;
                <span class="font-semibold line-through text-gray-500"
                  >60 $</span
                >
              </p>
            </div>
          </div>
        </div>
        <div
          class="mainCart sm:hidden grid grid-cols-2 gap-5 py-3 px-2 w-full overflow-hidden"
        >
          <div
            v-for="i in store.show2"
            :key="i"
            class="hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:border-gray-200 duration-500 border-2 border-white font-medium"
          >
            <div class="cart">
              <img
                class="lg:h-72 h-60 bg-[#E6E6EB] w-full rounded object-cover"
                src="../assets/Block4.png"
                alt="img"
              />
              <div class="flex justify-center items-center">
                <div
                  class="hover absolute hidden sm:gap-14 gap-7 duration-1000 justify-center -mt-10 mb-8 z-10"
                >
                  <p
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
              <h1 class="text-lg md:py-2 md:mt-3 mt-2">Red Tulips</h1>
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

// watch(
//   () => route.fullPath,
//   async () => {
//     let main = document.querySelector("#main");
//     main.scrollTo(0, 0);
//     routerUrl.value = route.fullPath;
//   }
// );

// onBeforeUnmount(() => {
//   alert("Hello");
// });

// onMounted(() => {
//   window.addEventListener("beforeunload", () => {
//     alert("Hello");
//   });
// });
</script>

<style lang="scss" scoped>
/* slider */
.ant-carousel :deep(.slick-slide) {
  border-radius: 4px;
  background: #e6e6eb;
  overflow: hidden;
  transition-duration: 15s;
}

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

@media (max-width: 500px) {
  .cart img {
    height: 12rem;
  }
}

@media (max-width: 400px) {
  .cart img {
    height: 10rem;
  }
}

@media (max-width: 350px) {
  .cart img {
    height: 8rem;
  }
}

@media (max-width: 300px) {
  .mainCart {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    .cart img {
      height: 17rem;
    }
  }
}
</style>
