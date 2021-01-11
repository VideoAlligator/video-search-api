import { Router } from 'express'

import videos from './videos'

const router = Router()
router.use('/', videos)

export default router
