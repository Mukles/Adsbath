import Image from "next/image";

const items = [
  {
    src: "/images/engage-grow/1.svg",
    title: "Cutting Edge Experience",
    description:
      "We work with the best analysts who have deep experience in PPC and Google Ads.",
  },
  {
    src: "/images/engage-grow/2.svg",
    title: "Methodical Approach",
    description:
      "Our Google account campaign management is a methodical data-driven process.",
  },
  {
    src: "/images/engage-grow/3.svg",
    title: "Regular Updates",
    description:
      "You’ll always know what the game plan is and how far along your account is towards reaching maximum performance.",
  },
  {
    src: "/images/engage-grow/4.svg",
    title: "Data-Driven",
    description:
      "We leverage hard data to achieve maximum conversions & ROI from your ad spend.",
  },
];

const features = [
  "Online sales",
  "Leads",
  "Cost per conversion",
  "Return on ad spend",
];

export function EngageGrow() {
  return (
    <section className="section-lg bg-gradient to-light from-body">
      <div className="container">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-center mb-14">
            Here’s what you get when you engage Grow My Ads to scale your Google
            Ads performance & ROI:
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div className="text-center p-4" key={index}>
              <Image
                className="mx-auto mb-3"
                src={item.src}
                width={50}
                height={50}
                alt={`image-${index + 1}`}
              />
              <h6 className="font-bold text-text-dark text-base mb-6">
                {item.title}
              </h6>
              <p className="text-xl text-text-dark">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-[850px] mx-auto mt-20">
          <h2 className="text-center mb-14">
            We’re PPC quants who follow{" "}
            <span className="line line-secondary">The Scientific Method</span>
          </h2>
          <div className="flex lg:flex-row flex-col-reverse max-lg:gap-8 justify-between">
            <div>
              <p className="mb-9">
                In layman’s terms, we love data and quantitative analysis.{" "}
                <br />
                Data directs everything we do.
              </p>
              <ul className="space-y-4 mb-8 lg:mb-0">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="check-mark pl-12 after:top-0 before:-top-0.5 before:left-1.5"
                  >
                    <span className="font-bold text-text-dark font-secondary text-base">
                      {feature}
                    </span>{" "}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Image
                src={"/images/engage-grow/astronunts.png"}
                width={332}
                height={310}
                alt="image"
              />
            </div>
          </div>

          <p className="mb-7">
            We’re not talking about vanity metrics like clicks and impressions —
            we’re
            <br />
            strictly focused on conversions, revenue, and profit. Our Google Ads
            services deliver real results. And that’s
            <br />
            exactly what our 90-Day Growth Sprints are designed to do — get
            profitable results for your company.
            <br />
            As one of the best Google Ads agencies, our only goal is to define a
            digital strategy that will reliably grow your revenue and profit
            from Google and then implement it relentlessly to build a
            long-lasting relationship with you.
          </p>
          <h2 className="mb-7">We do whatever it takes</h2>
          <p>
            You deserve proactive accountability and high performance standards
            with no lock-in contracts.
          </p>
          <p>
            You don’t have time to watch your Google ads agency like a hawk. And
            you shouldn’t have to.
          </p>
          <br />
          <p>
            Partnering with Grow My Ads means you have a team that actually
            handles your Google account proactively, giving you ongoing
            suggestions and pushing things forward every month, improving the
            performance of your Google Ads campaigns, even if it’s already
            great.
          </p>
          <br />
          <p>
            And, if we’re not convinced we can help you increase your results,
            we’ll be the first to tell you.
          </p>
        </div>
      </div>
    </section>
  );
}
