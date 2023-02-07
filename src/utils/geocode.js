const request = require('request');

const geocode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=4a4a6e8a8ec0a961be692c26c68a4cb6&query=' + address;
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            console.log("Unable to connect to geocoding service!", undefined);
        }
        else if (body.error || !body.data.length) {
            console.log("Unable to find location! Try another search.", undefined);
        }
        else {
            console.log(body.data[0]);
            callback(undefined, {
                latitude: body.data[0].latitude,
                longitude: body.data[0].longitude,
                location: body.data[0].label
            })
        }
    })
}

module.exports = geocode;