<template>
    <section class="px-40 mx-auto container">
      <p class="h-12 text-sm font-medium">Home / Gifts</p>
      <h1 class="font-medium text-3xl">All Gifts</h1>
  
      <!-------------------------- filter --------------------------->
      <div class="flex justify-between my-10 border-b-2 pb-4">
        <div class="flex gap-20">
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
        class="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-2 gap-10 min-w-fit overflow-hidden"
      >
        <div :id="`img${i}`" class="font-medium w-72" v-for="i in 12" :key="i">
          <div class="cart">
            <img
              class="sm:h-72 bg-[#E6E6EB] h-60 w-full rounded object-cover"
              src="../../assets/Block1.jpg"
              alt="img"
            />
            <div class="hover hidden gap-10 justify-center -mt-14 mb-8 z-10">
              <p
                @click="animateFunc(i)"
                class="cursor-pointer bg-white p-2 rounded"
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
                class="bx bx-search cursor-pointer bg-white p-2 rounded"
              ></i>
            </div>
          </div>
          <div class="text-center">
            <h1 class="text-lg py-2 mt-3">Red Tulips {{ i }}</h1>
            <p class="text-sm">
              46 $ &nbsp;&nbsp;&nbsp;
              <span class="font-semibold line-through text-gray-500">60 $</span>
            </p>
          </div>
        </div>
      </div>
      <button class="bg-black rounded px-16 py-1 text-white block my-20 mx-auto">
        See more
      </button>
    </section>
  </template>
  
  <script setup>
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
    setTimeout(()=>{
      img.className += " hidden"
    }, 2000)
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
    /*outline: 100px solid red;*/
    animation: animatename 2s linear;
    animation: animation-name animation-duration animation-direction;
  }
  </style>
  