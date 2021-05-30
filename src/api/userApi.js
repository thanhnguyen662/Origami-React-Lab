import axiosClient from './axiosClient'

const userApi = {
    register: (registerValues) => {
        const url = '/user/register'
        return axiosClient.post(url, registerValues)
    }
}

export default userApi