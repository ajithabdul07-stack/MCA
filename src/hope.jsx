import React, { useState } from 'react';
import {
  Heart, LogOut, Menu, X, Lock, Mail, Eye, EyeOff, AlertCircle, CheckCircle,
  MessageCircle, BookOpen, Bell, Home, Settings, Phone, Brain, TrendingUp,
  Send, Clock, ChevronRight, Search, Filter
} from 'lucide-react';

export default function MentalHealthPlatform() {
  const [currentPage, setCurrentPage] = useState('login');
  const [user, setUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [chatMessages, setChatMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [assessmentAnswers, setAssessmentAnswers] = useState({});

  // Mock data
  const mockCounselors = [
    { id: 1, name: 'Dr. Sarah Mitchell', specialty: 'Anxiety & Stress', rating: 4.9, available: true },
    { id: 2, name: 'James Chen', specialty: 'Depression Support', rating: 4.8, available: true },
    { id: 3, name: 'Emma Rodriguez', specialty: 'Trauma & PTSD', rating: 4.7, available: false },
  ];

  const mockResources = [
    { id: 1, title: 'Understanding Anxiety', category: 'Anxiety', duration: '15 min', views: 2400, icon: '🧠' },
    { id: 2, title: 'Meditation for Sleep', category: 'Sleep', duration: '20 min', views: 1800, icon: '🧘' },
    { id: 3, title: 'Managing Stress Daily', category: 'Stress', duration: '12 min', views: 3200, icon: '💪' },
    { id: 4, title: 'Mindfulness Basics', category: 'Mindfulness', duration: '10 min', views: 2900, icon: '🌟' },
  ];

  const assessmentQuestions = [
    { id: 1, question: 'How often do you feel sad or depressed?', options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'] },
    { id: 2, question: 'Do you experience anxiety in daily life?', options: ['No', 'Mild', 'Moderate', 'Severe', 'Extreme'] },
    { id: 3, question: 'How is your sleep quality?', options: ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'] },
    { id: 4, question: 'Can you focus on tasks?', options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'] },
    { id: 5, question: 'Do you feel socially isolated?', options: ['Not at all', 'Slightly', 'Moderately', 'Very', 'Extremely'] },
  ];

  const mockNotifications = [
    { id: 1, type: 'appointment', message: 'Your counseling session with Dr. Sarah starts in 1 hour', time: '1 hour' },
    { id: 2, type: 'resource', message: 'New resource: Coping with Seasonal Depression', time: '3 hours' },
    { id: 3, type: 'reminder', message: 'Daily mindfulness reminder - Take 5 minutes for yourself', time: '5 hours' },
    { id: 4, type: 'achievement', message: 'Great job! You completed 7 days of meditation', time: '1 day' },
  ];

  const emergencyContacts = [
    { name: 'Crisis Helpline', number: '988', availability: '24/7' },
    { name: 'Emergency Services', number: '911', availability: '24/7' },
    { name: 'Suicide Prevention', number: '1-800-273-8255', availability: '24/7' },
    { name: 'Substance Abuse', number: '1-800-662-4357', availability: '24/7' },
  ];

  // Authentication
  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ name: 'Sarah', email: 'sarah@example.com' });
    setCurrentPage('dashboard');
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setUser({ name: 'Sarah', email: 'sarah@example.com' });
    setCurrentPage('dashboard');
  };

  // Chat handler
  const handleSendMessage = () => {
    if (messageInput.trim()) {
      setChatMessages([...chatMessages, {
        id: chatMessages.length + 1,
        sender: 'user',
        text: messageInput,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setMessageInput('');
      
      setTimeout(() => {
        const responses = [
          "I understand how you're feeling. Can you tell me more?",
          "That sounds challenging. Have you tried any strategies?",
          "Your feelings are valid. How can I help?",
          "Let's work through this together.",
        ];
        setChatMessages(prev => [...prev, {
          id: prev.length + 1,
          sender: 'counselor',
          text: responses[Math.floor(Math.random() * responses.length)],
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
      }, 800);
    }
  };

  // Login Page
  if (currentPage === 'login') return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <Heart size={40} className="text-purple-600 mx-auto mb-4" fill="currentColor" />
            <h1 className="text-3xl font-bold text-gray-800">The Hope</h1>
            <p className="text-gray-600 mt-2">Mental Health Support Platform</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <div className="relative">
                <Mail size={18} className="absolute left-3 top-3 text-gray-400" />
                <input type="email" placeholder="your@email.com" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600" required />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-3 text-gray-400" />
                <input type={showPassword ? 'text' : 'password'} placeholder="••••••••" className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600" required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-gray-400">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition">Sign In</button>
          </form>

          <div className="relative my-6"><div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300"></div></div><div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-gray-500">New to The Hope?</span></div></div>

          <button onClick={() => setCurrentPage('signup')} className="w-full border-2 border-purple-600 text-purple-600 py-2 rounded-lg font-semibold hover:bg-purple-50 transition">Create Account</button>
        </div>

        <div className="mt-8 text-center text-white text-sm space-y-1">
          <p>✓ Confidential & Secure</p>
          <p>✓ Licensed Counselors</p>
          <p>✓ 24/7 Support Available</p>
        </div>
      </div>
    </div>
  );

  // Signup Page
  if (currentPage === 'signup') return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-2xl p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Create Your Account</h1>

          <form onSubmit={handleSignup} className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600" required />
            <input type="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600" required />
            <input type="password" placeholder="Password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600" required />

            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" required />
              <p className="text-sm text-gray-600">I agree to the terms and understand this is a support platform</p>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition">Create Account</button>
          </form>

          <button onClick={() => setCurrentPage('login')} className="w-full mt-4 text-purple-600 py-2 font-semibold hover:bg-purple-50 transition">Back to Sign In</button>
        </div>
      </div>
    </div>
  );

  // Main App
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gradient-to-b from-purple-700 to-purple-900 text-white transition-all duration-300 flex flex-col`}>
        <div className="p-4 flex items-center justify-between">
          <div className={`flex items-center gap-2 ${!sidebarOpen && 'justify-center'}`}>
            <Heart size={28} fill="currentColor" />
            {sidebarOpen && <span className="text-lg font-bold">The Hope</span>}
          </div>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="hover:bg-purple-800 p-1 rounded">
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="flex-1 px-2 py-4 space-y-2">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: Home },
            { id: 'assessment', label: 'Self-Assessment', icon: Brain },
            { id: 'counseling', label: 'Counseling Chat', icon: MessageCircle },
            { id: 'resources', label: 'Resources', icon: BookOpen },
            { id: 'emergency', label: 'Emergency', icon: AlertCircle },
            { id: 'notifications', label: 'Notifications', icon: Bell },
          ].map(item => {
            const Icon = item.icon;
            return (
              <button key={item.id} onClick={() => setCurrentPage(item.id)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${currentPage === item.id ? 'bg-purple-500' : 'hover:bg-purple-800'}`}>
                <Icon size={20} />
                {sidebarOpen && <span className="text-sm">{item.label}</span>}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-purple-700">
          <button onClick={() => { setCurrentPage('login'); setUser(null); }} className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-purple-800 text-sm">
            <LogOut size={20} />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">Welcome back, {user?.name}!</h2>
            <Bell size={24} className="text-gray-600 cursor-pointer" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto px-6 py-8">

            {currentPage === 'dashboard' && (
              <div className="space-y-6">
                <h1 className="text-3xl font-bold text-gray-800">Your Mental Health Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg p-6 shadow-lg">
                    <Brain size={24} className="mb-2" />
                    <p className="text-sm opacity-90">Mental Health Score</p>
                    <p className="text-2xl font-bold">78/100</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-6 shadow-lg">
                    <MessageCircle size={24} className="mb-2" />
                    <p className="text-sm opacity-90">Counselor Sessions</p>
                    <p className="text-2xl font-bold">12</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-6 shadow-lg">
                    <BookOpen size={24} className="mb-2" />
                    <p className="text-sm opacity-90">Resources Done</p>
                    <p className="text-2xl font-bold">24</p>
                  </div>
                  <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-lg p-6 shadow-lg">
                    <TrendingUp size={24} className="mb-2" />
                    <p className="text-sm opacity-90">Progress</p>
                    <p className="text-2xl font-bold">+15%</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Upcoming Sessions</h3>
                    <div className="space-y-4">
                      {mockCounselors.slice(0, 2).map(c => (
                        <div key={c.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-sm">{c.name}</p>
                            <p className="text-xs text-gray-500">{c.specialty}</p>
                          </div>
                          <div className={`w-2 h-2 rounded-full ${c.available ? 'bg-green-500' : 'bg-gray-400'}`} />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Latest Achievements</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle size={20} className="text-green-600" />
                        <p className="text-sm">Completed 7-day meditation streak</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle size={20} className="text-green-600" />
                        <p className="text-sm">Attended 10 counseling sessions</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle size={20} className="text-green-600" />
                        <p className="text-sm">Completed anxiety management course</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentPage === 'assessment' && (
              <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Mental Health Self-Assessment</h1>
                <p className="text-gray-600 mb-6">This brief assessment helps us understand your current mental health status</p>

                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="space-y-8">
                    {assessmentQuestions.map((q, idx) => (
                      <div key={q.id} className="pb-6 border-b last:border-b-0">
                        <div className="flex justify-between items-start mb-4">
                          <p className="font-semibold text-gray-800">{q.question}</p>
                          <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded">Q {idx + 1}/{assessmentQuestions.length}</span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                          {q.options.map(opt => (
                            <button key={opt} onClick={() => setAssessmentAnswers({...assessmentAnswers, [q.id]: opt})} className={`p-3 rounded-lg font-medium transition text-sm ${assessmentAnswers[q.id] === opt ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="w-full mt-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition">Submit Assessment</button>
                </div>
              </div>
            )}

            {currentPage === 'counseling' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-96">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                  <div className="p-4 border-b">
                    <h2 className="font-semibold text-gray-800 mb-3">Available Counselors</h2>
                    <div className="relative"><Search size={18} className="absolute left-2 top-2 text-gray-400" /><input type="text" placeholder="Search..." className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg text-sm" /></div>
                  </div>
                  <div className="flex-1 overflow-y-auto">
                    {mockCounselors.map(c => (
                      <div key={c.id} className="p-4 border-b hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-semibold text-sm">{c.name}</p>
                            <p className="text-xs text-gray-500">{c.specialty}</p>
                            <p className="text-xs text-yellow-600">⭐ {c.rating}</p>
                          </div>
                          <div className={`w-2 h-2 rounded-full mt-1 ${c.available ? 'bg-green-500' : 'bg-gray-400'}`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-2 bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 flex items-center justify-between">
                    <div>
                      <p className="font-semibold">Dr. Sarah Mitchell</p>
                      <p className="text-sm opacity-90">Online - Anxiety Specialist</p>
                    </div>
                    <Phone size={20} className="cursor-pointer" />
                  </div>

                  <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
                    {chatMessages.length === 0 ? (
                      <div className="flex items-center justify-center h-full text-center">
                        <div>
                          <MessageCircle size={48} className="text-gray-300 mx-auto mb-2" />
                          <p className="text-gray-500">Start a conversation</p>
                        </div>
                      </div>
                    ) : (
                      chatMessages.map(msg => (
                        <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-xs px-4 py-2 rounded-lg text-sm ${msg.sender === 'user' ? 'bg-purple-600 text-white' : 'bg-white text-gray-800 border border-gray-200'}`}>
                            <p>{msg.text}</p>
                            <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-purple-100' : 'text-gray-500'}`}>{msg.time}</p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  <div className="p-4 border-t bg-white flex gap-2">
                    <input type="text" value={messageInput} onChange={(e) => setMessageInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} placeholder="Type message..." className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600" />
                    <button onClick={handleSendMessage} className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700">
                      <Send size={20} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {currentPage === 'resources' && (
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Educational Resources</h1>
                <p className="text-gray-600 mb-6">Learn and grow with our curated mental health content</p>

                <div className="mb-6 flex gap-4">
                  <div className="flex-1 relative"><Search size={18} className="absolute left-3 top-3 text-gray-400" /><input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg" /></div>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100"><Filter size={20} className="text-gray-600" /></button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mockResources.map(r => (
                    <div key={r.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer group">
                      <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 flex items-center justify-center group-hover:scale-110 transition">
                        <span className="text-5xl">{r.icon}</span>
                      </div>
                      <div className="p-6">
                        <p className="text-xs font-semibold text-purple-600 mb-2">{r.category}</p>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">{r.title}</h3>
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <span className="flex items-center gap-1"><Clock size={16} /> {r.duration}</span>
                          <span>{r.views.toLocaleString()} views</span>
                        </div>
                        <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition">Start Learning</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentPage === 'emergency' && (
              <div>
                <div className="mb-8 bg-red-50 border-2 border-red-500 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle size={28} className="text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h1 className="text-2xl font-bold text-red-600 mb-2">In Crisis?</h1>
                      <p className="text-gray-700">If you're experiencing a mental health emergency, please contact one of these numbers immediately. These lines are available 24/7.</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {emergencyContacts.map((c, idx) => (
                    <div key={idx} className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-red-500">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{c.name}</h3>
                      <p className="text-3xl font-bold text-red-600 mb-4">{c.number}</p>
                      <p className="text-sm text-gray-600 mb-4">Available: {c.availability}</p>
                      <button className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition flex items-center justify-center gap-2">
                        <Phone size={18} /> Call Now
                      </button>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Reach Out?</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                      <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                      <div><p className="font-semibold text-gray-800">Immediate Support</p><p className="text-sm text-gray-600">Crisis counselors available 24/7</p></div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                      <div><p className="font-semibold text-gray-800">Confidential</p><p className="text-sm text-gray-600">All conversations are anonymous</p></div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
                      <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={24} />
                      <div><p className="font-semibold text-gray-800">Professional Help</p><p className="text-sm text-gray-600">Licensed professionals ready to assist</p></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentPage === 'notifications' && (
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Notifications</h1>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-4 border-b flex justify-between items-center">
                    <h2 className="font-semibold text-gray-800">Recent Activity</h2>
                    <button className="text-sm text-purple-600 hover:text-purple-700">Mark all as read</button>
                  </div>

                  <div className="divide-y max-h-96 overflow-y-auto">
                    {mockNotifications.map(n => (
                      <div key={n.id} className="p-6 hover:bg-gray-50 cursor-pointer transition flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        n.type === 'appointment' ? 'bg-blue-100' :
                        n.type === 'resource' ? 'bg-green-100' :
                        n.type === 'reminder' ? 'bg-yellow-100' :
                        'bg-purple-100'
                      }`}>
                        {n.type === 'appointment' && <Clock size={20} className="text-blue-600" />}
                        {n.type === 'resource' && <BookOpen size={20} className="text-green-600" />}
                        {n.type === 'reminder' && <Bell size={20} className="text-yellow-600" />}
                        {n.type === 'achievement' && <CheckCircle size={20} className="text-purple-600" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-800 font-medium">{n.message}</p>
                        <p className="text-sm text-gray-500 mt-1">{n.time}</p>
                      </div>
                      <ChevronRight size={18} className="text-gray-400" />
                    </div>
                  ))}
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}