import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { namespace, State } from 'vuex-class';
import { ModuleName, StateType } from '@/plugins/store/modules/home';
import { IArticle } from '@/data/articles';

@Component({})
export default class NewestPosts extends Vue {
  @namespace(ModuleName).State(StateType.TOPICS) topics!: IArticle[];
};
