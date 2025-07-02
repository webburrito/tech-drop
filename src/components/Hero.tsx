import React from 'react';
import { ArrowRight, Zap, Shield, Truck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Latest Tech
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold mb-6">
            Delivered to Your Door
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover cutting-edge technology at unbeatable prices. From smartphones to smart homes, 
            we've got the latest gadgets you need.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-sky-500 hover:bg-sky-600 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2">
              <span>Shop Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border-2 border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white rounded-lg font-semibold text-lg transition-colors">
              View Deals
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Lightning Fast</h4>
              <p className="text-gray-300">Quick processing and same-day shipping on most orders</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Secure & Safe</h4>
              <p className="text-gray-300">Your data and payments are protected with bank-level security</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mb-4">
                <Truck className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Free Shipping</h4>
              <p className="text-gray-300">Free delivery on orders over $100 with tracking included</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;