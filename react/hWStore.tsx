import React from 'react'

// Here you'll define the component props' types:
interface PersonifyProps {
  something: string
}

const HWStore: StorefrontFunctionComponent<PersonifyProps> = () => {

  return (
    <div>
        <h1>Hello World, Personifyers!</h1>
    </div>
    )
}


// This schema refers to the content displayed in the Site Editor: https://learn.vtex.com/docs/course-content-workflow-step04site-editor-lang-en
HWStore.schema = {
  title: 'editor.personify.title',
  description: 'editor.personify.description',
  type: 'object',
  properties: {},
}

export default HWStore
