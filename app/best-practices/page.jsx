import ItemsAccordion from '../components/Accordion'
import styles from './bestPractices.module.css'

const items = [
    {
      summary: 'Best Practice #1 Test Unhappy Paths',
      details: `Don't just test the 'happy path' of the user. Make sure to 
      test users that might be maliciously using your app or actions that might 
      not be common.`,
      id: '1',
    }
]

export default function BestPracticesPage(){
    return (
        <main className={styles.main}>
            <h1 className={styles.header}>
                Best Practices
            </h1>
            <ItemsAccordion items={items} />
        </main>
    )
}