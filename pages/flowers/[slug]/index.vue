<template>
    <section class="px-40 container">
      <!-------------------------------------------------------- slug --------------------------------------------->
      <h1 class="pb-10">Home / All flowers / Red Tulips</h1>
      <div class="grid lg:grid-cols-2 pb-40">
        <div class="h-[500px] w-[500px] rounded-lg bg-[#E6E6EB]">
          <img
            class="h-full w-full rounded-lg object-cover"
            src="../../../assets/slug.png"
            alt="img"
          />
          <div class="grid grid-cols-3 gap-5 my-2.5">
            <div class="flex gap-2 items-center">
              <div>
                <i class="border border-black rounded-full p-2 bx bx-camera"></i>
              </div>
              <p class="text-xs">Take photo of bouquet</p>
            </div>
            <div class="flex gap-2 items-center">
              <div>
                <i class="border border-black rounded-full p-2 bx bx-camera"></i>
              </div>
              <p class="text-xs">Take photo of bouquet</p>
            </div>
            <div class="flex gap-2 items-center">
              <div>
                <i class="border border-black rounded-full p-2 bx bx-camera"></i>
              </div>
              <p class="text-xs">Take photo of bouquet</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-6 leading-10">
          <div>
            <h1 class="text-2xl font-medium pb-2">Red Tulips</h1>
            <p>
              <span class="text-2xl font-medium">46 $</span
              ><span class="text-[#82828B] pl-5 line-through">60 $</span>
            </p>
            <hr class="border mt-2" />
          </div>
          <div>
            <h1>Count:</h1>
            <p>
              <i
                class="bx bx-plus bg-[#E6E6EB] text-[#595CFF] p-1 rounded-full"
              ></i>
              <input
                class="w-8 ml-5 mr-2 outline-none"
                max="999"
                type="number"
                value="25"
                required
              />
              <i
                class="bx bx-minus bg-[#E6E6EB] text-[#595CFF] p-1 rounded-full"
              ></i>
            </p>
          </div>
          <div>
            <h1>Color:</h1>
            <p class="flex gap-4 w-36 mt-2">
              <button
                class="w-9 h-9 rounded-full bg-[#F0F0F5] focus:ring-2 border-2 border-white"
              ></button>
              <button
                class="w-9 h-9 rounded-full bg-[#EE7764] focus:ring-2 border-2 border-white"
              ></button>
              <button
                class="w-9 h-9 rounded-full bg-[#FFBC2C] focus:ring-2 border-2 border-white"
              ></button>
            </p>
          </div>
          <div class="flex gap-5 items-center">
            <button class="w-80 bg-[#595CFF] rounded">Button</button>
            <p class="cursor-pointer border-2 rounded p-2 hover:bg-gray-200">
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
          </div>
          <div>
            <p class="h-14 border-b-2 flex justify-between items-center">
              Bouquet contents
              <button><i class="text-[#595CFF] bx bx-plus"></i></button>
            </p>
            <p class="h-14 border-b-2 flex justify-between items-center">
              Details <button><i class="text-[#595CFF] bx bx-plus"></i></button>
            </p>
            <p class="h-14 border-b-2 flex justify-between items-center">
              Delivery & Pay policy
              <button><i class="text-[#595CFF] bx bx-plus"></i></button>
            </p>
          </div>
        </div>
      </div>
  
      <!-------------------------------------------------------- flowers --------------------------------------------->
      <div class="pb-32">
        <div>
          <button
            class="text-2xl font-medium flex justify-between w-full py-10 mt-10 rounded items-center"
          >
            Similar flowers
            <div class="flex gap-5 pr-20">
              <img
                class="cursor-pointer"
                @click="News('minus')"
                src="../../../assets/back.svg"
                alt="img"
              />
              <img
                class="cursor-pointer"
                @click="News('plus')"
                src="../../../assets/arrow2.svg"
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
                <div>
                  <img
                    class="sm:h-72 bg-[#E6E6EB] h-60 w-full rounded object-cover"
                    src="../../../assets/Block1.jpg"
                    alt="img"
                  />
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
                <div>
                  <img
                    class="sm:h-72 bg-[#E6E6EB] h-60 w-full rounded object-cover"
                    src="../../../assets/Block2.png"
                    alt="img"
                  />
                </div>
                <div class="text-center">
                  <h1 class="text-lg py-2 mt-3">White roses, 7pc.</h1>
                  <p class="text-sm">44 $</p>
                </div>
              </div>
              <div class="font-medium">
                <div>
                  <img
                    class="sm:h-72 bg-[#E6E6EB] h-60 w-full rounded object-cover"
                    src="../../../assets/Block3.png"
                    alt="img"
                  />
                </div>
                <div class="text-center">
                  <h1 class="text-lg py-2 mt-3">Bouqueet “Dream”</h1>
                  <p class="text-sm">53 $</p>
                </div>
              </div>
              <div class="font-medium">
                <div>
                  <img
                    class="sm:h-72 bg-[#E6E6EB] h-60 w-full rounded object-cover"
                    src="../../../assets/Block4.png"
                    alt="img"
                  />
                </div>
                <div class="text-center">
                  <h1 class="text-lg py-2 mt-3">White lilies, 21 pc.</h1>
                  <p class="text-sm">70 $</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup></script>
  
  <style lang="scss" scoped></style>
  