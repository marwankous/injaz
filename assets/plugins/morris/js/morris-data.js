
$(function () {
    "use strict";
	Morris.Donut({
	  element:'donut-chart',
	  data: [
		{value: 20, label: 'Frais'},
		{value: 80, label: 'Benefices'}
	  ],
	  colors: [	
			'#eb5076',
			'#02ba5a'
		],
		resize: true,
		labelColor: "#000",
	  formatter: function (x) { return x + "%"}
	});

 });    