$(function() {
    "use strict";
	  
	  // chart 1
	 
		  var ctx = document.getElementById('dash2-chart1').getContext('2d');
		
			var myChart = new Chart(ctx, {
				type: 'bar',
				data: {
					labels: ["Janv", "Févr", "Mars", "Avr", "Mai", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "Déc"],
					datasets: [{
						label: "Total d'achat",
						data: [25000, 23000, 27000, 15000, 27000, 23000, 31000, 41000, 31000, 25000, 35000, 25000, 60000],
						backgroundColor: 'rgba(0, 0, 0, 0.07)',
						borderColor: "transparent",
						borderWidth: 3
					}, {
						label: 'Total payé',
						type: 'line',
						data: [10000, 8000, 12000, 5000, 12000, 8000, 16000, 25000, 15000, 10000, 20000, 10000, 15000],
						backgroundColor: "rgba(3, 208, 234, 0.23)",
						borderColor: "#03d0ea",
						pointBackgroundColor:'transparent',
                        pointHoverBackgroundColor:'#03d0ea',
						pointBorderWidth :2,
						pointRadius :3,
						pointHoverRadius :3,
						borderWidth: 3
						
					}]
				},
			options: {
				legend: {
				  display: false,
				  labels: {
					fontColor: '#585757',  
					boxWidth:40
				  }
				},
				tooltips: {
				  displayColors:false
				},	
			  scales: {
				  xAxes: [{
					barPercentage: .3,
					ticks: {
						beginAtZero:true,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.05)"
					},
				  }],
				   yAxes: [{
					ticks: {
						beginAtZero:true,
						fontColor: '#585757'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(0, 0, 0, 0.05)"
					},
				  }]
				 }

			 }
			}); 
			
			
	
	  });	