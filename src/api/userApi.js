import axiosClient from './axiosClient'

const userApi = {
    register: (registerValues) => {
        const url = '/user/register'
        return axiosClient.post(url, registerValues)
    },

    login: (loginValues) => {
        const url = '/user/login'
        return axiosClient.post(url, loginValues)
    }
}

export default userApi