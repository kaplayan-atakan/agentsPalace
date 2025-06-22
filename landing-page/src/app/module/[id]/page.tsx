'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function ModuleRedirect() {
  const router = useRouter();
  const pathname = usePathname();
  
  useEffect(() => {
    // Parse which module was requested from the URL
    const moduleId = pathname.split('/').pop();
    
    // Redirect to the appropriate module page
    if (moduleId) {
      router.push(`/modules/${moduleId}`);
    } else {
      // If no module specified, redirect to home
      router.push('/');
    }
  }, [pathname, router]);

  return (
    <div className="min-h-screen bg-obsidian-900 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-electric-blue mx-auto mb-4"></div>
        <p className="text-gray-300">Yönlendiriliyor...</p>
      </div>
    </div>
  );
}
