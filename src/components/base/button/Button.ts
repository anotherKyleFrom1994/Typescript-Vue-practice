import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { IconType } from '@/utils/enums';

@Component({ inheritAttrs: false })
export default class BaseBtn extends Vue {
  @Prop() displayWording!: string;
  @Prop() iconType!: IconType;
}
