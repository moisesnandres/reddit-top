import styles from '../styles/Entries.module.css'

export default function Entries({ entries, setEntries, setEntry, ...rest }) {
  const openEntry = (entry) => {
    const id = entry.data.id
    const selectedEntry = entries.find(item => item.data.id === id)
    entry.data.visited = true
    selectedEntry.data.visited = true
    setEntries(entries)
    setEntry(entry)
  }

  return (
    <section className={styles.container}>
      {
        entries.map(entry => {
          const selectedEntry = rest.entry.data && (entry.data.id === rest.entry.data.id)
          return (
            <article className={selectedEntry ? styles.selectedEntry : styles.entryItem} onClick={() => openEntry(entry)} key={entry.data.id}>
              <h4>{entry.data.title}</h4>
              <p>{entry.data.author}</p>
              <p>{entry.data.visited ? 'Visited' : 'Unread'}</p>
            </article>
          )
        })
      }
    </section>
  )
}
