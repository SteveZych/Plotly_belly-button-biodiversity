d3.json('data/samples.json').then((data)=>{
    //Create Horizontal bar chart by ID
    
    // Function to filter by ID
    function filterbyID(data){
        return data.samples.id === "940";
    }
    var filteredData = data.filter(filterbyID);

    var sample_values = filteredData.map((id) => id.sample_values);
    var barValues = [];
    for (i=0 ; i<10; i++){
        barValues.push(sample_values[i]);
    };

    var otu_ids =  filterData.map((id) => id.otu_ids);
    var barLabels = [];
    for (i=0 ; i<10; i++){
        barLabels.push(otu_ids[i]);
    };

    var otu_labels = filterData.map((id) => id.otu_labels);
    var barHover = [];
    for (i=0 ; i<10; i++){
        barHover.push(otu_labels[i]);
    };

    
});