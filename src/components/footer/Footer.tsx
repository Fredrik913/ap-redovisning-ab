import { contact } from "../../content/contact";

function Footer() {
  return (
    <footer
      id="contact"
      className="bg-blue-400/50 px-6 py-12 text-gray-700 border-t border-black/10"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">{contact.heading}</h3>

        <ul className="mx-auto inline-block text-left space-y-2">
          <li className="font-medium text-gray-800">{contact.company}</li>

          <li>
            <span className="font-semibold">Postadress:</span> {contact.postalAddress}
          </li>

          <li>
            <span className="font-semibold">Besöksadress:</span> {contact.visitingAddress}
          </li>

          <li>
            <span className="font-semibold">Organisationsnummer:</span> {contact.orgNumber}
          </li>

          <li>
            <span className="font-semibold">Bankgiro:</span> {contact.bankgiro}
          </li>

          <li className="pt-2">
            <span className="font-semibold">Telefon:</span>{" "}
            <a href={`tel:${contact.phone.tel}`} className="text-black hover:underline">
              {contact.phone.label}
            </a>
          </li>

          <li>
            <span className="font-semibold">Mailadress:</span>{" "}
            <a href={`mailto:${contact.email}`} className="text-black hover:underline">
              {contact.email}
            </a>
          </li>
        </ul>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10">{contact.copyright}</div>
    </footer>
  );
}

export default Footer;
