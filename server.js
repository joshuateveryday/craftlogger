const axios = require('axios').default;
const fastify = require('fastify')({ logger: true })

const userName = process.env.USERNAME 
const password = process.env.PASSWORD 
const listenPort = process.env.LISTEN_PORT || 3000

fastify.post('/', async (req, resp) => {
  const postUrl = `https://${userName}:${password}@hoc.es.us-west-1.aws.found.io:9243/craft-stats/_doc`;
  axios.post(postUrl, req.body)
  // console.log(res.data)
  // return res.data 
  return { status: "OK" }
})

const start = async () => {
  try {
    await fastify.listen(listenPort, "0.0.0.0")
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()