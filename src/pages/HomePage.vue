<template>
  <div>
    <apex-line></apex-line>
  </div>
</template>
<script>
import { defineComponent, defineAsyncComponent } from "vue";
const ApexLine = defineAsyncComponent(() =>
  import("src/components/charts/ApexLine.vue")
);
export default defineComponent({
  name: "HomePage",
  components: {
    ApexLine,
  },
});
</script>
