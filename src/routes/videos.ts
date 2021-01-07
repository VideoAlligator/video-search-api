import { Router } from 'express'
import VideoController from '../controllers/videos'

const router = Router()

router.post('/videos', async (req, res) => {
  VideoController.create(res, req.body)
})

router.get('/videos', async (req, res) => {
  VideoController.list(res)
})

router.get('/videos/:videoId', async (req, res) => {
  VideoController.retrieve(res, req.params.videoId)
})

router.delete('/videos', async (req, res) => {
  VideoController.removeAll(res)
})

router.delete('/videos/:videoId', async (req, res) => {
  VideoController.remove(res, req.params.videoId)
})

export default router
