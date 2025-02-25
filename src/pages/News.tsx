import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NewsItem } from '../types';

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'Community Development Initiative Launched',
    excerpt: 'Elias Murithi Mithika initiative to support local businesses and promote economic growth in Kianjai Ward.',
    date: '2026 Coming Soon',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 2,
    title: 'Education Support Program',
    excerpt: 'New program to provide educational resources and support to students in Kianjai Ward.',
    date: '2026 Coming Soon',
    imageUrl: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 3,
    title: 'Infrastructure Development Plans Unveiled',
    excerpt: 'Comprehensive infrastructure development plan presented for Kianjai Ward, focusing on road networks and water supply.',
    date: '2026 Coming Soon',
    imageUrl: 'https://images.unsplash.com/photo-1590479773265-7464e5d48118?auto=format&fit=crop&q=80&w=1000'
  }
];

export default function News() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold gradient-text mb-8 animate-fade-in">Latest News & Updates</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article 
              key={item.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar size={16} className="mr-2 animate-pulse" />
                  {item.date}
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 link-hover">
                  {item.title}
                </h2>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <span className="text-pink-600 font-medium italic">
                  Coming Soon
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}