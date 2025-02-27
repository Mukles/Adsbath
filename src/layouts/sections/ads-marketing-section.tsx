import Image from "next/image";

export function AdsMarketingPitch() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center max-w-[885px] mx-auto">
          <div className="space-x-3 items-center inline-flex mb-3">
            {Array(5)
              .fill("")
              .map((_, index) => (
                <Image
                  width={18}
                  height={18}
                  alt="star"
                  src={"/icons/star.svg"}
                  key={index}
                  className="w-full size-[18px]"
                />
              ))}
          </div>
          <p className="text-text-dark text-base mb-5">
            GrowMyAds has a 5 / 5 average rating from 29 reviews on Clutch.co
          </p>
          <h2 className="mb-7">
            Gone are the days of signing a
            <span className="bg-primary">log contract</span> with a Google adds
            agency or freelancer and hopping and hoping they'll deliver result.
          </h2>

          <h6 className="text-xl font-normal  font-secondary text-text-dark text-center">
            Grow My Ads <span className="line line-secondary">promises</span>:
          </h6>
          <div>
            <div className="grid grid-cols-3 mt-8">
              <div className="space-y-3">
                <Image
                  className="mx-auto size-[50px]"
                  width={50}
                  height={50}
                  src={"/images/marketing/image-1.svg"}
                  alt="image-1"
                />
                <p className="font-primary font-bold text-text-dark text-base">
                  A Strategy Assessment <br /> Every 90 Days
                </p>
              </div>
              <div className="space-y-3">
                <Image
                  className="mx-auto size-[50px]"
                  width={50}
                  height={50}
                  src={"/images/marketing/image-2.svg"}
                  alt="image-2"
                />
                <p className="font-primary font-bold text-text-dark text-base">
                  A Dedicated Account <br /> Manager
                </p>
              </div>

              <div className="space-y-3">
                <Image
                  className="mx-auto size-[50px]"
                  width={50}
                  height={50}
                  src={"/images/marketing/image-3.svg"}
                  alt="image-3"
                />
                <p className="font-primary font-bold text-text-dark text-base">
                  A Dedicated Account <br /> Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
