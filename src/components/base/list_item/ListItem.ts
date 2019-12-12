import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';

@Component
export default class ListItem < IListItem > extends Vue {
  inheritAttrs!: false;
  @Prop() title!: string;
  @Prop() subTitle!: string;
  @Prop() target!: string;
  @Prop() href!: string;
  @Prop() displayWording!: string;

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
