import React from 'react';
import { useAuth } from './AuthContext';
import { Lock } from 'lucide-react';

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function RestrictedContent({ children, fallback }: Props) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return fallback || (
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <div className="flex items-center gap-3 text-blue-800">
          <Lock size={20} />
          <div>
            <p className="font-medium">This content is restricted</p>
            <p className="text-sm text-blue-600">
              Please <button className="font-medium underline">sign in</button> or{' '}
              <button className="font-medium underline">register</button> to view this content
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}