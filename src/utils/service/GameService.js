import axios from "axios";

const url = 'http://localhost:8500/games'

export const getAll = () => {
    return axios.get(url)
        .then(res => res.data)
        .catch(err => console.error(err))
}

export const getById = (id) => {
    return axios.get(`${url}/${id}`)
        .then(res => res.data)
        .catch(err => console.error(err))
}

export const create = (game) => {
    return axios.post(url, game)
        .then(res => res.data)
        .catch(err => console.error(err))
}

export const update = (game) => {
    return axios.put(`${url}/${game.id}`, game)
        .then(res => res.data)
        .catch(err => console.error(err))
}

export const remove = (id) => {
    return axios.delete(`${url}/${id}`)
        .then(() => true)
        .catch(err => console.error(err))
}
