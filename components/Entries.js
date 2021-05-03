import styles from '../styles/Entries.module.css'

export default function Entries({ entries, setEntry }) {
  return (
    <section className={styles.container}>
      {
        entries.map(entry => (
          <article className={styles.entryItem} onClick={() => setEntry(entry)} key={entry.data.id}>
            <h4>{entry.data.title}</h4>
            <p>{entry.data.author}</p>
          </article>
        ))
      }
    </section>
  )
}
