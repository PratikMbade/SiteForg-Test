import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Star } from "lucide-react"

export default function FloatingCTAComponents() {
  return (
    <div className="space-y-10 p-10 ">
  
      {/* Floating CTA */}
      <div className="relative bg-white p-8 rounded-lg shadow-lg overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300 rounded-full -mr-16 -mt-16 transform rotate-45"></div>
        <h2 className="text-3xl font-bold mb-4 relative z-10">Limited Time Offer</h2>
        <p className="text-gray-600 mb-6 relative z-10">Get 50% off on all plans. Hurry, offer ends soon!</p>
        <Button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-md transition duration-300 relative z-10">
          Claim Discount <ArrowRight className="ml-2 h-5 w-5 inline" />
        </Button>
      </div>

    
    </div>
  )
}