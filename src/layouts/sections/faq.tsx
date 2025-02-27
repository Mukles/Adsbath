import Accordion from "../components/accordion";

export function Faq() {
  return (
    <section className="section-lg pt-0">
      <div className="container">
        <div className="max-w-[950px] mx-auto">
          <h2 className="text-center mb-9">
            Frequently Asked Questions for Grow My Ads
          </h2>
          <Accordion title="Can You Guarantee I’ll Make More Money From Google Ads?">
            <p>
              We don’t make promises that we’re not confident we can deliver on.
              We can guarantee accountability, and, because we don’t require
              long-term contracts, you can leave our team at any time if you’re
              not satisfied. However, we can tell you that 95% of our customers
              stick around because they love working with us.
            </p>
          </Accordion>
          <Accordion title="Can You Guarantee I’ll Make More Money From Google Ads?">
            <p>
              We don’t make promises that we’re not confident we can deliver on.
              We can guarantee accountability, and, because we don’t require
              long-term contracts, you can leave our team at any time if you’re
              not satisfied. However, we can tell you that 95% of our customers
              stick around because they love working with us.
            </p>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
