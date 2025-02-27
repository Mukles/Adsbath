import Accordion from "../components/accordion";

const accordions = [
  {
    id: 1,
    question: "Can You Guarantee I’ll Make More Money From Google Ads?",
    answer:
      "We don’t make promises that we’re not confident we can deliver on. We can guarantee accountability, and, because we don’t require long-term contracts, you can leave our team at any time if you’re not satisfied. However, we can tell you that 95% of our customers stick around because they love working with us.",
  },
  {
    id: 2,
    question: "How Does Your 90-Day Sprint Work?",
    answer:
      "We don’t make promises that we’re not confident we can deliver on. We can guarantee accountability, and, because we don’t require long-term contracts, you can leave our team at any time if you’re not satisfied. However, we can tell you that 95% of our customers stick around because they love working with us.",
  },
  {
    id: 3,
    question: "Can I Get A Free Marketing Analysis for My Google Ads?",
    answer:
      "We don’t make promises that we’re not confident we can deliver on. We can guarantee accountability, and, because we don’t require long-term contracts, you can leave our team at any time if you’re not satisfied. However, we can tell you that 95% of our customers stick around because they love working with us.",
  },
  {
    id: 4,
    question: "How Can I Be Sure My Google Ads Will Be More Profitable?",
    answer:
      "We don’t make promises that we’re not confident we can deliver on. We can guarantee accountability, and, because we don’t require long-term contracts, you can leave our team at any time if you’re not satisfied. However, we can tell you that 95% of our customers stick around because they love working with us.",
  },
  {
    id: 5,
    question: "How Much Does It Cost and What ROI Can I Expect?",
    answer:
      "We don’t make promises that we’re not confident we can deliver on. We can guarantee accountability, and, because we don’t require long-term contracts, you can leave our team at any time if you’re not satisfied. However, we can tell you that 95% of our customers stick around because they love working with us.",
  },
  {
    id: 6,
    question: "Why Should I Choose Grow My Ads As My Google Ads Agency?",
    answer:
      "We don’t make promises that we’re not confident we can deliver on. We can guarantee accountability, and, because we don’t require long-term contracts, you can leave our team at any time if you’re not satisfied. However, we can tell you that 95% of our customers stick around because they love working with us.",
  },
];

export function Faq() {
  return (
    <section className="section-lg pt-0">
      <div className="container">
        <div className="max-w-[950px] mx-auto">
          <h2 className="text-center mb-9">
            Frequently Asked Questions for Grow My Ads
          </h2>
          {accordions.map((accordion, index) => {
            return (
              <Accordion key={accordion.id} title={accordion.question}>
                <p>{accordion.answer}</p>
              </Accordion>
            );
          })}
        </div>
      </div>
    </section>
  );
}
