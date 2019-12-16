  import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
  import { namespace, State, Getter, Mutation } from 'vuex-class';

  @Component({})
  export default class Footer extends Vue {
    private items = [{
        href: '#!',
        icon: 'mdi-twitter'
      },
      {
        href: '#!',
        icon: 'mdi-instagram'
      },
      {
        href: '#!',
        icon: 'mdi-facebook'
      },
      {
        href: '#!',
        icon: 'mdi-google-plus'
      },
      {
        href: '#!',
        icon: 'mdi-reddit'
      },
      {
        href: '#!',
        icon: 'mdi-discord'
      },
      {
        href: '#!',
        icon: 'mdi-pinterest'
      }
    ]
  }
