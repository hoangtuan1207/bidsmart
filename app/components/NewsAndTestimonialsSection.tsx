import React from "react";

type Item = {
  id: string;
  title: string;
  content: string;
};

type Props = {
  content: {
    title_news: string;
    title_testimonials: string;
  };
  news: Item[];
  testimonials: Item[];
};

function isValidUrl(string: string | URL) {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
}

export const NewsAndTestimonialsSection: React.FC<Props> = ({
  content,
  news,
  testimonials,
}) => {
  return (
    <section className="w-full bg-[#022854] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-10">
          What's New & People Say
        </h2>

        <div className="flex flex-col md:flex-row gap-6 h-[400px]">
          {/* News */}
          <div className="w-full md:w-1/2 h-full overflow-y-auto bg-white/5 border border-blue-600 rounded-xl p-5 shadow-md backdrop-blur-sm">
            <h3 className="font-semibold text-lg mb-4 text-blue-400">
              📰 {content.title_news}
            </h3>
            {news.map((item) => (
              <div key={item.id} className="mb-4">
                <h4 className="text-white font-bold text-base mb-1">
                  {item.title}
                </h4>
                <a
                  href={item.content}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline text-sm break-all"
                >
                  {item.content}
                </a>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="w-full md:w-1/2 h-full overflow-y-auto bg-white/5 border border-green-600 rounded-xl p-5 shadow-md backdrop-blur-sm">
            <h3 className="font-semibold text-lg mb-4 text-green-400">
              💬 {content.title_testimonials}
            </h3>
            {testimonials.length === 0 ? (
              <p className="text-sm text-gray-300">No testimonials yet.</p>
            ) : (
              testimonials.map((item) => (
                <div key={item.id} className="mb-4">
                  <h4 className="text-white font-bold text-base mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.content}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
