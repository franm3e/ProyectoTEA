// specify the columns
	var columnDefs = [
		{
			headerName: "", 
			field: "posicionGeo", 
			width: 25,
			suppressSizeToFit: true
		},
		{
			headerName: "Nombre",
			field: "nombre", 
			resizable: true,
			minWidth: 169,
			width: 169,
			suppressSizeToFit: true,
			cellRenderer: function(params){
				return "<a href='panelControlP.html' style='color:#000000;'>"+params.value+"</a>";
			  }
		},
		{
			headerName: "Edad", 
			field: "edad", 
			minWidth: 67,
			width: 67,
			resizable: true,
			suppressSizeToFit: true
		},
		{
			headerName: "Matrícula", 
			field: "matricula", 
			minWidth: 92,
			width: 92,
			resizable: true,
			suppressSizeToFit: true
		},
		{
			headerName: "Frecuencia Cardíaca", 
			field: "frecuencia", 
			width: 80,
			resizable: true,
			cellClassRules: {
				'rag-yellow': 'x > 100 && x < 120',
				'rag-red': 'x > 120'
			},
			suppressSizeToFit: false
		},
		{
			headerName: "Temperatura Corporal", 
			field: "temperatura", 
			width: 80,
			resizable: true,
			cellClassRules: {
				'rag-yellow': 'x > 37.2 && x < 38',
				'rag-red': 'x > 38'
			}
		},
		{
			headerName: "Sudoración", 
			field: "sudoracion", 
			width: 80,
			resizable: true,
			cellClassRules: {
				'rag-yellow': 'x > 60 && x < 80',
				'rag-red': 'x > 80'
			}
		},
		{
			headerName: "Nivel Estrés", 
			field: "estres", 
			width: 80,
			resizable: true,
			cellClassRules: {
				'rag-yellow': 'x > 60 && x < 80',
				'rag-red': 'x > 80'
			}
		},
		{
			headerName: "Distancia Recorrida", 
			field: "distancia", 
			width: 80,
			resizable: true,
			cellClassRules: {
				'rag-yellow': 'x > 4 && x < 5',
				'rag-red': 'x > 5'
			}
		},
		{
			headerName: "Movimiento", 
			field: "movimiento", 
			width: 80,
			resizable: true,
			cellClassRules: {
				'rag-yellow': 'x > 40 && x < 50',
				'rag-red': 'x > 50'
			}
		},
		{
			headerName: "Humedad", 
			field: "humedad", 
			width: 80,
			resizable: true,
			cellClassRules: {
				'rag-yellow': 'x > 45 && x < 55',
				'rag-red': 'x > 55'
			}
		},
		{
			headerName: "Luminosidad", 
			field: "luminosidad", 
			width: 80,
			resizable: true,
			cellClassRules: {
				'rag-yellow': 'x > 260 && x < 290',
				'rag-red': 'x > 290'
			}
		},
		{
			headerName: "Ruido", 
			field: "ruido", 
			width: 80,
			resizable: true,
			cellClassRules: {
				'rag-yellow': 'x > 180 && x < 190',
				'rag-red': 'x > 190'
			}
		},
		{
			headerName: "Temperatura Ambiente", 
			field: "temperaturaAmb", 
			width: 80,
			resizable: true,
			cellClassRules: {
				'rag-yellow': 'x > 25 && x < 28',
				'rag-red': 'x > 28'
			}
		}
	];

	// specify the data
	var rowData = [
		{
			id: 'fran',
			posicionGeo: "", 
			nombre: "Francisco Martínez Esteso", 
			edad: "23", matricula: "FME2332", 
			frecuencia: 85, 
			temperatura: 36.8, 
			sudoracion: 20, 
			estres: 30,
			distancia: 2.3,
			movimiento: 20,
			humedad: 30,
			luminosidad: 200,
			ruido: 150,
			temperaturaAmb: 18
		},
		{
			id: 'javi',
			posicionGeo: "", 
			nombre: "Javier Herreros Martínez", 
			edad: "24", 
			matricula: "JHM2442",
			frecuencia: 93,
			temperatura: 37.1, 
			sudoracion: 28, 
			estres: 15,
			distancia: 1.1,
			movimiento: 5,
			humedad: 25,
			luminosidad: 189,
			ruido: 95,
			temperaturaAmb: 20
		},
		{
			id: 'cesar',
			posicionGeo: "", 
			nombre: "César Díaz Nieto", 
			edad: "24", 
			matricula: "CDN2442",
			frecuencia: 87,
			temperatura: 36.5, 
			sudoracion: 26, 
			estres: 10,
			distancia: 2.5,
			movimiento: 10,
			humedad: 20,
			luminosidad: 193,
			ruido: 113,
			temperaturaAmb: 17
		}
	];

	// let the grid know which columns and what data to use
	var gridOptions = {
		columnDefs: columnDefs,
		getRowNodeId: function(data) { return data.id; },
		animateRows: true,
		rowData: rowData
	};
		
	var masmenos = true;

	function updateData() {
		var franRowNode = gridOptions.api.getRowNode('fran');
		var javiRowNode = gridOptions.api.getRowNode('javi');
		var cesarRowNode = gridOptions.api.getRowNode('cesar');
		var newFrecuencia = Math.floor(Math.random()*5);
		// var newTemperatura = 

		if(masmenos && 
			(rowData[2].frecuencia <= 100)) {
			cesarRowNode.setDataValue('frecuencia', rowData[2].frecuencia + newFrecuencia);
			masmenos = false;
		}else{
			cesarRowNode.setDataValue('frecuencia', rowData[2].frecuencia - newFrecuencia);
			masmenos = true;
		}


	}

	// lookup the container we want the Grid to use
	var eGridDiv = document.querySelector('#mainGrid');

	// create the grid passing in the div to use together with the columns & data we want to use
	new agGrid.Grid(eGridDiv, gridOptions);

    var sort = [
        {colId: 'movimiento', sort: 'asc'}
    ];
	gridOptions.api.setSortModel(sort);
	gridOptions.api.sizeColumnsToFit();

	function sizeToFit() {
		gridOptions.api.sizeColumnsToFit();
	}


	window.setInterval(updateData, 1000);