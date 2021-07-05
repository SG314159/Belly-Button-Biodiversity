// console.log(cityGrowths);  //verified that data set loads into html and then this file loads and runs

// Goal of program: Create bar chart of 5 cities whose populations have seen greatest increase in growth

// Step 1: Sort cities in descending order by population growth
var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();

// Step 2: Select the top 5 cities
var topFiveCities = sortedCities.slice(0,5);

// Step 3: Create arrays for city names and populations from the data
var topFiveCityNames = topFiveCities.map(cityObject => cityObject.City);
var topFiveCityGrowths = topFiveCities.map(cityObject => parseInt(cityObject.Increase_from_2016));

// Step 4: Use Plotly to create bar chart from the arrays
var trace={
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type:"bar"};

var data=[trace];

var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City"},
    yaxis: {title: "Population Growth, 2016-17"} };

Plotly.newPlot("bar-plot", data, layout);  // bar-plot is the id tag in the HTML


//------------------------------------------------------
// Skill Drill Section 12.2.2: Create bar chart for seven largest cities by population
// Sort by population
var sortedByPop = cityGrowths.sort((a,b)=> a.population - b.population).reverse();
// Slice the top 7
var top7Pop = sortedByPop.slice(0,7);
// Create arrays for names and populations
var top7PopNames = top7Pop.map(cityObject => cityObject.City);
var top7PopValues = top7Pop.map(cityObject => cityObject.population);
// Plot bar chart at bar-plot2 id 
var trace = { x: top7PopNames, y: top7PopValues, type: "bar" };
var data = [trace];
var layout={ title: "Most Populous Cities", xaxis: {title:"City"}, yaxis: {title:"Population"}};
Plotly.newPlot("bar-plot2",data,layout);
