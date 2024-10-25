import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Check, CircleCheck } from "lucide-react"
import Pricing from '../(docs)/(components)/pricing';

interface PlanCadTypes{
  title:string;
  price:number;
  period:string;
  features:string[]
}

const PlanCard = ({ title, price, period, features }:PlanCadTypes) => (
<Card className={`h-auto w-96 bg-neutral-200 dark:bg-neutral-800 shadow-lg rounded-lg ${title === "Starter" ? 'border border-orange-600' : ''}`}>
    <div className="flex justify-center">
      <div className="h-[15rem] w-[90%] mt-5   flex flex-col justify-between p-5">
        <p className="font-semibold">{title}</p>
        <p className="font-semibold">Great for newly launched websites that are just testing the waters of link-building.</p>
        <div className="flex items-end">
          <p className="mb-5 font-semibold">$</p>
          <p className="font-bold text-8xl">{price}</p>
          <p className="mb-5">/{period}</p>
        </div>
     
      </div>
    </div>

    <div className="flex flex-col items-start mx-8 gap-y-2 mt-10">
      {features.map((feature:string, idx:number) => (
        <div key={idx} className="flex items-start justify-center gap-x-3">
          <Check className="w-5 h-5" />
          <p>{feature}</p>
        </div>
      ))}

<Button variant="default" className="w-full py-2 my-6 rounded-lg text-lg font-semibold bg-gradient-to-r from-orange-600 to-orange-700 text-white">
          Get {title}
        </Button>
    </div>
  </Card>
);

interface Plan {
  title: string;
  price: number;
  period: "month" | "yearly";
  features: string[];
}

interface PricingPlanType{
  mainHeading:string;
  subHeading:string;
  monthlyPlansData?:Plan[],
  yearlyPlansData?:Plan[]
}


export function Pricing1( { mainHeading = "Simple pricing for advanced people",
subHeading = "Every AI offers a wide range of services. You can choose the one that suits your needs. Select from your favourite plan and get started instantly",
monthlyPlansData = [
 
  {
    title: "Hobby",
    price: 0,
    period: "month",
    features: [
      "SEO & Blog Support",
      "Mailgun Integration",
      "Stripe / Lemon Squeezy Payments",
      "MongoDB / Supabase",
      "Google OAuth & Magic Links",
      "Animated Components",
      "ChatGPT Prompts for Policies",
      "Discord Community Access",
      "Lifetime Updates",
    ],
    
  },
  {
    title: "Starter",
    price: 99,
    period: "month",
    features: [
      "SEO & Blog Support",
      "Mailgun Integration",
      "Stripe / Lemon Squeezy Payments",
      "MongoDB / Supabase",
      "Google OAuth & Magic Links",
      "Animated Components",
      "ChatGPT Prompts for Policies",
      "Discord Community Access",
      "Lifetime Updates",
    ],
  },
  {
    title: "Pro",
    price: 299,
    period: "month",
    features: [
      "SEO & Blog Support",
      "Mailgun Integration",
      "Stripe / Lemon Squeezy Payments",
      "MongoDB / Supabase",
      "Google OAuth & Magic Links",
      "Animated Components",
      "ChatGPT Prompts for Policies",
      "Discord Community Access",
      "Lifetime Updates",
    ],
  },
],
yearlyPlansData = [
  {
    title: "Pro",
    price: 499,
    period: "yearly",
    features: [
      "Premium feature 1",
      "Premium feature 2",
      "Premium feature 3",
      "Premium feature 4",
    ],
  },
],}:PricingPlanType) {


  return (
   <div className="flex flex-col  items-center justify-center my-5 h-auto">
    <p className="text-center font-extrabold text-xl mb-24">Pricing</p>
    <div>
      <p className="font-semibold text-4xl text-center">{mainHeading}</p>
      <p className="text-neutral-500 text-lg font-semibold text-center max-w-xl my-4">{subHeading}</p>
    </div>
   
      <div  className="flex flex-wrap items-center justify-center w-full gap-x-8 gap-y-5">
        {monthlyPlansData.map((plan, idx) => (
          <PlanCard key={idx} title={plan.title} price={plan.price} period={plan.period} features={plan.features} />
        ))}
      </div>

   </div>
  )
}


