import { Router } from 'express'

import videos from './videos'
import frames from './frames'

const router = Router()
router.use('/', videos)
router.use('/', frames)

export default router
