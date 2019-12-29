import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import FeedCard from '@/components/activity/feed_card/FeedCard.vue';
import { IArticle } from '@/data/articles';

// Utilities
@Component({ components: { FeedCard } })
export default class Feed extends Vue {
  private layout: number[] = [2, 2, 2, 2, 2, 2, 2];
  private page: number = 1;

  @namespace('activity').State('articles') articles!: IArticle[];

  get pages() {
    return Math.ceil(this.articles.length / 11);
  }

  get paginatedArticles() {
    const start = (this.page - 1) * 4;
    const stop = this.page * 4;

    return this.articles.slice(start, stop);
  }

  @Watch('page') onPageChanged(value: number, oldValue: number) {
    window.scrollTo(0, 0);
  }
}
