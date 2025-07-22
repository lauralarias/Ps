import React from 'react';
import { useNavigate } from 'react-router-dom';

const teamCards = [
  {
    name: 'Dr. Sudhir Rao',
    img: 'https://randomuser.me/api/portraits/men/33.jpg',
    quote: '"I believe high quality care transforms lives."',
  },
  {
    name: 'Dr. Suhas Badarinath',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: '"Comprehensive, compassionate, and innovative treatment is our mission."',
  },
  {
    name: 'The Specialists',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    quote: 'A group of experts complement the Psyencia Team with special skills.',
  },
];

const hours = [
  { day: 'Monday:', time: '8am - 5pm' },
  { day: 'Tuesday:', time: '8am - 5pm' },
  { day: 'Wednesday:', time: '8am - 5pm' },
  { day: 'Thursday:', time: '8am - 5pm' },
  { day: 'Friday:', time: '8am - 5pm' },
  { day: 'Saturday:', time: '8am - 5pm' },
  { day: 'Sunday:', time: '8am - 5pm' },
];

export default function TmsProviders() {
  const navigate = useNavigate();
  return (
    <>
      {/* Green Meet the Team Section */}
      <div className="bg-[#8dd13a] py-20 px-4">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8">Meet the team behind Psyencia</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {teamCards.map((p, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => navigate('/our-team')}
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg mb-6 group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-2xl font-bold text-white mb-2">{p.name}</h3>
              <p className="text-white text-base max-w-xs mx-auto opacity-90">{p.quote}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Location Section */}
      <div className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#54586a] mb-8">TMS Therapy Daytona, Florida</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                alt="Location"
                className="w-full h-80 object-cover rounded-xl shadow-md cursor-pointer transition-transform duration-200 hover:scale-105"
                onClick={() => navigate('/location')}
              />
            </div>
            <div>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.234567!2d-81.0376846849406!3d29.2108142821967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e6e6b6e6e6e6e6%3A0x6e6e6e6e6e6e6e6e!2s1430%20Mason%20Ave%2C%20Daytona%20Beach%2C%20FL%2032117%2C%20USA!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 