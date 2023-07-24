import Accordion from './components/Accordion'
import styles from './page.module.css'

const reasonsCypressIsGreat = [
  {
    summary: 'Reason 1',
    details: 'An all-in-one testing framework, assertion library, with mocking and stubbing',
    id: '1'
  },
  {
    summary: 'Reason 2',
    details: 'Focus on E2E and Component Testing -- real world testing',
    id: '2'
  },
  {
    summary: 'Reason 3',
    details: 'Runs in the browser and wrote in JavaScript',
    id: '3'
  },
  {
    summary: 'Reason 4',
    details: 'Good performance and can be integrated in CI/CD quite easily',
    id: '4'
  },
  {
    summary: 'Reason 5',
    details: 'Native access to the DOM and to your app',
    id: '5'
  },
  {
    summary: 'Reason 6',
    details: 'Great developer UX',
    id: '6'
  },
  {
    summary: 'Reason 7',
    details: 'Generally not flaky if you follow the best practices',
    id: '7'
  },
]

export default function Home() {
  return (
    <main className={styles.main}>
        <h1 className={styles.header}>Why Cypress?</h1>
        <ul>
          <Accordion items={reasonsCypressIsGreat} />
        </ul>
    </main>
  )
}
