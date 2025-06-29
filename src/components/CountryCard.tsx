import type { Country } from '../types/country';
import { Building2, Users, Map, Banknote, Clock, Phone } from 'lucide-react';

interface CountryCardProps {
  country: Country;
  index: number;
}

export default function CountryCard({ country, index }: CountryCardProps) {
  return (
    <div 
      className="animate-fadeIn space-y-2 p-3 border border-gray-200 rounded-xs hover:border-gray-300 transition-colors duration-200"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center space-x-2 mb-2">
        <span className="text-lg">{country.flagEmoji}</span>
        <div className="text-gray-800 text-sm">{country.name}</div>
      </div>
      
      <div className="text-xs text-gray-500 space-y-1">
        <div className="flex items-center space-x-2">
          <Building2 className="h-4 w-4" />
          <span>{country.capital}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Users className="h-4 w-4" />
          <span>{country.population.toLocaleString()}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Map className="h-4 w-4" />
          <span>{country.area.toLocaleString()} {country.areaUnit}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Banknote className="h-4 w-4" />
          <span>{country.currency.code}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4" />
          <span>{country.timeZone}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Phone className="h-4 w-4" />
          <span>{country.callingCode}</span>
        </div>
      </div>
    </div>
  );
} 