import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { Getter, State } from 'vuex-class';
import FeedCard from '@/components/home/feed_card/FeedCard.vue';
import { mapState } from 'vuex';
import { IArticle } from '@/data/articles';

// Utilities
@Component({ components: { FeedCard } })
export default class Feed extends Vue {
  private layout: number[] = [2, 2, 1, 2, 2, 3, 3, 3, 3, 3, 3];
  private page: number = 1;

  @State('articles') articles!: IArticle[];

  get pages() {
    return Math.ceil(this.articles.length / 11);
  }

  get paginatedArticles() {
    const start = (this.page - 1) * 11;
    const stop = this.page * 11;

    return this.articles.slice(start, stop);
  }

  @Watch('page') onPageChanged(value: number, oldValue: number) {
    window.scrollTo(0, 0);
  }

  // watch: {
  //   page () {
  //     window.scrollTo(0, 0)
  //   }
  // }
}
