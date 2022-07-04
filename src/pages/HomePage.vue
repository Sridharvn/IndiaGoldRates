<template>
  <div>
    <!-- {{ TableData }} -->
    <div class="row justify-center">
      <div class="col">
        <h4>
          Gold Rate in Chennai
          <span v-if="TableData.currentPage">- {{ TableData.currentPage }}
          </span>
        </h4>
      </div>
    </div>
    <br />
    <br />
    <h5>(22 Carat / 1 Gram Gold Price in Rupees)</h5>
    <loading-animation id="loading-animation" v-if="isLoading"></loading-animation>
    <gold-rates-table-vue :goldData="TableData" :key="TableData.data.length" v-if="!isLoading">
    </gold-rates-table-vue>
    <div class="fit row wrap justify-around items-center content-start">
      <q-btn class="btn-fixed-width" color="primary" v-on:click="previousPageLoad()"
        v-if="TableData.previousPage != firstDataMonth" icon="arrow_back">{{ TableData.previousPage }}</q-btn>

      <q-btn class="btn-fixed-width" color="primary" v-on:click="nextPageLoad()" v-if="TableData.nextPage != null"
        icon-right="arrow_forward">{{
            TableData.nextPage
        }}</q-btn>
    </div>
    <gold-rates-line-chart :goldData="TableData" :key="TableData.data.length" v-if="!isLoading"></gold-rates-line-chart>
  </div>
</template>
<script>
import { defineComponent, defineAsyncComponent } from "vue";
import GoldRatesTableVue from "src/components/GoldRatesTable.vue";
import axios from "axios";
import LoadingAnimation from "src/components/LoadingAnimation.vue";
const GoldRatesLineChart = defineAsyncComponent(() =>
  import("src/components/GoldRatesAreaChart.vue")
);
export default defineComponent({
  name: "HomePage",
  components: {
    GoldRatesLineChart,
    GoldRatesTableVue,
    LoadingAnimation
  },
  data() {
    return {
      TableData: { data: {} },
      url: "http://api.chennaigoldrates.com/",
      firstDataMonth: "June-2021",
      isLoading: true
    };
  },
  mounted() {
    this.onLoad(this.url);
  },
  methods: {
    onLoad(url) {
      axios.get(url).then((response) => {
        this.TableData = response.data;
        this.isLoading = false;
      });
    },
    previousPageLoad() {
      this.isLoading = true;
      this.onLoad(this.url + this.TableData.previousPage);

    },
    nextPageLoad() {
      this.isLoading = true;
      this.onLoad(this.url + this.TableData.nextPage);
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

#loading-animation {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media only screen and (max-width: 750) {

  /*Tablets [601px -> 1200px]*/
  h3 {
    font-size: xx-small;
  }

  h4 {
    /* font-size: smaller; */
    flex-shrink: inherit;
  }
}
</style>
