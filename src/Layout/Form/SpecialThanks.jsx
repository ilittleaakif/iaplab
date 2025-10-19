import { motion } from "framer-motion";

const CommentCard = ({ text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full rounded-tl-none bg-gradient-to-br from-bg-card to-bg-card/5
                 rounded-3xl shadow-b border border-border max-w-sm p-4">
      <p className="text-text-soft text-sm font-main leading-relaxed">{text}</p>
    </motion.div>
  );
};

const SpecialThanksSection = () => {
  const CommentsData = [
    "I really enjoyed using this app, it's easy and comfortable Glad to see you're from my class, great work, keep going 🤍",
    "I just want to say that you’re doing a great job, guys! I really love what you’re doing. I want to join your team someday — I’m still a beginner for now, but one day, inshallah, I will, and we’ll create something amazing together 😊 Keep going, guys! 💪",
    "You guys are doing amazing, man. I really love seeing what you’re building.",
  ];

  return (
    <section className="my-14 max-w-7xl px-8">
      {/* Header */}
      <div className="flex text-center flex-col items-center justify-center mb-8 space-y-2">
        <h1 className="text-3xl font-main font-semibold text-text-soft">
          Thank You
        </h1>
        <p className="text-text-muted text-center max-w-lg">
          Your support mean the world to us.
        </p>
        <i className="fas text-3xl fa-heart text-red-500 animate-bounce"></i>
      </div>

      {/* Comments Grid */}
      <div
        className="flex items-start flex-wrap justify-center gap-4 place-items-center"
      >
        {CommentsData.map((data, idx) => (
          <CommentCard key={idx} text={data} />
        ))}
      </div>
      {/* Decorative Footer */}
      <div className="mt-10 text-center">
      </div>
    </section>
  );
};

export default SpecialThanksSection;
