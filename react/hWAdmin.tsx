import React, { FC, /*useState*/ } from 'react'
import { FormattedMessage } from 'react-intl'           // to consume the translations provided by the messages builder
import { Layout, PageBlock, PageHeader } from 'vtex.styleguide'     // UI components we provide you out of the box; https://styleguide.vtex.com/#/Introduction/Developing

//  Only to show how the flow with GraphQL looks like:
//      import { useQuery } from 'react-apollo'
//      import HELLO from './graphql/helloWorld.graphql'

import './styles.global.css'

const HWAdmin: FC = () => {

//   const { data, loading, error } = useQuery(HELLO)
//   console.log(data)
//   const payloads: [string] = [data?.helloWorld] ?? ['Empty :('];


  return (
    <Layout
      pageHeader={
        <PageHeader
          title={<FormattedMessage id="admin-personify.hello-world" />}
        />
      }
    >
      {// payloads.map((payload) => {
        // <p>{payload}</p>
      //})
    }
      <PageBlock title="PersonifyXP Tracking Integration App" subtitle="{{settings.username}}" variation="full">
          
      </PageBlock>
    </Layout>
  )
}

export default HWAdmin
