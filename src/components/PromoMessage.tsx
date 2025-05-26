import React, { useState, useEffect } from 'react';

const PromoMessage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Add script loading effect
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.tribopay.com.br/js/oneclick.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const images = [
    'https://i.imgur.com/QXr7UQ1.jpeg',
    'https://i.postimg.cc/VLC5Mmv1/COMA.jpg',
    'https://i.imgur.com/lU1hhKj.jpeg',
    'https://i.imgur.com/dgQfhnp.jpeg'
  ];

  return (
    <div className="text-center px-4 py-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="text-[#FF0000] text-2xl font-bold mb-4 animate-pulse-subtle">
          ⚠️ Oferta Exclusiva – Válida só pelos próximos minutos!
        </div>
        <div className="text-xl font-bold text-green-400 mb-2">
          🎁 Você ganhou um desconto extra!
        </div>
        <p className="text-lg text-gray-300 mb-4">
          Essa é sua última chance de garantir no valor promocional.
        </p>
      </div>

      <div className="flex justify-center items-center gap-2 mb-8 text-xl font-bold">
        <span className="text-red-500">⏳</span>
        <span className="text-white">Essa oferta expira em:</span>
        <span className="bg-red-500 text-white px-3 py-1 rounded-lg">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </span>
      </div>

      <p className="text-xl font-bold text-white mb-8">
        Confira abaixo tudo o que você pode garantir agora:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {images.map((src, index) => (
          <div 
            key={index} 
            className="relative flex justify-center"
          >
            <img 
              src={src} 
              alt={`Promotional image ${index + 1}`}
              className="w-full object-contain rounded-lg shadow-lg"
              style={{ maxHeight: '500px' }}
              loading="lazy"
            />
            <div className="absolute top-2 right-2">
              <span className="bg-[#FF0000] text-white text-xs px-2 py-1 rounded">
                NOVO
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <div className="text-xl font-bold mb-4">TODOS OS CONTEÚDOS ACIMA</div>
        <div className="text-[#FF0000] line-through mb-1">De R$149,90</div>
        <div className="text-sm text-gray-300 mb-1">por APENAS:</div>
        <div className="text-green-500 text-4xl font-bold mb-4">R$19,90</div>
      </div>

      <div className="max-w-[400px] mx-auto">
        <a 
          href="https://go.tribopay.com.br/euqem" 
          className="fornpay_btn bg-gradient-to-b from-[#00cc66] to-[#00a352] text-white font-arial text-lg py-3 px-6 rounded-lg border border-[#00b359] block text-center mb-3 hover:opacity-90 transition-opacity"
        >
          SIM, EU ACEITO ESSA OFERTA
        </a>
      </div>
    </div>
  );
};

export default PromoMessage;