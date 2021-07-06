// Module 12: Section 12.3.1 - Inspect an API call with d3.json
// The d3 library is loaded via CDN in the index.html file.
// Here, create desired URL and use d3 library to make call to SpaceX's API and print data received.
// const url = "https://api.spacexdata.com/v2/launchpads";
// d3.json(url).then(receivedData => console.log(receivedData));

// // Retrieve details from only the first element
// d3.json(url).then(spaceXresults => console.log(spaceXresults[0]));

// // Retrieve just one property of the first element; returns the value associated with key full_name
// d3.json(url).then(spaceXresults => console.log(spaceXresults[0].full_name));

// // Retrieve the 'latitude' property inside the location object of the first element.
// d3.json(url).then(spaceXresults => console.log(spaceXresults[0].location.latitude ));

// // 12.3.1 Skill Drill - use map() to print latitude and longitude of each SpaceX launch station
// d3.json(url).then(receivedData => receivedData.forEach(obj => console.log(obj.full_name)));


// 12.3.2 - Load json with d3, this time from external file instead of link
d3.json("samples.json").then(function (data) { console.log("hello from samples.json");});
// This gives error b/c of external file. Have to go thru http.server
// Open terminal and in folder with this file, type python -m http.server
// Then open browser and go to localhost:8000 and view console there.
// Repeat with data instead of hello string
d3.json("samples.json").then(function(data){ console.log(data);});

// To get washing frequency from each person metadata:
d3.json("samples.json").then(function(data){
    wfreq=data.metadata.map(person=>person.wfreq);
    console.log(wfreq);
})

// Sort the wfreq array in descending order. The sort method returns b-a to put in descending order.
d3.json("samples.json").then(function(data){
    wfreq=data.metadata.map(person => person.wfreq).sort((a,b)=>b-a);    
    console.log(wfreq);
});

// Delete null values from the sorted array by adding filter
d3.json("samples.json").then(function(data){
    wfreq=data.metadata.map(person => person.wfreq).sort((a,b)=>b-a); 
    filteredWfreq= wfreq.filter(element => element != null);   
    console.log(filteredWfreq);
});

// This accesses the metadata object for the first person
d3.json("samples.json").then(function(data){ console.log(data.metadata[0]);});

// Print out the metadata object values for the first person 
d3.json("samples.json").then(function(data){ 
    var firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach( ([key,value]) => 
    { console.log(key + ' : ' + value);} );
});

