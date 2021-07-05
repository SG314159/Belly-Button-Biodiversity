//Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

//Exercise for 12.1.2
// Plotly.newPlot("plotArea", [{x:[5,10,15], y:[10,20,300]}]);
// Plotly.newPlot("plotArea", [{x:[8,16], y:[5, 5]}]);

//12.1.3
var trace={  x:["burrito","pizza","chicken"],
            y:[10, 18, 5],
            type: "bar"};

var layout= { title:"Luncheon Survey",
                xaxis: {title:"Food Option"},
                yaxis: {title: "Number of Respondents"}};
Plotly.newPlot("plotArea", [trace], layout);

//12.1.3 Skill Drill
var drinks={
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", 
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y:[22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar" };

var layout = {
    title: "Drinks Ordered at Bar",
    xaxis: {title: "Drink Name"},
    yaxis: {title: "Percent of Drinks Ordered"} 
};

Plotly.newPlot("plotArea2", [drinks], layout);

//12.1.4 Pie chart
var drinks={
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", 
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values:[22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "pie" };

var layout = {
    title: "Drinks Ordered at Bar"};

Plotly.newPlot("plotArea3", [drinks], layout);

//12.1.4 Scatter plot
var trace={
    x: [2.7, 7.1, 8.9, 9.7, 12.2, 16.1, 18.0, 19.6],
    y:[22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    mode: "markers",
    type: "scatter" };

var layout = {
    title: "My first scatter plot",
    xaxis: {title: "Number of Pencils"},
    yaxis: {title: "Number of Aliens"}};

Plotly.newPlot("plotArea4", [trace], layout);