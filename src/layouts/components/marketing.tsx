import Image from "next/image";

export function Marketing({
  review,
  title,
  heading,
  marketing,
  className,
}: {
  review?: {
    ratings: number;
    comment: string;
  };
  title: React.ReactNode;
  heading: React.ReactNode;
  marketing: {
    image: string;
    title: string;
  }[];
  className?: string;
}) {
  return (
    <section className={`section ${className}`}>
      <div className="text-center max-w-[885px] mx-auto">
        {review && (
          <>
            <div className="space-x-3 items-center inline-flex mb-3">
              {Array(review.ratings)
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
            <p className="text-text-dark text-base mb-5">{review.comment}</p>
          </>
        )}

        <h2 className="mb-7">{heading}</h2>

        <h6 className="text-xl font-normal font-secondary text-text-dark text-center">
          {title}
        </h6>

        <div>
          <div className="grid grid-cols-3 mt-8">
            {marketing.map((item, index) => (
              <div key={index} className="space-y-3">
                <Image
                  className="mx-auto size-[50px]"
                  width={50}
                  height={50}
                  src={item.image}
                  alt={`marketing-image-${index}`}
                />
                <p className="font-primary font-bold text-text-dark text-base">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
