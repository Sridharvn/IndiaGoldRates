<template>
  <div>
    <div class="row">
      <div class="col">
        <h3>
          Gold Rate in Chennai
          <div v-if="TableData.currentPage">- {{ TableData.currentPage }}</div>
        </h3>
      </div>
    </div>
    <br />
    <br />
    <h5>(22 Carat / 1 Gram Gold Price in Rupees)</h5>
    <gold-rates-table-vue
      :goldData="TableData"
      :key="TableData.data.length"
    ></gold-rates-table-vue>
    <gold-rates-line-chart
      :goldData="TableData"
      :key="TableData.data.length"
    ></gold-rates-line-chart>
  </div>
</template>
<script>
import { defineComponent, defineAsyncComponent } from "vue";
import GoldRatesTableVue from "src/components/GoldRatesTable.vue";
import axios from "axios";
const GoldRatesLineChart = defineAsyncComponent(() =>
  import("src/components/GoldRatesAreaChart.vue")
);
export default defineComponent({
  name: "HomePage",
  components: {
    GoldRatesLineChart,
    GoldRatesTableVue,
  },
  data() {
    return {
      TableData: { data: {} },
      // Dates: [],
      // priceMorning: [],
      // priceAfternoon: [],
    };
  },
  mounted() {
    this.onLoad();
    console.log("Mounted");
    // this.splitDataFromGoldData();
  },
  methods: {
    onLoad() {
      axios.get("http://api.chennaigoldrates.com/").then((response) => {
        this.TableData = response.data;
      });
    },
  },
});
</script>
<style scoped>
h1,
h2,
h3,
h4,
h5 {
  text-align: center;
}
@media only screen and (max-width: 750) {
  /*Tablets [601px -> 1200px]*/
  h3 {
    font-size: smaller;
  }
  h4 {
    /* font-size: smaller; */
    flex-shrink: inherit;
  }
}
</style>
