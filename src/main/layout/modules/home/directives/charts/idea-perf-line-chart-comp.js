import angular from 'angular';
import * as d3 from 'd3';

function ideaPerfLineChart() {
  require('./charts.scss');

  	function drawChart(_scp, _el) {
  		var w = 100;
  		var h = 35;

  		var svg = d3
  				.select(_el)
  				.append('svg')
  				.attr('width', w)
  				.attr('height', h)
  				.append('g')

  		var x = d3.scaleTime()
	    .domain(d3.extent(_scp.chartData, function(d) {return d.date}))
	    .range([0, w]);

	    var y = d3.scaleLinear()
	    .domain(d3.extent(_scp.chartData, function(d) {return d.abs}))
	    .domain(d3.extent(_scp.chartData, function(d) {return d.rel}))
	    .range([h, 0]);

	    var line = d3.line()
	    .x(function (d) { return x(d.date); })
	    .y(function (d) { return y(d.abs); })
	    
	    var dashedline = d3.line()
	    .x(function (d) { return x(d.date); })
	    .y(function (d) { return y(d.rel); })

	    svg.append("path")
	    	.datum(_scp.chartData)
	    	.attr("class", "lpath")
	     	.attr('d', line)

	     svg.append("path")
	     	.datum(_scp.chartData)
	    	.attr("class", "lpath")
	    	.style("stroke-dasharray", "3,3")
	     	.attr('d', dashedline)

  	}

	return {
		restrict: 'AE',
		scope:{
			chartData: "="
		},
		link: function(scope, elem, attrs){
			drawChart(scope, elem[0])
		}
	}
}

export default angular.module('directives.charts.ideaPerfLineChart', [])
  .directive('ideaPerfLineChart', ideaPerfLineChart)
  .name;
  