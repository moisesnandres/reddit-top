import styles from '../styles/Entries.module.css'

export default function Entries({ entries, setEntries, setEntry, page, setPage, subreddit, setSubreddit, ...rest }) {
  const openEntry = (entry) => {
    const id = entry.data.id
    const selectedEntry = entries.find(item => item.data.id === id)
    entry.data.visited = true
    selectedEntry.data.visited = true
    setEntries(entries)
    setEntry(entry)
  }

  const deleteAll = () => {
    setEntry({})
    setEntries([])
  }

  const deleteEntry = (ev, entry, selectedEntry) => {
    ev.stopPropagation();
    const id = entry.data.id
    const updatedEntries = entries.filter(item => item.data.id !== id)
    setEntries(updatedEntries)
    if (selectedEntry) {
      setEntry({})
    }
  }

  const initialEntry = page * 10

  const changeSubreddit = (ev) => {
    setSubreddit(ev.target.value)
  }

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h2>Top 50 Entries</h2>
          <button onClick={deleteAll}>Delete All</button>
        </div>
        <div className={styles.search}>
          <label htmlFor="search">Search by subreddit: </label>
          <input id="search" name="search" type='text' value={subreddit} onChange={changeSubreddit} />
        </div>
      </div>
      <div className={styles.entries}>
        {
          entries.slice(initialEntry, initialEntry + 10).map(entry => {
            const selectedEntry = rest.entry.data && (entry.data.id === rest.entry.data.id)
            return (
              <article className={selectedEntry ? styles.selectedEntry : styles.entryItem} onClick={() => openEntry(entry)} key={entry.data.id}>
                <h4>{entry.data.title}</h4>
                <p>{entry.data.author}</p>
                <p>{entry.data.visited ? 'Visited' : 'Unread'}</p>
                <button onClick={(ev) => deleteEntry(ev, entry, selectedEntry)}>Delete</button>
              </article>
            )
          })
        }
      </div>
      <div className={styles.pagination}>
        <button disabled={page === 0} onClick={() => setPage(page - 1)}>Previous</button>
        <div>{page + 1}</div>
        <button disabled={entries.length / 10 < page + 1} onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </section>
  )
}
