import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { ModuleName, GetterType } from '@/plugins/store/modules/home';
import { namespace, State, Getter } from 'vuex-class';

@Component({})
export default class Tags extends Vue {
  @namespace(ModuleName).Getter(GetterType.CATEGORIES) categories!: any;
};
