'use strict';
// import Component from "module";

module.export.listItem = {
  data () {
    return {
      msg: 'hello',
      url: 'https://tw.yahoo.com/'
    };
  },
  beforeCreate: function () {

  },
  //   created: {},
  mounted: function () {
    this.createUrl();
  },
  methods: {
    init: function () {

    },
    createUrl: function () {
      this.url = 'https://google.com/';
    }
  }
};
