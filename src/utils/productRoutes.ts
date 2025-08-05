/**
 * Centralized product route mapping utility
 * Maps product IDs to URL slugs for consistent routing across the application
 */

// Mapping between product IDs and URL slugs
export const productIdToSlugMapping: Record<string, string> = {
  '1': 'mesa-ginecologica-rt-2000',
  '2': 'mesa-ginecologica-rt2500',
  '3': 'mesa-ginecologica-rt4000-histeroscopia',
  '4': 'mesa-clinica-eletrica-trendlemburg-rt3000',
  '5': 'mesa-clinica-rt5000',
  '6': 'mesa-clinica-rt5000-estetic',
  '7': 'mesa-clinica-rt5000-e-ic',
  '8': 'mesa-clinica-rt2500-es',
  '9': 'mesa-clinica-rt5500'
};

// Reverse mapping from URL slugs to product IDs
export const urlToProductMapping: Record<string, string> = {
  'mesa-ginecologica-rt-2000': '1',
  'mesa-ginecologica-rt2500': '2', 
  'mesa-ginecologica-rt4000-histeroscopia': '3',
  'mesa-clinica-eletrica-trendlemburg-rt3000': '4',
  'mesa-clinica-rt5000': '5',
  'mesa-clinica-rt5000-estetic': '6',
  'mesa-clinica-rt5000-e-ic': '7',
  'mesa-clinica-rt2500-es': '8',
  'mesa-clinica-rt5500': '9'
};

/**
 * Get product URL slug from product ID
 */
export const getProductSlug = (productId: string): string => {
  return productIdToSlugMapping[productId] || productIdToSlugMapping['1'];
};

/**
 * Get product ID from URL slug
 */
export const getProductId = (slug: string): string => {
  return urlToProductMapping[slug] || '1';
};

/**
 * Generate product detail URL
 */
export const getProductUrl = (productId: string): string => {
  const slug = getProductSlug(productId);
  return `/produto/${slug}`;
};