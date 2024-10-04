import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Star } from "lucide-react"

export default function GradientCTAComponents() {
  return (
    <div className="space-y-10 p-10 ">
   

      {/* Gradient CTA */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-lg shadow-md text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Unlock Premium Features</h2>
        <p className="mb-6">Upgrade now and take your experience to the next level.</p>
        <Button className="bg-white text-purple-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300">
          Upgrade Now <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>

    </div>
  )
}