"use client";
import React, { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  faqs: FAQItem[];
};

const FaqAccordion: React.FC<FaqAccordionProps> = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
   <div className="max-w-[1392px] mx-auto cursor-pointer">
  {faqs.map((faq, index) => {
    const isActive = activeIndex === index;
    return (
      <div
        key={index}
        className={`relative border-b py-4 pl-4 pr-2 transition-all duration-300
            before:content-[''] before:absolute before:left-0 before:top-[10px] before:bottom-0 before:w-1 before:rounded-2xl
            ${isActive ? 'border-[#E74C3C] before:bg-[#E74C3C]' : 'border-[#40BFC1] before:bg-[#40BFC1]'}`}
        >
        <button
          className="w-full text-left flex justify-between items-center text-lg font-medium"
          onClick={() => toggle(index)}
        >
          <span>{faq.question}</span>
          <img
            src={isActive ? "/icon/up-arrow.svg" : "/icon/down-arrow.svg"}
            alt={isActive ? "Collapse" : "Expand"}
            className="w-5 h-5 ml-2 cursor-pointer"
          />
        </button>
        {isActive && (
          <div className="mt-2 text-gray-600">{faq.answer}</div>
        )}
      </div>
    );
  })}
</div>

  );
};

const Faq: React.FC = () => {
  const faqData: FAQItem[] = [
    {
      question: " What kind of company is ZUNDA Bridge?",
      answer: "On average, it takes about one week to finalize an agreement. Timelines may vary depending on  deal readiness, industry type, and negotiation speed."
    },
    {
      question: "What types of companies are listed?",
      answer: "On average, it takes about one week to finalize an agreement. Timelines may vary depending on  deal readiness, industry type, and negotiation speed."
    },
    {
      question: "How long does it take to finalize a deal?",
      answer: "On average, it takes about one week to finalize an agreement. Timelines may vary depending on  deal readiness, industry type, and negotiation speed."
    },
    {
      question: " How is security managed during the M&A process?",
      answer: "On average, it takes about one week to finalize an agreement. Timelines may vary depending on  deal readiness, industry type, and negotiation speed."
    },
    {
      question: "What happens after I submit a consultation request?",
      answer: "On average, it takes about one week to finalize an agreement. Timelines may vary depending on  deal readiness, industry type, and negotiation speed."
    }
  ];

  return (
    <section className="py-[120px]">
      <h2 className="text-3xl text-center font-bold mb-6">Frequently Asked Questions</h2>
      <FaqAccordion faqs={faqData} />
    </section>
  );
};

export default Faq;
