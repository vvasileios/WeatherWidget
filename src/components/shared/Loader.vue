<template>
  <div class="w-full">
    <p class="text-center">{{ text }}....</p>
  </div>
</template>

<script>
export default {
  name: "Loader",

  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>
