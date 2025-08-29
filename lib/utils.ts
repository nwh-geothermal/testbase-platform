import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetPath(path: string): string {
  // Remove the leading slash if present and return the path
  // This is a simple implementation for the asset path handling
  return path.startsWith('/') ? path : `/${path}`
}
