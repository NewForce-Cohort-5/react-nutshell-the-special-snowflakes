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

    /*
        Return a context provider which has the
        `events` state, `getEvents` and `getEventById` functions,
        and the `addEvent` function as keys. This
        allows any child elements to access them.
    */
    return (
        <EventContext.Provider value={{
            events, getEvents, getEventById, addEvent
        }}>
            {props.children}
        </EventContext.Provider>
    )

}