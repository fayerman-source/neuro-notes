'use client';

import { CategoryId, categories } from '@/data/dotPhrases';

interface CategoryNavProps {
  activeCategory: CategoryId;
  onCategoryChange: (category: CategoryId) => void;
}

export default function CategoryNav({ activeCategory, onCategoryChange }: CategoryNavProps) {
  return (
    <nav className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className="px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all"
          style={{
            background: activeCategory === category.id
              ? 'linear-gradient(135deg, #4F6EF7, #7B5EA7)'
              : 'rgba(255, 255, 255, 0.05)',
            color: activeCategory === category.id
              ? 'white'
              : 'rgba(255, 255, 255, 0.5)',
            border: activeCategory === category.id
              ? 'none'
              : '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: activeCategory === category.id
              ? '0 4px 12px rgba(79, 110, 247, 0.4)'
              : 'none',
          }}
        >
          {category.name}
        </button>
      ))}
    </nav>
  );
}
