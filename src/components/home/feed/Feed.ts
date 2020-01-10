import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { namespace, State } from 'vuex-class';
import { ModuleName, StateType } from '@/plugins/store/modules/home';
import FeedCard from '@/components/home/feed_card/FeedCard.vue';
import { IArticle } from '@/data/articles';

// Utilities
@Component({ components: { FeedCard } })
export default class Feed extends Vue {
  private layout: number[] = [2, 2, 1, 2, 2, 3, 3, 3, 3, 3, 3];
  private page: number = 1;

  @namespace(ModuleName).State(StateType.TOPICS) topics!: IArticle[];

  get pages () {
    return Math.ceil(this.topics.length / 11);
  }

  get paginatedTopics () {
    const start = (this.page - 1) * 11;
    const stop = this.page * 11;

    return this.topics.slice(start, stop);
  }

  @Watch('page') onPageChanged (value: number, oldValue: number) {
    window.scrollTo(0, 0);
  }
}
