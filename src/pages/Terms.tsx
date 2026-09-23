import { Link } from "react-router-dom";
import PolicyLayout from "../components/PolicyLayout";

export default function Terms() {
  return (
    <PolicyLayout
      title="Terms of Use"
      description="These terms govern use of rswaters.store and online interactions with RS WATERS (PRIVATE) LIMITED."
      sections={[
        {
          title: "1. Website operator",
          content: <p><strong>rswaters.store</strong> is operated by <strong>RS WATERS (PRIVATE) LIMITED</strong>, with its listed head office at LDA 276, Shah Jamal Ichhra, Lahore, Pakistan.</p>,
        },
        {
          title: "2. Website purpose",
          content: <p>The website provides company information, product information, shopping and cart functionality, service information, and channels for contacting RS Waters. Website content is intended to help customers understand available products and submit enquiries or order requests.</p>,
        },
        {
          title: "3. Product information, pricing, and availability",
          content: <p>We aim to keep website product information useful and current, but product availability, specifications, pricing, stock, delivery area, and related commercial details can change. A cart total or website listing is not a guarantee that an item is available until RS Waters confirms the order and applicable delivery details.</p>,
        },
        {
          title: "4. Orders and enquiries",
          content: <p>Submitting a cart, WhatsApp message, email, phone request, or other enquiry does not by itself create a completed sale. RS Waters may confirm availability, delivery details, final amount, and any relevant terms with the customer before an order is accepted or fulfilled.</p>,
        },
        {
          title: "5. Customer responsibilities",
          content: <p>You are responsible for providing accurate contact, location, and order information and for using the website lawfully. You must not attempt unauthorized access, interfere with site operation, misuse company branding, submit fraudulent requests, or use the website in a way that harms RS Waters or other users.</p>,
        },
        {
          title: "6. Delivery, returns, and cancellations",
          content: (
            <p>
              Delivery and post-order matters are governed by our <Link className="font-semibold text-[#0a6e9c] hover:underline" to="/shipping-delivery">Shipping & Delivery Policy</Link>,{" "}
              <Link className="font-semibold text-[#0a6e9c] hover:underline" to="/returns-refunds">Returns & Refunds Policy</Link>, and{" "}
              <Link className="font-semibold text-[#0a6e9c] hover:underline" to="/cancellation">Cancellation Policy</Link>.
            </p>
          ),
        },
        {
          title: "7. Third-party services",
          content: <p>The website may link to or open third-party services such as WhatsApp, Meta services, email applications, maps, fonts, hosting infrastructure, or telephone services. Those services are operated by their respective providers and are subject to their own terms and privacy practices.</p>,
        },
        {
          title: "8. Intellectual property",
          content: <p>Unless otherwise stated, RS Waters owns or is authorized to use its business name, company-specific website text, branding, and design. Third-party photographs, fonts, platforms, trademarks, and services remain subject to the rights of their respective owners.</p>,
        },
        {
          title: "9. Website availability and accuracy",
          content: <p>We may update, suspend, correct, or change website content and functionality. To the extent permitted by applicable law, RS Waters does not guarantee uninterrupted access to the website or that every third-party resource will always remain available.</p>,
        },
        {
          title: "10. Applicable law",
          content: <p>These Terms are governed by the applicable laws of Pakistan. Nothing in these Terms is intended to remove rights or remedies that cannot legally be excluded.</p>,
        },
        {
          title: "11. Changes",
          content: <p>We may update these Terms when the website, products, ordering process, or business practices change. The current version will be published on this page with its update date.</p>,
        },
      ]}
    />
  );
}
