<template>
  <div class="absolute inset-x-0 top-48">
    <n-result
      status="404"
      title="404 资源不存在"
      description="生活总归带点荒谬"
    >
      <template #footer>
        <n-button @click="router.replace({ name: 'home_index' })"
          >返回</n-button
        >
      </template>
    </n-result>
  </div>
</template>
<script lang="ts" setup>
const router = useRouter();
</script>
