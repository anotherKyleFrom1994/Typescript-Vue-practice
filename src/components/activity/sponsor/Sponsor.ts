import { Vue, Component } from 'vue-property-decorator';
import { Item } from '@/components/base/portrait/Portrait';
import IconType from '@/enums/iconType';

@Component({})
export default class Sponsor extends Vue {
  private imageSrc = 'https://picsum.photos/700?image=996';
  private listItems: Item[] = [{
      iconStart: IconType.Phone,
      title: '12313',
      iconEnd: IconType.MessageText,
      divider: true
    },
    {
      iconStart: IconType.Phone,
      title: '12313',
      iconEnd: IconType.MessageText,
      divider: true
    },
    {
      iconStart: IconType.Email,
      title: '12313',
      divider: true
    },
    {
      iconStart: IconType.MapMarker,
      title: '12313',
      divider: false
    }
  ];
}
