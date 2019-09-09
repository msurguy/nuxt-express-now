import { USER_TYPES } from '../../constants'

export const getUsers = (req, res) => {
  if (req.query.url) return res.send({ url: req.query.url, apiURL: process.env.API_URL })
  return res.send(USER_TYPES)
}
