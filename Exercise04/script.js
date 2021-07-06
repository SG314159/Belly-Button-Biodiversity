// Create event listener and call updatePage if any change to the HTML body, such as selection of menu option.
d3.selectAll("body").on("change", updatePage);

function updatePage() {
    // Select the dropdown menu with id of selectOption
  var dropdownMenu = d3.selectAll("#selectOption").node();
  var dropdownMenuID = dropdownMenu.id; 
  var selectedOption = dropdownMenu.value;
  //var selectedCharacter = dropdownMenu;

  console.log(dropdownMenuID);
  console.log(selectedOption);
  //console.log(selectedCharacter);
};

// Skill drill for 12.4.1; dropdown options changed in the html file
