import axios from "axios";
const APIURL = "http://localhost:3005"

export const getLinesItems = () =>{
    return axios
    .get(APIURL + "/items")
    .then((res) => res.data)
    .catch((err) => console.log(err));
}
export const getLineItemsFetch = () => {
    const result = fetch(APIURL + "/items")
                    .then(response => response.json())
                    .catch(data => console.log(data));
    return result;
}
