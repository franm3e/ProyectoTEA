  google.charts.load('current', {packages: ['corechart', 'line']});
  google.charts.load('current', { 'packages': ['map'] });
  google.charts.load('current', {'packages':['gauge']});
  google.charts.setOnLoadCallback(drawFC);
  google.charts.setOnLoadCallback(drawTemp);
  google.charts.setOnLoadCallback(drawSud);
  google.charts.setOnLoadCallback(drawMap);
  google.charts.setOnLoadCallback(drawEstres);
  google.charts.setOnLoadCallback(drawMedidaHumedad);
  google.charts.setOnLoadCallback(drawMedidaLuminosidad);
  google.charts.setOnLoadCallback(drawMedidaTemperatura);
  google.charts.setOnLoadCallback(drawMedidaRuido);

   function drawFC() {
       var data = new google.visualization.DataTable();
       data.addColumn('timeofday', 'Tiempo');
       data.addColumn('number', 'Javier Herreros Martínez');
      
       data.addRows([
           [[new Date().getHours(), new Date().getMinutes(), new Date().getSeconds()],  65]
       ]);

       var options = {
           title: 'Frecuencia Cardiaca (lpm)',
           hAxis: {
              title: 'Tiempo'
           },
           backgroundColor: 'white',
           legend: { position: 'top' }
       };

       var chart = new google.visualization.LineChart(document.getElementById('graficoFC'));
       chart.draw(data, options);

       setInterval(myTimer, 1000);
       function myTimer() {
          var now = new Date();
          data.addRows([[[now.getHours(), now.getMinutes(), now.getSeconds()], 65 + (Math.round(Math.random() * 7))]]);
          chart.draw(data,options);
       }

   }

   function drawTemp(){
     var data = new google.visualization.DataTable();
     data.addColumn('timeofday', 'Tiempo');
     data.addColumn('number', 'Javier Herreros Martínez');

     data.addRows([
      [[new Date().getHours(), new Date().getMinutes(), new Date().getSeconds()],  35]
     ]);

       var options = {
           title: 'Temperatura Corporal (ºC)',
           hAxis: {
               title: 'Tiempo'
           },
           backgroundColor: 'white',
           legend: { position: 'top' }
       };

       var chart = new google.visualization.LineChart(document.getElementById('graficoTemp'));
       chart.draw(data, options);

       setInterval(myTimer, 1000);
       function myTimer() {
          var now = new Date();
          data.addRows([[[now.getHours(), now.getMinutes(), now.getSeconds()], 35.8 + Math.random()]]);
          chart.draw(data,options);
       }
   }


   function drawSud(){
     var data = new google.visualization.DataTable();
     data.addColumn('timeofday', 'Tiempo');
     data.addColumn('number', 'Javier Herreros Martínez');

     data.addRows([
       [[new Date().getHours(), new Date().getMinutes(), new Date().getSeconds()],  20],
     ]);

       var options = {
           title: 'Sudoracion Corporal (ml/h)',
           hAxis: {
               title: 'Tiempo'
           },
           backgroundColor: 'white',
           legend: { position: 'top' }
       };

       var chart = new google.visualization.LineChart(document.getElementById('graficoSud'));
       chart.draw(data, options);

       setInterval(myTimer, 1000);
       function myTimer() {
          var now = new Date();
          data.addRows([[[now.getHours(), now.getMinutes(), now.getSeconds()], 21 + (Math.round(Math.random() * 7))]]);
          chart.draw(data,options);
       }

   }

   function drawMap() {
     var data = google.visualization.arrayToDataTable([
       ['Lat', 'Long', 'Name'],
       [38.978844, -1.855976, 'Escuela Superior de Ingenieria Informatica'],
     ]);

    var options = {
      mapType: 'normal',
      zoomLevel: 18,
      showTooltip: true,
      showInfoWindow: true
    };

    var map = new google.visualization.Map(document.getElementById('mapa'));

    map.draw(data, options);
  };

  function drawEstres() {
    var data = google.visualization.arrayToDataTable([
      ['Label', 'Value'],
      ['Estres', 30]
    ]);

    var options = {
      redFrom: 90, redTo: 100,
      yellowFrom:75, yellowTo: 90,
      minorTicks: 5
    };

    var chart = new google.visualization.Gauge(document.getElementById('estres'));

    chart.draw(data, options);

  }

  function drawMedidaHumedad() {
    var data = google.visualization.arrayToDataTable([
      ['Label', 'Value'],
      ['Humedad', 20]
    ]);

    var options = {
      redFrom: 90, redTo: 100,
      yellowFrom:75, yellowTo: 90,
      minorTicks: 5
    };

    var chart = new google.visualization.Gauge(document.getElementById('medidaHumedad'));

    chart.draw(data, options);

  }

  function drawMedidaLuminosidad() {
    var data = google.visualization.arrayToDataTable([
      ['Label', 'Value'],
      ['Lum', 140]
    ]);

    var options = {
      min: 100, max: 300,
      redFrom: 280, redTo: 300,
      yellowFrom:240, yellowTo: 280
    };

    var chart = new google.visualization.Gauge(document.getElementById('medidaLuminosidad'));

    chart.draw(data, options);

    setInterval(myTimer, 1000);
    function myTimer() {
      data.setValue(140 + (Math.round(Math.random() * 10)));
      chart.draw(data,options);
    }

  }

  function drawMedidaTemperatura() {
    var data = google.visualization.arrayToDataTable([
      ['Label', 'Value'],
      ['Temp', 25]
    ]);

    var options = {
      redFrom: 90, redTo: 100,
      yellowFrom:75, yellowTo: 90,
      minorTicks: 5
    };

    var chart = new google.visualization.Gauge(document.getElementById('medidaTemperatura'));

    chart.draw(data, options);

  }

  function drawMedidaRuido() {
    var data = google.visualization.arrayToDataTable([
      ['Label', 'Value'],
      ['Ruido', 20]
    ]);

    var options = {
      redFrom: 90, redTo: 100,
      yellowFrom:75, yellowTo: 90,
      minorTicks: 5
    };

    var chart = new google.visualization.Gauge(document.getElementById('medidaRuido'));

    chart.draw(data, options);

  }
