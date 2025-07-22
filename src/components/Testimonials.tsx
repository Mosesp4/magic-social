import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  handle: string;
  text: string;
  tag: string;
  business?: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      handle: '@sarahsbakery',
      business: "Sarah's Sweet Treats",
      text: 'Magic Social has saved me hours every week! As a small bakery owner, I no longer stress about what to post. The AI suggestions are always on-brand and get great engagement.',
      tag: '#TimeSaver #SmallBiz',
    },
    {
      id: 2,
      name: 'Michael Chen',
      handle: '@mikesrepairs',
      business: "Mike's Auto Repair",
      text: 'My social media engagement has tripled since using Magic Social. The content ideas are perfect for my auto shop, and the automated posting is a game-changer!',
      tag: '#GameChanger #LocalBusiness',
    },
    {
      id: 3,
      name: 'Lisa Rodriguez',
      handle: '@lisasflorals',
      business: "Lisa's Flower Boutique",
      text: "I was skeptical about AI content at first, but Magic Social understands my floral business perfectly. The seasonal post ideas are exactly what I need to stay relevant.",
      tag: '#PerfectFit #Retail',
    },
    {
      id: 4,
      name: 'James Wilson',
      handle: '@wilsonfitness',
      business: "Wilson Fitness Studio",
      text: 'As a personal trainer, I need to focus on my clients, not social media. Magic Social handles all my content creation so I can focus on what matters most.',
      tag: '#FocusOnClients #Fitness',
    },
    {
      id: 5,
      name: 'Emma Davis',
      handle: '@emmasconsulting',
      business: "Davis Business Consulting",
      text: 'The analytics dashboard helped me understand what content works best for my professional services. Now I get more leads from social than ever before!',
      tag: '#DataDriven #Consulting',
    },
    {
      id: 6,
      name: 'Carlos Mendez',
      handle: '@cmendezcontracting',
      business: "Mendez Home Improvements",
      text: 'Finally, an app that gets contractor marketing! The before/after post templates and client testimonial tools have brought me so many new projects.',
      tag: '#ContractorLife #HomeImprovement',
    },
    {
      id: 7,
      name: 'Priya Patel',
      handle: '@priyasspa',
      business: "Serenity Day Spa",
      text: 'Magic Social creates the most beautiful visual content for my spa. The relaxation quotes and promotional posts have helped fill my booking calendar!',
      tag: '#SelfCare #WellnessBiz',
    },
    {
      id: 8,
      name: 'Thomas OReilly',
      handle: '@tomsdiner',
      business: "Tom's Neighborhood Diner",
      text: 'My food photos used to look amateurish. Now with Magic Socials AI-enhanced images and caption ideas, our posts look professional and bring in hungry customers!',
      tag: '#RestaurantMarketing #Foodie',
    },
  ];

  // Function to get initials from name
  const getInitials = (name: string): string => {
    return name.split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  // Function to generate a consistent color based on name
  const getColorClass = (name: string): string => {
    const colors = [
      'bg-blue-500',   // Professional services
      'bg-green-500',  // Food/retail
      'bg-purple-500', // Beauty/wellness
      'bg-red-500',    // Fitness
      'bg-teal-500',   // Consulting
      'bg-orange-500', // Contractors
      'bg-pink-500',   // Spas/salons
      'bg-indigo-500', // Restaurants
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            What small business owners say
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Don&#39;t just take our word for it - hear how Magic Social is helping real businesses save time and grow their online presence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 px-4 mt-12 sm:px-0 xl:mt-20 xl:grid-cols-4 sm:grid-cols-2">
          {testimonials.map((testimonial) => {
            const initials = getInitials(testimonial.name);
            const colorClass = getColorClass(testimonial.name);
            
            return (
              <div key={testimonial.id} className="overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="px-5 py-6">
                  <div className="flex items-center justify-between">
                    <div className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full ${colorClass} text-white font-semibold`}>
                      {initials}
                    </div>
                    <div className="min-w-0 ml-3 mr-auto">
                      <p className="text-base font-semibold text-gray-900 truncate">{testimonial.name}</p>
                      <p className="text-sm text-gray-500 truncate">{testimonial.business}</p>
                    </div>
                    {/* Removed twitter icon */}
                  </div>
                  <blockquote className="mt-5">
                    <p className="text-base text-gray-700">
                      {testimonial.text}
                      <span className="block mt-2 text-blue-500 font-medium">{testimonial.tag}</span>
                    </p>
                  </blockquote>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;