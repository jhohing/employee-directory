import axios from "axios";
const url = 'https://randomuser.me/api/?results=50&nat=us';

//api call
export default {
    getEmployees: function () {
        return axios.get(url)

    }
}
