import { component$, useStyles$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { InnerSectionComponent } from '~/components/inner-section/innerSectionComponent'
import { EnglandSvg } from '~/components/svg/england-svg'
import styles from '../../../blog.css?inline'

export default component$(() => {
  useStyles$(styles)

  return (
    <>
      <div class="w-full flex justify-end">
        <div class="w-12 mr-4">
          <a href="/privacy-policy/eng">
            <EnglandSvg />
          </a>
        </div>
      </div>

      <InnerSectionComponent showCta={false}>
        <div class="blog-content">
          <section class="text-center">
            <h1>Privacy & Policy</h1>
          </section>

          <p>
            Benvenuto su{' '}
            <strong>
              <a href="https://pasqualdelucia.com">pasqualedelucia.com</a>
            </strong>{' '}
            . La tua privacy è importante per me. Questa Privacy Policy descrive
            come raccolgo, utilizzo e proteggo le tue informazioni personali
            durante l'utilizzo del Sito.
          </p>

          <h2>1. Informazioni raccolte</h2>

          <h3>a. Informazioni fornite volontariamente</h3>

          <p>Raccolgo dati personali che ci fornisci direttamente, tra cui:</p>
          <ul>
            <li>
              <strong>Modulo di contatto</strong>: nome e indirizzo email.
            </li>
            <li>
              <strong>Commenti sul blog</strong>: nome, indirizzo email e il
              contenuto del commento.
            </li>
            <li>
              <strong>Modulo di registrazione</strong>: nome, cognome, username,
              indirizzo email e password.
            </li>
            <li>
              <strong>Modulo di iscrizione alla newsletter</strong>: indirizzo
              email.
            </li>
          </ul>

          <h3>b. Informazioni raccolte automaticamente</h3>

          <p>
            Utilizzo <strong>GoatCounter</strong> per raccogliere statistiche di
            navigazione anonime, come:
          </p>
          <ul>
            <li>Pagine visitate.</li>
            <li>Durata della visita.</li>
            <li>Interazioni con il Sito.</li>
          </ul>
          <p>
            <strong>Nota</strong>: Non viene tracciato l'indirizzo IP degli
            utenti.
          </p>

          <h2>2. Finalità del trattamento dei dati</h2>

          <p>Utilizzo i tuoi dati personali per:</p>
          <ul>
            <li>
              Rispondere alle richieste inviate tramite il modulo di contatto.
            </li>
            <li>
              Consentire la pubblicazione e la moderazione dei commenti sul
              blog.
            </li>
            <li>
              Fornire accesso alle funzionalità riservate agli utenti
              registrati.
            </li>
            <li>
              Inviare aggiornamenti e contenuti tramite la newsletter (solo se
              hai fornito il consenso).
            </li>
            <li>Analizzare l'uso del Sito per migliorare i nostri servizi.</li>
          </ul>

          <h2>3. Condivisione dei dati</h2>

          <p>
            Condivido i tuoi dati personali con terze parti solo nei seguenti
            casi:
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
              : per l'invio di email relative al modulo di contatto, alla
              registrazione o alla newsletter.
            </li>
            <li>Quando richiesto per legge.</li>
          </ul>
          <p>
            Non vendo né cedo i tuoi dati a terze parti per scopi commerciali.
          </p>

          <h2>4. Conservazione dei dati</h2>

          <p>
            Conservo i tuoi dati personali solo per il tempo necessario a
            soddisfare le finalità per cui sono stati raccolti, salvo obblighi
            di legge che ne impongano la conservazione più a lungo.
          </p>

          <h2>5. Diritti degli utenti</h2>

          <p>
            In conformità al Regolamento Generale sulla Protezione dei Dati
            (GDPR), hai diritto a:
          </p>
          <ul>
            <li>Accedere ai tuoi dati personali.</li>
            <li>Richiedere la correzione o l’eliminazione dei tuoi dati.</li>
            <li>
              Ritirare il consenso in qualsiasi momento (ad esempio, per la
              newsletter).
            </li>
            <li>Opporsi al trattamento dei dati per determinati scopi.</li>
            <li>Presentare un reclamo all’autorità di controllo competente.</li>
          </ul>
          <p>
            Puoi esercitare questi diritti contattandomi via email a{' '}
            <strong>
              <a href="mailto:pasquale.delucia96@gmail.com">
                pasquale.delucia96@gmail.com
              </a>
            </strong>
            .
          </p>

          <h2>6. Cookie e tracciamento</h2>

          <p>
            Questo Sito utilizza{' '}
            <strong>
              <a
                class="text-primary"
                target="_blank"
                href="https://www.goatcounter.com/"
              >
                GoatCounter
              </a>
            </strong>{' '}
            per raccogliere statistiche di navigazione. I dati raccolti sono
            anonimi e non includono l’indirizzo IP. Non utilizziamo cookie di
            profilazione.
          </p>

          <h2>7. Sicurezza dei dati</h2>

          <p>
            Adotto misure tecniche e organizzative per proteggere i tuoi dati
            personali da accessi non autorizzati, perdite, alterazioni o
            divulgazioni.
          </p>

          <h2>8. Contatti</h2>

          <p>
            Se hai domande sulla nostra Privacy Policy o desideri esercitare i
            tuoi diritti, puoi contattarmi a:
          </p>
          <ul>
            <li>
              <strong>Email</strong>:{' '}
              <a href="mailto=pasquale.delucia96@gmail.com">
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
