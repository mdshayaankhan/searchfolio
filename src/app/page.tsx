'use client';

import { useState, useEffect, useRef, useCallback, type FormEvent } from 'react';
import {
  Search,
  Github,
  Linkedin,
  FileText,
  Mail,
  Sun,
  Moon,
  X,
  Keyboard,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from '@/components/Logo';
import AboutSection from '@/components/sections/About';
import ProjectsSection from '@/components/sections/Projects';
import ContactSection from '@/components/sections/Contact';
import ResumeSection from '@/components/sections/Resume';
import NotFoundSection from '@/components/sections/NotFound';
import HelpSection from '@/components/sections/Help';
import EasterEggSection from '@/components/sections/EasterEgg';
import { commands, commandSuggestions } from './commands';

type Section =
  | 'about'
  | 'projects'
  | 'contact'
  | 'resume'
  | 'help'
  | 'not-found'
  | 'easter-egg'
  | null;

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState<Section>('help');
  const [easterEggCommand, setEasterEggCommand] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    setIsDarkMode(prefersDark);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    focusInput();
    const handleGlobalClick = () => focusInput();
    document.body.addEventListener('click', handleGlobalClick);
    return () => {
      document.body.removeEventListener('click', handleGlobalClick);
    };
  }, [focusInput]);

  const clearSearch = useCallback(() => {
    setSearchTerm('');
    setActiveSection('help');
    setSuggestions([]);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        clearSearch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [clearSearch]);

  const handleCommand = useCallback(
    (command: string) => {
      setSearchTerm(command);
      setSuggestions([]);
      const action = commands[command];

      if (typeof action === 'string') {
        if (action.startsWith('http')) {
          window.open(action, '_blank');
          setActiveSection('help');
        } else if (action === 'easter-egg') {
          setEasterEggCommand(command);
          setActiveSection('easter-egg');
        } else {
          setActiveSection(action as Section);
        }
      } else {
        setActiveSection('not-found');
      }
    },
    []
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    if (value) {
      const filteredSuggestions = commandSuggestions.filter((cmd) =>
        cmd.startsWith(value)
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleCommand(searchTerm.toLowerCase());
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <AboutSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'contact':
        return <ContactSection />;
      case 'resume':
        return <ResumeSection />;
      case 'not-found':
        return <NotFoundSection invalidCommand={searchTerm} />;
      case 'easter-egg':
        return <EasterEggSection command={easterEggCommand} />;
      case 'help':
        return <HelpSection onCommandClick={handleCommand} />;
      default:
        return <HelpSection onCommandClick={handleCommand} />;
    }
  };

  return (
    <div
      className="flex min-h-screen w-full flex-col bg-background"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          focusInput();
        }
      }}
    >
      <header className="absolute top-4 right-4">
        <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isDarkMode ? 'moon' : 'sun'}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isDarkMode ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </motion.div>
          </AnimatePresence>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center p-4 pt-20 sm:pt-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl text-center"
        >
          <Logo />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 w-full max-w-xl lg:max-w-2xl"
        >
          <form
            onSubmit={handleSubmit}
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder="Search or type a command..."
              className="h-14 w-full rounded-full bg-card py-2 pl-12 pr-28 text-lg shadow-md focus:shadow-lg transition-shadow duration-300"
              aria-label="Search portfolio"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-2">
              {searchTerm && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full"
                  onClick={() => setSearchTerm('')}
                  aria-label="Clear search"
                >
                  <X className="h-5 w-5 text-muted-foreground" />
                </Button>
              )}
              <Keyboard className="h-5 w-5 text-muted-foreground hidden sm:block" />
            </div>
          </form>

          <AnimatePresence>
            {suggestions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-2 origin-top rounded-3xl border bg-card shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <ul className="py-2">
                  {suggestions.map((s) => (
                    <li key={s}>
                      <button
                        onClick={() => handleCommand(s)}
                        className="flex w-full items-center px-4 py-2 text-left hover:bg-accent/50"
                      >
                        <Search className="mr-3 h-4 w-4 text-muted-foreground" />
                        {s}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-8 w-full max-w-3xl flex-grow">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
      <footer className="text-center p-4 text-sm text-muted-foreground">
        <p>Built by a human. Type 'help' for commands.</p>
      </footer>
    </div>
  );
}
