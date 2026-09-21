import Link from "next/link"
import { MessageSquareQuote, Github, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/10 text-on-surface-muted text-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          
          {/* Logo & Description */}
          <div className="col-span-2 lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-tertiary-container to-secondary-container p-0.5 flex items-center justify-center">
                <div className="w-full h-full rounded-[10px] bg-surface flex items-center justify-center">
                  <MessageSquareQuote size={16} className="text-tertiary" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                GuideTalk
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-on-surface-muted leading-relaxed max-w-sm">
              The AI-powered anime and gaming character companion app. Chat with your favourite heroes and waifus in their authentic voice, powered by Azure OpenAI.
            </p>
            <div className="pt-2">
              <a
                href="https://github.com/samjoshua2002/GuideTalk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-white hover:text-tertiary transition-colors bg-surface-container-high px-3 py-1.5 rounded-full border border-white/10"
              >
                <Github size={14} />
                <span>samjoshua2002/GuideTalk</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Features
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#features" className="hover:text-white transition-colors">AI Character Chat</a></li>
              <li><a href="#characters" className="hover:text-white transition-colors">Spotlight Universe</a></li>
              <li><a href="#rivals" className="hover:text-white transition-colors">Dynamic Rivals Engine</a></li>
              <li><a href="#prophecy" className="hover:text-white transition-colors">Daily Character Prophecy</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Voice Messages</a></li>
            </ul>
          </div>

          {/* Downloads */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Get the App
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a 
                  href="https://expo.dev/accounts/samjoshua2002/projects/guildtalk/builds/3d96bb54-70dd-4554-af81-ff1cb86b4693" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  Android APK (v1.0.1)
                </a>
              </li>
              <li>
                <a 
                  href="https://expo.dev/accounts/samjoshua2002/projects/guildtalk" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  iOS via Expo Go
                </a>
              </li>
              <li>
                <a 
                  href="https://expo.dev/accounts/samjoshua2002/projects/guildtalk/updates" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  EAS OTA Updates
                </a>
              </li>
              <li>
                <a 
                  href="https://guidetalk.onrender.com/app/version" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  Version Info Endpoint
                </a>
              </li>
            </ul>
          </div>

          {/* Architecture */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Infrastructure
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#architecture" className="hover:text-white transition-colors">Azure OpenAI GPT-5.6</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">MongoDB Atlas Cluster</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">Jikan MAL Scraper</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">Node.js Microservice</a></li>
            </ul>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-outline-variant/10 text-xs text-on-surface-muted flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="max-w-2xl text-center md:text-left">
            Disclaimer: GuideTalk is a fan-created companion project powered by Azure OpenAI. All character trademarks, likenesses, and official art belong to their respective copyright holders (HoYoverse, Shueisha, MAPPA, Square Enix, Bandai Namco, etc.).
          </p>
          <p className="text-center md:text-right whitespace-nowrap">
            &copy; {new Date().getFullYear()} GuideTalk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
