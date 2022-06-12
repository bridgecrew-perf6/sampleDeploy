function displayGraph(id, data){

    var xAarray = []
    var yArray = []
    data.forEach(ele => {
        xAarray.push(ele.time)
        yArray.push(ele.data)
    })

    // Define Data
    var content = [{
        x: xAarray,
        y: yArray,
        mode: "lines",
        type: "scatter"
    }]

    // Define Layout
    var layout = {
        xaxis: {range: [Math.min.apply(Math, xAarray), Math.max.apply(Math, xAarray)], title: "time"},
        yaxis: {range: [Math.min.apply(Math, yArray), Math.max.apply(Math, yArray)], title: id},
        title: id+" Sensor data"
    };

    Plotly.newPlot(id, content, layout, {scrollZoom: true});

}

function displayData(dataType, data){
        
    var htmlData = '<hr>\
    <div class="row">\
        <div class="col-sm-12 col-md-6 col-lg-2">\
           <b>'+dataType+'</b>\
        </div>\
        <div class="col-sm-12 col-md-6 col-lg-4">\
            <div>DATA</div>\
        </div>\
        <div class="col-sm-12 col-md-12 col-lg-6">\
            <div id='+dataType+'></div>\
        </div>\
    </div>';
    console.log(htmlData);
    $('#sensor_data').append(htmlData);

    displayGraph(dataType, data);
}

async function getTemparatureData(){
    var options = {
        type: "GET",
        url: "/data/temparature",
        contentType: "application/json; charset=utf-8",
        success: function(resp){
            console.log("Fetched Temparature data")
            displayData("temparature", resp);
        },
        error: function(err){
            console.error(err)
        }
    }

    await $.ajax(options);
}

async function getHumidityData(){
    var options = {
        type: "GET",
        url: "/data/humidity",
        contentType: "application/json; charset=utf-8",
        success: function(resp){
            console.log("Fetched Humidity data")
            displayData("humidity", resp);
        },
        error: function(err){
            console.error(err)
        }
    }

    await $.ajax(options);
}

window.onload = () => {
    getHumidityData()
    getTemparatureData()
}