//const axios = require('axios');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;



let getInformacion = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temperatura = await clima.getClima(coors.lat, coors.lng);

        return `El clima en  ${coors.direccion} es de ${temperatura}`;

    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`;
    }
}

getInformacion(argv.direccion)
    .then(mensaje => {
        console.log(mensaje);
    })
    .catch(e => console.log(e));

/*
lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(e => { console.log(e) });

clima.getClima(11.0041072, -74.80698129999999)
    .then(temp => console.log(temp))
    .catch(e => console.log(e));
*/