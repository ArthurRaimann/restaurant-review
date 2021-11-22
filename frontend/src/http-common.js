import axios from 'axios'

/**
 * Setup file for http requests made with axios
 */

export default axios.create({
    baseURL: "https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/restaurant-review-jpxhp/service/restaurants/incoming_webhook/",
    header: {
        "Content-type": "aaplication/json"
    }
})