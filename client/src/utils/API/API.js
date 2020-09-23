import axios from 'axios'

const API = {
  getGames: search => axios.get(`/api/games/${search}`),
  getProfile: () => axios.get('/api/players'),
  saveProfile: player => axios.post('/api/players', player),
  editProfile: (id, player) => axios.put(`/api/players/${id}`, player),
  deleteProfile: id => axios.delete(`/api/players/${id}`),
  getUsers: () => axios.get('/api/users'),
  loginUser: user => axios.post('/api/users/login', user),
  registerUser: user => axios.post('/api/users/register', user),
  deleteUser: id => axios.delete(`/api/users/${id}`)
}

export default API