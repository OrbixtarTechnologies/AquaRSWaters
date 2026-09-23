import PolicyLayout from "../components/PolicyLayout";

export default function Cancellation() {
  return (
    <PolicyLayout
      title="Cancellation Policy"
      description="This policy explains how customers can request cancellation of an order enquiry or confirmed order."
      sections={[
        {
          title: "1. Order enquiries",
          content: <p>An order enquiry submitted through the website, WhatsApp, email, or phone is not treated as a completed sale until RS Waters confirms the relevant order details. You may tell us that you no longer wish to proceed with an unconfirmed enquiry.</p>,
        },
        {
          title: "2. Confirmed orders",
          content: <p>If RS Waters has already confirmed your order, contact us as soon as possible if you want to cancel. Whether cancellation remains possible may depend on whether the order has already been prepared, dispatched, installed, customized, or otherwise moved into fulfillment.</p>,
        },
        {
          title: "3. Orders already dispatched or fulfilled",
          content: <p>Once an order has been dispatched or fulfilled, cancellation may no longer be operationally possible. In that situation, any available remedy will be considered under the Returns & Refunds Policy and the specific circumstances of the order.</p>,
        },
        {
          title: "4. How to request cancellation",
          content: <p>Call <a className="font-semibold text-[#0a6e9c] hover:underline" href="tel:+923258917527">0325-891-7527</a> or contact RS Waters on WhatsApp. Include your name, phone number, delivery city, and enough order information for us to identify the request.</p>,
        },
        {
          title: "5. Confirmation of cancellation",
          content: <p>A cancellation request is complete when RS Waters confirms that the order has been cancelled. Sending a message alone does not guarantee that fulfillment has stopped, particularly where dispatch or service activity has already begun.</p>,
        },
      ]}
    />
  );
}
