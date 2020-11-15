import { TRoutesInput } from '../types/routes'
import VideoController from '../controllers/video'

export default ({ app }: TRoutesInput) => {
  app.post('/videos', async (req, res) => {
    const video = await VideoController.createVideo({
      name: req.body.name,
      duration: req.body.duration,
      labels: req.body.labels,
    })

    return res.send({ video })
  })
}
