function createNewChart(issue){
    $('body').append('<div id="DOM_'+issue.id+'" style="min-width: 400px; height: 300px; margin: 0 auto"></div>')
    $.get('/grph/dt', {id: issue.id}, function(data, stat, xhr){
    	new Highcharts.Chart({
	        chart: {
	            renderTo: 'DOM_'+issue.id,
	            // zoomType: 'x',
	            spacingRight: 0
	        },
	        title: {text: issue.name}, 
	        xAxis: {type: 'datetime'},
			yAxis: {
				title: {text: ''}, 
				min: 0				
			},
	        tooltip: {
	            shared: true,
	            crosshairs: true
	        },
	        plotOptions: {
	            area: {
	                lineWidth: 1,
	                marker: {enabled: false},
	                shadow: false,
	                threshold: null, 
	                states: {hover: {lineWidth: 1}},
	            }
	        },

	        series: [{
	            type: 'area',
	            name: 'Ping, ms',
	            data: JSON.parse(data)
	        }]
	    })
    })
}


// var issues = [
// 	<%issues.forEach(function(issue){%>
// 		{
// 			id: '<%=issue.id%>', 
// 			name: '<%=issue.name%>'
// 		},
// 	<%})%>
// ]

// $.each(issues, function(n, i){
// 	createNewChart(i)
// })