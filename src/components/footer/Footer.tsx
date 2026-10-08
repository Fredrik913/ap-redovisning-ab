import { contact } from "../../content/contact";
import CopyButton from "./CopyButton";

function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-slate-300 px-6 pt-16 pb-8 scroll-mt-[60px]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-white">{contact.company}</h2>

        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-base font-semibold uppercase tracking-wide text-white">
              {contact.columns.contact}
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${contact.phone.tel}`}
                  className="inline-flex items-center gap-2 text-white hover:text-brand-400 transition-colors"
                >
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 shrink-0 text-slate-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  {contact.phone.label}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 text-white hover:text-brand-400 transition-colors"
                >
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 shrink-0 text-slate-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  <span className="min-w-0 [overflow-wrap:anywhere]">{contact.email}</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold uppercase tracking-wide text-white">
              {contact.columns.address}
            </h3>
            <dl className="mt-4 space-y-3">
              <div>
                <dt className="text-sm text-slate-400">Postadress</dt>
                <dd>{contact.postalAddress}</dd>
              </div>
            </dl>
          </div>

          <div>
            <h3 className="text-base font-semibold uppercase tracking-wide text-white">
              {contact.columns.company}
            </h3>
            <dl className="mt-4 space-y-3">
              <div>
                <dt className="text-sm text-slate-400">Organisationsnummer</dt>
                <dd className="flex items-center gap-1">
                  {contact.orgNumber}
                  <CopyButton text={contact.orgNumber} label="Kopiera organisationsnummer" />
                </dd>
              </div>
              <div>
                <dt className="text-sm text-slate-400">Bankgiro</dt>
                <dd className="flex items-center gap-1">
                  {contact.bankgiro}
                  <CopyButton text={contact.bankgiro} label="Kopiera bankgiro" />
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-sm text-slate-400">
          © {new Date().getFullYear()} {contact.company}. {contact.rightsReserved}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
