import axios from 'axios'

// Allow craftCMS previews.
let m = document.location.href.match(/\btoken=([^&]+)/)
const previewToken = m ? m[1] : ''
const requestPath = previewToken === '' ? '/api' : '/api?token=' + previewToken

export default {
  axios: axios.create({
    baseURL: requestPath,
    headers: {
      Authorization: `Bearer ${process.env.VUE_APP_AUTHORIZATION_TOKEN}`,
    },
  }),
}
