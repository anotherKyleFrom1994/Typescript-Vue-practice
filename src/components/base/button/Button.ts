import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { IconType } from '@/utils/enums';

@Component
export default class Button extends Vue {
  @Prop() private displayWording!: string;
  @Prop() private iconType!: IconType;
}
