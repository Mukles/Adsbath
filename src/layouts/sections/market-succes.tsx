export function MarketSucces() {
  return (
    <section className="relative after:absolute after:bg-light after:top-0 after:left-0 lg:after:w-1/2 after:w-full after:h-full before:absolute before:top-0 before:right-0 before:bg-muted lg:before:w-1/2 before:h-full">
      <div className="container relative z-20">
        <div className="grid lg:grid-cols-11 gap-16">
          <div className="lg:col-span-3 section-lg">
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
          <div className="lg:col-span-8 bg-muted section-lg">
            <div className="grid md:grid-cols-2 gap-3">
              {[...Array(8)].map((_, index) => (
                <div className="flex" key={index}>
                  <div
                    className={`flex-none size-[62px] rounded-full bg-primary/50 flex items-center justify-center text-text-dark text-5xl font-bold space-x-4 ${index % 2 === 0 ? "lg:-translate-x-1/2" : ""}`}
                  >
                    {index + 1}
                  </div>
                  <div className="p-12 pt-5">
                    <h3 className="text-2xl font-bold mb-5">Evaluate</h3>
                    <p className="text-text-dark text-xl">
                      Your current strategy gets an eagle-eye review to identify
                      what’s working and what could be stronger.
                    </p>
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
