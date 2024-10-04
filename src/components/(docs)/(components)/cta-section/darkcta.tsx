import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Star } from "lucide-react"

export default function DarkCTAComponents() {
  return (
    <div className="space-y-10 p-10 ">
  

      {/* Dark mode CTA */}
      <div className="bg-gray-900 text-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-gray-300 mb-6">Create your account now and enjoy a 30-day free trial. No credit card required.</p>
        <div className="flex space-x-4">
          <Button className="bg-white text-gray-900 hover:bg-gray-100 font-bold py-3 px-6 rounded-md transition duration-300">
            Sign Up Free
          </Button>
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900 font-bold py-3 px-6 rounded-md transition duration-300">
            Learn More
          </Button>
        </div>
      </div>

    </div>
  )
}