<script setup lang="ts">
const reverse = ref(false)
</script>

<template>
  <div class="px-7 h-[500px] md:h-80">
    <div class="flex gap-4 font-[Satoshi-Variable] font-medium text-sm">
      <a href="https://bit.ly/HIMSI2024" target="_blank">
        <button
          @mouseenter="reverse = true"
          @mouseleave="reverse = false"
          :class="reverse ? 'bg-transparent text-white border border-white' : 'bg-white text-black'"
          class="rounded-md py-2 px-[10px] transition-colors duration-300"
        >
          Link Pendaftaran
        </button>
      </a>
      <a href="https://bit.ly/DivisiHIMSI" target="_blank">
        <button
          @mouseenter="reverse = true"
          @mouseleave="reverse = false"
          :class="reverse ? 'bg-white  text-black' : 'bg-transparent border border-white  text-white'"
          class="rounded-md py-2 px-[10px] transition-colors duration-300"
        >
          Link Detail Divisi
        </button>
      </a>
    </div>

    <div>
      <h1 class="leading-snug text-white font-[Satoshi-Variable] font-medium mt-6 text-3xl md:text-[40px]">
        Ignite possibilities in innovation and tech! Empower your journey with the Information Systems student
        association. Your contributions fuel our evolution. Inspire success in the world of information systems!
      </h1>
    </div>
  </div>
</template>
