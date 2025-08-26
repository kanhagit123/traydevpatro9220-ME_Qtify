import { useState } from "react";
import styles from "./Faq.module.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "Is QTiFy free to use?",
    answer: "Yes! It is 100% free, and has 0% ads!",
  },
  {
    question: "Can I download and listen to songs offline?",
    answer: "No, currently offline listening is not supported.",
  },
  {
    question: "Do you add new songs regularly?",
    answer: "Yes! We keep updating our library with fresh songs regularly.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqSection}>
      <h2>FAQs</h2>
      {faqs.map((item, index) => (
        <div
          key={index}
          className={`${styles.faqItem} ${
            openIndex === index ? styles.active : ""
          }`}
          onClick={() => toggleFAQ(index)}
        >
          <div className={styles.faqQuestion}>
            <span>{item.question}</span>
            {openIndex === index ? (
              <FaChevronUp className={styles.icon} />
            ) : (
              <FaChevronDown className={styles.icon} />
            )}
          </div>
          {openIndex === index && (
            <div className={styles.faqAnswer}>{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
