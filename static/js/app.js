d3.json('data/samples.json').then((data)=>{
    //Create Horizontal bar chart by ID
  
    var filteredData = data.samples[0];
    console.log(filteredData);
  

    // Map filtered data, for first ten sample values
    var sample_values = filteredData.sample_values;
    var barValues = [];
    for (i=0 ; i<10; i++){
        barValues.push(sample_values[i]);
    };
    console.log(barValues);
    
    // Map filtered data for first ten otu_ids
    var otu_ids =  filteredData.otu_ids;
    var barLabels = [];
    for (i=0 ; i<10; i++){
        var label = `OTU ${otu_ids[i]}`
        barLabels.push(label);
    };
    console.log(barLabels);

    // Map filtered data for first ten otu_labels
    var otu_labels = filteredData.otu_labels;
    var barHover = [];
    for (i=0 ; i<10; i++){
        barHover.push(otu_labels[i]);
    };
    console.log(barHover);

    var trace1 = {
        x: barValues,
        y: barLabels,
        type: "bar",
        orientation: 'h',
        text: barHover
    };
    var histoData = [trace1];
    Plotly.newPlot("bar", histoData);

    // Create a bubble chart that displays each sample

    var trace1 = {
        x: otu_ids,
        y: sample_values,
        mode: 'markers',
        marker: {
          color: otu_ids,
          size: sample_values
        }
      };
      
      var bubbleData = [trace1];
    
      
      Plotly.newPlot('bubble', bubbleData);


      // Display samples metadata

      var metaData = data.metadata[0];
      console.log(metaData);
      demographics = d3.select("sample-metadata").
      Object.entries(metaData).forEach(([key, value]) => {demographics.append('h6').text(`${key}: ${value}`)});
      
      
});