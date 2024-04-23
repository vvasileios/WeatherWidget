<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="w-full">
    <p class="text-center">{{ text }}....</p>
  </div>
</template>
