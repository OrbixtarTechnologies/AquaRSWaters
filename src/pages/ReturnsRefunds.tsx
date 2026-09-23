import PolicyLayout from "../components/PolicyLayout";

export default function ReturnsRefunds() {
  return (
    <PolicyLayout
      title="Returns & Refunds Policy"
      description="This policy describes how RS Waters reviews return, replacement, and refund requests while recognizing that eligibility can differ between consumable water products and equipment."
      sections={[
        {
          title: "1. General approach",
          content: <p>Return and refund eligibility depends on the product type, product condition, order circumstances, and any terms confirmed with the customer. This policy does not create a blanket return entitlement beyond rights that apply under law.</p>,
        },
        {
          title: "2. Damaged, incorrect, or materially different items",
          content: <p>If you receive a product that is damaged, incorrect, or materially different from what RS Waters confirmed, contact us as soon as reasonably possible and provide the relevant order details. Photographs or other information may be requested where they help verify the issue.</p>,
        },
        {
          title: "3. Drinking water and consumable products",
          content: <p>Because drinking water and other consumable products involve product-integrity and hygiene considerations, return eligibility may depend on whether the product remains sealed, unused, and suitable for return. RS Waters will review the circumstances rather than applying an unsupported universal return window.</p>,
        },
        {
          title: "4. Dispensers, filtration systems, and accessories",
          content: <p>For equipment or accessories, RS Waters may review the product condition, compatibility, installation status, packaging, confirmed specifications, and the reason for the request before determining an appropriate remedy.</p>,
        },
        {
          title: "5. Possible resolutions",
          content: <p>Depending on the circumstances, a valid issue may be resolved through replacement, correction of the order, repair or service coordination where applicable, account adjustment, or refund. The appropriate remedy will be communicated after review.</p>,
        },
        {
          title: "6. Refund processing",
          content: <p>If a refund is approved, RS Waters will confirm the applicable refund method and any information reasonably needed to process it. Processing time may depend on the payment method or financial service involved.</p>,
        },
        {
          title: "7. How to request help",
          content: <p>Contact RS Waters at <a className="font-semibold text-[#0a6e9c] hover:underline" href="mailto:info@rswaters.store">info@rswaters.store</a>, by phone at <a className="font-semibold text-[#0a6e9c] hover:underline" href="tel:+923258917527">0325-891-7527</a>, or through WhatsApp with your order details.</p>,
        },
      ]}
    />
  );
}
