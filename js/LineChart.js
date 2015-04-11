define("LineChart",
  ["react","../lib/amcharts/amcharts","../lib/amcharts/serial","../lib/amcharts/themes/dark","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    /** @jsx React.DOM */
    /** @js LineChart.js */
    var React = __dependency1__["default"];

    var ____Class5=React.Component;for(var ____Class5____Key in ____Class5){if(____Class5.hasOwnProperty(____Class5____Key)){LineChart[____Class5____Key]=____Class5[____Class5____Key];}}var ____SuperProtoOf____Class5=____Class5===null?null:____Class5.prototype;LineChart.prototype=Object.create(____SuperProtoOf____Class5);LineChart.prototype.constructor=LineChart;LineChart.__superConstructor__=____Class5;function LineChart(){"use strict";if(____Class5!==null){____Class5.apply(this,arguments);}}
        LineChart.prototype.componentDidMount=function() {"use strict";
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
        };

        LineChart.prototype.render=function(){"use strict";
            return (
                React.DOM.div({id: "chartdiv"})
            );
        };
    ;

    __exports__["default"] = LineChart;
  });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJMaW5lQ2hhcnQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanMgTGluZUNoYXJ0LmpzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuLi9saWIvYW1jaGFydHMvYW1jaGFydHMnO1xuaW1wb3J0ICcuLi9saWIvYW1jaGFydHMvc2VyaWFsJztcbmltcG9ydCAnLi4vbGliL2FtY2hhcnRzL3RoZW1lcy9kYXJrJztcblxuY2xhc3MgTGluZUNoYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgZnVuY3Rpb24gem9vbUNoYXJ0KCkge1xuICAgICAgICAgICAgaWYgKGNoYXJ0Lnpvb21Ub0luZGV4ZXMpIHtcbiAgICAgICAgICAgICAgICBjaGFydC56b29tVG9JbmRleGVzKDEzMCwgY2hhcnREYXRhLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNoYXJ0ID0gQW1DaGFydHMubWFrZUNoYXJ0KCdjaGFydGRpdicsIHtcbiAgICAgICAgICAgIFwidGhlbWVcIjogXCJkYXJrXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzZXJpYWxcIixcbiAgICAgICAgICAgIFwiYXV0b01hcmdpbnNcIjogZmFsc2UsXG4gICAgICAgICAgICBcIm1hcmdpbkxlZnRcIjogOCxcbiAgICAgICAgICAgIFwibWFyZ2luUmlnaHRcIjogOCxcbiAgICAgICAgICAgIFwibWFyZ2luVG9wXCI6IDEwLFxuICAgICAgICAgICAgXCJtYXJnaW5Cb3R0b21cIjogMjYsXG4gICAgICAgICAgICBcInBhdGhUb0ltYWdlc1wiOiBcImh0dHA6Ly93d3cuYW1jaGFydHMuY29tL2xpYi8zL2ltYWdlcy9cIixcbiAgICAgICAgICAgIFwiZGF0YVByb3ZpZGVyXCI6IHRoaXMucHJvcHMuZGF0YSxcbiAgICAgICAgICAgIFwidmFsdWVBeGVzXCI6IFt7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcInYxXCIsXG4gICAgICAgICAgICAgICAgXCJheGlzQWxwaGFcIjogMCxcbiAgICAgICAgICAgICAgICBcImluc2lkZVwiOiB0cnVlXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIFwiZ3JhcGhzXCI6IFt7XG4gICAgICAgICAgICAgICAgXCJ1c2VOZWdhdGl2ZUNvbG9ySWZEb3duXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJiYWxsb29uVGV4dFwiOiBcIltbY2F0ZWdvcnldXTxicj48Yj52YWx1ZTogW1t2YWx1ZV1dPC9iPlwiLFxuICAgICAgICAgICAgICAgIFwiYnVsbGV0XCI6IFwicm91bmRcIixcbiAgICAgICAgICAgICAgICBcImJ1bGxldEJvcmRlckFscGhhXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJidWxsZXRCb3JkZXJDb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICAgICAgICAgICAgICBcImhpZGVCdWxsZXRzQ291bnRcIjogNTAsXG4gICAgICAgICAgICAgICAgXCJsaW5lVGhpY2tuZXNzXCI6IDIsXG4gICAgICAgICAgICAgICAgXCJsaW5lQ29sb3JcIjogXCIjZmRkNDAwXCIsXG4gICAgICAgICAgICAgICAgXCJuZWdhdGl2ZUxpbmVDb2xvclwiOiBcIiM2N2I3ZGNcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlRmllbGRcIjogXCJ2aXNpdHNcIlxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBcImNoYXJ0U2Nyb2xsYmFyXCI6IHt9LFxuICAgICAgICAgICAgXCJjaGFydEN1cnNvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZUxpbmVFbmFibGVkXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZUxpbmVCYWxsb29uRW5hYmxlZFwiOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjYXRlZ29yeUZpZWxkXCI6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgXCJjYXRlZ29yeUF4aXNcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyc2VEYXRlc1wiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiYXhpc0FscGhhXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJtaW5Ib3Jpem9udGFsR2FwXCI6IDYwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNoYXJ0LmFkZExpc3RlbmVyKFwiZGF0YVVwZGF0ZWRcIiwgem9vbUNoYXJ0KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQgPSBcImNoYXJ0ZGl2XCI+PC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGluZUNoYXJ0OyJdLCJmaWxlIjoiTGluZUNoYXJ0LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=