<template>
  <div class="q-pa-md">
    <q-table title="Treats" :rows="goldDataRows" :columns="goldDataColumns" row-key="name" />
  </div>
</template>

<script>
export default {
  data() {
    return {
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
          sortable: true
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
    },
  },
  mounted() {
    // this.getGoldData();
    this.splitDataFromGoldData();
  },
};
</script>
