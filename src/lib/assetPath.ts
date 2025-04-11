// src/lib/assetPath.ts
export function getAssetPath(relativePath: string): string {
    // Remove leading slash if present
    const path = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
    
    // In development, use root-relative paths
    if (import.meta.env.DEV) {
      return `/${path}`;
    }
    
    // In production, use the base path from Vite config
    return `${import.meta.env.BASE_URL}${path}`;
  }