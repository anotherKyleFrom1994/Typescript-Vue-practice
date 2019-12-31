import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';

@Component({ inheritAttrs: false })
export default class BaseSubheading extends Vue {
  @Prop({ default: 'medium' }) fontWeight!: 'light' | 'medium';
  @Prop() fontSize!: number;

  private classes() {
    let base: string = 'subheading text-uppercase mb-3';

    switch (this.fontWeight) {
      case 'light': {
        base += '\u0020font-weight-light';
        break;
      }
      case 'medium': {
        base += '\u0020font-weight-medium';
        break;
      }
    }

    if (this.fontSize) {
      base += ('\u0020display-' + (6 - this.fontSize));
    }

    return base;
  }

};
