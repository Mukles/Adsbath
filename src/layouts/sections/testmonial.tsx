import Image from "next/image";

const items = [
  {
    quote:
      "They have taken a strategic approach to our paid ads and are focused on getting the best leads for the lowest cost.",
    designation: "VP Marketing",
    company: "People Intelligence Platform",
  },
  {
    quote:
      "They should change their company name to 'GrowMyProfits' because that was what they did for me.",
    designation: "CEO",
    company: "Juvenon",
  },
];

export function Testmonial() {
  return (
    <section className="section-lg">
      <div className="container">
        <div className="grid max-lg:gap-y-20 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Image
              className="h-full w-auto"
              src={"/images/astronut-plane.png"}
              width={299}
              height={299}
              alt=""
            />
          </div>
          <div className="grid lg:col-span-8 lg:grid-cols-2 gap-6 max-lg:gap-y-20">
            {items.map((item, index) => (
              <div
                className="border gap-5 border-border rounded p-10 relative after:absolute after:top-6 after:-translate-y-1/2 after:left-4 after:content-['“'] after:text-[120px] after:font-bold after:flex after:justify-center after:items-center"
                key={index}
              >
                <p className="text-xl text-text-dark font-bold mb-4">
                  “{item.quote}”
                </p>
                <p className="text-base">
                  {item.designation}, {item.company}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
