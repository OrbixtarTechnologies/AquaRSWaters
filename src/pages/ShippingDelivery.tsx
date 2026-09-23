import PolicyLayout from "../components/PolicyLayout";

export default function ShippingDelivery() {
  return (
    <PolicyLayout
      title="Shipping & Delivery Policy"
      description="This policy explains how RS Waters handles delivery availability, service areas, delivery details, and customer coordination."
      sections={[
        {
          title: "1. Current service areas",
          content: <p>RS Waters currently lists service coverage for Lahore, Islamabad, Multan, Peshawar, Quetta, and Faisalabad. Coverage can vary within a city based on product type, quantity, delivery route, and exact location.</p>,
        },
        {
          title: "2. Delivery confirmation",
          content: <p>Submitting an order enquiry does not guarantee delivery. RS Waters will confirm whether the requested products can be delivered to the customer's location and may confirm quantity, contact details, address, delivery timing, and final amount before fulfillment.</p>,
        },
        {
          title: "3. Delivery timing",
          content: <p>Delivery timing depends on availability, location, order size, route capacity, and other operational conditions. Unless RS Waters expressly confirms a delivery time for a specific order, website content should not be interpreted as a guaranteed delivery deadline.</p>,
        },
        {
          title: "4. Delivery charges",
          content: <p>Any applicable delivery charge or delivery-related commercial term will be communicated as part of the order confirmation where relevant. A website cart estimate should not be treated as a final delivery quotation unless RS Waters has confirmed it.</p>,
        },
        {
          title: "5. Customer availability and address accuracy",
          content: <p>Customers should provide a complete and accurate delivery address and a reachable phone number. If delivery cannot be completed because the address is incorrect, access is unavailable, or the recipient cannot be reached, RS Waters may need to reschedule or reconfirm the delivery.</p>,
        },
        {
          title: "6. Delays and exceptional circumstances",
          content: <p>Weather, road conditions, supplier availability, technical issues, public restrictions, emergencies, or other circumstances may affect delivery. We will communicate material changes when reasonably possible.</p>,
        },
        {
          title: "7. Delivery issues",
          content: <p>If an item arrives damaged, incorrect, or materially different from the confirmed order, contact RS Waters as soon as reasonably possible with the order details and, where useful, photographs so the issue can be reviewed.</p>,
        },
      ]}
    />
  );
}
