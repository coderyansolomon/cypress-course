import { Button, TextField } from '@mui/material'
import ItemsAccordion from '../components/Accordion'
import styles from './forms.module.css'

const items = [
    {
      summary: 'Step 1) Get Form',
      details: `First, we need to get the form.`,
      id: '1',
    },
    {
        summary: 'Step 2) Type In Form',
        details: `cy.type('words')`,
        id: '2',
      },
      {
        summary: 'Step 3) Subscribe',
        details: `cy.click()`,
        id: '3',
      },
  ]

export default function FormsPage(){
    return (
        <main className={styles.main}>
            <h1 className={styles.header}>Testing Forms</h1>
            <ItemsAccordion items={items} />
            <TextField className={styles.input} label="Email" variant="filled" />
            <Button>
                Subscribe
            </Button>
        </main>
    )
}