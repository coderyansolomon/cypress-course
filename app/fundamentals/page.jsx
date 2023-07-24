import ItemsAccordion from '../components/Accordion'
import styles from './fundamentals.module.css'

const items = [
    {
      summary: 'Fundamental 1) Describe blocks',
      details: `Your tests will exist in a describe block. This block takes two arguments. The first is a description of what you are testing. 
      The second is a callback function for your actually tests within that block`,
      id: '1',
    },
    {
        summary: 'Fundamental 2) It blocks',
        details: `Within your describe block, you will also have it blocks. 
        It blocks will be single tests within an overall test file. 
        The API for it() is the same as describe.
        The first argument is the title of an individual test, 
        and the second argument is a callback function containing your test code`,
        id: '2',
      },
    {
        summary: 'Fundamental 3) Commands & interacting with elements',
        details: `Cypress gives you various commands to help you test. 
        You can use these commands on the cy object.
        For example, cy.visit('/') will navigate the cypress runner to your home page.
        You have various other commands like cy.click(), cy.type(), cy.check(), etc. *docs
        NOTE: You must have your dev server running for Cypress to work.
        NOTE: Cypress has an async nature *docs`,
        id: '3',
      },
      {
        summary: 'Fundamental 4) Getting elements',
        details: `You're often going to want to get an element from the DOM and make some
        sort of assertion. For example, my h1 element contains certain text. You can get elements
        in Cypress by using the get function, and pass in a CSS query selector`,
        id: '4',
      },
      {
        summary: 'Fundamental 5) Command chaining & assertions',
        details: `After you get an element, you probably want to do something with that
        element, like make an assertion. You can to this by chaining on an assertion after
        getting an element. For example, get(h1).contains('text'). Cypress has various ways 
        of making an assertion *docs`,
        id: '5',
      },
      {
        summary: 'Fundamental 6) Focussing on a single test',
        details: `You can use it.only() to run a single test`,
        id: '6',
      },
      {
        summary: 'Fundamental 7) beforeEach',
        details: `You can use a beforeEach function to perform certain actions 
        prior to every test`,
        id: '7',
      },
      {
        summary: 'Fundamental 8) Custom commands',
        details: `You aren't limited to just the cy.X commands, but you can create
        your own custom commands. You add your custom commands to cypress/support/commands.ts
        For example, you might add a custom command getData that gets an element by data-test`,
        id: '8',
      },
    
  ]

export default function FundamentalsPage(){
    return (
        <main className={styles.main}>
            <h1 className={styles.header}>
                Testing Fundamentals
            </h1>
            <ItemsAccordion items={items} />
        </main>
    )
}