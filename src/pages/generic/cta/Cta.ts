import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { requestGet } from '@/plugins/axios-handler';
@Component({})
export default class Cta extends Vue {

  private hello() {
    requestGet('aaaa', { x: 'a', y: 'b' });
  }
}
