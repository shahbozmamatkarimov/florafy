<template>
  <div>
    <Menu>Upload</Menu>
    <div class="container"></div>
    <div class="lg:flex flex-wrap justify-between px-6">
      <div class="lg:w-1/2 min-h-screen md:text-xl md:w-full py-12">
        <div>
          <div class="login-box">
            <form @submit.prevent="modalToggle">
              <div class="user-box w-full float-left">
                <label>Gul nomi</label>
                <input type="search" class="border px-3 rounded-md block" required="" />
              </div>
              <div class="w-full float-left pb-8">
                <label class="pb-5">Gul ma'lumotlari</label>
                <div class="flex flex-wrap">
                  <div class="lg:w-1/2 border-r border-white w-full">
                    <h1 class="px-5">Turi</h1>
                    <div class="px-5">
                      <select class="border w-32 rounded-md block">
                        <option value="0">Atirgul</option>
                        <option value="1">Xona gul</option>
                        <option value="2">Yer gul</option>
                      </select>
                    </div>
                  </div>
                  <div class="lg:w-1/2 border-r border-white w-full">
                    <h1 class="px-5">Rangi</h1>
                    <div class="px-5">
                      <select class="border w-32 rounded-md block">
                        <option class="hover:bg-red-500 font-bold bg-yellow-500" value="0">
                          sariq
                        </option>
                        <option class="</div>font-bold bg-red-500" value="1">qizil</option>
                        <option class="font-bold bg-green-500" value="2">yashil</option>
                        <option class="font-bold bg-white" value="3">oq</option>
                        <option class="font-bold text-white bg-black" value="4">qora</option>
                      </select>
                    </div>
                  </div>
                  <div class="lg:w-1/2 border-r border-white w-full">
                    <h1 class="px-5">Guli</h1>
                    <div class="px-5">
                      <select class="border w-32 rounded-md block">
                        <option value="0">Gulli</option>
                        <option value="1">Gulsiz</option>
                      </select>
                    </div>
                  </div>
                  <div class="lg:w-1/2 border-r border-white w-full">
                    <h1 class="px-5">O'sishi</h1>
                    <div class="px-5">
                      <select class="border rounded-md block">
                        <option value="1">Quyoshli joyda o'sadi</option>
                        <option value="2">Soyali joyda o'sadi</option>
                        <option value="3">Moslashuvchan</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="user-box w-full float-left">
                <label>Gul Narxi</label>
                <input
                  type="text"
                  class="border rounded-md block px-3"
                  placeholder="2 000.000"
                  required=""
                />
              </div>
              <div class="user-box w-full float-left">
                <label>Gul haqida</label>
                <textarea
                  name="about"
                  id="about"
                  class="block rounded-lg text-sm mx-1 p-3"
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
              <div class="user-box w-full float-left">
                <label>Gul rasmini joylash</label>
                <label for="img">
                  <button
                    @click="uploadImage"
                    type="button"
                    class="flex justify-between border rounded-lg w-3/12 bg-white gap-5 p-2"
                  >
                    <span class="text-sm font-bold">Browse</span><i class="bx bx-camera"></i>
                  </button>
                </label>
              </div>
              <div class="flex flex-wrap user-box w-full float-left">
                <div v-for="(el, i) in 5" :key="i">
                  <img
                    class="w-24 h-28 p-1 rounded-lg"
                    src="https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg"
                    alt="img"
                  />
                </div>
              </div>
              <div class="w-full float-left">
                <input
                  class="lg:hidden block my-5 bg-blue-500 p-2 px-4 rounded-md float-right"
                  type="submit"
                  value="Yuklash"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="lg:flex justify-center min-h-screen relative hidden">
        <div class="w-[350px] h-[550px] max-w-sm rounded-lg m-10 border shadow-2xl">
          <a href="#">
            <img
              v-if="!previewImage"
              class="rounded-t-lg h-[350px] w-full"
              src="https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/CGPD_LOL_preset_proflowers-mx-tile-wide-lv-new.jpeg?v=1658178772"
              alt="image"
            />
            <img v-else class="rounded-t-lg h-[350px] w-full" :src="previewImage" alt="image" />
          </a>
          <h1 class="text-center rounded-b-2xl px-5 py-1 text-lg font-medium bg-[#ec0eec]">Name</h1>
          <div class="px-5 pb-5 rounded-lg">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Apple Watch Series 7 GPS, Aluminium Case, Starlight
              </h5>
            </a>
            <div class="text-xl flex justify-around p-4">
              <p><i class="cursor-pointer bx bx-like"></i> 0</p>
              <p><i class="cursor-pointer bx bx-dislike"></i> 0</p>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-xl font-bold text-gray-900 dark:text-white">599.000.000 so'm</span>
              <button type="button"
                class="float-right text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Main modal -->
      <div
        id="defaultModal"
        tabindex="-1"
        aria-hidden="true"
        :class="{ hidden: Toggle }"
        class="fixed top-0 left-0 right-0 z-50 bg-[#8080808c] w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative w-full md:w-[400px] mx-auto my-auto h-[500px] max-w-2xl max-h-full">
          <div class="flex justify-center min-h-screen relative">
            <div class="min-w-full h-[550px] max-w-sm rounded-lg m-10 border shadow-2xl">
              <div class="p-2 flex justify-between bg-blue-500 font-bold text-white">
                <h1 class="p-1">Ko'rinishi</h1>
                <button @click="modalToggle"><i class="bx bx-x text-xl"></i></button>
              </div>
              <a href="#">
                <img
                  v-if="!previewImage"
                  class="rounded-t-lg h-[250px] w-full"
                  src="https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/CGPD_LOL_preset_proflowers-mx-tile-wide-lv-new.jpeg?v=1658178772"
                  alt="image"
                />
                <img v-else class="rounded-t-lg h-[250px] w-full" :src="previewImage" alt="image" />
              </a>
              <h1 class="rounded-b-lg text-center text-white p-1 bg-purple-600"><i>Name</i></h1>
              <div class="px-5 pb-8 rounded-lg bg-white">
                <a href="#">
                  <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Apple Watch Series 7 GPS, Aluminium Case, Starlight
                  </h5>
                </a>
                <div class="text-xl flex justify-around p-4">
                  <p><i class="cursor-pointer bx bx-like"></i> 0</p>
                  <p><i class="cursor-pointer bx bx-dislike"></i> 0</p>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-3xl font-bold text-gray-900 dark:text-white">599.000.000</span>
                  <button
                    type="button"
                    @click="modalToggle"
                    class="focus:ring-4 focus:outline-none active:animate-ping focus:ring-pink-500 hover:bg-pink-500 text-white bg-gradient-to-br from-pink-700 to-voilet-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform"
                  >
                    Davom etish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Menu } from '../../components'

const previewImage = ref(null)
const Toggle = ref(true)

function modalToggle() {
  Toggle.value = !Toggle.value
}

import { Uploader } from 'uploader'

const uploader = Uploader({
  apiKey: 'free'
})

const options = { multi: true }

function uploadImage() {
  uploader
    .open(options)
    .then((files) => {
      if (files.length === 0) {
        console.log('No files selected.')
      } else {
        console.log('Files uploaded:')
        console.log(files.map((f) => f.fileUrl))
      }
    })
    .catch((err) => {
      console.error(err)
    })
}
</script>