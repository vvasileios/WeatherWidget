<template>
  <button
    class="bg-green-100 border border-green-500 px-4 py-2 rounded text-green-500 text-sm"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ButtonBase",

  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>
