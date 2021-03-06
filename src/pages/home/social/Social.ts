import { Component, Vue } from 'vue-property-decorator';
import NewestPosts from '@/components/home/newest_posts/NewestPosts.vue';
import Instagram from '@/components/home/instagram/Instagram.vue';
import Tags from '@/components/home/tags/Tags.vue';

@Component({ components: { NewestPosts, Instagram, Tags } })
export default class Social extends Vue {};
