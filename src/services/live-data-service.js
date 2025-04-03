const axios = require('axios');
const cron = require('node-cron');

const {live_data_base_url} = require('../config/api-endpoints.json')

class LiveDataService {
    async StartService(secs) {
        cron.schedule(`${secs} * * * * *`, () => {
            console.log(`cron job running every ${secs} seconds`);
            this.FetchData();
        });
    }

    async FetchData() {
        const data = await axios.get(`${live_data_base_url}115048`);
        console.log(data.data.miniscore.status);
    }
}

module.exports = new LiveDataService();