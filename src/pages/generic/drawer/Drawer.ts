import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { ModuleName, GetterType, StateType, MutationType } from '@/plugins/store/modules/home';

@Component({ name: 'CoreDrawer' })
export default class Drawer extends Vue {
  @namespace(ModuleName).Getter(GetterType.LINKS) links: any;
  @namespace(ModuleName).State(StateType.DRAWER) drawer: any;
  @namespace(ModuleName).Mutation(MutationType.SET_DRAWER) setDrawer: any;

  private onClickListItem (e: any, item: any) {
    e.stopPropagation();

    if (item.to === '/') {
      this.$vuetify.goTo(0);
      this.setDrawer(false);
      return;
    }

    if (item.to || !item.href) return;

    this.$vuetify.goTo(item.href);
    this.setDrawer(false);
  }
}
