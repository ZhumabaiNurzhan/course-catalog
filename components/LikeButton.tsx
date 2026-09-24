'use client';

import { useState } from "react";

type LikeButtonProps = {
  initialLikes: number;
};

export default function LikeButton({ initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState<number>(initialLikes);
  const [hasLiked, setHasLiked] = useState<boolean>(false);

  const handleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Останавливаем всплытие события, чтобы клик не уходил на соседние элементы
    e.stopPropagation();
    
    if (!hasLiked) {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
    } else {
      setLikes((prev) => prev - 1);
      setHasLiked(false);
    }
  };

  return (
    <button 
      onClick={handleLike}
      type="button"
      className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
        hasLiked 
          ? 'bg-rose-500 text-white shadow-md shadow-rose-200 scale-105' 
          : 'bg-rose-50 text-rose-600 hover:bg-rose-100 hover:scale-105'
      }`}
    >
      <span>{hasLiked ? '❤️' : '🤍'}</span> 
      <span>{likes}</span>
    </button>
  );
}