<script>
import CanvasJSChart, { CanvasJS } from '../../../flower/src/assets/CanvasJSVueComponent.vue'
CanvasJS.addColorSet('colors1', [
  '#BA68C8',
  '#9575CD',
  '#7986CB',
  '#64B5F6',
  '#4FC3F7',
  '#4DD0E1',
  '#4DB6AC',
  '#81C784',
  '#DCE775',
  '#FFD54F',
  '#FFB74D'
])
export default {
  components: {
    CanvasJSChart
  },
  data() {
    return {
      options: {
        colorSet: 'colors1',
        theme: 'light2',
        backgroundColor: 'rgba(128, 128, 128, 0.27)',
        title: {
          text: 'Yillik hisobingiz'
        },
        axisY: {
          title: 'dollar ($)'
        },
        data: [
          {
            yValueFormatString: '$###',
            dataPoints: [
              { label: '2005', y: 344 },
              { label: '2006', y: 759 },
              { label: '2007', y: 148 },
              { label: '2008', y: 822 },
              { label: '2009', y: 810 },
              { label: '2010', y: 200 },
              { label: '2011', y: 903 },
              { label: '2012', y: 770 },
              { label: '2013', y: 195 },
              { label: '2014', y: 423 },
              { label: '2015', y: 646 },
              { label: '2016', y: 646 }
            ]
          }
        ]
      },
      styleOptions: {
        width: '100%',
        height: '360px'
      }
    }
  }
}
</script>
<template>
  <CanvasJSChart class="rounded-lg duration-500 border-2 w-full border-gray-300" :options="options" :styles="styleOptions" />
</template>