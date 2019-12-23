import { Vue } from 'vue-property-decorator';
import LargeBtn from '@/components/base/button/LargeBtn.vue';
import SmallBtn from '@/components/base/button/SmallBtn.vue';
import BaseCard from '@/components/base/card/Card.vue';
import BaseSubheading from '@/components/base/subheading/Subheading.vue';

Vue.component(LargeBtn.name, LargeBtn);
Vue.component(SmallBtn.name, SmallBtn);
Vue.component(BaseCard.name, BaseCard);
Vue.component(BaseSubheading.name, BaseSubheading);
