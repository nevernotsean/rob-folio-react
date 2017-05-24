import contentful from 'contentful'

const client = contentful.createClient({
  accessToken: '751eb90638512801ed48bcb8c431c20874c2edd067426e3e19428720a0d2ae7f',
  space: 'a72w7g4zs2xs',
})

export default client
