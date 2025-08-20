import Link from "next/link";
import { ArrowRight, Shield, Zap, BarChart3, Users, MessageSquare, CreditCard, Database, Star, Globe, TrendingUp } from "lucide-react";

export default function Home() {
  const demoUrl = "https://credio-ai.vercel.app";
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Credio AI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#solutions" className="text-gray-600 hover:text-gray-900 transition-colors">Solutions</a>
              <a href="#demo" className="text-gray-600 hover:text-gray-900 transition-colors">Demo</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
              <Link 
                href={demoUrl}
                target="_blank"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <span>Live Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              AI-Powered
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Lending</span>
              <br />as a Service
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your lending operations with our comprehensive AI platform. From KYC verification to collections, 
              we provide the complete infrastructure for modern financial services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href={demoUrl}
                target="_blank"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 text-lg font-semibold"
              >
                <span>Explore Live Demo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 transition-colors text-lg font-semibold">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50ms</div>
              <div className="text-gray-600">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Integrations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Lending Infrastructure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to build, scale, and optimize your lending business with AI-powered automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* KYC/KYB Feature */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart KYC/KYB Verification</h3>
              <p className="text-gray-600 mb-6">
                AI-powered identity verification for both consumers and businesses with real-time compliance checks.
              </p>
              <Link 
                href={`${demoUrl}/Onboarding_KYC_KYB`}
                target="_blank"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
              >
                See Demo <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Credit Scoring Feature */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Credit Scoring</h3>
              <p className="text-gray-600 mb-6">
                Advanced credit assessment with bank statement analysis and alternative data sources.
              </p>
              <Link 
                href={`${demoUrl}/Credit_Scoring`}
                target="_blank"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
              >
                See Demo <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Marketing Feature */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Marketing Engine</h3>
              <p className="text-gray-600 mb-6">
                Generate compelling marketing content and campaigns with AI-powered prompt generation.
              </p>
              <Link 
                href={`${demoUrl}/Marketing`}
                target="_blank"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
              >
                See Demo <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Customer Service Feature */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Intelligent Customer Service</h3>
              <p className="text-gray-600 mb-6">
                24/7 AI-powered customer support with sentiment analysis and escalation management.
              </p>
              <Link 
                href={`${demoUrl}/Customer_Service`}
                target="_blank"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
              >
                See Demo <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Collections Feature */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <CreditCard className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Collections</h3>
              <p className="text-gray-600 mb-6">
                Automated collections with AI-generated communications and risk-based strategies.
              </p>
              <Link 
                href={`${demoUrl}/Collections`}
                target="_blank"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
              >
                See Demo <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Database Chat Feature */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Database className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Natural Language Analytics</h3>
              <p className="text-gray-600 mb-6">
                Query your lending data using natural language with AI-powered SQL generation.
              </p>
              <Link 
                href={`${demoUrl}/Database_Chat`}
                target="_blank"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
              >
                See Demo <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Built for Every Lending Business</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you&apos;re a fintech startup or an established bank, our platform scales with your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fintech Startups</h3>
              <p className="text-gray-600 mb-6">
                Launch your lending platform in weeks, not months. Complete infrastructure ready to deploy.
              </p>
              <Link 
                href={demoUrl}
                target="_blank"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
              >
                Explore Platform <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Traditional Banks</h3>
              <p className="text-gray-600 mb-6">
                Modernize your lending operations with AI while maintaining compliance and security standards.
              </p>
              <Link 
                href={demoUrl}
                target="_blank"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
              >
                See Integration <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Enterprises</h3>
              <p className="text-gray-600 mb-6">
                Scale across markets with multi-region compliance and localized lending workflows.
              </p>
              <Link 
                href={demoUrl}
                target="_blank"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
              >
                View Dashboard <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Demo CTA Section */}
      <section id="demo" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Experience the Future of Lending</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            See our AI-powered lending platform in action. Explore real features with live data and interactive demos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={demoUrl}
              target="_blank"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 text-lg font-semibold"
            >
              <span>Launch Interactive Demo</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors text-lg font-semibold">
              Book Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Leading Financial Institutions</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                &quot;Credio AI transformed our lending operations. We reduced processing time by 80% and improved approval rates significantly.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold">JD</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">John Doe</div>
                  <div className="text-gray-600 text-sm">CTO, FinTech Pro</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                &quot;The AI-powered KYC verification is incredibly accurate. We&apos;ve seen a 95% reduction in manual review time.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-semibold">SM</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Miller</div>
                  <div className="text-gray-600 text-sm">Head of Risk, LendCorp</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                &quot;Implementation was seamless. The platform integrates perfectly with our existing systems and compliance requirements.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-600 font-semibold">MJ</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Michael Johnson</div>
                  <div className="text-gray-600 text-sm">VP Engineering, BankTech</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <span className="text-xl font-bold">Credio AI</span>
              </div>
              <p className="text-gray-400 mb-4">
                AI-powered lending infrastructure for the modern financial world.
              </p>
              <Link 
                href={demoUrl}
                target="_blank"
                className="inline-flex items-center text-blue-400 hover:text-blue-300"
              >
                Try Live Demo <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href={`${demoUrl}/Onboarding_KYC_KYB`} target="_blank" className="hover:text-white">KYC/KYB Verification</Link></li>
                <li><Link href={`${demoUrl}/Credit_Scoring`} target="_blank" className="hover:text-white">Credit Scoring</Link></li>
                <li><Link href={`${demoUrl}/Marketing`} target="_blank" className="hover:text-white">AI Marketing</Link></li>
                <li><Link href={`${demoUrl}/Customer_Service`} target="_blank" className="hover:text-white">Customer Service</Link></li>
                <li><Link href={`${demoUrl}/Collections`} target="_blank" className="hover:text-white">Collections</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
                <li><a href="#" className="hover:text-white">Partners</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">API Reference</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 Credio AI. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
