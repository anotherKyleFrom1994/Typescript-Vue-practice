import { Vue } from 'vue-property-decorator';
import LargeBtn from '@/components/base/button/LargeBtn.vue';
import SmallBtn from '@/components/base/button/SmallBtn.vue';
import BaseCard from '@/components/base/card/Card.vue';
import BaseSubheading from '@/components/base/subheading/Subheading.vue';
import BaseCarousel from '@/components/base/carousel/Carousel.vue';
import BasePortrait from '@/components/base/portrait/Portrait.vue';

Vue.component(LargeBtn.name, LargeBtn);
Vue.component(SmallBtn.name, SmallBtn);
Vue.component(BaseCard.name, BaseCard);
Vue.component(BaseSubheading.name, BaseSubheading);
Vue.component(BaseCarousel.name, BaseCarousel);
Vue.component(BasePortrait.name, BasePortrait);
