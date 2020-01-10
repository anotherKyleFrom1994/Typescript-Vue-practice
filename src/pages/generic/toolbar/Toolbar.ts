import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { namespace, State, Getter, Mutation } from 'vuex-class';
import { ModuleName, GetterType, StateType, MutationType } from '@/plugins/store/modules/home';

@Component({})
export default class Toolbar extends Vue {
  @namespace(ModuleName).Getter(GetterType.LINKS) links!: any;
  @namespace(ModuleName).Mutation(MutationType.TOGGLE_DRAWER) toggleDrawer!: any;

  private onClickButton (e: Event, item: any) {
    e.stopPropagation();
    if (item.to || !item.href) return;

    this.$vuetify.goTo(item.href);
  }
}
