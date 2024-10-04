'use client'
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for all unused items in their original packaging. Please contact our customer service team to initiate a return."
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping times vary depending on your location. Typically, domestic orders are delivered within 3-5 business days, while international orders may take 7-14 business days."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times may vary depending on the destination."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is shipped, you will receive a confirmation email with a tracking number. You can use this number to track your package on our website or the carrier's site."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay for online purchases."
  }
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <h2 className="text-3xl font-bold text-center mb-8 sm:text-4xl">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  )
}