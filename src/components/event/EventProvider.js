import React, {useState, createContext} from "react"

export const EventContext = createContext();

export const EventProvider = (props) => {
    
    const [events, setEvents] = useState([]);

    const getEvents = () => {
        return fetch("http://localhost:8088/events")
        .then(res => res.json())
        .then(setEvents)
    }

    const getEventById = (id) => {
        return fetch(`http://localhost:8088/events/${id}`)
        .then(res => res.json())
    }

    // Equivalent to saving an event
    const addEvent = event => {
        return fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        })
        .then(res => res.json())
    }

    const deleteEvent = (id) => {
        return fetch(`http://localhost:8088/events/${id}`, {
        method: "DELETE"
    })
        .then(getEvents)
    }

    const updateEvent = event => {
        return fetch(`http://localhost:8088/events/${event.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(event)
        })
          .then(getEvents)
      }

    return (
        <EventContext.Provider value={{
            events, getEvents, getEventById, addEvent, deleteEvent, updateEvent
        }}>
            {props.children}
        </EventContext.Provider>
    )

}