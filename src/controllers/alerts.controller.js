const Alerts = require("../models/alert")

exports.getAlerts = async function getAlerts(req, res, next) {
  const alerts = await Alerts.find()
  res.json({ message: "ok", data: alerts })
}

exports.getAlertById = async function getAlertById(req, res, next) {
  const alert = await Alerts.findById(req.params.id)
  if (!alert) return res.status(404).json({ message: "Not Found" })
  res.json({ message: "ok", data: alert })
}

exports.updatedAlert = async function updatedAlert(req, res, next) {
  const alert = await Alerts.findByIdAndUpdate(req.params.id, { $set: req.body })
  if (!alert) return res.status(404).json({ message: "Not Found" })
  res.json({ message: "ok", data: alert })
}