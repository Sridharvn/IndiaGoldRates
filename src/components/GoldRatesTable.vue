<template>
  <div class="q-pa-md">
    <q-table :rows="goldDataRows" :columns="goldDataColumns" row-key="name"
      no-data-label="The GoldRates are being updated. Please wait or move to another page" :dense="$q.screen.lt.md"
      :pagination="pagination" id="goldRatesTable" bordered>
      <template v-slot:body-cell="props">
        <q-td :props="props">
          <q-badge color="dark" :label="props.value" />
        </q-td>
      </template>
    </q-table>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  data() {
    return {
      pagination: ref({
        rowsPerPage: 31,
      }),
      goldDataColumns: [
        {
          name: "Date",
          required: true,
          label: "Date",
          align: "center",
          field: (row) => row.name,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "Morning",
          align: "center",
          label: "Morning",
          field: "Morning",
          sortable: true,
        },
        {
          name: "Evening",
          label: "Evening",
          field: "Evening",
          sortable: true,
        },
      ],
      goldDataRows: [],
    };
  },
  props: {
    goldData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    splitDataFromGoldData() {
      let goldData = this.goldData;
      for (let i = 0; i < goldData.data.length; i++) {
        let goldData1 = {
          name: goldData.data[i].date,
          Morning: goldData.data[i].price_morning_chennai,
          Evening: goldData.data[i].price_evening_chennai,
        };
        this.goldDataRows.push(goldData1);
      }
      this.key1 = this.key1 + 1;
      this.loading = false;
    },
  },
  mounted() {
    // this.getGoldData();
    this.splitDataFromGoldData();
  },
};
</script>
<style lang="scss" scoped>
#goldRatesTable {
  // background-color: rgba(255, 255, 255, 0.685);
  backdrop-filter: blur(25px) saturate(200%);
  -webkit-backdrop-filter: blur(25px) saturate(200%);
  background-color: rgba(255, 255, 255, 0.13);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
}
</style>
