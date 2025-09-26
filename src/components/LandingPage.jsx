import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  CheckCircle, 
  ArrowRight, 
  Package, 
  Users, 
  BarChart3,
  Brain,
  Globe,
  Shield,
  Zap,
  Star,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

export const LandingPage = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Intelligence Database',
      description: 'Smart inventory predictions and automated insights powered by machine learning algorithms.',
      color: 'text-purple-600'
    },
    {
      icon: Globe,
      title: 'Free Community Access',
      description: 'Connect with textile professionals worldwide. Share knowledge and build valuable networks.',
      color: 'text-green-600'
    },
    {
      icon: Package,
      title: 'Advanced IMS',
      description: 'Complete inventory management with real-time tracking, automated alerts, and export/import status.',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Vendor Network',
      description: 'Comprehensive supplier and buyer management with integrated communication tools.',
      color: 'text-orange-600'
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$29',
      period: '/month',
      description: 'Perfect for small textile businesses',
      features: [
        'Up to 1,000 SKUs',
        'Basic inventory tracking',
        'Community access',
        '5 vendor connections',
        'Email support'
      ],
      popular: false,
      color: 'border-gray-200'
    },
    {
      name: 'Advance',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 5,000 SKUs',
        'Advanced analytics',
        'AI insights',
        '25 vendor connections',
        'Priority support',
        'Export/Import tracking'
      ],
      popular: false,
      color: 'border-blue-200'
    },
    {
      name: 'Pro',
      price: '$149',
      period: '/month',
      description: 'For established textile manufacturers',
      features: [
        'Up to 15,000 SKUs',
        'Full AI intelligence',
        'Custom integrations',
        'Unlimited vendors',
        '24/7 phone support',
        'Multi-location support'
      ],
      popular: true,
      color: 'border-blue-500'
    },
    {
      name: 'Pro Max',
      price: '$299',
      period: '/month',
      description: 'Enterprise-grade solution',
      features: [
        'Up to 50,000 SKUs',
        'Advanced AI predictions',
        'API access',
        'White-label options',
        'Dedicated account manager',
        'Custom workflows'
      ],
      popular: false,
      color: 'border-purple-200'
    },
    {
      name: 'Pro Max Ultra',
      price: 'Custom',
      period: '',
      description: 'Ultimate enterprise solution',
      features: [
        'Unlimited SKUs',
        'Full AI suite',
        'Custom development',
        'On-premise deployment',
        'SLA guarantees',
        'Training & onboarding'
      ],
      popular: false,
      color: 'border-gold-200'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TextilePro Industries',
      role: 'Operations Manager',
      content: 'Binder transformed our inventory management. We reduced waste by 40% and improved efficiency dramatically.',
      rating: 5
    },
    {
      name: 'Raj Patel',
      company: 'Global Fabrics Ltd',
      role: 'CEO',
      content: 'The AI insights helped us predict demand patterns we never saw before. Game-changing for our business.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      company: 'Cotton Mills Inc',
      role: 'Supply Chain Director',
      content: 'Community access connected us with suppliers worldwide. Our vendor network expanded by 300%.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-blue-700" />
              <span className="text-xl font-bold text-gray-900">Binder</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                Welcome to BINDER
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-6">
              An end to end
              <span className="block text-blue-700">enterprise solutions</span>
              <span className="block text-gray-700">for all your operations</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Streamline your textile operations with AI-powered inventory management, 
              global community access, and comprehensive vendor solutions.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center space-x-2 bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-all transform hover:scale-105 shadow-lg"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center justify-center space-x-2 bg-white text-blue-700 border-2 border-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all"
              >
                <span>View Demo</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to scale your textile business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed specifically for the textile industry
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-lg mb-6 group-hover:bg-blue-50 transition-colors">
                    <Icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">10,000+</div>
              <div className="text-blue-200">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-200">Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">1M+</div>
              <div className="text-blue-200">SKUs Managed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-200">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Choose the perfect plan for your business
            </h2>
            <p className="text-xl text-gray-600">
              Scale with confidence. Upgrade or downgrade at any time.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-5 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl shadow-sm border-2 ${plan.color} p-8 relative ${
                  plan.popular ? 'ring-2 ring-blue-500 ring-offset-2' : ''
                } hover:shadow-lg transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  {/* <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div> */}
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Trusted by textile leaders worldwide
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers have to say about Binder
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Credentials */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Try the Demo</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">Master Admin</h4>
              <p className="text-sm text-gray-600 mb-3">Full system access</p>
              <div className="text-xs text-gray-500 space-y-1">
                <div>admin@binder.com</div>
                <div>admin123</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">Company Admin</h4>
              <p className="text-sm text-gray-600 mb-3">Company management</p>
              <div className="text-xs text-gray-500 space-y-1">
                <div>company@textilex.com</div>
                <div>company123</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">Manager</h4>
              <p className="text-sm text-gray-600 mb-3">Limited access</p>
              <div className="text-xs text-gray-500 space-y-1">
                <div>manager@textilex.com</div>
                <div>manager123</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to transform your textile business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of textile companies already using Binder to streamline their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              <span>Start Your Free Trial</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
            >
              <span>View Demo</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">Binder</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                The complete textile industry operating system. Manage inventory, connect with vendors, 
                and scale your business with AI-powered insights.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail className="h-4 w-4" />
                  <span>Info@binder.com</span>
                </div>
                {/* <div className="flex items-center space-x-2 text-gray-400">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div> */}
              </div>
            </div>
            
            {/* <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div> */}
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2025 Binder. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};