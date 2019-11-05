'use strict';

export default {
  data () {
    return {
      title: '',
      subTitle: '',
      isLink: false,
      target: '_self',
      href: undefined,
      displayWording: ''
    };
  },
  beforeCreate: function () {},
  created: function () {},
  beforeMount: function () {},
  mounted: function () {
    this.init();
  },
  methods: {
    init: function () {
      this.createItemContent();
    },
    createItemContent: function () {
      // if (jsonObj === null || jsonObj === undefined) {
      //   throw new Exception();
      // }
      // this.title = jsonObj.title;
      // this.subTitle = jsonObj.subTitle;
      // this.isLink = jsonObj.isLink;
      // this.target = jsonObj.target === undefined ? this.target : jsonObj.target;
      // this.href = jsonObj.href;
      // this.displayWording = jsonObj.displayWording;
    }
  }
};

class JsonObj {
  title: String;
  subTitle: String;
  isLink: Boolean;
  target: String;
  href: String;
  displayWording: String;

  constructor(title: String, subTitle: String, isLink: Boolean, target: String, href: String, displayWording: String) {
    this.title = title;
    this.subTitle = subTitle;
    this.isLink = isLink;
    this.target = target;
    this.href = href;
    this.displayWording = displayWording;
  }

}
