import { Github, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="https://www.youtube.com/c/Zaprogramowani" className="text-slate-400 hover:text-white transition-colors">
              <span className="sr-only">YouTube</span>
              <Youtube className="h-6 w-6" aria-hidden="true" />
            </a>
            <a href="https://github.com/przeprogramowani" className="text-slate-400 hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/showcase/10xdevs-pl/" className="text-slate-400 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-sm leading-5 text-slate-400">
              &copy; {new Date().getFullYear()} Przeprogramowani. Wszelkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}