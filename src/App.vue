<template>
  <router-view id="main" />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>
<style lang="scss" scoped>
#main {
  // display: flex;
  // flex-direction: column;
  // align-items: space-around;
  // justify-content: center;
  background-color: $info;
  color: $dark;
}
</style>
