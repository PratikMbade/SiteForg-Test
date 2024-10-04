import { Upload, Zap, Star } from "lucide-react"

export default function HowItWorks() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-center text-3xl font-bold mb-2 text-blue-500">HOW IT WORKS</h2>
      <h1 className="text-center text-5xl font-bold mb-12">Just 3 steps to get started</h1>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
              <div>
                <h3 className="text-md font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:block">
          <img
            src="/tab-scroll-image.png"
            alt="Platform Interface"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}

const steps = [
  {
    icon: <Upload className="w-6 h-6 text-blue-500" />,
    title: "1. Upload Your Data",
    description: "Simply upload your data to our secure platform. We support various file formats and data types to ensure a seamless integration with your existing systems.",
  },
  {
    icon: <Zap className="w-6 h-6 text-blue-500" />,
    title: "2. Click Start",
    description: "Our advanced AI algorithms automatically process and analyze your data, extracting valuable insights and patterns that would be difficult to identify manually.",
  },
  {
    icon: <Star className="w-6 h-6 text-blue-500" />,
    title: "3. Get Actionable Insights",
    description: "Receive clear, actionable insights and recommendations based on the AI analysis. Use these insights to make data-driven decisions and improve your business strategies.",
  },
]