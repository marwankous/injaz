$(function() {
    "use strict";



    // chart 6

			var ctx = document.getElementById("timeChart").getContext('2d');


      var gradientStroke3 = ctx.createLinearGradient(0, 0, 0, 300);
      gradientStroke3.addColorStop(0, '#52e8ff');
      

      var gradientStroke4 = ctx.createLinearGradient(0, 0, 0, 100);
      gradientStroke4.addColorStop(0, ' #ff8052');
      

			var myChart = new Chart(ctx, {
				type: 'bar',
				data: {
          labels: ["Janv", "Févr", "Mars", "Avr", "Mai", "Juin", "Juill", "Août", "Sept", "Oct", "Nov", "Déc"],
					datasets: [{
						label: 'Vente',
						data: [15, 8, 12, 5, 12, 8, 16, 25, 15, 10, 20, 10],
						backgroundColor: gradientStroke3,
            hoverBackgroundColor: gradientStroke3
					}, {
						label: 'Achat',
						data: [25, 18, 22, 15, 22, 18, 26, 35, 25, 20, 30, 20],
						backgroundColor: gradientStroke4,
            hoverBackgroundColor: gradientStroke4,
					}]
				},
			options: {
				legend: {
				  display: true,
				  labels: {
					fontColor: '#585757',  
					boxWidth:40
				  }
				},
				tooltips: {
				  enabled:true,
          displayColors:false
				},	
			  scales: {
				  xAxes: [{
				  	  categoryPercentage: 0.3,
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

    // chart 6

			var ctx = document.getElementById("timeChart1").getContext('2d');


      var gradientStroke3 = ctx.createLinearGradient(0, 0, 0, 300);
      gradientStroke3.addColorStop(0, '#42e695');

      var gradientStroke4 = ctx.createLinearGradient(0, 0, 0, 300);
      gradientStroke4.addColorStop(0, ' #7f00ff');

			var myChart = new Chart(ctx, {
				type: 'bar',
				data: {
          labels: ["Janv", "Févr", "Mars", "Avr", "Mai", "Juin", "Juill", "Août", "Sept", "Oct", "Nov", "Déc"],
					datasets: [{
						label: 'Vente',
						data: [15, 8, 12, 5, 12, 8, 16, 25, 15, 10, 20, 10],
						backgroundColor: gradientStroke3,
            hoverBackgroundColor: gradientStroke3
					}, {
						label: 'Achat',
						data: [25, 18, 22, 15, 22, 18, 26, 35, 25, 20, 30, 20],
						backgroundColor: gradientStroke4,
            hoverBackgroundColor: gradientStroke4,
					}]
				},
			options: {
				legend: {
				  display: true,
				  labels: {
					fontColor: '#585757',  
					boxWidth:40
				  }
				},
				tooltips: {
				  enabled:true,
          displayColors:false
				},	
			  scales: {
				  xAxes: [{
				  	  categoryPercentage: 0.3,
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