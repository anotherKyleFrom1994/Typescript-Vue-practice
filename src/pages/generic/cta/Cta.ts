import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { ModuleName, ActionType } from '@/plugins/store/modules/app';

@Component({})
export default class Cta extends Vue {
  @namespace(ModuleName).Action(ActionType.FETCH_IMAGES) fetchImages!: Function;

  private hello () {
    this.fetchImages();
  }
}
