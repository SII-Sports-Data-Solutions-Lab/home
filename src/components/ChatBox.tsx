// src/components/ChatBox.tsx
import React, { useState, useEffect, useRef } from 'react';
import { X, Send, MessageSquare, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import DOMPurify from 'dompurify'; // Install this package for security

// Define message types
interface Message {
  id: string;
  content: string;
  isHtml: boolean;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// Sample FAQ data - shortened questions
const faqData = [
  {
    question: "About SII?",
    answer: "The Sports Innovation Institute at Indiana University blends academic thinking with an entrepreneurial spirit to create, discover, and promote unique products, services, and game-day experiences in the sports industry. <a href='https://sii.indianapolis.iu.edu/about/index.html' target='_blank' class='text-indiana-crimson hover:underline'>Learn more about SII <span class='inline-block align-text-bottom'><svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><line x1='7' y1='17' x2='17' y2='7'></line><polyline points='7 7 17 7 17 17'></polyline></svg></span></a>"
  },
  {
    question: "Current projects?",
    answer: "We're currently working on several projects including a Review Analysis Dashboard for digital fitness equipment and an NFL Big Data Bowl GuideBook. You can visit our <a href='/projects' class='text-indiana-crimson hover:underline'>Projects page</a> for more details."
  }
];

const ChatBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-open chat on page load with slight delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      // Add welcome message
      setMessages([
        {
          id: '1',
          content: 'Welcome to IU Sports Innovation Institute, how may I help you today?',
          isHtml: false,
          sender: 'bot',
          timestamp: new Date()
        }
      ]);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isHtml: false,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Simulate typing delay
    setTimeout(() => {
      // Generate response based on input
      const response = generateResponse(inputValue);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response.content,
        isHtml: response.isHtml,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 800);
  };

  const generateResponse = (input: string): { content: string, isHtml: boolean } => {
    // Simple keyword matching for demo
    const lowercaseInput = input.toLowerCase();
    
    // Try to match with FAQ questions
    for (const faq of faqData) {
      if (lowercaseInput.includes(faq.question.toLowerCase()) || 
          faq.question.toLowerCase().includes(lowercaseInput)) {
        return { content: faq.answer, isHtml: true };
      }
    }
    
    // Check for common keywords
    if (lowercaseInput.includes('hello') || lowercaseInput.includes('hi')) {
      return { 
        content: 'Hello! How can I help you with information about the Sports Innovation Institute today?', 
        isHtml: false 
      };
    }
    
    if (lowercaseInput.includes('project') || lowercaseInput.includes('research')) {
      return { 
        content: 'We have several ongoing research projects, including our Review Analysis Dashboard and NFL Big Data Bowl GuideBook. You can check our <a href="/projects" class="text-indiana-crimson hover:underline">Projects page</a> for more details.', 
        isHtml: true 
      };
    }
    
    if (lowercaseInput.includes('team') || lowercaseInput.includes('people')) {
      return { 
        content: 'Our team is led by Dr. Liz Ann Wanless and includes research assistants Aditya Naik, Raghuveer Venkatesh, and Sai Pranam Chillakuru. You can learn more on our <a href="/team" class="text-indiana-crimson hover:underline">Team page</a>.', 
        isHtml: true 
      };
    }
    
    if (lowercaseInput.includes('contact') || lowercaseInput.includes('email')) {
      return { 
        content: 'To get in touch with the Sports Innovation Institute, please visit the <a href="https://sii.indianapolis.iu.edu/about/index.html" target="_blank" class="text-indiana-crimson hover:underline">official SII website <span class="inline-block align-text-bottom"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></span></a>', 
        isHtml: true 
      };
    }
    
    if (lowercaseInput.includes('thank')) {
      return { 
        content: "You're welcome! Is there anything else I can help you with?", 
        isHtml: false 
      };
    }
    
    // Default response with link to official website
    return { 
      content: "I don't have specific information about that yet. For detailed inquiries, please visit the <a href='https://sii.indianapolis.iu.edu' target='_blank' class='text-indiana-crimson hover:underline'>official Sports Innovation Institute website <span class='inline-block align-text-bottom'><svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><line x1='7' y1='17' x2='17' y2='7'></line><polyline points='7 7 17 7 17 17'></polyline></svg></span></a>", 
      isHtml: true 
    };
  };

  // Safely render HTML content
  const renderMessageContent = (message: Message) => {
    if (message.isHtml) {
      return (
        <div 
          dangerouslySetInnerHTML={{ 
            __html: DOMPurify.sanitize(message.content) 
          }} 
        />
      );
    }
    return message.content;
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 bg-indiana-crimson text-white rounded-full p-4 shadow-lg z-50 hover:bg-indiana-red transition-all",
          isOpen && "opacity-0 pointer-events-none"
        )}
      >
        <MessageSquare />
      </button>

      {/* Chat window */}
      <div
        className={cn(
          "fixed bottom-6 right-6 w-80 md:w-96 bg-white rounded-lg shadow-xl z-50 overflow-hidden transition-all duration-300 flex flex-col",
          isOpen ? "h-96 opacity-100" : "h-0 opacity-0 pointer-events-none"
        )}
      >
        {/* Chat header */}
        <div className="bg-indiana-crimson text-white p-4 flex justify-between items-center">
          <div>
            <h3 className="font-medium text-white/95">How may I assist you?</h3>
            <p className="text-xs text-white/95">Indiana University Sports Innovation Institute</p>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-indiana-red rounded-full p-1"
          >
            <X size={18} />
          </button>
        </div>

        {/* Messages container */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "mb-4 max-w-[80%] rounded-lg p-3 text-sm", 
                message.sender === 'user' 
                  ? "bg-indiana-crimson/10 text-gray-800 ml-auto" 
                  : "bg-white border border-gray-200 mr-auto"
              )}
            >
              {renderMessageContent(message)}
              <div className={cn(
                "text-[10px] mt-1",
                message.sender === 'user' ? "text-gray-600" : "text-gray-500"
              )}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested questions */}
        {messages.length <= 2 && (
          <div className="p-2 bg-gray-50 border-t border-gray-200">
            <p className="text-[10px] text-gray-500 mb-2">Ask me about:</p>
            <div className="flex flex-wrap gap-2">
              {faqData.map((faq, index) => (
                <button
                  key={index}
                  className="text-[10px] bg-gray-200 hover:bg-gray-300 rounded-full px-2 py-1 text-gray-700"
                  onClick={() => {
                    setInputValue(faq.question);
                    setMessages(prev => [
                      ...prev, 
                      {
                        id: Date.now().toString(),
                        content: faq.question,
                        isHtml: false,
                        sender: 'user',
                        timestamp: new Date()
                      },
                      {
                        id: (Date.now() + 1).toString(),
                        content: faq.answer,
                        isHtml: true,
                        sender: 'bot',
                        timestamp: new Date()
                      }
                    ]);
                  }}
                >
                  {faq.question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input area */}
        <div className="p-3 border-t border-gray-200 bg-white">
          <div className="flex">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indiana-crimson text-sm"
            />
            <button
              onClick={handleSendMessage}
              className="bg-indiana-crimson text-white p-2 rounded-r-md hover:bg-indiana-red"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBox;