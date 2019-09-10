import { USER_TYPES } from '../../constants'

export const getUsers = (req, res) => {
  const env = { app_env: process.env.APP_ENV, node_env: process.env.NODE_ENV, apiURL: process.env.API_URL }
  if (req.query.url) return res.send({ url: req.query.url, env: env })
  return res.send({ user_types: USER_TYPES, env: env })
}
