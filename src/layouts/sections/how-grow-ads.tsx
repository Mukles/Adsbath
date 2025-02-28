import Image from "next/image";

const items = [
  {
    id: 1,
    title: "Intro Call",
    desc: "During this initial free consultation call, you give us some context on your business, your goals, the history of your account, what you think the potential is for your business with Google Ads and KPIs you want to hit. This informs how we approach our analysis and allows us to make specific recommendations for improvements.",
  },
  {
    id: 2,
    title: "Google Ads Analysis Call",
    desc: "We conduct a detailed review of your account. This includes strategy, conversion tracking, search, shopping, video and display advertising campaigns. We see where you are doing well and where the account is off track. Specific recommendations for improvements will be shared with you all at no cost.",
  },
  {
    id: 3,
    title: "Offer",
    desc: "If we feel we can make a significant impact on the account performance, we’ll walk you through what results to expect, how long they will take, and give you a specific fee for our Google Ads management services. And if you’re onboard, we can get started!",
  },
];

export function HowGrowAds() {
  return (
    <section className="section-lg">
      <div className="container">
        <div className="max-w-[700px] mx-auto text-center mb-6">
          <h2 className="mb-8 ">How to get started with GrowMyAds:</h2>
          <p className="mb-6">
            See if your account is a good fit with a detailed data analysis from
            our team. Get in touch with us to see if we’re the best Google Ads
            agency for your brand.
          </p>
          <h6 className="text-lg font-bold text-text-dark mb-8">
            From there, this is what will happen:
          </h6>
        </div>

        <div className="grid md:grid-cols-2 max-lg:place-items-center max-lg:items-center lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              className="border-shadow py-12 px-12 rounded-lg border-border/50"
              key={index}
            >
              <h4 className="pt-2 text-2xl font-bold text-text-dark mb-9">
                {item.title}{" "}
              </h4>
              <p className="text-xl text-text-dark">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="mt-18 text-center">
          <button className="btn btn-primary btn-lg border-shadow">
            Get Your FREE Analysis
          </button>
        </div>
        <Image
          height={342}
          width={1280}
          className="w-full"
          src={"/images/astro-land.png"}
          alt="astro-land"
        />
        <div className="bg-muted py-12 -mt-1">
          <div className="container">
            <div className="max-w-[700px] mx-auto text-center mb-6">
              <h2 className="mb-8">
                <span className="bg-primary/50">
                  Start Scaling Your Conversions & ROI
                </span>
                From Google Ads Starting Today
              </h2>
              <p className="text-text-dark text-lg font-bold mb-14">
                Book your free Google Ads account review
              </p>

              <button className="btn btn-lg btn-primary border-shadow">
                Get Your FREE Analysis
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
