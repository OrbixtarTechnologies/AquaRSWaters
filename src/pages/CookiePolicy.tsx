import { Link } from "react-router-dom";
import PolicyLayout from "../components/PolicyLayout";

export default function CookiePolicy() {
  return (
    <PolicyLayout
      title="Cookie & Tracking Policy"
      description="This policy explains browser storage, technical processing, and third-party resources associated with rswaters.store."
      sections={[
        {
          title: "1. Current website storage",
          content: <p>At the time of this policy update, the RS Waters website application does not intentionally use advertising or behavioral-analytics cookies in its own application code. The shopping cart is held in the current browser session state and is not intentionally persisted by the cart code after the application session ends.</p>,
        },
        {
          title: "2. Essential technical processing",
          content: <p>Website hosting, security, content delivery, browsers, and network infrastructure may process technical identifiers, IP addresses, request metadata, or similar information necessary to deliver and protect the website. Some providers may use browser technologies according to their own service design.</p>,
        },
        {
          title: "3. Third-party resources",
          content: <p>The site may load or link to third-party services such as Google-hosted fonts, WhatsApp, Meta services, or external image resources. Opening or loading those resources may allow the relevant provider to receive technical information about the request.</p>,
        },
        {
          title: "4. External links",
          content: <p>When you choose a link that opens WhatsApp, Facebook, Instagram, email, telephone, or another third-party service, that service's own privacy and tracking practices apply. RS Waters does not control third-party cookies or storage created directly by those services.</p>,
        },
        {
          title: "5. Future analytics or advertising tools",
          content: <p>If RS Waters later introduces analytics, advertising, or other non-essential tracking that materially changes this policy, we will update this page and implement an appropriate consent or notice mechanism where required.</p>,
        },
        {
          title: "6. Privacy choices",
          content: <p>For information about personal-data handling and deletion requests, see our <Link className="font-semibold text-[#0a6e9c] hover:underline" to="/privacy">Privacy Policy</Link> and <Link className="font-semibold text-[#0a6e9c] hover:underline" to="/data-deletion">Data Deletion Instructions</Link>.</p>,
        },
      ]}
    />
  );
}
