import { USER_TYPES } from '../../constants'
import axios from 'axios'
export const getUsers = async (req, res) => {
  const env = { app_env: process.env.APP_ENV, node_env: process.env.NODE_ENV, apiURL: process.env.API_URL }
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    res.send({ user_types: USER_TYPES, env: env, users: data })
  } catch (err) {
    res.send({ error: 'Cannot fetch data!', message: err })
  }
}
