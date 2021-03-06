import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';

// Utilities
@Component({})
export default class FeedCard extends Vue {
  @Prop({ required: true }) size!: number;
  @Prop({ default: () => ({}) }) value!: Object;

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
    }
  }

};
