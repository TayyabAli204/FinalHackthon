// import { useState, useEffect } from "react";
// import { collection, getDocs, addDoc, updateDoc,deleteDoc,doc,serverTimestamp } from "firebase/firestore";
// import { db } from "../config/fire"

// const EventList = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       const querySnapshot = await getDocs(collection(db, "events"));
//       const eventsData:any = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setEvents(eventsData);
//     };
//     fetchEvents();
//   }, []);

//   return (
//     <div>

//       {events.map((event) => (
        
//         <h1>hasdj</h1>
//       )
//       )}
//     </div>
//   );
// };

// export default EventList;



import { useState, useEffect } from "react";
import { collection, getDocs, addDoc, updateDoc,deleteDoc,doc,serverTimestamp } from "firebase/firestore";
import { db } from "../config/fire"
import styles from "../styles/EventList.module.css";

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsCollection = collection(db, "events");
      const eventsSnapshot = await getDocs(eventsCollection);
      const eventsData:any = eventsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEvents(eventsData);
    };
    fetchEvents();
  }, []);

  const handleDeleteEvent = async (eventId:any) => {
    try {
      await deleteDoc(doc(db, "events", eventId));
      setEvents(events.filter((event:any) => event.id !== eventId));
    } catch (error) {
      console.error("Error deleting event", error);
    }
  };

  return (
    <div className={styles.eventList}>
      <h2>Event List</h2>
      <ul className="ul">
        {events.map((event:any) => (
          <li key={event.id} className="li">
            <h3 className="h3">{event.title}</h3>
            <p className="p">Date: {event.date.toDate().toLocaleDateString()}</p>
            <p>Time: {event.time}</p>
            <p>Location: {event.location}</p>
            <p>Description: {event.description}</p>
            <button onClick={() => handleDeleteEvent(event.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;

