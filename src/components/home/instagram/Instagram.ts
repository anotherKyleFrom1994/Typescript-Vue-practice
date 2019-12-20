import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { namespace, State } from 'vuex-class';

@Component({})
export default class Instagram extends Vue {
  private posts = [
    { src: 'adventurealtitude.jpg' },
    { src: 'garden.jpg' },
    { src: 'pigduck.jpg' },
    { src: 'rain.jpg' },
    { src: 'spices.jpg' },
    { src: 'sunset.jpg' }
  ];
};
