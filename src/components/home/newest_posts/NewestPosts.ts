import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { namespace, State } from 'vuex-class';
import { IArticle } from '@/data/articles';

@Component({})
export default class NewestPosts extends Vue {
  @namespace('app').State('articles') articles!: IArticle[];
};
