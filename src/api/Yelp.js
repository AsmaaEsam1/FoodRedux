import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer b6Qc3T9FfLVg_944CQA0rCYC_vtF9adtWuwERIupyqLErvORFSL3Rc4khGI8tFjqT1fIYirzdcFjUT4E1z8-da55b20ox7tz_BllR4mWlKw8nivpi5Xdus_Ehl2NX3Yx'
    }
})