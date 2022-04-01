const axios = require('axios').default;
const fastify = require('fastify')({ logger: true })

const userName = process.env.USERNAME 
const password = process.env.PASSWORD 

fastify.post('/', async (req, resp) => {
  console.log(req.body);
  const postUrl = `https://${userName}:${password}@hoc.es.us-west-1.aws.found.io:9243/craft-stats/_doc`;
  const res = await axios.post(postUrl, req.body)
  return res.data;
})

const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()