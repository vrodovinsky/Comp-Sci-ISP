<template>
    <div class="calendar light">
      <!-- Calendar structure here -->
    </div>
  </template>
  
  <style>
  /* Paste your CSS code here */
  </style>
  
  <script>
  export default {
    data() {
      return {
        currDate: new Date(),
        curr_month: null,
        curr_year: null,
        month_names: [
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
          "December",
        ],
      };
    },
    mounted() {
      this.curr_month = this.currDate.getMonth();
      this.curr_year = this.currDate.getFullYear();
      this.generateCalendar(this.curr_month, this.curr_year);
    },
    methods: {
      isLeapYear(year) {
        return (
          (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
          (year % 100 === 0 && year % 400 === 0)
        );
      },
      getFebDays(year) {
        return this.isLeapYear(year) ? 29 : 28;
      },
      generateCalendar(month, year) {
        // Updated code here
      },
    },
  };
  </script>
  