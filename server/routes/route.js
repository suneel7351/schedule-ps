const express = require("express")
const Controller = require("../controllers/Controller")
const authenticate = require("../middleware/verify")
const EventController = require("../controllers/EventController")

const router = express.Router()
router.post("/details", authenticate, Controller.details)
router.post("/availability", authenticate, Controller.availability)
router.get("/me", authenticate, Controller.me)
// router.get("/logout", authenticate, Controller.logout)
router.put("/update", authenticate, Controller.updateProfile)
router.post("/create-event", authenticate, EventController.createEvent)
router.delete("/delete-event/:eventId", authenticate, EventController.deleteEvent)
router.get("/single-event/:id", EventController.singleEvent)
router.get("/get-profile/:id", Controller.getProfile)
router.post("/add-holiday", authenticate, Controller.addHolidays)
router.post("/delete-holiday", authenticate, Controller.deleteHolidays)
router.put("/event/:eventId", authenticate, EventController.updateEvent)
router.get("/booked-events", authenticate, Controller.getAllBookedEvents)

module.exports = router