import { registerComponent } from '@plasmicapp/host';
import BarGraph from './components/BarGraph';

registerComponent(BarGraph, {
  name: 'BarGraph',
  props: {
    data: {
      type: 'array',
      defaultValue: [
        { label: '/home', value: 186 },
        { label: '/about', value: 120 },
      ],
    },
    title: { type: 'string', defaultValue: 'Sample Bar Graph' },
  },
  importPath: ''
});


