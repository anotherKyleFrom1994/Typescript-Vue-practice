// @ is an alias to /src
import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
  @Prop() private userName!: string;
  @Prop() private psw!: string;
  @Prop() private phoneNum!: string;

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

  private init() {};
}
