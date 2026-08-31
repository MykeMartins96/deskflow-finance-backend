import express from 'express'

import { analyzeTasks } from '../controllers/aiController.js'

const router = express.Router()

router.post('/analyze', analyzeTasks)

export default router