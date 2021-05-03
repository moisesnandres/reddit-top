import styles from '../styles/Entry.module.css'

export default function Entry({ entry }) {
  if (Object.entries(entry).length === 0) {
    return <article className={styles.container}>
      <p>Please select an item from the left menu</p>
    </article>
  }

  return (
    <article className={styles.container}>
      <h2>{entry.data.title}</h2>
      <p>Author: {entry.data.author}</p>

      {
        entry.data.thumbnail ?
          <a href={entry.data.url} target='_blank'>
            <img src={entry.data.thumbnail} alt={entry.data.title} />
          </a> :
          null
      }
      <p><b>{entry.data.num_comments}</b> comments</p>
    </article>
  )
}
