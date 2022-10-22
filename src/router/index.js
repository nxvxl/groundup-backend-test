const { Router } = require("express")
const asyncHandler = require("../middlewares/async-wrapper")
const { getAlerts, getAlertById, updatedAlert } = require('../controllers/alerts.controller')

const router = Router()

router
  .route('/')
  .get(asyncHandler(getAlerts))

router.route('/:id')
  .get(asyncHandler(getAlertById))
  .put(asyncHandler(updatedAlert))

module.exports = router