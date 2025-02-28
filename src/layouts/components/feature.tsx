import Image from "next/image";
import { ReactNode } from "react";

export function Feature({
  title,
  description,
  features,
  image = "/images/astronaut-clock.svg",
  children,
}: {
  title: ReactNode;
  features: ReactNode[];
  image?: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="section-lg">
      <div className="container">
        <div className="max-w-[1000px] mx-auto">
          <h1 className={`text-center ${description ? "mb-9" : "mb-[4.6rem]"}`}>
            {title}
          </h1>

          {description && (
            <p className="mb-12 max-w-3xl mx-auto text-center text-xl text-text-dark">
              {description}
            </p>
          )}
          <div className="grid lg:grid-cols-2 gap-y-10 lg:gap-y-0 items-center">
            <div>
              <Image
                className="mx-auto"
                src={image}
                alt="astronaut with clock"
                width={256}
                height={475}
              />
            </div>
            <div>
              <ul className="features">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="last:border-b-0 py-6 border-b border-border/10 pl-10 check-mark"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:mt-16 lg:col-span-2 text-center max-w-[750px] mx-auto space-y-4">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
