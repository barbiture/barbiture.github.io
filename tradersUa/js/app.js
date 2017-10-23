
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

  
//# sourceMappingURL=maps/app.js.map
