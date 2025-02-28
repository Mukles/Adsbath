const items = [
  {
    id: 1,
    title: "Evaluate",
    desc: "Your current strategy gets an eagle-eye review to identify what’s working and what could be stronger.",
  },
  {
    id: 2,
    title: "Strategize",
    desc: "Your new strategic roadmap ensures your ads are making you as much money as possible.",
  },
  {
    id: 3,
    title: "Cut the waste",
    desc: "Identify where money is being wasted and cut it. This means excluding, pausing out and reducing both bids and spend on paid search campaigns that are bleeding money.",
  },
  {
    id: 4,
    title: "Maximize winners",
    desc: "Start doubling down on products, keywords, and other variables. We’re looking at an 80/20 ratio. Never, ever, ever kill ad campaigns that are working until you have something better.",
  },
  {
    id: 5,
    title: "Transition To Improved Structure",
    desc: "Maximize your PPC campaigns starts with gradually restructuring your account and regrouping your campaigns to get you better results.",
  },
  {
    id: 6,
    title: "Maximize winners",
    desc: "We work your PPC campaigns to the bone to nudge them up both in terms of ROI and conversion volume. This is true for everything from Google search ads to Google Shopping campaigns and Display Ads.",
  },
  {
    id: 7,
    title: "Opening The Floodgates",
    desc: "We scale to expand volume while maintaining cost per conversion and ROI, creating PPC campaigns and expanding them by gradually increasing budget to get more conversions at the same or better profitability.",
  },
  {
    id: 8,
    title: "Test, Test, Test – Then Scale Further",
    desc: "We continue finding new winners with our online advertising strategy, and then expand to new campaigns, new bid strategies, and new approaches to squeeze every last penny of performance from your account.",
  },
];

export function MarketSucces() {
  return (
    <section className="relative after:absolute after:bg-light after:top-0 after:left-0 lg:after:w-1/2 after:w-full after:h-full before:absolute before:top-0 before:right-0 before:bg-muted lg:before:w-1/2 before:h-full">
      <div className="container relative z-20 max-lg:px-0">
        <div className="grid lg:grid-cols-11 gap-16">
          <div className="lg:col-span-3 section-lg max-lg:px-4">
            <p className="text-text-dark text-xl mb-2.5">HERE’S HOW OUR</p>
            <h2 className="mb-8 max-w-[700px]">
              90-Day Growth Sprints Deliver a Proven To Maximizing Your Market
            </h2>
            <p className="text-xl mb-5 text-text-dark">
              GrowMyAds takes lackluster and underperforming Google Ads
              campaigns and maximize the potential of search, shopping, and
              display ads in 90 days or less with our 90- day Growth Sprints.
            </p>
            <p className="mb-14 text-xl text-text-dark font-secondary">
              This is our process:{" "}
            </p>

            <button className="btn btn-lg btn-primary border-shadow">
              Get Your FREE Analysis
            </button>
          </div>
          <div className="lg:col-span-8 bg-muted section-lg max-lg:px-4">
            <div className="grid md:grid-cols-2 gap-3">
              {items.map((item, index) => (
                <div className="flex" key={item.id}>
                  <div
                    className={`flex-none size-[62px] rounded-full bg-primary/50 flex items-center justify-center text-text-dark text-5xl font-bold space-x-4 ${index % 2 === 0 ? "lg:-translate-x-1/2" : ""}`}
                  >
                    {index + 1}
                  </div>
                  <div className="p-12 pt-5">
                    <h3 className="text-2xl font-bold mb-5">{item.title}</h3>
                    <p className="text-text-dark text-xl">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
