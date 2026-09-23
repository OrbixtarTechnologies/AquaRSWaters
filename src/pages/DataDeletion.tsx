import PolicyLayout from "../components/PolicyLayout";

export default function DataDeletion() {
  return (
    <PolicyLayout
      title="Data Deletion Instructions"
      description="Use this page to request deletion of personal information controlled by RS Waters, including information associated with website, WhatsApp, Facebook, or Instagram interactions."
      sections={[
        {
          title: "1. How to submit a deletion request",
          content: (
            <div className="space-y-3">
              <p>Email <a className="font-semibold text-[#0a6e9c] hover:underline" href="mailto:info@rswaters.store?subject=Data%20Deletion%20Request">info@rswaters.store</a> with the subject <strong>Data Deletion Request</strong>, or contact us on <a className="font-semibold text-[#0a6e9c] hover:underline" href="https://wa.me/923258917527">WhatsApp</a>.</p>
              <p>Please identify the information or interaction you want deleted and provide enough information for us to locate the relevant record, such as the phone number or email address you used to contact RS Waters.</p>
            </div>
          ),
        },
        {
          title: "2. Identity verification",
          content: <p>Before deleting information, we may ask for reasonable information to verify that the requester is the person connected with the relevant record. We will not ask for unnecessary passwords or sensitive account credentials.</p>,
        },
        {
          title: "3. What we will review",
          content: <p>We will review personal information that RS Waters controls in its own business records and systems. Where appropriate, we will delete or de-identify information that is no longer required for a legitimate operational, security, accounting, dispute, or legal purpose.</p>,
        },
        {
          title: "4. Information we may need to retain",
          content: <p>Some records may need to be retained where reasonably necessary for order history, accounting, legal compliance, fraud prevention, security, dispute handling, or the establishment or defense of legal rights. Where deletion is not appropriate, access to retained information may be limited according to its purpose.</p>,
        },
        {
          title: "5. Meta, WhatsApp, Facebook, and Instagram data",
          content: <p>If your request concerns communication through a Meta service, RS Waters can address information under our control. Meta may independently retain information in its own systems under Meta's policies and terms. A request to RS Waters does not automatically delete data held independently by Meta or another third-party platform.</p>,
        },
        {
          title: "6. Confirmation",
          content: <p>After reviewing a valid request, we will communicate the outcome using the contact details associated with the request. If we cannot complete a requested deletion, we may explain the reason where appropriate.</p>,
        },
      ]}
    />
  );
}
