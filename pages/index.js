import Head from 'next/head'
import { useState, useEffect } from 'react'
import Entries from '../components/Entries'
import Entry from '../components/Entry'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [entries, setEntries] = useState([])
  const [entry, setEntry] = useState({})
  const [subreddit, setSubreddit] = useState('redditdev')
  const [page, setPage] = useState(0)

  useEffect(() => {
    async function fetchTopEntries() {
      const response = await fetch(`api/top?topic=${subreddit}`)
      const jsonResponse = await response.json()
      setEntries(jsonResponse.data.children)
    }

    fetchTopEntries()
  }, [subreddit])

  return (
    <div>
      <Head>
        <title>Top 50 entries from Reddit</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainContainer}>
        <Entries entries={entries} {...{setEntries, setEntry, entry, page, setPage}}/>
        <Entry entry={entry} />
      </main>
    </div>
  )
}
