import top from '../../public/top.json'

export default (req, res) => {
  res.status(200).json(top)
}
