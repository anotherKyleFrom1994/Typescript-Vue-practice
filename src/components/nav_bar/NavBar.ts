import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import Button from '@/components/base/button/Button.vue';
import { IconType } from '@/utils/enums';

@Component({ components: { Button } })
export default class NavBar extends Vue {
  private iconType: typeof IconType = IconType;

  created() {
    // console.log(this.iconType);
  }

}
