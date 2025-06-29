import { useState, useEffect } from 'react';
import CountryCard from './CountryCard';
import type { Country } from '../types/country';

export default function CountriesList() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      fetch('/visited-countries.json')
        .then(response => response.json())
        .then(data => {
          setCountries(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error loading countries:', error);
          setLoading(false);
        });
    }
  }, [isDesktop]);

  if (isDesktop) {
    return (
      <main className="min-h-screen bg-white p-6 font-mono text-gray-800 flex items-center justify-center">
        <div className="text-center animate-fadeIn">
          <div className="text-lg mb-2">@mariodev's trips</div>
          <div className="text-xs text-gray-500">Desktop version</div>
        </div>
      </main>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="font-mono text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white p-6 font-mono text-gray-800 flex items-center justify-center">
      <div>
        <div className="mb-8 animate-fadeIn">
          <div className="text-lg">@mariodev's trips</div>
          <div className="text-xs text-gray-500">
            Countries I've visited • {countries.length} destinations
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl">
          {countries.map((country, index) => (
            <CountryCard 
              key={country.id} 
              country={country} 
              index={index}
            />
          ))}
        </div>
      </div>
    </main>
  );
} 