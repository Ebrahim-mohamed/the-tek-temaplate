// components/FaqSection.tsx
import AccordionItem from "./AccordionItem";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "First question will be here",
    answer: "First answer will be here explaining the details of the question.",
  },
  {
    question: "Second question will be here",
    answer: "Second answer will be here explaining the details of the question.",
  },
  {
    question: "Third question will be here",
    answer: "Third answer will be here explaining the details of the question.",
  },
  {
    question: "Fourth question will be here",
    answer: "Fourth answer will be here explaining the details of the question.",
  },
  {
    question: "Fifth question will be here",
    answer: "Fifth answer will be here explaining the details of the question.",
  },
];

const FaqSection = () => {
  return (
    <section className="w-full bg-neutral-900 py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <h2 className="text-[5.3rem]  font-bold leading-tight">
          <span className="text-white">Customers</span>
          <br />
          <span className="text-[#C8A96E]">Questions &amp;</span>
          <br />
          <span className="text-[#C8A96E]">Answers</span>
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;