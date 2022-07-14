const Event = require("../models/Event");

const getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate("user", "name");
    res.json({
      status: "Completed",
      ...events,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      status: "Error",
      errorMessage: "Please contact an admin",
    });
  }
};
const createEvents = async (req, res) => {
  const event = new Event(req.body);

  event.user = req.uid; //Remember this comes from the validateJWT middleware

  try {
    const saveEvent = await event.save();

    res.json({
      status: "Completed",
      ...saveEvent,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      status: "Error",
      errorMessage: "Contact an admin",
    });
  }
};

const updateEvent = async (req, res) => {
  const eventId = req.params.id;
  const userUid = req.uid; //Remember this comes from the validateJWT middleware

  try {
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({
        status: "Error",
        errorMessage: "This event doesn't exist",
      });
    }

    if (event.user.toString() !== userUid) {
      return res.status(401).json({
        status: "Error",
        errorMessage: "You are not authorized to update this note",
      });
    }

    const newEvent = {
      ...req.body,
      user: userUid,
    };

    const updatedEvent = await Event.findByIdAndUpdate(eventId, newEvent, {
      new: true,
    });

    res.json({
      status: "Completed",
      updatedEvent,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      status: "Error",
      errorMessage: "Contact an admin",
    });
  }
};

const deleteEvent = async (req, res) => {
  const eventId = req.params.id;
  const userUid = req.uid; //Remember this comes from the validateJWT middleware

  try {
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({
        status: "Error",
        errorMessage: "This event doesn't exist",
      });
    }

    if (event.user.toString() !== userUid) {
      return res.status(401).json({
        status: "Error",
        errorMessage: "You are not authorized to delete this note",
      });
    }

    await Event.findByIdAndDelete(eventId);

    res.json({
      status: "Completed",
      message: "Event has been deleted",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      status: "Error",
      errorMessage: "Contact an admin",
    });
  }
};

module.exports = {
  getEvents,
  createEvents,
  updateEvent,
  deleteEvent,
};
