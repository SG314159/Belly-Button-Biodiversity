// Module 12 Section 12.4.3

function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;

      // forEach elmt of sampleNames, a dropdown option is appended to the menu.  
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)  // text of each dropdown is set to the value
          .property("value", sample);
      });
  })} //end of function init()
  
// Fcn called by onchange attribute of the dropdown menu in index.html
// newSample is the value of the selected menu option; equivalent to this.value
function optionChanged(newSample){
    console.log(newSample);
    buildMetadata(newSample);
    //buildCharts(newSample);
}

function buildMetadata(sample){
    d3.json("samples.json").then( (data) => {
        var metadata = data.metadata;  // array with all metadata for dataset
        //look thru objects in array and find one with id = sample that was passed in as sample
        var resultArray= metadata.filter(sampleObj => sampleObj.id==sample); 
        var result = resultArray[0];
        console.log(result);

        // The id of the Demographic Info panel is sample-metadata. Use this div and assign to panel.
        var PANEL = d3.select("#sample-metadata");
        PANEL.html("");  // clear contents of panel from any prior stuff
        PANEL.append("h6")
            .text(function(d) {"ID: " + result.id})
            // .text("ETHNICITY: "+ result.ethnicity)
            // .text("GENDER: "+result.gender)
            // .text("AGE: "+ result.age)
            // .text("LOCATION: " + result.location)
            // .text("BBTYPE: "+result.bbtype)
            // .text("WFREQ: "); //h6 heading to panel and print location
    });
}


  init();