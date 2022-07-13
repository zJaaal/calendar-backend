const Event = require("../models/Event");

const getEvents = (req, res) => {
  res.json({
    status: "Completed",
    message: "Events loaded",
  });
};

const createEvents = async (req, res) => {
  const event = new Event(req.body);

  event.user = req.uid;

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

const updateEvent = (req, res) => {
  res.json({
    status: "Completed",
    message: "Event updated",
  });
};

const deleteEvent = (req, res) => {
  res.json({
    status: "Completed",
    message: "Event deleted",
  });
};

module.exports = {
  getEvents,
  createEvents,
  updateEvent,
  deleteEvent,
};
