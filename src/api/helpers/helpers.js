import axios from './axios'

export default {
  makeContentRequest(requestData, storageKey) {
    return axios.axios
      .post('', requestData)
      .then((response) => response.data)
      .then((data) => {
        if (this.dataHasErrors(data)) return data

        const response = data.data
        this.storeResponse(response, storageKey)
        this.setPageSeo(response)

        return response
      })
      .catch((error) => {
        return this.readStoredResponse(storageKey, error.response)
      })
  },
  dataHasErrors(data) {
    const errors = data.errors || data.error

    if (errors !== undefined) {
      // Turn into toast
      alert('Error encountered: ' + this.extractErrorMessage(errors))
      return true
    }
    return false
  },
  setPageSeo(response) {
    if (!response.entry || !response.entry.seo) return

    const seo = response.entry.seo
    const social = seo.social

    document.title = seo.title
    document
      .querySelector('meta[name="description"]')
      .setAttribute('content', seo.description)
    document
      .querySelector('link[rel="canonical"]')
      .setAttribute('href', response.entry.url)

    // Facebook
    document
      .querySelector('meta[property="og:title"]')
      .setAttribute('content', social.facebook.title)
    document
      .querySelector('meta[property="og:description"]')
      .setAttribute('content', social.facebook.description)
    document
      .querySelector('meta[property="og:url"]')
      .setAttribute('content', response.entry.url || null)
    document
      .querySelector('meta[property="og:image"]')
      .setAttribute(
        'content',
        social.facebook.image ? social.facebook.image.url : null
      )

    // Twitter
    document
      .querySelector('meta[name="twitter:title"]')
      .setAttribute('content', social.twitter.title)
    document
      .querySelector('meta[name="twitter:description"]')
      .setAttribute('content', social.twitter.description)
    document
      .querySelector('meta[name="twitter:url"]')
      .setAttribute('content', response.entry.url || null)
    document
      .querySelector('meta[name="twitter:image"]')
      .setAttribute(
        'content',
        social.twitter.image ? social.twitter.image.url : null
      )
  },
  storeResponse(response, storageKey) {
    localStorage.setItem(storageKey, JSON.stringify(response))
  },
  readStoredResponse(storageKey, errorResponse = null) {
    const storedData = localStorage.getItem(storageKey)

    if (!storedData && !!errorResponse) {
      this.dataHasErrors(errorResponse.data)
    } else if (!storedData) {
      return null
    }

    return JSON.parse(storedData)
  },
  extractErrorMessage(errors) {
    // errors[0].message || errors[0] || errors
    if (typeof errors === 'string') {
      return errors
    } else if (typeof errors === 'object') {
      return errors[0].message || errors[0]
    }
  },
  slugify(string) {
    const a =
      'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
    const b =
      'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
    const p = new RegExp(a.split('').join('|'), 'g')

    return string
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
      .replace(/&/g, '-and-') // Replace & with 'and'
      .replace(/[^\w-]+/g, '') // Remove all non-word characters
      .replace(/--+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, '') // Trim - from end of text
  },
}
