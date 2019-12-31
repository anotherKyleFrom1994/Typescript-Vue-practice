import { Vue, Component } from 'vue-property-decorator';
import Sponsor from '@/components/activity/sponsor/Sponsor.vue';
import Articles from '@/components/activity/articles/Articles.vue';

@Component({ components: { Articles, Sponsor } })
export default class Introduction extends Vue {

}
