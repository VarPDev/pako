// This pragma is required so that React JSX is used instead of Qwik JSX
/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react'
import { SRCImage } from 'react-datocms'
import { StructuredText } from 'react-datocms/structured-text'

// An existing React component
function DatoText(content: any) {
  return (
    <StructuredText
      data={content.data}
      renderBlock={({ record }) => {
        switch (record.__typename) {
          case 'ImageBlockRecord':
            return (
              <SRCImage data={(record.asset as any).responsiveImage as any} />
            )
          default:
            return null
        }
      }}
    />
  )
}

// Qwik component wrapping the React component
export const QDatoText = qwikify$(DatoText)
