import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';

// Utilities
@Component({})
export default class FeedCard extends Vue {
  @Prop({ required: true }) size!: number;
  @Prop({ default: () => ({}) }) value!: Object;

  get classes() {
    return {
      'md6': this.size === 2,
      'md4': this.size === 3
    };
  }

};
