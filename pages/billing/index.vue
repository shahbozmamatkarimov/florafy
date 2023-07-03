<template>
  <section class="grid grid-cols-2 px-40 pb-40 container mx-auto">
    <div>
      <p class="h-12 text-sm font-medium">
        Level 1 / Level 2 / Level 3 / Level 4
      </p>
      <h1 class="font-medium text-3xl">Checkout</h1>
      <div class="flex items-center gap-5 py-20">
        <p class="flex gap-2 items-center text-[#595CFF]">
          <span
            class="flex justify-center items-center pb-1 w-6 h-6 border bg-[#595CFF] text-white rounded-full"
            >1</span
          ><span>Contacts</span>
        </p>
        <span class="inline-block h-[0.2rem] w-16 bg-black"></span>
        <p class="flex gap-2 items-center">
          <span
            class="flex justify-center items-center pb-1 w-6 h-6 border border-[#595CFF] rounded-full"
            >2</span
          ><span>Shiping</span>
        </p>
        <span class="inline-block h-[0.2rem] w-16 bg-[#AFB1BD]"></span>
        <p class="flex gap-2 items-center text-[#AFB1BD]">
          <span
            class="flex justify-center items-center pb-1 w-6 h-6 border border-[#AFB1BD] rounded-full"
            >3</span
          ><span>Payment</span>
        </p>
      </div>
      <div class="flex flex-col gap-10 w-[77%]">
        <div class="flex flex-col gap-5">
          <h1>Delivery method</h1>
          <label
            for="today"
            class="flex border py-3 rounded active:border-[#595CFF]"
          >
            <input class="w-[10%] m-3" id="today" type="radio" name="select" />
            <div class="w-[90%]">
              <div>
                <h1>Pick up</h1>
                <p>Today, pickup is available in 4 stores</p>
              </div>
            </div>
            <p class="w-[20%]">FREE</p>
          </label>
          <label
            for="tomorrow"
            class="flex border py-3 rounded active:border-[#595CFF]"
          >
            <input
              class="w-[10%] m-3"
              type="radio"
              id="tomorrow"
              name="select"
            />
            <div class="w-[90%]">
              <div>
                <h1>Courier</h1>
                <p>Tomorrow</p>
              </div>
            </div>
            <p class="w-[20%]">FREE</p>
          </label>
        </div>
        <div>
          <h1>Delivery address</h1>
          <div class="flex gap-5 pt-5">
            <div class="bg-[#F9F9FB] w-40 rounded">
              <select class="outline-none py-2 px-3 mr-5 w-36 bg-transparent">
                <option value="London">London</option>
                <option value="USA">USA</option>
                <option value="Paris">Paris</option>
              </select>
            </div>
            <p class="flex items-center rounded w-[70%] bg-[#F9F9FB]">
              <input class="outline-none bg-transparent placeholder-black w-full px-4" type="text" placeholder="12 Marlbary, 23b">
            </p>
          </div>
        </div>
        <div>
          <h1>Date & time</h1>
          <div class="grid grid-cols-2 gap-5 pt-5">
            <div class="bg-[#F9F9FB] rounded">
              <select
                class="outline-none py-2 px-3 mr-5 w-[93%] bg-transparent"
              >
                <option value="London">Tomorrow, 22.09</option>
                <option value="USA">Tomorrow, 20.00</option>
                <option value="Paris">Tomorrow, 12.00</option>
              </select>
            </div>
            <div class="bg-[#F9F9FB] rounded">
              <select
                class="outline-none py-2 px-3 mr-5 w-[93%] bg-transparent"
              >
                <option value="London">10:00 - 20:00</option>
                <option value="USA">12:00 - 22:00</option>
                <option value="Paris">8:00 - 12:00</option>
              </select>
            </div>
          </div>
        </div>
        <hr />
        <div class="flex justify-between">
          <button
            @click="router.back()"
            class="flex items-center gap-3 w-44 py-2 rounded"
          >
            <img src="../../assets/back2.svg" alt="img" /> Back step
          </button>
          <button
            @click="router.push('/billing/payment')"
            class="flex justify-center items-center mr-5 bg-[#595CFF] gap-3 w-44 py-2 text-white rounded"
          >
            Payment <img src="../../assets/arrow.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
    <div class="mt-40">
      <div class="w-[60%] sticky top-0 float-right border rounded-lg p-5">
        <h1 class="flex justify-between items-center font-medium">
          <span>Order total (25)</span><span>edit</span>
        </h1>
        <div class="relative overflow-x-auto my-5">
          <table class="text-sm text-left">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr class="flex gap-5 pb-5">
                <td class="w-24 h-24">
                  <img
                    class="w-full h-full object-cover rounded"
                    src="../../assets/Block1.jpg"
                    alt="img"
                  />
                </td>
                <th class="flex text-gray-900 whitespace-nowrap">
                  <div>
                    <div class="text-base font-medium">Red Tulips</div>
                    <p class="py-4">
                      <i class="bx bx-plus bg-[#E6E6EB] p-1 rounded-full"></i>
                      <input
                        class="w-8 ml-5 mr-2 bg-transparent font-medium outline-none"
                        max="999"
                        type="number"
                        value="25"
                        required
                      />
                      <i class="bx bx-minus bg-[#E6E6EB] p-1 rounded-full"></i>
                    </p>
                  </div>
                </th>
                <th class="ml-11 font-medium">46 $</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <hr />
          <h1 class="flex w-full justify-between py-4">
            <span>Shipping</span><span>Free</span>
          </h1>
          <hr />
          <h1 class="flex w-full justify-between py-4">
            <span>Order</span><span>46 $</span>
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const router = useRouter();
</script>

<style lang="scss" scoped></style>
