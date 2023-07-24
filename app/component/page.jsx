import ItemsAccordion from '../components/Accordion'
import styles from './component.module.css'

const items = [
    {
      summary: 'Overview',
      details: `Cypress also allows you to test individual components of your app via
      component tests`,
      id: '1',
    },
    {
        summary: 'Component Vs E2E',
        details: `Cypress Component Testing uses the same test runner, commands, 
        and API to test components instead of pages. However, the main difference
        is that Cypress Component Testing builds your components using a development 
        server instead of rendering within a complete website, which results in 
        faster tests and fewer dependencies on infrastructure than end-to-end 
        tests covering the same code paths`,
        id: '2',
      },
      {
        summary: 'Additional configuration',
        details: `You may need to add additional configuration to your project to support
        component tests. For example, In Next JS you'll need to add something like: 
        
        const { defineConfig } = require('cypress')

        module.exports = defineConfig({
          component: {
            devServer: {
              framework: 'next',
              bundler: 'webpack',
            },
          },
        })`,
        id: '3'
      },
      {
        summary: 'Example',
        details: `You can mount a component using cy.mount(). Then, you can interact and 
        make assertions just as you would in an E2E test. Let's go test our Accordion`,
        id: '4'
      }
]

export default function ComponentPage(){
    return (
        <main className={styles.main}>
            <h1 className={styles.header}>Component Testing</h1>
            <ItemsAccordion items={items} />
        </main>
    )
}