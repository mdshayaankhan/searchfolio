'use client';

import { useState, useEffect, useRef, useCallback, type FormEvent } from 'react';
import { Search, Mic, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from '@/components/Logo';
import { commands, commandSuggestions } from './commands';
import SearchResults from '@/components/sections/SearchResults';

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
  const [activeSection, setActiveSection] = useState<Section>(null);
  const [easterEggCommand, setEasterEggCommand] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showResults, setShowResults] = useState(false);
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
    if (!showResults) {
      focusInput();
      const handleGlobalClick = (e: MouseEvent) => {
        if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
          focusInput();
        }
      };
      document.body.addEventListener('click', handleGlobalClick);
      return () => {
        document.body.removeEventListener('click', handleGlobalClick);
      };
    }
  }, [focusInput, showResults]);

  const clearSearch = useCallback(() => {
    setSearchTerm('');
    setActiveSection(null);
    setShowResults(false);
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
      const action = commands[command.toLowerCase().trim()];

      if (typeof action === 'string') {
        if (action.startsWith('http')) {
          window.open(action, '_blank');
          setActiveSection(null);
        } else if (action === 'easter-egg') {
          setEasterEggCommand(command);
          setActiveSection('easter-egg');
        } else {
          setActiveSection(action as Section);
        }
      } else {
        setActiveSection('not-found');
      }
      setShowResults(true);
    },
    []
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value) {
      const filteredSuggestions = commandSuggestions.filter((cmd) =>
        cmd.startsWith(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
      setShowResults(false);
      setActiveSection(null);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };
  
  const handleFeelingLucky = () => {
    const luckyCommands = ['about', 'projects', 'contact', 'resume'];
    const randomCommand = luckyCommands[Math.floor(Math.random() * luckyCommands.length)];
    handleCommand(randomCommand);
  };

  const renderSection = () => <SearchResults query={searchTerm} onCommandClick={handleCommand} />

  return (
    <div
      className="flex min-h-screen w-full flex-col bg-background transition-all duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget && !showResults) {
          focusInput();
        }
      }}
    >
      <AnimatePresence>
        {showResults ? (
           <motion.header 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="sticky top-0 z-10 flex items-center p-4 bg-background/80 backdrop-blur-sm border-b">
            <div className='flex items-center gap-4'>
              <Logo small />
              <form
                onSubmit={handleSubmit}
                className="relative w-full max-w-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <Input
                    ref={inputRef}
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                    placeholder="Search"
                    className="h-11 w-full rounded-full bg-card py-2 pl-4 pr-12 text-base shadow-md hover:shadow-lg focus:shadow-lg transition-shadow duration-300"
                    aria-label="Search portfolio"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center">
                    <button type="submit">
                      <Search className="h-5 w-5 text-primary" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="flex-1" />
            <div className="flex items-center gap-2">
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
              <Button variant="ghost" size="icon" className="h-9 w-9 hidden sm:flex">
                <svg focusable="false" viewBox="0 0 24 24" className='h-5 w-5'><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>
                <span className="sr-only">Google apps</span>
              </Button>
              <Button size="sm" className="hidden sm:inline-flex">Sign in</Button>
            </div>
          </motion.header>
        ) : (
          <header className="flex items-center p-4">
            <div className="flex-1" />
            <div className="flex items-center gap-4 text-sm">
              <button className="hover:underline">Gmail</button>
              <button className="hover:underline">Images</button>
              <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="h-9 w-9">
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
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <svg focusable="false" viewBox="0 0 24 24" className='h-5 w-5'><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>
                <span className="sr-only">Google apps</span>
              </Button>
              <Button>Sign in</Button>
            </div>
          </header>
        )}
      </AnimatePresence>

      <main className="flex flex-1 flex-col items-center w-full px-4 pb-20 transition-all duration-500 ease-in-out"
        style={{ justifyContent: showResults ? 'flex-start' : 'center' }}
      >
        <motion.div
          layout
          transition={{ duration: 0.5, type: 'spring', bounce: 0.2 }}
          className="w-full flex flex-col items-center"
        >
          {!showResults && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8 flex flex-col items-center"
            >
              <Logo />

              <motion.div
                layout
                transition={{ duration: 0.5, type: 'spring', bounce: 0.2 }}
                className="mt-8 w-full max-w-xl lg:max-w-2xl"
              >
                <form
                  onSubmit={handleSubmit}
                  className="relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative">
                    <Input
                      ref={inputRef}
                      type="text"
                      value={searchTerm}
                      onChange={handleInputChange}
                      placeholder="Click Search to know more"
                      className="h-12 w-full rounded-full bg-card py-2 pl-12 pr-12 text-base shadow-md hover:shadow-lg focus:shadow-lg transition-shadow duration-300"
                      aria-label="Search portfolio"
                    />
                     <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center">
                      <Search className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center">
                      <Mic className="h-5 w-5 text-blue-500" />
                    </button>
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

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex justify-center gap-4 mt-8"
                >
                  <Button type="submit" variant="secondary" onClick={handleSubmit}>Portfolio Search</Button>
                  <Button variant="secondary" onClick={handleFeelingLucky}>I'm Feeling Lucky</Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>

        {showResults && (
          <div className="mt-8 w-full max-w-4xl flex-grow">
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
        )}
      </main>
      
      {!showResults && (
        <footer className="text-center p-4 text-sm text-muted-foreground">
          <p>Portfolio Search offered in: <a href="#" className="underline">English</a></p>
        </footer>
      )}
    </div>
  );
}
