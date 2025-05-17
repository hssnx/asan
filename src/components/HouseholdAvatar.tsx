import { FC } from 'react';

interface HouseholdAvatarProps {
  name: string;
  imageUrl?: string;
  size?: 'sm' | 'md' | 'lg';
}

const HouseholdAvatar: FC<HouseholdAvatarProps> = ({ 
  name, 
  imageUrl,
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20'
  };

  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);

  return (
    <div className={`relative overflow-hidden rounded-lg bg-blue-100 ${sizeClasses[size]}`}>
      {imageUrl ? (
        <img 
          src={imageUrl} 
          alt={`${name} household`} 
          className="h-full w-full object-cover" 
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-blue-100 text-blue-600">
          <span className="text-xl font-bold">{initials}</span>
        </div>
      )}
    </div>
  );
};

export default HouseholdAvatar; 