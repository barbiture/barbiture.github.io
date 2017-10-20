
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}
var color = Chart.helpers.color;
  var scatterChartData = {
    datasets: [{
      label: "My First dataset",
      xAxisID: "x-axis-1",
      yAxisID: "y-axis-1",
      borderColor: window.chartColors.red,
      backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
      data: [{
        x: randomScalingFactor(),
        y: randomScalingFactor(),
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
      }]
    }, {
      label: "My Second dataset",
      xAxisID: "x-axis-1",
      yAxisID: "y-axis-2",
      borderColor: window.chartColors.blue,
      backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
      data: [{
        x: randomScalingFactor(),
        y: randomScalingFactor(),
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
      }]
    }]
  };

  window.onload = function() {
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myScatter = Chart.Scatter(ctx, {
      data: scatterChartData,
      options: {
        responsive: true,
        hoverMode: 'nearest',
        intersect: true,
        title: {
          display: false,
          // text: 'Chart.js Scatter Chart - Multi Axis'
        },
        scales: {
          xAxes: [{
            position: "bottom",
            gridLines: {
              zeroLineColor: "rgba(0,0,0,1)"
            }
          }],
          yAxes: [{
            type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
            display: true,
            position: "left",
            id: "y-axis-1",
          }, {
            type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
            display: true,
            position: "right",
            reverse: true,
            id: "y-axis-2",

            // grid line settings
            gridLines: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
          }],
        }
      }
    });
  };

  document.getElementById('randomizeData').addEventListener('click', function() {
    scatterChartData.datasets.forEach(function(dataset) {
      dataset.data = dataset.data.map(function() {
        return {
          x: randomScalingFactor(),
          y: randomScalingFactor()
        };
      });
    });
    window.myScatter.update();
  });
//# sourceMappingURL=maps/app.js.map
