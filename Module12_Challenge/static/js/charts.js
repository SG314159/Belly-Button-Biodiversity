// Challenge 12 Deliverable 1
// Create Horizontal Bar Chart

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();



function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// 1. Create the buildCharts function. Parameter sample is the id number selected from dropdown menu.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    var allPartipantsData = data.samples;
    //console.log(partipantData);

    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var oneParticipantData = allPartipantsData.filter(sampleObj => sampleObj.id == sample);
    //console.log(oneParticipantData);

    //  5. Create a variable that holds the first sample in the array.
    var participantObject = oneParticipantData[0];
    //console.log(participantObject);

    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var oneParticipantOtuids = participantObject.otu_ids;
    var oneParticipantOtuLabels = participantObject.otu_labels;
    var oneParticipantValues = participantObject.sample_values;
    //console.log(oneParticipantOtuids);
    //console.log(oneParticipantOtuLabels);
    //console.log(oneParticipantValues);

    // 7. Create the yticks for the bar chart.
    // Get top 10 ids, then reverse b/c of how bars are built in horizontal bar charts
    // Add the "OTU" in front of each id to clarify on graph.
    var top10ids = oneParticipantOtuids.slice(0,10).reverse();
    //console.log(top10ids);

    var otuLabels = top10ids.map(id => "OTU " + id);
    //console.log(otuLabels);

    // 8. Create the trace for the bar chart. 
    var dataValues = oneParticipantValues.slice(0,10).reverse();
    var hoverLabels = oneParticipantOtuLabels.slice(0,10).reverse();
    var trace1 = {
      x: dataValues,
      y: otuLabels,
      text: hoverLabels,
      orientation: 'h',
      type: "bar"
    }
    var barData = [trace1];

    // console.log(barData);

    // 9. Create the layout for the bar chart. 
    var barLayout = {
     title: "Top 10 Bacteria Cultures Found",
     xaxis: {title: "Bacteria Count"},
     yaxis: {title: "Bacteria ID"}
    };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout);

    
    
    // ****** Deliverable 2 *************
    // Attempt to work out hover text. Come back later.
    // //{"("+oneParticipantOtuids+", "+ oneParticipantValues+")"+"<br>"+oneParticipantOtuLabels}
    // var bubbleHover =oneParticipantOtuids.map(function(id) {return "("+id+", "}); 
    // //bubbleHover = bubbleHover.map()
    // console.log(bubbleHover);

    // 1. Create the trace for the bubble chart.
    // https://plotly.com/javascript/bubble-charts/
    var trace2 = {
        x: oneParticipantOtuids,
        y: oneParticipantValues,
        text: oneParticipantOtuLabels,
        mode: 'markers',
        marker: {colorscale: 'Earth', color: oneParticipantOtuids,
          size: oneParticipantValues},
    };
    var bubbleData = [trace2];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: 'Bacteria Cultures per Sample',
      xaxis: {title: "OTU ID"},
      yaxis: {title: "Bacteria Count"}
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble",bubbleData,bubbleLayout); 

    
    // ****** Deliverable 3 *************
    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var allParticipantsMetadata = data.metadata;
    //console.log(allParticipantsMetadata);

    // 2. Create a variable that holds the first sample in the metadata array.
    var oneParticipantMetadata = allParticipantsMetadata.filter(sampleObj => sampleObj.id == sample)[0];
    //console.log(oneParticipantMetadata);

    // 3. Create a variable that holds the washing frequency.
    var oneParticipantWashFreq = oneParticipantMetadata.wfreq;
    //console.log(oneParticipantWashFreq);

    // 4. Create the trace for the gauge chart.
    var trace3 = {
      domain: { x: [0, 1], y: [0, 1] },
      value: oneParticipantWashFreq,
      title: {text: "Belly Button Washing Frequency"+"<br>"+"Scrubs per Week"},
      type: "indicator",
      mode: "gauge+number",
      gauge: {
        bar: { color: "black" },
        axis: { range: [null, 10] },
        steps: [
          {range:[0, 2], color:"red"},
          {range:[2, 4], color:"orange"},
          {range:[4, 6], color:"yellow"},
          {range:[6, 8], color:"lightgreen"},
          {range:[8, 10], color:"green"}]}
    };
    var gaugeData = [trace3];

    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { width: 600, height: 500, margin: { t: 0, b: 0 } };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge",gaugeData,gaugeLayout);

  });





}
