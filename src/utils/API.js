import axios from "axios";
const url = 'https://randomuser.me/';

//api call
export default {
    getEmployees: function () {
        return axios.get(url)

    }
}
