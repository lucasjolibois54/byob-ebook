import { InteractiveFaqAccordion } from "../components/Home/faq/InteractiveFaqAccordion";
import NewHero from "../components/Home/new-hero/NewHero";
import Subhero from "../components/Home/subhero/Subhero";

export default function Home() {
  return (
    <div className=" bg-[#09090A] min-h-screen font-[family-name:var(--font-geist-sans)]">
      <NewHero />
      <Subhero />
      <InteractiveFaqAccordion
        faqs={[
          {
            question: "What is the Interactive FAQ Accordion?",
            answer: [
              {
                type: "text",
                content:
                  "It's a dynamic, customizable FAQ component with smooth animations.",
              },
              {
                type: "jsx",
                content: (
                  <button
                    role="link"
                    className="mt-2 relative transition-[background-size,color] duration-500 bg-[linear-gradient(#262626,#262626),linear-gradient(#3b82f6,#3b82f6)] bg-no-repeat bg-[position:100%_100%,0_100%] bg-[length:100%_2px,0_2px] text-gray-250 hover:bg-[0_2px,100%_2px] hover:text-[#3b82f6]"
                  >
                    Learn More
                  </button>
                ),
              },
            ],
          },
          {
            question: "How can I customize it?",
            answer: [
              {
                type: "text",
                content:
                  "You can adjust colors, animations, and default open states via props.",
              },
              {
                type: "list",
                content: [
                  "Background color",
                  "Question and answer colors",
                  "Animation duration",
                ],
              },
            ],
          },
          {
            question: "Is it easy to set up?",
            answer: [
              {
                type: "text",
                content:
                  "Yes! Just pass your FAQ data and customize the props as needed.",
              },
            ],
          },
        ]}
        defaultOpen={[0]}
      />
    </div>
  );
}
