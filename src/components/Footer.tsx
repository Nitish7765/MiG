import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-amber-400 mb-4">Workers First</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              A global movement for migrant worker justice, dignity, and empowerment.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Our Work</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Legal Aid</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Safe Housing</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Education Programs</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Health Services</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Policy Advocacy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Get Involved</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Donate</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Volunteer</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Corporate Partnership</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Campaigns</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <span>9211 Ashoka Road<br/>NEW DELHI, DL 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>help@workersfirst.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-6 mb-8">
            <h4 className="text-xl font-bold text-amber-400 mb-2">24/7 Crisis Hotline</h4>
            <p className="text-slate-300 mb-3">
              If you or someone you know is facing exploitation, abuse, or needs immediate help:
            </p>
            <a href="tel:18005551234" className="text-2xl font-bold text-white hover:text-amber-400 transition-colors">
              1-586-485-1592
            </a>
            <p className="text-sm text-slate-400 mt-2">Available in 40+ languages</p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
            <p>&copy; 2024 Workers First. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Financial Reports</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
