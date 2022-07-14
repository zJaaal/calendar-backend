// Events Routes
// host + /api/events

const { Router } = require("express");
const {
  getEvents,
  createEvents,
  updateEvent,
  deleteEvent,
} = require("../controllers/events");
const { validateJWT } = require("../middlewares/validateJWT");
const { validateSchemas } = require("../middlewares/validateSchemas");
const { eventSchema } = require("../schemas/event");

const router = Router();

router.use(validateJWT);

//Get all events
router.get("/", getEvents);

//Create an event in the database
router.post("/", validateSchemas(eventSchema), createEvents);

//Update an event
router.put("/:id", validateSchemas(eventSchema), updateEvent);

//Delete an event
router.delete("/:id", deleteEvent);

module.exports = router;
