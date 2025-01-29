import LoopingCarousel from "./LoopingCarousel";

const Review = () => {
  const reviews = [
    {
      name: "Jill",
      username: "@jill",
      body: "This changed how I think about design. Brilliant work!",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "Jack",
      username: "@jack",
      body: "Absolutely blown away by the attention to detail. Fantastic!",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Jane",
      username: "@jane",
      body: "The quality and thought put into this are remarkable. Highly impressed.",
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
