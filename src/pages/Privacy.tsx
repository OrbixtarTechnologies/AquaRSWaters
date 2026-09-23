import { Link } from "react-router-dom";
import PolicyLayout from "../components/PolicyLayout";

export default function Privacy() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      description="This policy explains how RS WATERS (PRIVATE) LIMITED collects, uses, shares, protects, and handles personal information connected with rswaters.store and our customer communication channels."
      sections={[
        {
          title: "1. Who this policy applies to",
          content: <p>This Privacy Policy applies to visitors to <strong>rswaters.store</strong> and people who contact or interact with RS Waters by phone, email, WhatsApp, Facebook, Instagram, or other customer-service channels we make available.</p>,
        },
        {
          title: "2. Information we may receive",
          content: (
            <div className="space-y-3">
              <p>Depending on how you interact with us, we may receive information such as your name, phone number, email address, city, delivery or service address, product interests, order or enquiry details, and the content of communications you send to us.</p>
              <p>Our website hosting and communications providers may also process technical information such as IP address, browser or device information, timestamps, security logs, and request metadata needed to operate and protect their services.</p>
              <p>If you contact us through Meta services such as WhatsApp, Facebook, or Instagram, we may receive the account identifiers, message content, and message-related information that those services make available to the business for the purpose of handling your communication.</p>
            </div>
          ),
        },
        {
          title: "3. How we use information",
          content: <p>We may use personal information to answer enquiries, prepare or confirm orders, coordinate delivery or service requests, provide customer support, respond through the channel you used, maintain appropriate business records, prevent abuse or fraud, secure our services, and comply with applicable legal obligations.</p>,
        },
        {
          title: "4. WhatsApp and Meta communications",
          content: (
            <div className="space-y-3">
              <p>When you communicate with RS Waters using WhatsApp, Facebook, Instagram, or another Meta service, information is also processed by Meta under Meta's own terms and privacy practices.</p>
              <p>RS Waters uses information received through those channels for legitimate customer and business communication. We do not represent that we control information independently retained by Meta or another third-party platform.</p>
            </div>
          ),
        },
        {
          title: "5. Sharing and service providers",
          content: <p>We do not sell personal information. We may share or make information available to providers that support website hosting, communications, customer support, delivery coordination, security, or other necessary business operations. We may also disclose information where required by law, legal process, or to protect the rights, safety, security, and integrity of RS Waters, our customers, or others.</p>,
        },
        {
          title: "6. International processing",
          content: <p>Some technology or communications providers may process information in countries other than Pakistan. Their processing is governed by their own infrastructure, contracts, and privacy practices. We select and use providers for business functions but do not control the location of every third-party processing system.</p>,
        },
        {
          title: "7. Retention",
          content: <p>We retain personal information only for as long as reasonably necessary for the purpose for which it was collected, customer service, order or business records, dispute resolution, security, accounting, or applicable legal requirements. Retention periods can vary depending on the type of record.</p>,
        },
        {
          title: "8. Security",
          content: <p>We use reasonable administrative and technical measures appropriate to the information and services we operate. No internet transmission or storage system can be guaranteed to be completely secure, so customers should avoid sending unnecessary sensitive information through ordinary messaging channels.</p>,
        },
        {
          title: "9. Your privacy requests",
          content: (
            <p>You may contact us to request access to, correction of, or deletion of personal information that RS Waters controls, subject to identity verification and any records we are required or reasonably need to retain. See our <Link className="font-semibold text-[#0a6e9c] hover:underline" to="/data-deletion">Data Deletion Instructions</Link>.</p>
          ),
        },
        {
          title: "10. Cookies and similar technologies",
          content: (
            <p>For details about browser storage, technical services, and third-party resources used by the site, see our <Link className="font-semibold text-[#0a6e9c] hover:underline" to="/cookies">Cookie & Tracking Policy</Link>.</p>
          ),
        },
        {
          title: "11. Children",
          content: <p>Our website is intended for general customers and business enquiries and is not designed as a service directed specifically to children. If you believe a child has provided personal information to us without appropriate authorization, contact us so the matter can be reviewed.</p>,
        },
        {
          title: "12. Changes to this policy",
          content: <p>We may update this policy when our website, communications, service providers, or data practices change. The latest version will be published on this page with an updated date.</p>,
        },
      ]}
    />
  );
}
