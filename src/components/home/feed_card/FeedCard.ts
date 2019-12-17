import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';

// Utilities
@Component({})
export default class FeedCard extends Vue {
  @Prop({ required: true }) size!: number;
  @Prop({ default: () => ({}) }) value!: Object;

  get colMd() {
    return this.analyzeColMd();
  }

  private analyzeColMd() {
    if (this.size === 2) {
      return 6;
    }
    if (this.size === 3) {
      return 4;
    }
  }
};
