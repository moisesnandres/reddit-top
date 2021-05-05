import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce'
import Entries from '../components/Entries'
import Entry from '../components/Entry'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [entries, setEntries] = useState([])
  const [entry, setEntry] = useState({})
  const [subreddit, setSubreddit] = useState('redditdev')
  const [debouncedQuery] = useDebounce(subreddit, 1000);
  const [page, setPage] = useState(0)

  useEffect(() => {
    async function fetchTopEntries() {
      const response = await fetch(`api/top?topic=${debouncedQuery}`)
      const jsonResponse = await response.json()
      setEntries(jsonResponse.data.children)
    }

    fetchTopEntries()
  }, [debouncedQuery])

  return (
    <div>
      <Head>
        <title>Top 50 entries from Reddit</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainContainer}>
        <Entries entries={entries} {...{setEntries, setEntry, entry, page, setPage, subreddit, setSubreddit}}/>
        <Entry entry={entry} />
      </main>
    </div>
  )
}
