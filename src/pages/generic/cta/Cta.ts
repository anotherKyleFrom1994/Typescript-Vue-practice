import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { requestGet } from '@/plugins/axios-handler';
import { namespace } from 'vuex-class';
@Component({})
export default class Cta extends Vue {
  @namespace('home').Action('fetchImages') fetchImages!: Function;

  private hello() {
    this.fetchImages();
  }
}
