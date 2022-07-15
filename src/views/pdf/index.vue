<template>
  <div id="pdfElement" class="h-full">
    <iframe
      ref="pdfCotainer"
      width="100%"
      height="100%"
      src="http://pdf.pluss.top"
    ></iframe>
  </div>
</template>
<script lang="ts" setup>
const pdfElement = ref<any>();
const changeFrameHeight = () => {
  const height = document.getElementById("pdf")?.clientHeight as number;
  if (pdfElement.value) {
    pdfElement.value.height = height;
  }
};
onMounted(() => {
  changeFrameHeight();
});
</script>
