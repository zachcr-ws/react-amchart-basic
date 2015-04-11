/** @js LineChart.js */
import React from 'react';
import '../lib/amcharts/amcharts';
import '../lib/amcharts/serial';
import '../lib/amcharts/themes/dark';

class LineChart extends React.Component {
    componentDidMount() {
        function zoomChart() {
            if (chart.zoomToIndexes) {
                chart.zoomToIndexes(130, chartData.length - 1);
            }
        }

        var chart = AmCharts.makeChart('chartdiv', {
            "theme": "dark",
            "type": "serial",
            "autoMargins": false,
            "marginLeft": 8,
            "marginRight": 8,
            "marginTop": 10,
            "marginBottom": 26,
            "pathToImages": "http://www.amcharts.com/lib/3/images/",
            "dataProvider": this.props.data,
            "valueAxes": [{
                "id": "v1",
                "axisAlpha": 0,
                "inside": true
            }],
            "graphs": [{
                "useNegativeColorIfDown": true,
                "balloonText": "[[category]]<br><b>value: [[value]]</b>",
                "bullet": "round",
                "bulletBorderAlpha": 1,
                "bulletBorderColor": "#FFFFFF",
                "hideBulletsCount": 50,
                "lineThickness": 2,
                "lineColor": "#fdd400",
                "negativeLineColor": "#67b7dc",
                "valueField": "visits"
            }],
            "chartScrollbar": {},
            "chartCursor": {
                "valueLineEnabled": true,
                "valueLineBalloonEnabled": true
            },
            "categoryField": "date",
            "categoryAxis": {
                "parseDates": true,
                "axisAlpha": 0,
                "minHorizontalGap": 60
            }
        });

        chart.addListener("dataUpdated", zoomChart);
    }

    render(){
        return (
            <div id = "chartdiv"></div>
        );
    }
};

export default LineChart;