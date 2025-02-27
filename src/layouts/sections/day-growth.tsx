import Image from "next/image";

export function DayGrowth() {
  return (
    <section className="py-24 bg-gradient-to-b from-sky-50 to-white">
      <div className="container">
        <div className="max-w-full mx-auto relative z-50">
          <Image
            className="absolute left-1/2 h-full -z-10 -translate-x-1/2"
            src={"/images/rocket.svg"}
            alt=""
            width={135}
            height={1210}
          />

          {/* timeline-1 */}
          <div>
            <div className="xl:max-w-[498px] max-w-sm ml-[1%] text-right">
              <h4 className="text-text-dark text-xl">Here’s How Our</h4>
              <h1>90-Day Growth Sprints Help Your Business Boom</h1>
            </div>

            <div className="xl:max-w-[498px] max-w-sm ml-auto">
              <h2 className="inline-block -bottom-6">
                <span className="line line-primray after:-bottom-[20%]">
                  1. Analysis
                </span>
              </h2>
              <h4 className="uppercase mt-5 mb-4">approx 1 week</h4>
              <p className="text-text-dark text-xl mb-11">
                Before we even talk about working together, you’ll get an
                analysis of your current Google Ads that covers:
              </p>
              <ul className="space-y-5 ">
                <li className="check-mark before:-top-[5px] before:left-[4px] after:left-0 text-left before:w-6 before:h-6 pl-10 after:-top-0.5 text-text-dark">
                  Kickoff assessment
                </li>
                <li className="check-mark before:-top-[5px] before:left-[4px] after:left-0 text-left before:w-6 before:h-6 pl-10 after:-top-0.5 text-text-dark">
                  Ideas for improving your ads
                </li>
                <li className="check-mark before:-top-[5px] before:left-[4px] after:left-0 text-left before:w-6 before:h-6 pl-10 after:-top-0.5 text-text-dark">
                  Pinpointing where you’re wasting money
                </li>
                <li className="check-mark before:-top-[5px] before:left-[4px] after:left-0 text-left before:w-6 before:h-6 pl-10 after:-top-0.5 text-text-dark">
                  Suggestions for moving forward
                </li>
              </ul>
              <p className="text-xl text-text-dark mt-7">
                You’ll get a high-level report that we’ll explain in detail on a
                call. And if we don’t think we can improve on your results,
                we’ll share that, too.
              </p>
            </div>

            <div className="xl:max-w-[498px] max-w-sm ml-[1%] text-right">
              <h2 className="inline-block -bottom-6">
                <span className="line line-primray after:-bottom-[20%]">
                  2. Roadmap + Kickoff
                </span>
              </h2>
              <h4 className="uppercase mt-5 mb-4">approx 1 week</h4>
              <p className="text-text-dark text-xl">
                After you give us the go-ahead, we’ll dive in and create a
                strategy for working together. During your kickoff call, we’ll
                share the roadmap with you and explain exactly how we’ll execute
                it to deliver results that make you more money.
              </p>
            </div>

            <div className="max-w-sm ml-auto">
              <h2 className="inline-block -bottom-6">
                <span className="line line-primray after:-bottom-[20%]">
                  3. Execution
                </span>
              </h2>
              <h4 className="uppercase mt-5 mb-4">90 days</h4>
              <p className="text-text-dark text-xl">
                This is where the magic happens. In addition to watching the
                leads and sales roll in, you’ll get reports every 30 days with
                results and updates.
                <br />
                Your dedicated account manager will keep you in the loop with
                what’s happening and how we’re working toward your goals.
                They’ll also schedule regular conversations as needed to get
                your feedback.
              </p>
            </div>

            <div className="xl:max-w-[498px] max-w-sm ml-[1%] text-right">
              <h2 className="inline-block -bottom-6">
                <span className="line line-primray after:-bottom-[20%]">
                  4. Re-Assess
                </span>
              </h2>
              <h4 className="uppercase mt-5 mb-4">1 week</h4>
              <p className="text-text-dark text-xl">
                In the final days of each sprint, you’ll get our analysis and
                findings of the previous 90 days, as well as a new strategic
                roadmap for how we plan to adjust your tactics moving forward.
                In short, we evaluate our own work and pinpoint where we can
                improve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
