const axios = require('axios');

const getClima = async(lat, lng) => {
    //axios
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=b4bcf2802bb08ee107a1f579bb8a9e05`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}