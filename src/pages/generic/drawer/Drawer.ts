import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { namespace, State, Getter, Mutation } from 'vuex-class';

@Component({ name: 'CoreDrawer' })
export default class Drawer extends Vue {
  @namespace('home').Getter('links') links: any;
  @namespace('home').State('drawer') drawer: any;
  @namespace('home').Mutation('setDrawer') setDrawer: any;

  private onClickListItem(e: any, item: any) {
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
