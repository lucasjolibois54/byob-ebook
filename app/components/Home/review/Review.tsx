import LoopingCarousel from "./LoopingCarousel";

const Review = () => {
  const reviews = [
    {
      name: "ibtesam hussain",
      body: "I had a great experience at BecomeYourOwnBarber! As someone who had never even held a trimmer before, I got exactly the help I needed to start my journey of cutting my own hair.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "Memis Goz",
      body: "BecomeYourOwnBarber gave me excellent training in cutting a fade. Highly recommended",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Gago Topal",
      body: "I cut my own hair now and couldn't be happier!",
      img: "https://avatar.vercel.sh/jane",
    },
    {
      name: "Qasim",
      body: "Definitely the best journey I've been on.I struggle to find time to go to the barber with my busy schedule. After discovering BecomeYourOwnBarber, I realized I could save both money and time in the long run.",
      img: "https://avatar.vercel.sh/jane",
    },
    // Add more reviews here
  ];

  // Map over each review to create the unique child elements
  const reviewElements = reviews.map((review, index) => (
    <div key={index}>
      <div className="flex items-center gap-2">
        <img
          className="rounded-full"
          width="55"
          height="55"
          alt={review.name}
          src={review.img}
        />
        <div>
          <figcaption className="text-xl font-medium text-white">{review.name}</figcaption>
          <p className="text-lg font-medium text-white">★★★★★</p>
        </div>
      </div>
      {/* <span>⭐⭐⭐⭐⭐</span> */}
      <blockquote className="mt-4 text-lg text-gray-300">
        {review.body}
      </blockquote>
      
    </div>
  ));

  // Render the LoopingCarousel component with the review elements
  return (
    <div id="reviews">
    <LoopingCarousel speed={250} cardWidth={400}>
      {reviewElements}
    </LoopingCarousel>
    </div>
  );
};

export default Review;
