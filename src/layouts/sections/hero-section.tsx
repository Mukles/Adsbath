import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative pt-10">
      <Image
        src={"/images/bg-image.png"}
        alt="bg-image"
        priority
        fill
        quality={80}
      />
      <div className="relative">
        <div className="container z-10">
          <div className="grid lg:grid-cols-2">
            <div className="self-center text-light max-w-lg">
              <h1 className="font-bold mb-12 leading-14 text-light font-primary">
                Finally…the{" "}
                <span className="line line-primray">Google Ads</span> <br />
                agency you’ve been searching for.
              </h1>
              <p className="text-lg">
                Get better results from your Google Ads account in 90 days with
                a team of PPC specialists 100% focused on making you more money
                using our proven 90-Day Growth Sprints.
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/images/hero-image.png"
                alt="hero"
                width={417}
                height={580}
              />
            </div>
          </div>
        </div>
        <div className="bg-primary mt-10 py-4 w-full">
          <div className="container">
            <div className="flex items-center justify-center gap-5">
              <p className="text-dark font-secondary text-base md:text-xl font-normal text-center">
                Get started with a FREE 30-Minute Account Analysis!
              </p>
              <button className="btn-lg btn-secondary btn mx-auto border-shadow">
                Schedule Your FREE Analysis
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
