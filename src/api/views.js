import helpers from './helpers/helpers'

// Component structures
import seo from './components/seo'

export default {
  loadHome() {
    const requestData = {
      query: `{
        entry(slug: "home") {
          ... on home_home_Entry {
            ${seo}
          }
        }
      }`,
    }

    return helpers.makeContentRequest(requestData, 'view.home')
  },
}
