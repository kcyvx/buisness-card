import React, { useState, useEffect } from 'react';

const Mail = ({ size = 16 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const Phone = ({ size = 16 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const Github = ({ size = 16 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const Linkedin = ({ size = 16 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Globe = ({ size = 16 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="m12 2c4.418 0 8 4.477 8 10s-3.582 10-8 10-8-4.477-8-10 3.582-10 8-10z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="m2 12c0-5.523 3.582-10 8-10s8 4.477 8 10" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

const Zap = ({ size = 16 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
  </svg>
);

const Volume2 = ({ size = 20 }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
    <path d="m19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
  </svg>
);

export default function ModernBusinessCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [particles, setParticles] = useState([]);
  const [isMuted, setIsMuted] = useState(true);
  const [audioElement, setAudioElement] = useState(null);

  const ReactLogo = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.823 6.855l-.133.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.296 2.618.496 3.787.609l.234.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.988.571 2.845-.309 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 25.049 25.049 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a30.905 30.905 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z"/>
    </svg>
  );

  const VueLogo = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM2.92,2.61H6.52L12,12.63,17.48,2.61H21.08L12,19.37Z"/>
    </svg>
  );

  const FirebaseLogo = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.89 15.672L6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 0 0-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 0 0 1.588 0zM14.3 7.147l-1.818-3.482a.542.542 0 0 0-.96 0L3.53 17.984z"/>
    </svg>
  );

  const TailwindLogo = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
    </svg>
  );

  const skills = [
    { name: 'React', icon: <ReactLogo />, color: 'from-blue-400 to-cyan-400', level: 95 },
    { name: 'Vue.js', icon: <VueLogo />, color: 'from-green-400 to-emerald-400', level: 90 },
    { name: 'Firebase', icon: <FirebaseLogo />, color: 'from-yellow-400 to-orange-400', level: 85 },
    { name: 'Tailwind', icon: <TailwindLogo />, color: 'from-cyan-400 to-blue-400', level: 92 }
  ];

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      const particleCount = window.innerWidth < 768 ? 15 : 30; 
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * (window.innerWidth < 768 ? 4 : 6) + 2,
          delay: Math.random() * 2
        });
      }
      setParticles(newParticles);
    };
    
    generateParticles();
    window.addEventListener('resize', generateParticles);
    
    const audio = new Audio('./background-music.mp3');
    audio.loop = true;
    audio.volume = 0.3;
    setAudioElement(audio);
    
    return () => {
      if (audio) {
        audio.pause();
      }
      window.removeEventListener('resize', generateParticles);
    };
  }, []);

  const toggleAudio = () => {
    if (audioElement) {
      if (isMuted) {
        audioElement.play().catch(e => console.log('Autoplay prevented:', e));
        setIsMuted(false);
      } else {
        audioElement.pause();
        setIsMuted(true);
      }
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-2 sm:p-4">

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animation: `float 6s ease-in-out infinite ${particle.delay}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-15px) translateX(5px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.4); }
        }
        
        @keyframes audioWave {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(1.2); }
        }
        
        @keyframes diagonalStrike {
          from { width: 0; }
          to { width: 141.42%; }
        }
        
        @keyframes slideIn {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        .card-container {
          perspective: 1000px;
        }
        
        .card {
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .card.flipped {
          transform: rotateY(180deg);
        }
        
        .card-face {
          backface-visibility: hidden;
        }
        
        .card-back {
          transform: rotateY(180deg);
        }
        
        .audio-button {
          animation: slideIn 1s ease-out 0.5s both;
        }
        
        .audio-wave {
          animation: audioWave 1.5s ease-in-out infinite;
        }
        
        .diagonal-strike-line {
          position: absolute;
          top: 50%;
          left: 50%;
          height: 2px;
          background: white;
          transform: translate(-50%, -50%) rotate(-45deg);
          transform-origin: center;
          animation: diagonalStrike 0.3s ease-out forwards;
        }

        /* Masquer le shimmer sur mobile pour de meilleures performances */
        @media (max-width: 640px) {
          .shimmer-effect {
            display: none;
          }
        }
      `}</style>

      <button
        onClick={toggleAudio}
        className="audio-button fixed top-4 left-4 sm:top-8 sm:left-8 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-800/80 backdrop-blur-lg border border-gray-600/50 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 text-gray-300 hover:text-white shadow-lg hover:shadow-xl cursor-pointer"
        title={isMuted ? 'Activer la musique' : 'Désactiver la musique'}
      >
        <div className="relative">
          <Volume2 size={window.innerWidth < 640 ? 16 : 20} />
          {isMuted && <div className="diagonal-strike-line" />}
        </div>
      </button>

      <div className="card-container flex justify-center w-full max-w-[95vw] sm:max-w-none">
        <div 
          className={`card relative w-full sm:w-[520px] h-[500px] sm:h-[340px] cursor-pointer ${isFlipped ? 'flipped' : ''}`}
          onClick={() => setIsFlipped(!isFlipped)}
        > 
          <div className="card-face absolute inset-0 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden">
            <div className="shimmer-effect absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 animate-pulse" 
                 style={{ animation: 'shimmer 3s ease-in-out infinite' }} />
            
            <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-between">
              <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="w-20 h-20 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-lg flex-shrink-0">
                   <img 
                    src="./moi.png" 
                    alt="Thomas Galabert"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h1 className="text-2xl sm:text-2xl font-bold text-white mb-1">Thomas Galabert</h1>
                  <p className="text-purple-300 text-base sm:text-sm font-medium">Développeur Front-End</p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 my-6">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className={`flex items-center space-x-2 px-3 py-2 bg-gradient-to-r ${skill.color} text-white text-sm font-semibold rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 cursor-pointer`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="flex-shrink-0">{skill.icon}</span>
                    <span className="text-xs sm:text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 sm:space-y-2 text-gray-300 text-sm">
                <div className="flex items-center justify-center sm:justify-start space-x-2 hover:text-purple-400 transition-colors">
                  <Mail size={14} />
                  <span className="text-xs sm:text-sm">thomas.galabert07@gmail.com</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-2 hover:text-purple-400 transition-colors">
                  <Phone size={14} />
                  <span className="text-xs sm:text-sm">+33 6 11 84 01 86</span>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 text-purple-400 text-xs opacity-70 animate-bounce hidden sm:block">
                Cliquez pour retourner ↻
              </div>
              <div className="text-purple-400 text-xs opacity-70 animate-bounce text-center sm:hidden mt-4">
                Touchez pour voir les compétences ↻
              </div>
            </div>
          </div>

          <div className="card-face card-back absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 shadow-2xl overflow-hidden">
            <div className="relative z-10 p-6 sm:p-8 h-full">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-6 sm:mb-8 text-center">Compétences Techniques</h2>
              
              <div className="space-y-4 sm:space-y-6">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="group"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    onTouchStart={() => setHoveredSkill(skill.name)}
                    onTouchEnd={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white text-sm font-medium flex items-center space-x-2">
                        <span className="flex-shrink-0 text-white">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </span>
                      <span className={`text-xs font-bold transition-all duration-300 ${
                        hoveredSkill === skill.name ? 'text-white scale-110' : 'text-gray-300'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform ${
                          hoveredSkill === skill.name ? 'scale-105 shadow-lg' : ''
                        }`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.2}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 text-center text-gray-400 text-sm">
        <p className="flex items-center space-x-2">
          <Zap size={16} className="text-purple-400" />
          <span>Carte de visite interactive - Cliquez pour explorer mes compétences</span>
        </p>
      </div>
    </div>
  );
}