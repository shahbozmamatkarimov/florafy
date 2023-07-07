<template>
  <div>
    <Menu>Products</Menu>
    <main class="pb-20 mt-0 w-full" @scroll="scrolling">
      <section v-show="store.state.load == false">
        <div>
          <div class="wrapper lg:mx-10 mt-5">
            <div
              class="cards shadow-lg mb-4 hover:shadow-gray-400 pb-2 max-w-40 bg-white rounded text-center font-bold mx-1"
              v-for="i in store.List[0]" :key="i.id">
              <img :src="`https://picsum.photos/500/500?random=${i.id}}`" class="card-img rounded-t-md mx-auto max-h-52"
                alt="img">
              <hr class="border-gray-100">
              <h1 class="mx-auto w-[80%] text-center truncate">{{ i.category }}</h1>
              <h1 class="w-[80%] mx-auto text-start text-gray-400 text-xs truncate">{{ i.title }}</h1>
              <p class="font-bold flex w-[80%] justify-between mx-auto items-center"><span
                  class="font-medium">80.000</span><i class='bx bxs-cart-add cursor-pointer text-2xl text-red-500'></i>
              </p>
              <router-link :to="`/products/${i.id}/${i.title.split(' ').join('_')}`">
                <button
                  class="mt-2 border-2 border-red-600 rounded-lg px-2 py-1 text-sm text-[#E72463] w-[80%] cursor-pointer active:animate-ping duration-200 bg-white hover:bg-[#E72463] hover:text-white">
                  Sotib olish
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div v-show="store.state.load == true" class="wrapper mx-auto">
          <div class="wrapper mx-10 mt-5">
            <div class="cards shadow-lg mb-4 hover:shadow-gray-400 max-w-40 bg-white rounded text-center font-bold mx-1"
              v-for="el in 12" :key="el">
              <img src="../../assets/placeholder-image.png" class="activity card-img max-h-52 rounded-t-md border-2 w-full"
                alt="img">
              <hr class="border-gray-100">
              <div class="activity text-white pb-2 rounded-b-md">
                <h1 class="text-center font-bold text-gray-400 truncate">category...
                </h1>
                <h1 class="w-[80%] mx-auto text-start text-xs truncate">describe...</h1>
                <p class="font-bold flex w-[80%] justify-between mx-auto items-center"><span
                    class="font-medium">price...</span><i
                    class='bx bxs-cart-add cursor-pointer text-2xl text-red-500'></i>
                </p>
                <button
                  class="activity mt-2 border-2 border-gray-500 rounded-lg px-2 py-1 text-sm text-gray-400 w-[80%] cursor-pointer">
                  Sotib olish
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script setup>
import { Menu } from '../../components'
import { onMounted } from 'vue'
import { useContactStore } from '../../stores/products'

const store = useContactStore()

onMounted(() => {
  store.getProducts()
})
</script>


<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.card-img {
  object-fit: contain;
}

.cards {
  width: 200px;
}

@media (max-width: 720px) {
  .cards {
    margin: 5px auto;
  }
}

.activity {
  background-size: 500% 500%;
  background-image: linear-gradient(-45deg, #001f3f 0%, #001f3f95 25%, #001f3f 51%, #001f3f6b 100%);
  -webkit-animation: AnimateBG 2s ease infinite;
  animation: AnimateBG 2s ease-in-out infinite;
}

@-webkit-keyframes AnimateBG {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

@keyframes AnimateBG {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>