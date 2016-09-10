import angular from 'angular';
import * as d3 from 'd3';

function portPerfDiffChart() {
  require('./charts.scss');

  	function drawChart(_scp, _el) {
  		var w = 140;
  		var h = 120;

  		var svg = d3
  				.select(_el)
  				.append('svg')
  				.attr('width', w)
  				.attr('height', h)
  				.append('g')

  		var xScale = d3.scaleTime()
	    .domain(d3.extent(_scp.chartData, function(d) {return d.date}))
	    .range([0, w]);

	    var yScale = d3.scaleLinear()
	    .domain([
			    d3.min(_scp.chartData, function(d) { return Math.min(d["abs"], d["rel"]); }),
			    d3.max(_scp.chartData, function(d) { return Math.max(d["abs"], d["rel"]); })
			  ])
	    .range([(h-30), 20]);

	    //.domain([0, d3.max(_scp.chartData, function(d) { return Math.max(d.abs, d.rel); })])

	    var line = d3.line()
	    .x(function (d) { return x(d.date); })
	    .y(function (d) { return y(d.abs); })
	    
	    var dashedline = d3.line()
	    .x(function (d) { return x(d.date); })
	    .y(function (d) { return y(d.rel); })

	    // draw a line for New York data
		var lineAbs = d3.area()
		    //.interpolate("basis")
		  
		    .x(function(d) { return xScale(d.date); })
		    .y(function(d) { return yScale(d["abs"]); });

		// draw a blue line for SF data.  This is not done in Bostock's version.
		// while his version looks cuter, it unfairly discriminates against the SF 
		// data by giving it no line.
		var lineRel = d3.area()
		    //.interpolate("basis")
		   
		    .x(function(d) { return xScale(d.date); })
		    .y(function(d) { return yScale(d["rel"]); });

		var area = d3.area()
		    //.interpolate("basis")
		    
		    .x(function(d) { return xScale(d.date); })
		    .y1(function(d) { return yScale(d["abs"]); });

	  svg.datum(_scp.chartData);

	  // i think this is defining a clipPath named 'clip-below' as the 
	  // horizontal line at the bottom of the graph
	  svg.append("clipPath")
	      .attr("id", "clip-below")
	      .append("path")
	      .attr("d", area.y0(h-5));

	  // i think this is defining a clipPath named 'clip-above' as the 
	  // horizontal line at the top of the graph
	  svg.append("clipPath")
	      .attr("id", "clip-above")
	      .append("path")
	      .attr("d", area.y0(0));
	  
	  // i think this is the area below SF values and above NY values.
	  // This is the light blue area.  i.e. "winter"
	  svg.append("path")
	      .attr("class", "area above")
	      .attr("clip-path", "url(#clip-above)")
	      .attr("d", area.y0(function(d) { return yScale(d["rel"]); }));
	    
	  // I think this is the area below NY values and above SF values.
	  // This is the light brown area.  i.e. "summer"
	  svg.append("path")
	      .attr("class", "area below")
	      .attr("clip-path", "url(#clip-below)")
	      .attr("d", area);
	    
	  // brown line for NY data
	  svg.append("path")
	      .attr("class", "lineAbs")
	      .attr("d", lineAbs);
	    
	  // blue line for SF data  
	  svg.append("path")
	      .attr("class", "lineRel")
	      .attr("d", lineRel);

	  // svg.append("g")
	  //     .attr("class", "x axis")
	  //     .attr("transform", "translate(0," + height + ")")
	  //     .call(xAxis);

	  // svg.append("g")
	  //     .attr("class", "y axis")
	  //     .call(yAxis)
	  //   .append("text")
	  //     .attr("transform", "rotate(-90)")
	  //     .attr("y", 6)
	  //     .attr("dy", ".71em")
	  //     .style("text-anchor", "end")
	  //     .text("Temperature (ºF)");
	    // svg.append("path")
	    // 	.datum(_scp.chartData)
	    // 	.attr("class", "lpath")
	    //  	.attr('d', line)

	    //  svg.append("path")
	    //  	.datum(_scp.chartData)
	    // 	.attr("class", "lpath")
	    // 	.style("stroke-dasharray", "3,3")
	    //  	.attr('d', dashedline)




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

export default angular.module('directives.charts.portPerfDiffChart', [])
  .directive('portPerfDiffChart', portPerfDiffChart)
  .name;
  