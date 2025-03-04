import { AdsMarketingPitch } from "@/components/ads-marketing-section";
import { DayGrowth } from "@/components/day-growth";
import { EngageGrow } from "@/components/engage-grow";
import { Faq } from "@/components/faq";
import { GrowMyAds } from "@/components/grow-my-ads";
import { GrowthSprints } from "@/components/growth-spirt";
import { HowGrowAds } from "@/components/how-grow-ads";
import { MarketSucces } from "@/components/market-succes";
import { Testmonial } from "@/components/testmonial";
import { Feature } from "@/layouts/components/feature";
import { SectionFooter } from "@/layouts/components/section-footer";
import { HeroSection } from "@/layouts/sections/hero-section";
import { ServiceSections } from "@/layouts/sections/service-section";
import Link from "next/link";
import { MarketingTab } from "../layouts/components/marketing-tab";

export default function ServicePage() {
  return (
    <>
      <HeroSection />
      <AdsMarketingPitch />

      <ServiceSections />
      <SectionFooter title="Solution-Driven Google Ad Results" />

      <Feature
        title={
          <p>
            Are you one of the{" "}
            <span className="bg-primary/50">90% of Google advertisers</span> who
            experiences these problems
          </p>
        }
        features={[
          <p>
            <strong>Your Google Ads results are okay,</strong> but you want to
            see more conversions and ROI from your marketing spend.
          </p>,
          <p>
            <strong>You know Google’s platform has changed</strong>{" "}
            significantly over the last few years and you’re struggling to stay
            up to date with the new features or avoid money traps that eat up
            your ad spend.
          </p>,
          <p>
            <strong>
              You used to be at the top of your market in PPC advertising
            </strong>
            , but competition is getting more aggressive and you’ve seen your
            results start to drop.
          </p>,
          <p>
            <strong>You want to scale up</strong> and drive more conversions but
            every time you try to spend, your ROI drops off and costs blow out.
          </p>,
        ]}
      >
        <p>
          Grow My Ads has your back and will help you get the best possible
          results from your ad spend by re-evaluating your strategy every 3
          months with our 90-day Growth Sprints.
        </p>
        <p>
          Over the past 5 years, we’ve helped 230+ businesses dramatically
          increase their conversions and ROI from their Google ads campaigns by
          revamping their paid media and marketing strategy.
        </p>

        <button className="btn btn-primary btn-lg border-shadow mt-12">
          Get Your FREE Analysis
        </button>
      </Feature>

      <SectionFooter title="Proven Track Record" />

      <Feature
        title={
          <p>
            Hi, We’re Grow My Ads, and we help businesses just like yours
            double, triple, or even{" "}
            <span className="line line-secondary">10x results</span>
          </p>
        }
        description={
          "We’re tired of all the empty promises from companies in the PPC industry,so we’re setting out on a different path. Our 90-Day Growth Sprints take a proactive, hands-on approach to help you make more money with"
        }
        image="/images/astro-globe.png"
        features={[
          <p>
            <strong>B2C Lead Generation</strong> — Service-based businesses
            looking to generate more leads and inquiries from consumers
          </p>,
          <p>
            <strong>eCommerce</strong>— We offer eCommerce PPC services for
            online stores looking to grow revenue from Google Ads while
            maintaining a high and profitable ROAS.
          </p>,
          <p>
            <strong>And more!</strong>
            If you have questions about whether we can help your business, just
            ask.
          </p>,
        ]}
      >
        <p>Why can we deliver bigger, better results than anyone else?</p>
        <p>
          Grow My Ads takes 100% responsibility of your Google Ads account, so
          you know exactly how we’re boosting your results. By properly
          restructuring your account, transforming your Google Ads
        </p>
        <p>
          campaigns, and effectively leveraging{" "}
          <Link className="underline underline-offset-4" href={""}>
            Google remarketing
          </Link>{" "}
          ads , you can expect a dramatic increase in ad campaign performance in
          the first 30-90 days.
        </p>

        <button className="btn btn-primary btn-lg border-shadow mt-9">
          Get Your FREE Analysis
        </button>
      </Feature>

      <MarketingTab />
      <GrowthSprints />
      <DayGrowth />
      <SectionFooter title="Here’s what you get" />
      <EngageGrow />
      <SectionFooter title="Dominate the market" />

      <GrowMyAds />
      <MarketSucces />
      <SectionFooter title="Get started today" />
      <HowGrowAds />
      <Faq />
      <Testmonial />
    </>
  );
}
