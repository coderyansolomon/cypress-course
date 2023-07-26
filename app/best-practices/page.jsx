import ItemsAccordion from '../components/Accordion'
import styles from './bestPractices.module.css'

const items = [
    {
      summary: 'Best Practice #1) Test unhappy paths',
      details: `Don't just test the 'happy path' of the user. Make sure to 
      test users that might be maliciously using your app or actions that might 
      not be common`,
      id: '1',
    },
    {
        summary: 'Best Practice #2) Use stable selectors',
        details: `Use data-* attributes to provide context to your 
        selectors and isolate them from CSS or JS changes. Don't target 
        elements based on CSS attributes such as: id, class, tag. 
        Don't target elements that may change their textContent. 
        Don't use too generic selector (e.g. cy.get(button))
        Don't couple it to styles`,
        id: '2',
    },
    {
        summary: 'Best Practice #3) Do not assign return values',
        details: `Cypress does NOT run synchonously. See *docs`,
        id: '3',
    },
    {
        summary: 'Best Practice #4) Do not test external sites',
        details: `Only test websites that you control. Try to avoid 
        visiting or requiring a 3rd party server. If you choose, you 
        may use cy.request() to talk to 3rd party servers via their APIs. 
        If possible, cache results via cy.session() to avoid repeat visits`,
        id: '4',
    },
    {
        summary: 'Best Practice #5) Keep tests independent',
        details: `Don't make one test dependent on another. This becomes extremely difficult
        to manage. Trust me`,
        id: '5',
    },
    {
        summary: 'Best Practice #6) Do not worry about writing tiny tests',
        details: `Writing tiny tests, like unit tests, is non-performant and excessive.
        Cypress resets various state and tests between tests that takes a long time. So
        small tests hurt performance. Plus, you'll still know exactly what assertion fails
        in a longer e2e test`,
        id: '6',
    },
    {
        summary: 'Best Practice #7) Clean up state before tests run',
        details: `Don't clean up state with after or afterEach. One benefit
        of Cypress is incrementally writing tests and application code. And if the state isn't
        maintained after a test, it can make it more difficult to know what you should test next.
        If something fails in the middle of your test, the after cleanup functions won't get a
        chance to run. Cypress already cleans up state between tests, so this might not 
        be something you need to worry about at all`,
        id: '7',
    },
    {
        summary: 'Best Practice #8) Using arbitrary cy.wait()',
        details: `Use route aliases or assertions to guard Cypress from 
        proceeding until an explicit condition is met. *docs`,
        id: '8',
    },
]

export default function BestPracticesPage(){
    return (
        <main className={styles.main}>
            <h1 className={styles.header}>
                Best Practices (recommended by Cypress)
            </h1>
            <ItemsAccordion items={items} />
        </main>
    )
}