
// import { useState } from "react";
// import styles from "../styles/CreateEventForm.module.css";
// import { collection, getDocs, addDoc, updateDoc,deleteDoc,doc } from "firebase/firestore";
// import { db } from "../config/fire";

// const CreateEventForm = () => {
//   const [eventTitle, setEventTitle] = useState("");
//   const [eventDescription, setEventDescription] = useState("");
//   const [eventDate, setEventDate] = useState("");
  

//   const onSubmitHandler = async (e:any) => {
//     e.preventDefault();
//     const newEvent = {
//       title: eventTitle,
//       description: eventDescription,
//       date: eventDate,
//     };
//     try {
//       const docRef = await addDoc(collection(db, "events"), newEvent);
//       console.log("Document written with ID: ", docRef.id);
//       // reset form values
//       setEventTitle("");
//       setEventDescription("");
//       setEventDate("");
//     } catch (error) {
//       console.error("Error adding document: ", error);
//     }
//   };

//   return (
//     <form className={styles.form} onSubmit={onSubmitHandler}>
//       <label className={styles.label} htmlFor="title">
//         Title:
//       </label>
//       <input
//         className={styles.input}
//         type="text"
//         id="title"
//         value={eventTitle}
//         onChange={(e) => setEventTitle(e.target.value)}
//       />

//       <label className={styles.label} htmlFor="description">
//         Description:
//       </label>
//       <textarea
//         className={styles.textarea}
//         id="description"
//         value={eventDescription}
//         onChange={(e) => setEventDescription(e.target.value)}
//       ></textarea>

//       <label className={styles.label} htmlFor="date">
//         Date:
//       </label>
//       <input
//         className={styles.input}
//         type="date"
//         id="date"
//         value={eventDate}
//         onChange={(e) => setEventDate(e.target.value)}
//       />

//       <button className={styles.button} type="submit">
//         Create Event
//       </button>
//     </form>
//   );
// };

// export default CreateEventForm;




import { useState, useEffect } from "react";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// import { db } from "../config/firebase";
import { collection, getDocs, addDoc, updateDoc,deleteDoc,doc,serverTimestamp } from "firebase/firestore";
import { db } from "../config/fire"
import styles from '../styles/CreateEventForm.module.css';
import Link from "next/link";

const createEvent = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [events, setEvents] = useState([]);


  useEffect(()=>{
    fetchEvents
  },[])
  
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const newEvent = {
      title,
      date: serverTimestamp(),
      time,
      location,
      description,
      creator: "user123",
      attendees: [],
    };
    try {
      const docRef = await addDoc(collection(db, "events"), newEvent);
      console.log("Document written with ID: ", docRef.id);
      // Reset form values
      setTitle("");
      setDate("");
      setTime("");
      setLocation("");
      setDescription("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
// get event are come from
    const fetchEvents = async () => {
      const querySnapshot = await getDocs(collection(db, "events"));
      const eventsData:any = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("asdfaskjldf",eventsData)
      setEvents(eventsData);
    };
    // fetchEvents();


  



  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="title" className={styles.label}>
        Title:
      </label>
      <input
        type="text"
        id="title"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.input}
      />

      <label htmlFor="date" className={styles.label}>
        Date:
      </label>
      <input
        type="date"
        id="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className={styles.input}
      />

      <label htmlFor="time" className={styles.label}>
        Time:
      </label>
      <input
        type="text"
        id="time"
        placeholder="Time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className={styles.input}
      />

      <label htmlFor="location" className={styles.label}>
        Location:
      </label>
      <input
        type="text"
        id="location"
        placeholder="Loaction of Event"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className={styles.input}
      />

      <label htmlFor="description" className={styles.label}>
        Description:
      </label>
      <textarea
        id="description"
        value={description}
        placeholder="Description of Event"
        onChange={(e) => setDescription(e.target.value)}
        className="textarea"
      ></textarea>
<Link href="/eventlist">
<button type="submit" onClick={fetchEvents} className={styles.button}>
        Create Event
      </button>
</Link>
      

      
    </form>
    



  );
};

export default createEvent;
