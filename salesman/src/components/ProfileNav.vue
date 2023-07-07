<template>
  <div class="w-full border px-6 text-xl min-h-screen overscroll-y-auto">
    <div class="mt-20"></div>
    <div class="md:hidden block mx-auto text-3xl text-center mt-14">
      <h1 class="tracking-[15px] font-bold py-4">Profile</h1>
    </div>
    <div>
      <div class="relative text-center">
        <div>
          <img
            class="mx-auto w-[120px] h-[120px] rounded-full border-white ring-4 ring-gray-300 dark:ring-gray-500"
            src="https://t3.ftcdn.net/jpg/01/80/58/26/360_F_180582645_OC9VCIHohTXPFKKas6TKVTQW8ltmHmtV.webp"
            alt=""
          />
        </div>
        <h2>Karthi Madesh</h2>
        <p class="text-yellow-400">Admin</p>
      </div>
      <div class="mx-auto w-[240px] p-10 sm:leading-8 md:leading-8 lg:leading-10">
        <div @click="store.toggle = true">
          <router-link to="/" class="p-1 block">
            <i class="pr-1 bx bxs-dashboard"></i> Dashboard
          </router-link>
        </div>
        <div @click="store.toggle = true">
          <router-link to="/userprofile" class="p-1 block">
            <i class="pr-1 bx bxs-user-rectangle"></i> Profile
          </router-link>
        </div>
        <div @click="store.toggle = true">
          <router-link to="/userproducts" class="p-1 block w-40">
            <i class="pr-1 bx bxs-florist"></i> Products
          </router-link>
        </div>
        <div @click="store.toggle = true">
          <router-link to="/upload" class="p-1 block w-40">
            <i class="pr-1 bx bx-cloud-upload"></i> Upload
          </router-link>
        </div>
        <div @click="store.toggle = true">
          <router-link to="/inbox" class="p-1 block w-40">
            <i class="pr-1 bx bxs-envelope"></i> Inbox
          </router-link>
        </div>
        <div @click="store.toggle = true">
          <router-link to="/usersettings" class="p-1 block w-40">
            <i class="pr-1 bx bxs-cog"></i> Settings
          </router-link>
        </div>
      </div>
      <div class="bottom-0 text-center pr-16">
        <button>Logout <i class="pr-1 bx bxs-right-arrow-circle"></i></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useNavbar } from '../stores/UserNav'

const store = useNavbar()
</script>
<style scoped>
.router-link-active {
  background: transparent;
  border-radius: 10px;
}

.router-link-exact-active {
  background: #E72463;
  box-shadow: 2px 2px 4px rgba(128, 128, 128, 0.519);
  border-radius: 10px;
  max-width: 200px;
  padding-left: 10px;
  color: white;
}
</style>