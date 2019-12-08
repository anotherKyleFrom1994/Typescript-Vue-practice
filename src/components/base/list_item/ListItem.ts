import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';

interface IListItem {
  title ? : string;
  subTitle ? : string;
  isLink: boolean;
  target ? : string;
  href ? : string;
  displayWording ? : string;
}

@Component
export default class ListItem extends Vue {
  @Prop() title!: string;
  @Prop() subTitle!: string;
  @Prop() target!: string;
  @Prop() href!: string;
  @Prop() displayWording!: string;

  //   constructor() {
  //     super();
  //     this.title = '';
  //     this.subTitle = '';
  //     this.target = '';
  //     this.href = '';
  //     this.displayWording = '';
  //   }

  // @Watch('phoneNum') onPhoneNumChanged(previous: string, after: string) {};

  // @Emit('childMethod')
  // handler() {
  //   // do somthing
  // }

  created() {
    this.init();
  };

  beforeMount() {};

  mounted() {};

  private init() {

  };
};
