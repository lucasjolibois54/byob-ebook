'use client';

import { useState, useCallback, JSX } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnswerItem {
  type: 'text' | 'list' | 'jsx';
  content: string | string[] | JSX.Element;
}

interface Faq {
  question: string;
  answer: AnswerItem[];
}

interface InteractiveFaqAccordionProps {
  faqs: Faq[];
  faqWidth?: string;
  backgroundColor?: string;
  questionColor?: string;
  answerColor?: string;
  questionHoverColor?: string;
  iconColor?: string;
  animationDuration?: number;
  animationEasing?: string;
  defaultOpen?: number | number[];
  containerClassName?: string;
  dividerColor?: string;
  questionFontSize?: string;
  answerFontSize?: string;
}

export const InteractiveFaqAccordion: React.FC<InteractiveFaqAccordionProps> = ({
  faqs,
  faqWidth = 'w-[70vw] md:w-full',
  backgroundColor = 'bg-black/5 dark:bg-white/5',
  questionColor = 'text-black dark:text-white',
  answerColor = 'text-[#343434] dark:text-[#a0a2a5]',
  questionHoverColor = 'hover:text-blue-400 dark:hover:text-blue-400',
  iconColor = 'text-blue-500',
  animationDuration = 0.3,
  animationEasing = 'easeInOut',
  defaultOpen = [],
  containerClassName = 'max-w-7xl mx-auto',
  dividerColor = 'divide-gray-900/10 dark:divide-gray-100/10',
  questionFontSize = 'text-md sm:text-xl',
  answerFontSize = 'text-sm sm:text-base',
}) => {
  const [openStates, setOpenStates] = useState<boolean[]>(() => {
    const initialStates = Array(faqs.length).fill(false);
    const indicesToOpen = Array.isArray(defaultOpen) ? defaultOpen : [defaultOpen];
    indicesToOpen.forEach((index) => {
      if (index >= 0 && index < faqs.length) {
        initialStates[index] = true;
      }
    });
    return initialStates;
  });

  const toggleFaq = useCallback(
    (index: number) => {
      setOpenStates((prevStates) =>
        prevStates.map((isOpen, i) => (i === index ? !isOpen : isOpen))
      );
    },
    []
  );

  return (
    <div className="px-10 pb-20 max-w-7xl mx-auto">
      <div
        className={`mt-16 space-y-2 ${faqWidth} divide-y ${dividerColor} rounded-2xl p-8 backdrop-blur-lg ${backgroundColor} ${containerClassName}`}
      >
        {faqs.map((faq, index) => (
          <FaqItem
            key={index}
            index={index}
            faq={faq}
            isOpen={openStates[index]}
            toggleFaq={toggleFaq}
            questionColor={questionColor}
            questionHoverColor={questionHoverColor}
            answerColor={answerColor}
            iconColor={iconColor}
            animationDuration={animationDuration}
            animationEasing={animationEasing}
            questionFontSize={questionFontSize}
            answerFontSize={answerFontSize}
          />
        ))}
      </div>
    </div>
  );
};

interface FaqItemProps {
  index: number;
  faq: Faq;
  isOpen: boolean;
  toggleFaq: (index: number) => void;
  questionColor: string;
  questionHoverColor: string;
  answerColor: string;
  iconColor: string;
  animationDuration: number;
  animationEasing: string;
  questionFontSize: string;
  answerFontSize: string;
}

const FaqItem: React.FC<FaqItemProps> = ({
  index,
  faq,
  isOpen,
  toggleFaq,
  questionColor,
  questionHoverColor,
  answerColor,
  iconColor,
  animationDuration,
  animationEasing,
  questionFontSize,
  answerFontSize,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="last:border-gray-800/10"
    >
      <button
        onClick={() => toggleFaq(index)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') toggleFaq(index);
        }}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        className={`flex w-full items-center justify-between py-6 text-left transition-all duration-300 hover:scale-[0.975] ${questionColor} ${questionHoverColor}`}
      >
        <span className={`${questionFontSize} font-medium`}>{faq.question}</span>
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          className={`ml-4 flex-shrink-0 text-3xl font-light leading-none ${iconColor}`}
        >
          {isOpen ? '-' : '+'}
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: animationDuration,
              ease: animationEasing,
            }}
            className="overflow-hidden"
          >
            <div className={`pb-6 max-w-3xl ${answerColor} ${answerFontSize}`}>
              <AnswerRenderer answers={faq.answer} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface AnswerRendererProps {
  answers: AnswerItem[];
}

const AnswerRenderer: React.FC<AnswerRendererProps> = ({ answers }) => {
  return (
    <>
      {answers.map((item, idx) => {
        if (item.type === 'text') {
          return (
            <p key={idx} className="mb-2">
              {item.content}
            </p>
          );
        } else if (item.type === 'list') {
          return (
            <ul key={idx} className="list-disc pl-5 space-y-2">
              {(item.content as string[]).map((listItem, listIdx) => (
                <li key={listIdx}>{listItem}</li>
              ))}
            </ul>
          );
        } else if (item.type === 'jsx') {
          return <div key={idx}>{item.content as JSX.Element}</div>;
        }
        return null;
      })}
    </>
  );
};
