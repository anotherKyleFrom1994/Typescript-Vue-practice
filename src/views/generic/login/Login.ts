// @ is an alias to /src
import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import ListItem from '@/components/base/list_item/ListItem.vue';

@Component({ components: { ListItem } })
export default class Login extends Vue {
  private username: string = '';
  private password: string = '';
  private phoneNum: string = '';

  private errMsg: string = '';

  // @Emit('childMethod')
  // handler() {
  //   // do somthing
  // }

  created() {
    this.init();
  };

  beforeMount() {};

  mounted() {

  };

  private init() {
  };

  private checkColumn(input: string, colName: string): string | boolean {
    if (input === undefined || input.length === 0) return colName + '\ncannot be empty';
    if (!this.checkFormat(input, colName)) return 'Please enter a valid ' + colName;
    return true;
  };

  private checkFormat(input: string, colName: string): boolean | undefined {
    let regexp;

    switch (colName) {
      case 'username':
        // eslint-disable-next-line
        regexp = new RegExp(/^[a-zA-Z0-9][a-zA-Z0-9\s\-]*[a-zA-Z0-9](?<![_\s\-]{2,}.*)$/);
        break;
      case 'password':
        regexp = new RegExp(/^[a-zA-Z0-9]+$/);
        break;
      case 'phoneNum':
        // eslint-disable-next-line
        regexp = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
        break;
    };

    return regexp ? regexp.test(input) : false;
  };
}
