import { useState, useEffect } from 'react';
import CountryCard from './CountryCard';
import type { Country } from '../types/country';

export default function CountriesList() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="font-mono text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white p-4 sm:p-6 lg:p-8 font-mono text-gray-800 flex items-center justify-center">
      <div className="w-full max-w-6xl">
        <div className="mb-6 sm:mb-8 animate-fadeIn text-center">
          <div className="text-lg">@mariodev's trips</div>
          <div className="text-xs text-gray-500 mt-1">
            {countries.length} countries visited
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
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