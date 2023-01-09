const chartData = {
  type: 'area',
  height: 50,
  options: {
    chart: {
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#2ecc71'],
    fill: {
      type: 'solid',
      opacity: 0
    },
    grid: {
      padding: {
        left: 5,
        right: 5
      }
    },
    markers: {
      size: 3,
      opacity: 0.9,
      colors: '#2ecc71',
      strokeColor: '#2ecc71',
      strokeWidth: 1,
      hover: {
        size: 4
      }
    },
    stroke: {
      curve: 'straight',
      width: 2
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return 'Ripple(RPL) :';
          }
        }
      },
      marker: {
        show: false
      }
    }
  },
  series: [
    {
      name: 'series1',
      data: [36, 9, 54, 25, 66, 41, 89, 25, 66, 41, 89, 63, 25, 44, 12]
    }
  ]
};

export default chartData;
