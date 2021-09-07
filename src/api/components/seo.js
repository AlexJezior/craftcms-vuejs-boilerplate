export default `url
seo {
  title
  description
  social {
    ...on Ether_SeoSocialNetworks{
      facebook {
        title
        image {
          url
        }
        description
      }
      twitter {
        title
        image {
          url
        }
        description
      }
    }
  }
}`
