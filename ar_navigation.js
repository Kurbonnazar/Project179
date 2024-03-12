var coordinates={}
$(document).ready(function(){
    getcoordinates()
})
function getcoordinates(){
    var searchparameters=new URLSearchParams(window.location.search)
    if (searchparameters.has("source")&&searchparameters.has("destination")){
        var source=searchparameters.get("source")
        var destination=searchparameters.get('destination')
        coordinates.source_lat=source.split(";")[0]
        coordinates.source_lon=source.split(";")[1]
        coordinates.destination_lat=destination.split(";")[0]
        coordinates.destination_lon=destination.split(";")[1]
    }
    else{
        alert("Coordinates not selected")
        window.history.back()
    }
}