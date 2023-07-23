import ItemsAccordion from '../components/Accordion'
import styles from './overview.module.css'

const items = [
    {
      summary: 'Step 1) Clone my repo',
      details: 'git clone MY REPO',
      id: '1',
    },
    {
      summary: 'Step 2) Install dependencies',
      details: 'npm install',
      id: '2',
    },
    {
      summary: 'Step 4) Run app',
      details: 'npm run dev',
      id: '3',
    },
    {
      summary: 'Step 4) Install Cypress',
      details: 'npm install cypress --save-dev',
      id: '4',
    },
    {
      summary: 'Step 5) Open & Configure Cypress',
      details: 'npx cypress open',
      id: '5',
    },
  ]

export default function Overview(){
    return (
        <main className={styles.main}>
            <h1 className={styles.header}>
                Overview & Install
            </h1>
            <ItemsAccordion items={items} />
        </main>
    )
}