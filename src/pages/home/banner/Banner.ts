import { Component, Vue } from 'vue-property-decorator';
import { Item } from '@/components/base/carousel/Carousel';

@Component
export default class Banner extends Vue {
  private items: Item[] = [{
      title: 'The Art Of Travel',
      displayWording: 'Finding Beauty, One flight at a time',
      src: '@/assets/articles/blurcamera.jpg',
      button: {
        displayWording: 'Subscribe',
        color: 'primary'
      }
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
    }
  ]
};
