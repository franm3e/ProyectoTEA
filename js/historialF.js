google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(dibujarBarrasCrisis);
google.charts.setOnLoadCallback(dibujarBarrasPorcentaje);

$(window).resize(function(){
    google.charts.setOnLoadCallback(dibujarBarrasCrisis);
    google.charts.setOnLoadCallback(dibujarBarrasPorcentaje);
});


function dibujarBarrasCrisis() {
    var data = google.visualization.arrayToDataTable([
        ['Mes', 'Zona Amarilla', 'Zona Roja'],
        //['Sep', 10, 8],
        //['Oct', 8, 5],
        ['Noviembre', 12, 6],
        ['Diciembre', 6, 2],
        ['Enero', 15, 4],
        ['Febrero', 8, 1]
    ]);

    var options = {
      chart: {
        title: 'Últimos 4 meses'
      },
        colors: ['#F2ED01','#FF0000']
    };

    var chart = new google.charts.Bar(document.getElementById('crisis'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}

function dibujarBarrasPorcentaje() {
    var data = google.visualization.arrayToDataTable([
        ['Mes', '% Crisis Evitadas'],
        //['Sep', 10, 8],
        //['Oct', 8, 5],
        ['Noviembre', 50],
        ['Diciembre', 33.3],
        ['Enero', 26.6],
        ['Febrero', 12.5]
    ]);

    var options = {
      chart: {
        title: 'Últimos 4 meses'
      },
        colors: ['#32BC28']
    };

    var chart = new google.charts.Bar(document.getElementById('porcentajes'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}
