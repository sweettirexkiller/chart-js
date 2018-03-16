import Chart from 'chart.js'

var data = {
    labels: ['January', 'February', 'March'],

    datasets: [
        {
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [30, 122, 90]
        },
        {
            fillColor: "rgba(100,220,220,0.7)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [10, 52, 2]
        }
    ]
};

var context = document.querySelector('#graph').getContext('2d');

new Chart(context).Line(data);