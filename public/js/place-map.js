const markerArray = []

function initMapWarehouse() {
    const myMap = new google.maps.Map(document.querySelector("#myMap"), {
        zoom: 4,
        center: { lat: 47.22552781003126, lng: 15.417282954461234 },
    })
    getLocationsWarehouse(myMap)
}

function initMap() {
    const myMap = new google.maps.Map(document.querySelector("#myMap"), {
        zoom: 4,
        center: { lat: 47.22552781003126, lng: 15.417282954461234 },
    });
    getLocationsEquipment(myMap)
}

function getLocationsEquipment(myMap) {
    axios
        .get('/api/placeEquipment')
        .then(response => response.data.forEach(elm => {
            const newMarker = printMarker(elm.location, myMap)
            printInformarker(elm.name, elm.brand, newMarker, myMap)
        }))
        .catch(err => console.log(err))
}

function getLocationsWarehouse(myMap) {
    axios
        .get('/api/placeWarehouse')
        .then(response => response.data.forEach(elm => {
            const newMarker = printMarker(elm.location, myMap)
            printInformarker2(elm.name, newMarker, myMap)
        }))
        .catch(err => console.log(err))
}

function printMarker(location, myMap) {
    const { coordinates } = location

    const newMarker = new google.maps.Marker({
        map: myMap, position: { lat: coordinates[0], lng: coordinates[1] }
    })

    markerArray.push(newMarker)
    return newMarker
}

function printInformarker(name, brand, newMarker, myMap) {
    const contentString = "<h3>" + `${name}` + "</h3>" + "<br>" + `${brand}`

    const infowindow = new google.maps.InfoWindow({
        content: contentString
    })

    newMarker.addListener('click', () => {
        infowindow.open({
            anchor: newMarker,
            map: myMap,
            shouldFocus: false,
        })
    })
}

function printInformarker2(name, newMarker, myMap) {
    const contentString = `<h2>Almacen:</h2>${name}`


    const infowindow = new google.maps.InfoWindow({
        content: contentString
    })

    newMarker.addListener('click', () => {
        infowindow.open({
            anchor: newMarker,
            map: myMap,
            shouldFocus: false,
        })
    })
}