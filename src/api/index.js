/*
 * API requests
 * @Author: baixiaoming
 * @Date: 2019-01-12 21:00:52
 * @Last Modified by: baixiaoming
 * @Last Modified time: 2019-01-12 21:05:33
 */

import axios from 'axios'

const getUserInfo = (userId) => {
    axios.get('/user/info', {
        params: { userId }
    }).then(function (response) {
        console.log('response: ', response);
    }).catch(function (error) {
        console.log('error: ', error);
    })
}

export default {
    getUserInfo
}
