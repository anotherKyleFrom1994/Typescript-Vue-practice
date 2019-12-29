import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';

// Utilities
@Component({})
export default class FeedCard extends Vue {
  @Prop({ required: true }) size!: number;
  @Prop({ default: () => ({}) }) value!: Object;
  @Prop() maxHeight!: number | string;
  @Prop() height!: number | string;
  get colMd() {
    switch (this.size) {
      case 1: {
        return 12;
      }
      case 2: {
        return 6;
      }
      case 3: {
        return 4;
      }
      case 4: {
        return 3;
      }
    }
  }

  public get cardHeight() {
    return this.height === undefined ? undefined : this.height;
  }

  public get cardMaxHeight() {
    return this.maxHeight === undefined ? undefined : this.maxHeight;
  }
};
