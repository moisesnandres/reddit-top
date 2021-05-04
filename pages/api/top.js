// import top from '../../public/top.json'

export default async (req, res) => {
  const { topic } = req.query
  const response = await fetch(`http://reddit.com/r/${topic}.json?limit=50`)
  const responseJson = await response.json()
  res.status(200).json(responseJson)
}
