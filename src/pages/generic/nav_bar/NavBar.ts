import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { IconType } from '@/utils/enums';

@Component({})
export default class NavBar extends Vue {
  iconType: typeof IconType = IconType;

  created() {
    // console.log(this.iconType);
  }

}
