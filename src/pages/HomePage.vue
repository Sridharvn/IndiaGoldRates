<template>
  <div>
    <gold-rates-table-vue :goldData="TableData"></gold-rates-table-vue>
    <gold-rates-line-chart :goldData="TableData"></gold-rates-line-chart>
  </div>
</template>
<script>
import { defineComponent, defineAsyncComponent } from "vue";
import GoldRatesTableVue from "src/components/GoldRatesTable.vue";
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
      TableData: {
        data: [
          {
            id: 367,
            date: "1-Jun-22",
            price_morning_chennai: 4750,
            price_evening_chennai: 4750,
          },
          {
            id: 368,
            date: "2-Jun-22",
            price_morning_chennai: 4760,
            price_evening_chennai: 4760,
          },
          {
            id: 369,
            date: "3-Jun-22",
            price_morning_chennai: 4810,
            price_evening_chennai: 4810,
          },
          {
            id: 370,
            date: "4-Jun-22",
            price_morning_chennai: 4775,
            price_evening_chennai: 4775,
          },
          {
            id: 371,
            date: "5-Jun-22",
            price_morning_chennai: 4775,
            price_evening_chennai: 4775,
          },
          {
            id: 372,
            date: "6-Jun-22",
            price_morning_chennai: 4785,
            price_evening_chennai: 4785,
          },
          {
            id: 373,
            date: "7-Jun-22",
            price_morning_chennai: 4760,
            price_evening_chennai: 4760,
          },
          {
            id: 374,
            date: "8-Jun-22",
            price_morning_chennai: 4770,
            price_evening_chennai: 4770,
          },
          {
            id: 375,
            date: "9-Jun-22",
            price_morning_chennai: 4795,
            price_evening_chennai: 4795,
          },
          {
            id: 376,
            date: "10-Jun-22",
            price_morning_chennai: 4775,
            price_evening_chennai: 4775,
          },
          {
            id: 377,
            date: "11-Jun-22",
            price_morning_chennai: 4835,
            price_evening_chennai: 4835,
          },
        ],
        previousPage: "May-2022",
        nextPage: null,
        currentPage: "June-2022",
      },
      // Dates: [],
      // priceMorning: [],
      // priceAfternoon: [],
    };
  },
  // methods: {
  //   splitDataFromGoldData() {
  //     let goldData = this.TableData;
  //     for (let i = 0; i < goldData.data.length; i++) {
  //       this.Dates.push(goldData.data[i].date);
  //       this.priceMorning.push(goldData.data[i].price_morning_chennai);
  //       this.priceAfternoon.push(goldData.data[i].price_evening_chennai);
  //     }
  //     console.log(
  //       "🚀 ~ file: GoldRatesLineChart.vue ~ line 40 ~ splitDataFromGoldData ~ Dates",
  //       this.Dates
  //     );
  //     console.log(
  //       "🚀 ~ file: GoldRatesLineChart.vue ~ line 42 ~ splitDataFromGoldData ~ priceMorning",
  //       this.priceMorning
  //     );
  //     console.log(
  //       "🚀 ~ file: GoldRatesLineChart.vue ~ line 44 ~ splitDataFromGoldData ~ priceAfternoon",
  //       this.priceAfternoon
  //     );
  //   },
  // },
  // mounted() {
  //   this.splitDataFromGoldData();
  // },
});
</script>
