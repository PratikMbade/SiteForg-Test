import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Star } from "lucide-react"

export default function SimpleCTAComponents() {
  return (
    <div className="space-y-10 p-10 bg-gray-100">
      {/* Simple CTA */}
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
        <p className="text-gray-600 mb-6">Join thousands of satisfied customers and transform your business.</p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
          Start Free Trial
        </Button>
      </div>
    </div>
  )
}