import React, { useState, useEffect } from 'react';
import { Calendar, Users, BookOpen, Globe, ArrowRight, Clock } from 'lucide-react';

const Home: React.FC = () => {
  const [pwfSeminars, setPwfSeminars] = useState<any[]>([]);

  useEffect(() => {
    const loadPWFSeminars = async () => {
      try {
        const response = await fetch('/media/documents/pwf_sudan_seminars.json');
        const data = await response.json();
        // Get the most recent 3 seminars
        const sortedData = data
          .sort((a: any, b: any) => {
            const dateA = new Date(a.datetime.split(',')[0]);
            const dateB = new Date(b.datetime.split(',')[0]);
            return dateB.getTime() - dateA.getTime();
          })
          .slice(0, 3);
        setPwfSeminars(sortedData);
      } catch (error) {
        console.error('Error loading PWF seminars:', error);
      }
    };

    loadPWFSeminars();
  }, []);
  const upcomingEvents = [
    {
      date: '2026-07-27',
      endDate: '2026-08-08',
      title: 'Registration Open: Expanding Horizons in Physics in Sudan II (PWF2)',
      type: 'Physics Without Frontiers Workshop',
      featured: true,
      image: '/media/images/PWFll_Sudan_Final_Poster.jpg',
      description: `Applications are now open for the second Physics Without Frontiers (PWF) workshop in Sudan! This nine-day online event, in partnership with ICTP (Trieste, Italy), will focus on Density Functional Theory (DFT) methods and applications.\n\nDeadline for applications: 20 June 2026.\n\nThe workshop features daily lectures and hands-on tutorials with leading international experts. Participants will gain practical experience with Quantum ESPRESSO, Python, and ASE, and build foundations for independent research and international collaboration.`,
      speakers: [
        'Richard Martin – University of Illinois & Stanford University, USA',
        'Matteo Gatti & Fatema Mohamed – École Polytechnique LSI, France',
        'Natasa Stojic – ICTP, Italy',
        'Michele Pavanello – Rutgers University, USA',
        'Andre Schleife – University of Illinois Urbana-Champaign, USA',
        'Alberto Carta – Paul Scherrer Institut, Switzerland',
        'Iurii Timrov – Paul Scherrer Institut, Switzerland',
        'Christian Carbogno – Fritz Haber Institute, Berlin, Germany',
        'Omololu Akin-Ojo – University of Ibadan, Nigeria'
      ],
      topics: [
        'Quantum mechanics',
        'Solid-state physics',
        'Computational materials science',
        'DFT fundamentals',
        'Band structure calculations',
        'DFT+U',
        'Phonons',
        'Machine learning in electronic structure'
      ],
      whoShouldApply: 'Advanced undergraduates, MSc students, and early PhD researchers in physics, chemistry, materials science, or related fields — with basic exposure to quantum mechanics or solid-state physics.',
      registrationDeadline: '2026-06-20',
      time: 'Online',
      link: 'https://tinyurl.com/yc6mu6z4',
      programme: 'https://indico.ictp.it/event/11353/',
      website: 'https://www.photoncentre.org',
      organizedBy: 'Photon SCNSM in partnership with ICTP Physics Without Frontiers',
      certificates: true
    }
    // {
    //   date: '2024-03-15',
    //   title: 'Quantum Mechanics in Modern Physics',
    //   speaker: 'Dr. Sarah Ahmed',
    //   time: '14:00 GMT',
    //   type: 'Seminar'
    // },
    // {
    //   date: '2024-03-22',
    //   title: 'AI Applications in Astrophysics',
    //   speaker: 'Prof. Mohamed Hassan',
    //   time: '15:30 GMT',
    //   type: 'Workshop'
    // },
    // {
    //   date: '2024-03-29',
    //   title: 'Renewable Energy Technologies',
    //   speaker: 'Dr. Fatima Al-Zahra',
    //   time: '13:00 GMT',
    //   type: 'Lecture'
    // }
  ];

  const researchAreas = [
    {
      title: 'Theoretical Physics',
      description: 'Quantum mechanics, relativity, and fundamental particle physics',
      image: '/media/images/research/theoretical-physics.jpg',
      imageAlt: 'Quantum field visualization showing particle interactions',
      credit: 'High-quality research illustration adapted from Nature Physics',
      color: 'from-teal-400 to-cyan-500'
    },
    {
      title: 'Astronomy',
      description: 'Observational astronomy, planetary science, and celestial mechanics',
      image: '/media/images/research/astronomy.webp',
      imageAlt: 'Astronomical observations and celestial body imaging',
      credit: 'High-quality astronomy illustration adapted from Nature Astronomy',
      color: 'from-indigo-400 to-purple-500'
    },
    {
      title: 'Astrophysics',
      description: 'Stellar evolution, cosmology, and observational astronomy',
      image: '/media/images/research/astrophysics.jpg',
      imageAlt: 'Galaxy formation and cosmic structure visualization',
      credit: 'High-quality research illustration adapted from Nature Astronomy',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      title: 'Experimental Physics',
      description: 'Laboratory experiments, instrumentation, and measurement techniques',
      image: '/media/images/research/Experimental-physics.jpg',
      imageAlt: 'Laboratory equipment and experimental setup visualization',
      credit: 'High-quality experimental physics illustration',
      color: 'from-orange-400 to-red-500'
    },
    {
      title: 'Condensed Matter',
      description: 'Materials science, nanotechnology, and quantum materials',
      image: '/media/images/research/condensed-matter.jpg',
      imageAlt: 'Crystal structure and nanomaterial visualization',
      credit: 'High-quality research illustration adapted from Nature Materials',
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Computational Physics',
      description: 'Numerical simulations, machine learning, and data analysis',
      image: '/media/images/research/computational-physics.jpg',
      imageAlt: 'Scientific simulation and data visualization',
      credit: 'High-quality computational science illustration',
      color: 'from-green-400 to-emerald-500'
    }
  ];

  const latestNews = [
    {
      date: '2025-07-14',
      title: 'Physics Without Frontiers – Sudan: Expanding Physics Horizons in Sudan',
      excerpt: 'Six-week online seminar initiative in collaboration with ICTP\'s Physics Without Frontiers program, featuring 12 talks by world-class scientists from astrophysics to condensed matter physics.',
      category: 'Collaboration',
      featured: true,
      duration: 'June 1 – July 14, 2025',
      partner: 'ICTP, Italy',
      link: 'https://indico.ictp.it/event/11030/overview',
      poster: '/media/images/PWF_SUDAN_FinalPoster.jpeg',
      fullArticle: 'https://www.linkedin.com/posts/abubakr-ibrahim_ictp-physics-without-frontiers-activity-7334204500263497728-t1ko?utm_source=share&utm_medium=member_desktop&rcm=ACoAABqerRMBwpVgdHbGJC0M2Dm4v55MkKmX4rc'
    }
    // {
    //   date: '2024-02-28',
    //   title: 'New Research Collaboration with International Universities',
    //   excerpt: 'Photon SCNSM announces partnerships with leading institutions worldwide...',
    //   category: 'Collaboration'
    // },
    // {
    //   date: '2024-02-25',
    //   title: 'Breakthrough in Quantum Computing Research',
    //   excerpt: 'Our team publishes groundbreaking results in quantum information processing...',
    //   category: 'Research'
    // },
    // {
    //   date: '2024-02-20',
    //   title: 'Spring 2024 Educational Programs Now Open',
    //   excerpt: 'Registration is now open for our comprehensive physics and mathematics courses...',
    //   category: 'Education'
    // }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 text-center overflow-hidden min-h-screen flex items-center">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/media/videos/header_background.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 to-teal-900"></div>
        </video>
        
        {/* Dark Overlay for better text readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-6 w-full">
          <div className="mb-12">
            <img
              src="/media/images/Photon.jpg"
              alt="Photon Scientific Centre"
              className="w-32 h-32 mx-auto rounded-full object-cover shadow-2xl border-4 border-white"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Advancing Scientific Knowledge
            <span className="text-teal-300 block">Through Research & Education</span>
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            A leading center for natural sciences and metaphysics, fostering innovation, 
            collaboration, and the next generation of scientific minds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/research"
              className="bg-teal-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm"
            >
              Explore Research
            </a>
            <a
              href="/services"
              className="bg-white bg-opacity-90 text-slate-800 px-8 py-4 rounded-lg font-semibold hover:bg-opacity-100 transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Research Areas</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Exploring the frontiers of science across multiple disciplines
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback to gradient background if image fails to load
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallback) {
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.color} hidden items-center justify-center`}>
                    <div className="text-white text-4xl font-bold opacity-80">
                      {area.title.charAt(0)}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{area.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">{area.description}</p>
                  <p className="text-xs text-slate-400 italic">{area.credit}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="/research"
              className="inline-flex items-center text-teal-500 hover:text-teal-600 font-semibold transition-colors"
            >
              View All Research Areas
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Events List */}
            <div className="lg:w-2/3">
              <div className="flex items-center mb-8">
                <Calendar className="w-8 h-8 text-teal-500 mr-3" />
                <h2 className="text-3xl font-bold text-slate-800">Upcoming Events</h2>
              </div>
              
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${
                      event.featured ? 'border-orange-500 bg-gradient-to-br from-white to-orange-50' : 'border-teal-500'
                    }`}
                  >
                    {event.featured && (
                      <div className="mb-4">
                        {event.image && (
                          <img src={event.image} alt="PWF2 Poster" className="w-full max-w-md rounded-lg mb-3" />
                        )}
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                            Registration Open: PWF2
                          </span>
                        </div>
                        {event.description && (
                          <p className="text-orange-700 text-sm font-medium mb-3 italic">
                            {event.description}
                          </p>
                        )}
                      </div>
                    )}
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                      <div className="flex items-center space-x-4 mb-2 md:mb-0">
                        <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          event.featured ? 'bg-orange-100 text-orange-700' : 'bg-teal-100 text-teal-700'
                        }`}>
                          {event.type}
                        </div>
                        <div className="flex items-center text-slate-500 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {event.time}
                        </div>
                      </div>
                      <div className="text-slate-500 text-sm">
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                    
                    <h3 className={`font-bold text-slate-800 mb-2 ${
                      event.featured ? 'text-xl' : 'text-xl'
                    }`}>
                      {event.title}
                    </h3>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        {event.speakers && event.speakers.length > 0 && (
                          <div className="mb-2">
                            <span className="font-semibold">Speakers:</span>
                            <ul className="list-disc list-inside text-slate-600 text-sm mt-1">
                              {event.speakers.slice(0, 4).map((speaker, idx) => (
                                <li key={idx}>{speaker}</li>
                              ))}
                              {event.speakers.length > 4 && <li>and more…</li>}
                            </ul>
                          </div>
                        )}
                      </div>
                      {event.link && (
                        <a
                          href={event.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`mt-3 sm:mt-0 inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            event.featured 
                              ? 'bg-orange-500 text-white hover:bg-orange-600' 
                              : 'bg-teal-500 text-white hover:bg-teal-600'
                          }`}
                        >
                          📝 Apply Here
                          <ArrowRight className="ml-1 w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <a
                  href="/archive"
                  className="inline-flex items-center text-teal-500 hover:text-teal-600 font-semibold transition-colors"
                >
                  View All Events
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>

            {/* PWF-Sudan Featured Seminars */}
            <div className="lg:w-1/3">
              <div className="flex items-center mb-8">
                <Calendar className="w-8 h-8 text-orange-500 mr-3" />
                <h2 className="text-3xl font-bold text-slate-800">PWF-Sudan Seminars</h2>
              </div>
              
              <div className="space-y-6">
                {pwfSeminars.map((seminar, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500"
                  >
                    <div className="flex gap-4">
                      <img
                        src={seminar.screenshot_image}
                        alt={seminar.title}
                        className="w-16 h-16 rounded-lg object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/media/images/Photon.jpg';
                        }}
                      />
                      <div className="flex-1">
                        <div className="mb-2">
                          <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-semibold">
                            {seminar.topic}
                          </span>
                        </div>
                        <h3 className="text-sm font-bold text-slate-800 mb-1 line-clamp-2">
                          {seminar.title}
                        </h3>
                        <p className="text-xs text-slate-600 mb-2">
                          <strong>{seminar.speaker}</strong>
                        </p>
                        <p className="text-xs text-slate-500">
                          {seminar.datetime.split(',')[0]}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <a
                  href="/archive/pwf-sudan-seminars"
                  className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold transition-colors"
                >
                  View All PWF Seminars
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center mb-8">
            <BookOpen className="w-8 h-8 text-teal-500 mr-3" />
            <h2 className="text-3xl font-bold text-slate-800">Latest News</h2>
          </div>
          
          <div className="space-y-6">
            {latestNews.map((news, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  news.featured ? 'border-2 border-teal-500 bg-gradient-to-br from-white to-teal-50' : ''
                }`}
              >
                {news.featured && (
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">📰</span>
                      <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                        Featured Collaboration
                      </span>
                    </div>
                    {news.poster && (
                      <div className="mb-3">
                        <a 
                          href={news.poster} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-teal-600 hover:text-teal-700 text-sm font-medium"
                        >
                          📄 View Program Poster
                        </a>
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2 mb-3 text-sm">
                      <span className="flex items-center text-slate-600">
                        📅 <span className="ml-1 font-medium">{news.duration}</span>
                      </span>
                      <span className="flex items-center text-slate-600">
                        🌍 <span className="ml-1 font-medium">In partnership with {news.partner}</span>
                      </span>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    news.category === 'Collaboration' ? 'bg-teal-100 text-teal-700' :
                    news.category === 'Research' ? 'bg-blue-100 text-blue-700' :
                    'bg-slate-100 text-slate-700'
                  }`}>
                    {news.category}
                  </span>
                  <span className="text-slate-500 text-sm">
                    {new Date(news.date).toLocaleDateString()}
                  </span>
                </div>
                
                <h3 className={`font-bold text-slate-800 mb-2 line-clamp-2 ${
                  news.featured ? 'text-xl' : 'text-lg'
                }`}>
                  {news.title}
                </h3>
                
                <p className="text-slate-600 text-sm line-clamp-3 mb-3">{news.excerpt}</p>
                
                {news.fullArticle && (
                  <a
                    href={news.fullArticle}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal-500 hover:text-teal-600 font-medium text-sm transition-colors mb-2 block"
                  >
                    📖 Read Full Article
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </a>
                )}
                
                {news.link && (
                  <a
                    href={news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal-500 hover:text-teal-600 font-medium text-sm transition-colors"
                  >
                    🔗 Event Overview (Indico)
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a
              href="/news"
              className="inline-flex items-center text-teal-500 hover:text-teal-600 font-semibold transition-colors"
            >
              Read All News
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-br from-teal-500 to-cyan-600 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl opacity-90">Making a difference in the scientific community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">134</div>
              <div className="text-lg opacity-90">Registered Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-lg opacity-90">Students & Researcher Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1+</div>
              <div className="text-lg opacity-90">International Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">40+</div>
              <div className="text-lg opacity-90">Seminars Conducted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-slate-50 to-teal-50 rounded-2xl p-12">
            <Globe className="w-16 h-16 text-teal-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Join Our Global Community</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Connect with researchers, students, and institutions worldwide. 
              Be part of the next breakthrough in science.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-teal-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Involved
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeQb3KUICiWxgiiQpvt_zg6EMUcvGK8vp0UY_VFf8An66h9tg/viewform?usp=sf_link"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-teal-500 text-teal-500 px-8 py-4 rounded-lg font-semibold hover:bg-teal-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Become A Member
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;