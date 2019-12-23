import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';

@Component({
  inheritAttrs: false
})
export default class LargeBtn extends Vue {
  @Prop() square!: boolean;

  get styles() {
    return {
      borderRadius: this.square ? '2px' : undefined
    };
  }
}
