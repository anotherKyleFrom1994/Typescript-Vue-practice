import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { namespace, State, Getter } from 'vuex-class';

@Component({})
export default class Tags extends Vue {
  @Getter('categories') categories!: any;
};