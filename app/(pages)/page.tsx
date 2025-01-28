import AboutUs from "../components/Home/about";
import { InteractiveFaqAccordion } from "../components/Home/faq/InteractiveFaqAccordion";
import NewHero from "../components/Home/new-hero/NewHero";
import ParallaxSection from "../components/Home/new-nubhero/NewSubhero";
import LoopingCarousel from "../components/Home/review/LoopingCarousel";
import Subhero from "../components/Home/subhero/Subhero";

export default function Home() {
  return (
    <div className=" bg-[#09090A] min-h-screen font-[family-name:var(--font-geist-sans)]">
      <NewHero />
      <AboutUs />
      {/* <ParallaxSection /> */}
      <Subhero />
      <LoopingCarousel
        speed={160}
        cardWidth={280}
        direction="left"
        backgroundColor='bg-transparent'
        hoverBackgroundColor='hover:bg-transparent'
        borderWidth='border-0'
        cardClassName="transition-transform transform hover:scale-105 min-h-[400px]"
      >
        {/* First Card: Minimal Testimonial */}
        <div key="testimonial" className="p-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg hover:shadow-2xl transition-all">
          <p className="text-white text-xl font-semibold mb-2">"An exceptional experience that surpassed my expectations!"</p>
          <div className="flex items-center mt-4">
            <img src="https://avatar.vercel.sh/user2" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
            <div className="ml-3">
              <p className="text-white font-medium">Sarah Lee</p>
              <p className="text-indigo-200 text-sm">@sarahlee</p>
            </div>
          </div>
        </div>
  
        {/* Second Card: Interactive Product Promo */}
        <div key="product" className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transform transition-transform hover:-translate-y-2">
          <h3 className="text-gray-900 text-2xl font-bold">Eco Water Bottle</h3>
          <p className="text-gray-600 mt-2">Stay hydrated with style. Made from 100% recycled materials. Limited stock available!</p>
          <button className="mt-5 px-4 py-2 bg-indigo-500 text-white font-semibold rounded-lg shadow hover:bg-indigo-600 transition-colors">
            Shop Now
          </button>
        </div>
  
        {/* Third Card: Event Invitation */}
        <div key="event" className="p-7 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-xl shadow-lg hover:shadow-2xl transition-all">
          <h3 className="text-2xl font-bold">Tech Conference 2024</h3>
          <p className="mt-1 text-blue-200">March 3, 2024 • San Francisco</p>
          <p className="mt-3 text-sm">Join industry leaders and innovators for a day of networking and insights.</p>
          <button className="mt-4 px-4 py-2 bg-white text-teal-600 font-medium rounded-lg shadow hover:bg-gray-100 transition-colors">
            Register Now
          </button>
        </div>
  
        {/* Fourth Card: Modern Blog Preview */}
        <div key="blog" className="p-6 bg-gray-800 text-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-all">
          <h3 className="text-2xl font-semibold">The Future of Web Design</h3>
          <p className="mt-2 text-gray-400">Explore upcoming trends and techniques to stay ahead in web design.</p>
          <p className="mt-3 text-xs text-gray-500">By John Doe • 5 min read</p>
        </div>
  
        {/* Fifth Card: Inspirational Quote */}
        <div key="quote" className="p-8 bg-yellow-400 rounded-xl shadow-lg hover:shadow-xl transition-all text-center text-gray-900 font-semibold">
          <p className="text-xl">"Creativity is intelligence having fun."</p>
          <p className="mt-3 text-sm text-gray-700">- Albert Einstein</p>
        </div>
      </LoopingCarousel>
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
