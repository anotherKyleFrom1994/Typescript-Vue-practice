import { Component, Vue } from 'vue-property-decorator';
import Feed from '@/components/activity/feed/Feed.vue';

@Component({ components: { Feed } })
export default class Photos extends Vue {

};
