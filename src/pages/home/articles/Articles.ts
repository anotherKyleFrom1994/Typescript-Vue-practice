import { Component, Vue } from 'vue-property-decorator';
import Feed from '@/components/home/feed/Feed.vue';

@Component({ components: { Feed } })
export default class Articles extends Vue {}
