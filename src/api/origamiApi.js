import axiosClient from './axiosClient'


const origamiApi = {
    getPost: (params) => {
        const url = '/origami/all'
        return axiosClient.get(url, { params })
    }
}

export default origamiApi