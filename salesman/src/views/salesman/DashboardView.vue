<template>
  <div>
    <div class="min-h-screen">
      <Menu>Dashboard</Menu>
      <div class="md:h-0 h-9"></div>
      <div class="mt-10 rounded-2xl w-[90%] mx-auto">
        <LineChart />
      </div>
      <div class="p-10 flex flex-wrap">
        <div
          class="w-full min-w-[200px] cursor-pointer duration-500 lg:w-[23%] text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg mx-auto md:max-w-[70%] my-6 p-2"
        >
          <div class="flex p-5">
            <div class="w-1/2">
              <i
                class="bx bx-dollar-circle text-4xl bg-blue-900 p-5 rounded-md absolute -top-10"
              ></i>
            </div>
            <div class="pl-5">
              <h3>Xaridlar</h3>
              <h2>$ 3.456</h2>
            </div>
          </div>
          <p class="px-5 py-2 border-t-2">
            <i class="bx bx-history"></i> Xaridlar <i class="float-right">45%</i>
          </p>
        </div>
        <div
          class="min-w-[200px] cursor-pointer duration-500 lg:w-[23%] w-full text-white bg-gradient-to-r from-green-300 via-green-400 to-green-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-500 rounded-lg md:max-w-[70%] mx-auto my-6 p-2"
        >
          <div class="flex p-5">
            <div class="w-1/2">
              <i
                class="bx bxs-hand-up text-4xl bg-green-900 p-5 rounded-md absolute -top-10"
              ></i>
            </div>
            <div class="pl-5">
              <h3>Ko'rilgan</h3>
              <h2>456</h2>
            </div>
          </div>
          <p class="px-5 py-2 border-t-2">
            <i class="bx bx-history"></i> Ko'rilganlar soni<i class="float-right">15%</i>
          </p>
        </div>
        <div
          class="min-w-[200px]cursor-pointer duration-500 lg:w-[23%] text-white bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-200 hover:bg-gradient-to-br rounded-lg mx-auto md:max-w-[70%] w-full my-6 p-2"
        >
          <div class="flex p-5">
            <div class="w-1/2">
              <i
                class="bx bxs-like text-4xl bg-yellow-500 p-5 rounded-md absolute -top-10"
              ></i>
            </div>
            <div class="pl-5">
              <h3>Likelar</h3>
              <h2>206</h2>
            </div>
          </div>
          <p class="px-5 py-2 border-t-2">
            <i class="bx bx-history"></i> Likelar <i class="float-right">25%</i>
          </p>
        </div>
        <div
          class="min-w-[200px] cursor-pointer duration-500 lg:w-[23%] text-white bg-gradient-to-r from-red-300 via-red-400 to-red-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 rounded-lg mx-auto md:max-w-[70%] w-full my-6 p-2"
        >
          <div class="flex p-5">
            <div class="w-1/2">
              <i
                class="bx bxs-dislike text-4xl bg-red-800 p-5 rounded-md absolute -top-10"
              ></i>
            </div>
            <div class="pl-5">
              <h3>Dislikelar</h3>
              <h2>56</h2>
            </div>
          </div>
          <p class="px-5 py-2 border-t-2">
            <i class="bx bx-history"></i> Dislikelar <i class="float-right">15%</i>
          </p>
        </div>
      </div>
      <div class="border rounded-2xl w-[90%] mx-auto">
        <CanvasJSChart />
      </div>
    </div>
    <div class="h-10"></div>

    <!-- ------------------------------------------------------------------------------------------------ -->
    <div class="lg:flex lg:justify-between my-10 mx-6">
      <div
        class="w-full max-w-lg mx-auto p-4 bg-white border border-gray-200 rounded-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="flex items-center justify-between mb-4">
          <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Eng so'ngi mijozlar
          </h5>
          <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            Barchasi
          </a>
        </div>
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <img
                    class="w-8 h-8 rounded-full"
                    src="https://t3.ftcdn.net/jpg/01/80/58/26/360_F_180582645_OC9VCIHohTXPFKKas6TKVTQW8ltmHmtV.webp"
                    alt="Neil image"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Neil Sims
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@windster.com
                  </p>
                </div>
                <div
                  class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
                >
                  $320
                </div>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <img
                    class="w-8 h-8 rounded-full"
                    src="https://t3.ftcdn.net/jpg/01/80/58/26/360_F_180582645_OC9VCIHohTXPFKKas6TKVTQW8ltmHmtV.webp"
                    alt="Bonnie image"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Bonnie Green
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@windster.com
                  </p>
                </div>
                <div
                  class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
                >
                  $3467
                </div>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <img
                    class="w-8 h-8 rounded-full"
                    src="https://t3.ftcdn.net/jpg/01/80/58/26/360_F_180582645_OC9VCIHohTXPFKKas6TKVTQW8ltmHmtV.webp"
                    alt="Michael image"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Michael Gough
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@windster.com
                  </p>
                </div>
                <div
                  class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
                >
                  $67
                </div>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <img
                    class="w-8 h-8 rounded-full"
                    src="https://t3.ftcdn.net/jpg/01/80/58/26/360_F_180582645_OC9VCIHohTXPFKKas6TKVTQW8ltmHmtV.webp"
                    alt="Lana image"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Lana Byrd
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@windster.com
                  </p>
                </div>
                <div
                  class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
                >
                  $367
                </div>
              </div>
            </li>
            <li class="pt-3 pb-0 sm:pt-4">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <img
                    class="w-8 h-8 rounded-full"
                    src="https://t3.ftcdn.net/jpg/01/80/58/26/360_F_180582645_OC9VCIHohTXPFKKas6TKVTQW8ltmHmtV.webp"
                    alt="Thomas image"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Thomes Lean
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@windster.com
                  </p>
                </div>
                <div
                  class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
                >
                  $2367
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="relative bg-white max-w-lg rounded-lg lg:mt-0 mt-10 px-2 mx-auto overflow-x-auto sm:rounded-lg"
      >
        <div class="flex bg-white justify-between w-full px-4 py-4">
          <p class="font-semibold text-black text-lg">Eng so'ngi mahsulotlar</p>
          <button class="text-blue-700 float-right">Barchasi</button>
        </div>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td class="w-32 md:p-4">
                <img
                  src="https://www.thespruce.com/thmb/c3znkzZgMeuvzBy4wH13jVllfUo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/plants-with-big-flowers-4138211-hero-b10becb169064cc4b3c7967adc1b22e1.jpg"
                  alt="Apple Watch"
                />
              </td>
              <td class="py-9 font-semibold text-gray-900 dark:text-white sm:block hidden">
                Binafsha
              </td>
              <td class="py-4">
                <div class="flex items-center px-2 space-x-3">
                  <button
                    class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button"
                  >
                    <span class="sr-only">Quantity button</span>
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <div>
                    <input
                      type="number"
                      id="first_product"
                      class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="1"
                      required
                    />
                  </div>
                  <button
                    class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button"
                  >
                    <span class="sr-only">Quantity button</span>
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td class="y-4 font-semibold text-gray-900 dark:text-white">$599</td>
            </tr>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td class="w-32 md:p-4">
                <img
                  src="https://www.thespruce.com/thmb/c3znkzZgMeuvzBy4wH13jVllfUo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/plants-with-big-flowers-4138211-hero-b10becb169064cc4b3c7967adc1b22e1.jpg"
                  alt="Apple Imac"
                />
              </td>
              <td class="py-9 font-semibold text-gray-900 dark:text-white sm:block hidden">
                Atirgul
              </td>
              <td class="px-2 py-4">
                <div class="flex items-center space-x-3">
                  <button
                    class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button"
                  >
                    <span class="sr-only">Quantity button</span>
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <div>
                    <input
                      type="number"
                      id="second_product"
                      class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="1"
                      required
                    />
                  </div>
                  <button
                    class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button"
                  >
                    <span class="sr-only">Quantity button</span>
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td class="py-4 font-semibold text-gray-900 dark:text-white">$2499</td>
            </tr>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td class="w-32 md:p-4">
                <img
                  src="https://www.thespruce.com/thmb/c3znkzZgMeuvzBy4wH13jVllfUo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/plants-with-big-flowers-4138211-hero-b10becb169064cc4b3c7967adc1b22e1.jpg"
                  alt="Iphone 12"
                />
              </td>
              <td class="py-9 font-semibold text-gray-900 dark:text-white sm:block hidden">Lola</td>
              <td class="px-2 py-4">
                <div class="flex items-center space-x-3">
                  <button
                    class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button"
                  >
                    <span class="sr-only">Quantity button</span>
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <div>
                    <input
                      type="number"
                      id="third_product"
                      class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="1"
                      required
                    />
                  </div>
                  <button
                    class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button"
                  >
                    <span class="sr-only">Quantity button</span>
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td class="py-9 font-semibold text-gray-900 dark:text-white">$999</td>
            </tr>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td class="w-32 md:p-4">
                <img
                  src="https://www.thespruce.com/thmb/c3znkzZgMeuvzBy4wH13jVllfUo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/plants-with-big-flowers-4138211-hero-b10becb169064cc4b3c7967adc1b22e1.jpg"
                  alt="Apple Imac"
                />
              </td>
              <td class="py-9 font-semibold text-gray-900 dark:text-white sm:block hidden">
                Atirgul
              </td>
              <td class="px-2 py-4">
                <div class="flex items-center space-x-3">
                  <button
                    class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button"
                  >
                    <span class="sr-only">Quantity button</span>
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <div>
                    <input
                      type="number"
                      id="second_product"
                      class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="1"
                      required
                    />
                  </div>
                  <button
                    class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button"
                  >
                    <span class="sr-only">Quantity button</span>
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td class="py-4 font-semibold text-gray-900 dark:text-white">$2499</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>    ``
  </div>
</template>
<script setup>
import { CanvasJSChart, LineChart, Menu } from '../../components'
</script>
<style>
body,
.menu {
  background: radial-gradient(
    circle,
    rgba(236, 252, 248, 0.992) 0%,
    rgba(176, 223, 248, 0.345) 100%
  );
}
/* body {
  background: radial-gradient(circle, rgba(33, 38, 173, 1) 0%, rgba(41, 153, 209, 1) 100%);
} */
.container {
  position: relative;
}
.back-button {
  border-radius: 4px;
  padding: 8px;
  border: none;
  font-size: 16px;
  background-color: #f25f5c;
  color: white;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
</style>