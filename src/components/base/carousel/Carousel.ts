import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';

export interface Item {
  src: string;
  title ? : string;
  subheading ? : string;
  button ? : button;
  href ? : string;
}

export interface button {
  title: string;
  color ? : 'primary' | 'secondary';
}

@Component({ inheritAttrs: false })
export default class BaseCarousel extends Vue {
  @Prop({ required: true }) items!: Item[];

  private createDisplayImage(item: Item): NodeRequire | string | undefined {
    if (item === null || item === undefined) return;

    switch (item.src.charAt(0)) {
      case '@': {
        return require('@/' + item.src.substr(2, item.src.length));
      }
      case '.': {
        return require('./' + item.src.substr(2, item.src.length));
      }
      default: {
        return item.src;
      }
    };
  }
};
