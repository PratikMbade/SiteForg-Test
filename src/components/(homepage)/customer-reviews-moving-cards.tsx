import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Sarah M.",
    username: "@Sarah",
    body: "This website builder made creating my site so easy!",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "John D.",
    username: "@John",
    body: "Incredible templates and user-friendly interface, highly recommended!",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Lisa T.",
    username: "@Lisa",
    body: "I built a professional website in minutes. Fantastic tool!",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Mark S.",
    username: "@Mark",
    body: "Perfect for beginners, no coding needed at all!",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Emma W.",
    username: "@Emma",
    body: "Amazing features and intuitive design, best builder I've used!",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "David L.",
    username: "@David",
    body: "Super fast and easy to use, great customer support!",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Rachel K.",
    username: "@Rachel",
    body: "Affordable and packed with features, my go-to website builder!",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Paul J.",
    username: "@Paul",
    body: "Highly customizable, yet simple to use. Love this platform!",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Michelle H.",
    username: "@Michelle",
    body: "Professional results with minimal effort, I’m thrilled!",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "James P.",
    username: "@James",
    body: "Fantastic templates and drag-and-drop functionality, simply awesome!",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Jessica R.",
    username: "@Jessica",
    body: "Building my business site was fast and stress-free!",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Michael B.",
    username: "@Michael",
    body: "Best website builder I've tried, it’s super flexible and reliable.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Olivia G.",
    username: "@Olivia",
    body: "I created my dream website effortlessly, thanks to this builder!",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Chris E.",
    username: "@Chris",
    body: "User-friendly and efficient, perfect for my online store!",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Emily C.",
    username: "@Emily",
    body: "Easy, efficient, and looks great on all devices!",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Daniel F.",
    username: "@Daniel",
    body: "Great templates, easy setup, and quick to publish. Love it!",
    img: "https://avatar.vercel.sh/john",
  }
];


const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-52 w-56 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemoVertical() {
  return (
    <div className="h-auto">

        <p className="text-2xl mb-24 lg:text-5xl font-extrabold text-center">100+ Developers used our Build-fast</p>

<div className="relative flex h-[600px] max-w-8xl flex-row items-center justify-center overflow-hidden rounded-lg   ">
   
   <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    
    </div>
    </div>
  );
}
