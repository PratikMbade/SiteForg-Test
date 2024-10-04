import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Star } from "lucide-react"

export default function CardStyleCTAComponents() {
  return (
    <div className="space-y-10 p-10 ">
 
      {/* Card-style CTA */}
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
        <div className="flex items-center justify-center w-16 h-16 bg-green-100 text-green-500 rounded-full mb-6 mx-auto">
          <Star className="h-8 w-8" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-4 text-black">Join Our Newsletter</h2>
        <p className="text-gray-600 text-center mb-6">Stay updated with the latest news and exclusive offers.</p>
        <div className="flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-2 rounded-l-md rounded-r-md border-t border-b border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-md transition duration-300">
            Subscribe
          </Button>
        </div>
      </div>


    </div>
  )
}