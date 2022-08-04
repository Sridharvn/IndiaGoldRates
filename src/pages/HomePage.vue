<template>
  <div id="main">
    <!-- {{ TableData }} -->
    <div class="row justify-center">
      <div class="col">
        <h4 style="font-weight:900">
          Gold Rate in Chennai
          <span v-if="TableData.currentPage">- {{ TableData.currentPage }}
          </span>
        </h4>
      </div>
    </div>
    <h6 class="row justify-center" style="padding:0;margin:0;text-align:center">
      View the gold rate for any month by choosing it from the list</h6>
    <div class="row justify-center">

      <!-- <div class="q-pa-md" style="background-color:red"> -->
      <div class="q-gutter-y-md column" style="max-width: 300px; padding:10px;">
        <q-select clearable filled color="primary" v-model="selectedmonth" :options="months" label="Month"
          behavior="menu" />
      </div>
      <!-- <div class="q-pa-md"> -->
      <div class="q-gutter-y-md column" style="max-width: 300px;padding:10px">
        <q-select clearable filled color="secondary" v-model="selectedyear" :options="years" label="Year"
          behavior="menu" />
      </div>

      <!-- </div> -->
    </div>
    <!-- </div> -->
    <div class="row justify-center">
      <q-btn color="primary" label="Go" v-on:click="goToSelected()" />
    </div>
    <!-- <br />
    <br /> -->
    <!-- <h5>(22 Carat / 1 Gram Gold Price in Rupees)</h5> -->
    <loading-animation id="loading-animation" v-if="isLoading"></loading-animation>

    <gold-rates-line-chart :goldData="TableData" :key="TableData.data.length" v-if="!isLoading">
    </gold-rates-line-chart>


    <div class="fit row wrap justify-around items-center content-start">
      <q-btn class="btn-fixed-width" color="primary" v-on:click="previousPageLoad()"
        v-if="TableData.previousPage != firstDataMonth" icon="arrow_back">{{ TableData.previousPage }}</q-btn>

      <q-btn class="btn-fixed-width" color="primary" v-on:click="nextPageLoad()" v-if="TableData.nextPage != null"
        icon-right="arrow_forward">{{
            TableData.nextPage
        }}</q-btn>

    </div>
    <gold-rates-table-vue :goldData="TableData" :key="TableData.data.length" v-if="!isLoading">
    </gold-rates-table-vue>
  </div>
</template>
<script>
import { ref } from 'vue'
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
      isLoading: true,
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      selectedmonth: "",
      selectedyear: "",
      days: "",
      thisyear: "",
      thismonth: "",
      years: [],
      minyear: "2021",
      minmonth: "June",
      model: ref(this.selectedmonth),
    };
  },
  mounted() {
    this.onLoad(this.url);
    this.findCurrentYear();
  },
  methods: {
    onLoad(url) {
      axios.get(url).then((response) => {
        this.TableData = response.data;
        this.isLoading = false;
        this.selectedmonth = this.TableData.currentPage.split("-")[0];
        this.selectedyear = this.TableData.currentPage.split("-")[1];
      });
    },
    previousPageLoad() {
      this.isLoading = true;
      this.onLoad(this.url + this.TableData.previousPage);
      this.selectedmonth = this.TableData.currentPage.split("-")[0];
      this.selectedyear = this.TableData.currentPage.split("-")[1];
    },
    nextPageLoad() {
      this.isLoading = true;
      this.onLoad(this.url + this.TableData.nextPage);
      this.selectedmonth = this.TableData.currentPage.split("-")[0];
      this.selectedyear = this.TableData.currentPage.split("-")[1];
    },
    checkMonthDays() {
      if (this.selectedmonth == "January" || this.selectedmonth == "March" || this.selectedmonth == "May" || this.selectedmonth == "July" || this.selectedmonth == "August" || this.selectedmonth == "October" || this.selectedmonth == "December") {
        this.days = 31;
      }
      else if (this.selectedmonth == "February") {
        this.days = 28;
      }
      else {
        this.days = 30;
      }
    },
    findCurrentYear() {
      var today = new Date();
      this.thisyear = today.getFullYear();
      for (var i = this.minyear; i <= this.thisyear; i++) {
        this.years.push(i);
      }
    },
    goToSelected() {
      this.isLoading = true;
      this.onLoad(this.url + this.selectedmonth + "-" + this.selectedyear);
    }
  },
  watch: {
    selectedyear(newVal, oldVal) {
      if (this.selectedyear == "2021") {
        this.selectedmonth = "July";
        this.months = ["July", "August", "September", "October", "November", "December"];
        console.log(this.months);
      } else
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      // find current year and month
      var today = new Date();
      this.thismonth = today.getMonth();
      this.months.splice(this.thismonth + 1, this.months.length - this.thismonth - 1);
    }
  }
});
</script>
<style scoped lang="scss">
h1,
h2,
h3,
h4,
h5 {
  text-align: center;
}

* {
  // add border
  border: 0.0px solid $info;
}

#loading-animation {
  display: flex;
  align-items: center;
  justify-content: center;
}



// #main {
//   display: flex;
//   flex-direction: column;
//   align-items: space-around;
//   justify-content: center;
//   background-color: $info;
//   color: $dark;
// }

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
