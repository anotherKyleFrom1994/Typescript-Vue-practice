import { Vue, Component, Prop } from 'vue-property-decorator';
import IconType from '@/enums/iconType';

export interface Item {
  iconStart ? : IconType;
  title: string;
  iconEnd ? : IconType;
  divider ? : boolean;
}

@Component({})
export default class BasePortrait extends Vue {
  @Prop({ required: true }) imageSrc!: string;
  @Prop({ required: true }) listItems!: Item[];

}
