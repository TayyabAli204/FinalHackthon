
import Head from 'next/head';
import styles from '../styles/Event.module.css';
import Link from 'next/link';

const events = [
  {
    id: 1,
    title: 'Event 1',
    date: 'TBD',
    location: 'TBD',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis ipsum vel neque suscipit laoreet.'
  },
  {
    id: 2,
    title: 'Event 2',
    date: 'TBD',
    location: 'TBD',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis ipsum vel neque suscipit laoreet.'
  },
  {
    id: 3,
    title: 'Event 3',
    date: 'TBD',
    location: 'TBD',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis ipsum vel neque suscipit laoreet.'
  }
];

export default function Event() {

  
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Events | Event Planner App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Upcoming Events</h1>
        

        <div className={styles.events}>
          {events.map((event) => (
            <div className={styles.event} key={event.id}>
              <h2>{event.title}</h2>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
              <p>Description: {event.description}</p>
              <Link href="/createEvent">
              <button className={styles.button}>Create Event</button>
              </Link>

            </div>
          ))}

          
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Event Planner App &copy; 2023</p>
      </footer>
    </div>
  );
}

