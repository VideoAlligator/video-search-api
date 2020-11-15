import { Router } from 'express'
import VideoController from '../controllers/videos'

const router = Router()

router.post('/videos', async (req, res) => {
  const video = await VideoController.createVideo({
    name: req.body.name,
    duration: req.body.duration,
    labels: req.body.labels,
  })

  return res.send({ video })
})

export default router
