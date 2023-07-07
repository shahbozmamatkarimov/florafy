<template>
  <div>
    <Menu>User Profile</Menu>
    <div class="px-10 text-xl">
      <div
        class="lg:w-[65%] shadow-md shadow-gray-300 mr-5 md:min-h-full min-h-[700px] p-5 w-full mt-32 sm:p-10 md:float-left"
      >
        <img
          class="mx-auto w-[120px] h-[120px] rounded-full ring-4 ring-gray-300 -my-32 mb-4"
          src="https://t3.ftcdn.net/jpg/01/80/58/26/360_F_180582645_OC9VCIHohTXPFKKas6TKVTQW8ltmHmtV.webp"
          alt=""
        />
        <div class="login-box">
          <form>
            <div class="user-box lg:w-1/3 w-full float-left">
              <input type="search" class="w-[90%]" required="" />
              <label>Company</label>
            </div>
            <div class="user-box lg:w-1/3 w-full float-left">
              <input type="search" class="w-[90%]" required="" />
              <label>First name...</label>
            </div>
            <div class="user-box lg:w-1/3 w-full float-left">
              <input type="search" class="w-[89%]" required="" />
              <label>Last name...</label>
            </div>
            <div class="user-box md:w-1/2 w-full float-left">
              <input type="search" class="w-[90%]" required="" />
              <label>Shahar...</label>
            </div>
            <div class="user-box md:w-1/2 w-full float-left">
              <input type="search" class="w-[92%]" required="" />
              <label>Tuman...</label>
            </div>
            <div class="user-box w-full float-left">
              <input type="search" class="w-[96%]" required="" />
              <label>Manzil...</label>
            </div>
            <div class="user-box w-full float-left">
              <input type="searcharea" class="w-[96%] z-0" required="" />
              <label class="md:text-2xl text-[17px]">O'zingiz haqingizda...</label>
            </div>
          </form>
        </div>
      </div>
      <div class="lg:w-[30%] w-full float-left leading-10 text-center text-gray-500 text-lg">
        <div class="mb-20 w-full py-10 shadow-md mt-32 shadow-gray-300">
          <div class="flex justify-center items-center">
            <img
              class="absolute -top-16 w-[120px] h-[120px] rounded-full ring-4 ring-gray-300 dark:ring-gray-500 -my-14"
              src="https://t3.ftcdn.net/jpg/01/80/58/26/360_F_180582645_OC9VCIHohTXPFKKas6TKVTQW8ltmHmtV.webp"
              alt="img"
            />
          </div>
          <h2 class="text-[20px] py-5">Company name</h2>
          <h1 class="p-1 font-bold text-gray-700">Karthi Madesh</h1>
          <p class="title p-2 text-[15px] mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, praesentium. Lorem
            ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur.
          </p>
          <h3 class="truncate px-10">Tashkent, Olmazor tumani dhs djsdks shj dhksdk shldj</h3>
          <h4 class="truncate px-10">
            Adress... Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Facere ex id dicta obcaecati. Unde suscipit quibusdam, corporis dolor,
            in illum placeat repudiandae, officia commodi esse blanditiis impedit pariatur sed
            deserunt.
          </h4>
          <button class="m-3 px-10 text-white bg-[#E72463] rounded-lg">Follow</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Menu } from '../../components'
</script>
<style scoped>
.login-box {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.login-box .user-box input {
  padding: 10px 0;
  color: #000;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #000;
  outline: none;
  background: transparent;
  height: 50px;
}

input:focus,
textarea:focus {
  border-bottom: 3px solid blue !important;
}

.login-box .user-box label,
textarea {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  color: #000;
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -25px;
  left: 0;
  color: #03e9f4;
  font-size: 16px;
}
</style>