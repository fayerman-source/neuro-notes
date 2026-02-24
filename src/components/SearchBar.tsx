'use client';

import { useState, useEffect } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query, onSearch]);

  return (
    <div className="relative group">
      <input
        type="text"
        placeholder="Search phrases..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-3 pl-12 text-base rounded-xl transition-all outline-none"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          color: '#E2E8F0',
          height: '48px',
        }}
      />
      <svg
        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors"
        style={{ color: '#4F6EF7' }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      {query && (
        <button
          onClick={() => setQuery('')}
          className="absolute right-4 top-1/2 -translate-y-1/2 transition-colors hover:text-white"
          style={{ color: 'rgba(255, 255, 255, 0.45)' }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
      <style jsx global>{`
        input[type="text"]::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }
        input[type="text"]:focus {
          border-color: #4F6EF7 !important;
          box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.2) !important;
        }
      `}</style>
    </div>
  );
}
