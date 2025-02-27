import Image from "next/image";

export function GrowMyAds() {
  return (
    <section className="section-lg">
      <div className="container">
        <div className="max-w-[900px] mx-auto space-y-4">
          <div>
            <h2 className="mb-7">
              Why clients choose GrowMyAds as their Google Ads agency to
              dominate their market:
            </h2>
          </div>
          <h4 className="text-lg leading-6">
            Clueless “Client Managers” Begone — Get Dedicated Support From
            Seasoned Experts Who Are Actually Working In Your Account
          </h4>
          <p>
            Taking on hundreds of clients and delivering mediocre results will
            never be our goal, unlike a large number of agencies out there.
          </p>
          <p>
            GrowMyAds’s focus from day one has been to work with fewer clients
            and ensure that every account is handled by world-class PPC analysts
            who have the time, experience, and focus to ensure optimal outcomes.
          </p>
          <p>
            Each account manager handles a strictly limited number of clients —
            both in terms of Google account management and client communication
            — so you know whenever you get an update, you’re getting it from an
            expert who actually knows what they’re doing.
          </p>
          <h4 className="text-lg leading-6">
            Button Pushing Is Not A Strategy! Start Seeing The Explosive
            Performance Improvements That Only High- Level Strategic Thinking &
            Specialist PPC Expertise Can Deliver
          </h4>
          <p>
            Most Google Ads companies love making lots of low-impact changes so
            they look busy working on your account. But pushing buttons doesn’t
            move the needle on performance. That’s just busywork, and we’ve all
            got better things to do with our time.
          </p>
          <p>
            Top 1% PPC performance means making the right changes and working
            with the end result in mind. And that top-level performance is our
            agency’s primary focus.
          </p>
          <p>
            In other words, your Google ad campaigns need to fit within the big
            picture, logical, and custom strategies that can actually drive
            revenue and profit. We want to help you create the best Google Ads
            possible.
          </p>
          <p>
            GrowMyAds is not only a team of highly experienced PPC Specialists.
            You’ll also be working with sharp strategic thinkers who can see &
            help develop a bigger picture strategy that fuels real business
            growth long- term.
          </p>

          <Image
            src={"/images/shape.png"}
            width={700}
            height={478}
            alt="shape"
            className="mx-auto"
          />

          <h4 className="text-lg leading-6">
            Fewer Accounts = Clearer Communication, More Dedicated Account
            Management, Better Strategic Thinking, Better Performance, Faster
            Results
          </h4>
          <p>We’ll be honest. We’re picky.</p>
          <p>
            We only take on accounts we are extremely confident will see
            significant improvements in both the immediate future and in
            long-term growth. We consider this an ethical decision; we won’t
            take your money if we don’t think we can help you.
          </p>
          <p>But taking on fewer accounts has its advantages.</p>
          <p>
            Most Google Ads agency account managers are overstretched,
            overworked, under-slept, and don’t have the time or energy to really
            get into the weeds on any of the 100+ accounts they are responsible
            for.
          </p>
          <p>
            Our team members are each allocated a small group of accounts they
            can stay laser-focused on and get the full potential from.
          </p>
          <p>
            This means your account gets the time and attention it needs, and
            you’ll see it in results you can take to the bank in 30 to 90 days!
          </p>
        </div>
      </div>
    </section>
  );
}
