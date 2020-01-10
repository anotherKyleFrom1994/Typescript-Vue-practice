import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { ModuleName, StateType } from '@/plugins/store/modules/activity';
import FeedCard from '@/components/activity/feed_card/FeedCard.vue';
import { IArticle } from '@/data/articles';

// Utilities
@Component({ components: { FeedCard } })
export default class Feed extends Vue {
  private layout: number[] = [2, 2, 2, 2, 2, 2, 2];
  private page: number = 1;

  @namespace(ModuleName).State(StateType.PHOTOS) photos!: IArticle[];

  get pages () {
    return Math.ceil(this.photos.length / 11);
  }

  get paginatedPhotos () {
    const start = (this.page - 1) * 4;
    const stop = this.page * 4;

    return this.photos.slice(start, stop);
  }

  @Watch('page') onPageChanged (value: number, oldValue: number) {
    window.scrollTo(0, 0);
  }
}
