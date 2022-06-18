function displayGraph(id, xAarray, yArray){

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
        title: id
    };

    Plotly.newPlot(id, content, layout, {scrollZoom: true});

}

function displayData(dataType, X, Y){
        
    var htmlData = '<hr>\
    <div class="row">\
        <div class="col-sm-12 col-md-6 p-3 mb-2">\
           <h2>'+dataType+'</h2>\
        </div>\
        <div class="col-sm-12 col-md-6">\
            <div class="shadow p-3 mb-5 bg-body rounded">\
                <h3>\
                    <span>'

        if (dataType.match(/temp/i)){

            htmlData += '<i class="fa-solid fa-temperature-three-quarters"></i>'
        }
        else if(dataType.match(/humid/i)){
            htmlData += '<i class="fa-solid fa-droplet"></i>'
        }
        else if(dataType.match(/pressure/i)){
            htmlData += '<i class="fa-solid fa-gauge-high"></i>'
        }
        else if(dataType.match(/wind/i)){
            htmlData += '<i class="fa-solid fa-wind"></i>'
        }

        htmlData += '</span>\
        '+Y[Y.length -1]+'\
        </h3></div>\
        </div>\
        <div class="col-sm-12 col-md-12">\
            <div id='+dataType+'></div>\
        </div>\
    </div>';
    // console.log(htmlData);
    $('#sensor_data').append(htmlData);

    displayGraph(dataType, X, Y);
}

async function getSensorData(){
    var options = {
        type: "GET",
        url: "/data/sensorData",
        data: {deviceID: 1},
        contentType: "application/json; charset=utf-8",
        success: function(resp){
            console.log("Fetched Sensor Data")
            // console.log(resp)
            displaySensorData(resp)
        },
        error: function(err){
            console.error(err)
        }
    }

    await $.ajax(options)

}

function getArrayData(data){
    var sensorData = {}

    var single = data[0]

    for (const key in single){
        if (key == "_id") continue;
        sensorData[key] = new Array();
    }

    data.forEach( ele => {
        for (const key in ele){
            if (key == "_id") continue;
            sensorData[key].push(ele[key])
        }
    })

    return sensorData
}

function displaySensorData(data){

    var sensorData = getArrayData(data)
    // console.log(sensorData)
    for (const key in sensorData){
        if (key == "date")continue;
        displayData(key, sensorData['date'], sensorData[key])
    }
}

window.onload = () => {
    getSensorData()
}