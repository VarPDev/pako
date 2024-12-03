import { component$, useStyles$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { InnerSectionComponent } from '~/components/inner-section/innerSectionComponent'
import { ItalianSvg } from '~/components/svg/italian-svg'
import styles from '../../../blog.css?inline'

export default component$(() => {
  useStyles$(styles)

  return (
    <>
      <div class="w-full flex justify-end">
        <div class="w-12 mr-4">
          <a href="/privacy-policy/ita">
            <ItalianSvg />
          </a>
        </div>
      </div>

      <InnerSectionComponent showCta={false}>
        <div class="blog-content">
          <section class="text-center">
            <h1>Privacy & Policy</h1>
          </section>

          <p>
            Welcome to{' '}
            <strong>
              <a href="https://pasqualdelucia.com">pasqualedelucia.com</a>
            </strong>
            . Your privacy is important to me. This Privacy Policy explains how
            I collect, use, and protect your personal information while using
            the Site.
          </p>

          <h2>1. Information Collected</h2>

          <h3>a. Information Provided Voluntarily</h3>

          <p>
            I collect personal data that you provide directly to us, including:
          </p>
          <ul>
            <li>
              <strong>Contact Form</strong>: name and email address.
            </li>
            <li>
              <strong>Blog Comments</strong>: name, email address, and the
              content of the comment.
            </li>
            <li>
              <strong>Registration Form</strong>: first name, last name,
              username, email address, and password.
            </li>
            <li>
              <strong>Newsletter Subscription Form</strong>: email address.
            </li>
          </ul>

          <h3>b. Information Collected Automatically</h3>

          <p>
            I use <strong>GoatCounter</strong> to collect anonymous browsing
            statistics, such as:
          </p>
          <ul>
            <li>Pages visited.</li>
            <li>Duration of the visit.</li>
            <li>Interactions with the Site.</li>
          </ul>
          <p>
            <strong>Note</strong>: User IP addresses are not tracked.
          </p>

          <h2>2. Purpose of Data Processing</h2>

          <p>I use your personal data for:</p>
          <ul>
            <li>Responding to requests submitted via the contact form.</li>
            <li>Allowing publication and moderation of blog comments.</li>
            <li>Providing access to features for registered users.</li>
            <li>
              Sending updates and content through the newsletter (only if you
              have given consent).
            </li>
            <li>Analyzing the usage of the Site to improve our services.</li>
          </ul>

          <h2>3. Data Sharing</h2>

          <p>
            I share your personal data with third parties only in the following
            cases:
          </p>
          <ul>
            <li>
              <strong>
                <a
                  class="text-primary"
                  target="_blank"
                  href="https://resend.com/"
                >
                  Resend
                </a>
              </strong>
              : for sending emails related to the contact form, registration, or
              newsletter.
            </li>
            <li>When required by law.</li>
          </ul>
          <p>
            I do not sell or share your data with third parties for commercial
            purposes.
          </p>

          <h2>4. Data Retention</h2>

          <p>
            I retain your personal data only for as long as necessary to fulfill
            the purposes for which it was collected, unless required by law to
            retain it for a longer period.
          </p>

          <h2>5. User Rights</h2>

          <p>
            In accordance with the General Data Protection Regulation (GDPR),
            you have the right to:
          </p>
          <ul>
            <li>Access your personal data.</li>
            <li>Request the correction or deletion of your data.</li>
            <li>
              Withdraw your consent at any time (for example, for the
              newsletter).
            </li>
            <li>Object to the processing of data for specific purposes.</li>
            <li>File a complaint with the competent supervisory authority.</li>
          </ul>
          <p>
            You can exercise these rights by contacting me via email at{' '}
            <strong>
              <a href="mailto:pasquale.delucia96@gmail.com">
                pasquale.delucia96@gmail.com
              </a>
            </strong>
            .
          </p>

          <h2>6. Cookies and Tracking</h2>

          <p>
            This Site uses{' '}
            <strong>
              <a
                class="text-primary"
                target="_blank"
                href="https://www.goatcounter.com/"
              >
                GoatCounter
              </a>
            </strong>{' '}
            to collect browsing statistics. The data collected is anonymous and
            does not include the IP address. We do not use profiling cookies.
          </p>

          <h2>7. Data Security</h2>

          <p>
            I implement technical and organizational measures to protect your
            personal data from unauthorized access, loss, alteration, or
            disclosure.
          </p>

          <h2>8. Contact</h2>

          <p>
            If you have any questions about our Privacy Policy or wish to
            exercise your rights, you can contact me at:
          </p>
          <ul>
            <li>
              <strong>Email</strong>:{' '}
              <a href="mailto:pasquale.delucia96@gmail.com">
                pasquale.delucia96@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </InnerSectionComponent>
    </>
  )
})

export const head: DocumentHead = {
  title: 'Privacy Policy - Pasquale De Lucia - Full-stack engineer',
  meta: [
    {
      name: 'description',
      content:
        'Privacy Policy - Pasquale De Lucia - Full-stack engineer - Web Wizard and JavaScript Lover',
    },
  ],
}
