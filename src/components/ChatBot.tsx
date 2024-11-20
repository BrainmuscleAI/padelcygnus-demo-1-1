import { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { type: 'bot', text: '¡Hola! ¿En qué puedo ayudarte?' }
  ])
  const [input, setInput] = useState('')

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    setMessages([...messages, { type: 'user', text: input }])
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        text: 'Gracias por tu mensaje. Un representante te responderá pronto.'
      }])
    }, 1000)
    setInput('')
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 neumorph-button flex items-center justify-center hover:scale-105 transition-transform"
        >
          <MessageCircle className="w-6 h-6 neumorph-icon" />
        </button>
      ) : (
        <div className="w-80 h-96 neumorph overflow-hidden">
          <div className="h-full flex flex-col">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="font-semibold">Chat de Ayuda</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 neumorph-button"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-xl ${
                      message.type === 'user'
                        ? 'neumorph-pressed ml-auto'
                        : 'neumorph'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSend} className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribe un mensaje..."
                  className="flex-1 p-2 neumorph-inset focus:outline-none text-sm"
                />
                <button
                  type="submit"
                  className="p-2 neumorph-button"
                >
                  <Send className="w-4 h-4 neumorph-icon" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}