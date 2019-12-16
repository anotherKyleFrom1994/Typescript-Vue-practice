import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { namespace, State, Getter, Mutation } from 'vuex-class';

@Component({})
export default class Toolbar extends Vue {
  @Getter('links') links!: any;
  @Mutation('toggleDrawer') toggleDrawer!: any;

  private onClickButton(e: Event, item: any) {
    e.stopPropagation();
    if (item.to || !item.href) return;

    this.$vuetify.goTo(item.href);
  }
}
