<template>
  <h5>
    Graph of Opening (Morning) Prices of 1 Gram, 22 Carat Gold (916 Gold) in Chennai,
    Tamil Nadu ({{ goldData.currentPage }})
  </h5>
  <apexchart
    height="300"
    type="area"
    :options="options"
    :series="seriesMorning"
    :key="key1"
  />
  <h5>
    Graph of Closing (Evening) Prices of 1 Gram, 22 Carat Gold (916 Gold) in Chennai,
    Tamil Nadu ({{ goldData.currentPage }})
  </h5>
  <apexchart
    height="300"
    type="area"
    :options="options2"
    :series="seriesEvening"
    :key="key1"
  />
</template>
<script>
import { defineComponent } from "vue";
import { getCssVar } from "quasar";
export default defineComponent({
  name: "Apex-line",
  props: {
    goldData: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.splitDataFromGoldData();
  },
  data() {
    return {
      options: {
        title: {
          text: "Morning Gold Rates",
          align: "center",
        },
        chart: {
          id: "apex-area",
          height: 300,
          type: "area",
        },
        colors: [getCssVar("primary"), getCssVar("secondary"), getCssVar("negative")],
        markers: {
          size: 4,
          hover: {
            sizeOffset: 6,
          },
        },
        xaxis: {
          name: "Date",
          categories: [],
        },
      },
      options2: {
        title: {
          text: "Evening Gold Rates",
          align: "center",
        },
        chart: {
          id: "apex-area",
          height: 300,
          type: "area",
        },
        colors: [getCssVar("secondary"), getCssVar("primary"), getCssVar("negative")],
        markers: {
          size: 4,
          hover: {
            sizeOffset: 6,
          },
        },
        xaxis: {
          name: "Date",
          categories: [],
        },
      },
      seriesMorning: [
        {
          name: "Morning Price",
          data: [],
        },
      ],
      seriesEvening: [
        {
          name: "Evening Price",
          data: [],
        },
      ],
      Dates: [],
      priceMorning: [],
      priceAfternoon: [],
      key1: 1,
    };
  },
  methods: {
    getCssVar(name) {
      return getCssVar(name);
    },
    splitDataFromGoldData() {
      let goldData = this.goldData;
      this.options.xaxis.categories = [];
      this.seriesMorning[0].data = [];
      this.seriesEvening[0].data = [];
      for (let i = 0; i < goldData.data.length; i++) {
        this.options.xaxis.categories.push(goldData.data[i].date);
        this.options2.xaxis.categories.push(goldData.data[i].date);
        this.seriesMorning[0].data.push(goldData.data[i].price_morning_chennai);
        this.seriesEvening[0].data.push(goldData.data[i].price_evening_chennai);
      }
      this.key1 = this.key1 + 1;
    },
  },
});
</script>
<style scoped>
h5 {
  text-align: center;
}
</style>
