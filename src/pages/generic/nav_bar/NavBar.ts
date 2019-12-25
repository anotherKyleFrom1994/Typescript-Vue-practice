import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import IconType from '@/enums/iconType';

@Component({})
export default class NavBar extends Vue {
  iconType: typeof IconType = IconType;

  created() {
    // console.log(this.iconType);
  }

}
