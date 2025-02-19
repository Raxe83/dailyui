import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is Daily | UI?",
    answer:
      "Daily | UI is a platform that provides daily UI design challenges to help designers improve their skills and creativity.",
  },
  {
    question: "How does it work?",
    answer:
      "Each day, you'll receive a new UI challenge. You can create your design, share it with the community, and get feedback from fellow designers.",
  },
  {
    question: "Do I need to be an experienced designer to join?",
    answer:
      "Not at all! Daily | UI is suitable for designers of all levels, from beginners to experts. The challenges can be adapted to your skill level.",
  },
  {
    question: "Can I use the designs in my portfolio?",
    answer:
      "The designs you create for Daily | UI challenges are yours to use in your portfolio or any other projects.",
  },
];

const FAQItem: React.FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span className="text-lg font-semibold">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5" />
        ) : (
          <ChevronDown className="h-5 w-5" />
        )}
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
