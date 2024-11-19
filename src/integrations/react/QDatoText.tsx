// This pragma is required so that React JSX is used instead of Qwik JSX
/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react'
import { StructuredText } from 'react-datocms/structured-text'

// An existing React component
function DatoText(content: any) {
  return <StructuredText data={content.data} />
}

// Qwik component wrapping the React component
export const QDatoText = qwikify$(DatoText)
