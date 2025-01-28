import React, { useEffect } from 'react';
import { FaRobot } from 'react-icons/fa'; // Importa el ícono de react-icons

const Chatbot = () => {
  useEffect(() => {
    // Cargar el script de Dialogflow
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
    script.async = true;
    document.body.appendChild(script);

    // Configurar el widget de Dialogflow
    window.addEventListener('dfMessengerLoaded', function (event) {
      const dfMessenger = document.querySelector('df-messenger');
      dfMessenger.setAttribute('chat-title', 'Chatbot');
      dfMessenger.setAttribute('agent-id', 'YOUR_AGENT_ID'); // Reemplaza con tu ID de agente
      dfMessenger.setAttribute('language-code', 'en');
      dfMessenger.setAttribute('bot-icon', ''); // Deja vacío ya que usaremos el ícono de react-icons
    });
  }, []);

  return (
    <div>
      <FaRobot style={{ fontSize: '2rem', color: '#000' }} /> {/* Usa el ícono de react-icons */}
      <df-messenger
        className="df-messenger"
        intent="WELCOME"
        chat-title="Chatbot"
        agent-id="YOUR_AGENT_ID" // Reemplaza con tu ID de agente
        language-code="en"
      ></df-messenger>
    </div>
  );
};

export default Chatbot;