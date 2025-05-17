import { FC } from 'react';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Avatar: FC<AvatarProps> = ({ 
  src = '', 
  alt = 'User avatar',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`relative overflow-hidden rounded-full bg-gray-200 ${sizeClasses[size]}`}>
      {src ? (
        <img 
          src={src} 
          alt={alt} 
          className="h-full w-full object-cover" 
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gray-200 text-gray-500">
          <span className="text-xl font-medium">
            {alt.charAt(0).toUpperCase()}
          </span>
        </div>
      )}
    </div>
  );
};

export default Avatar; 