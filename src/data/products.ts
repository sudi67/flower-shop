export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  imageAlt: string;
  category: 'roses' | 'tulips' | 'mixed' | 'sunflowers' | 'peonies' | 'lavender';
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Classic Rose Bouquet',
    price: 49.99,
    description: 'Elegant pink roses wrapped beautifully, perfect for any romantic occasion.',
    image: 'https://images.unsplash.com/photo-1712258093579-190d48841a93?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxyb3NlcyUyMGJvdXF1ZXQlMjBwaW5rJTIwZmxvd2Vyc3xlbnwwfDF8fHwxNzYxNTQ5NTkyfDA&ixlib=rb-4.1.0&q=85',
    imageAlt: 'Pink roses bouquet wrapped elegantly - Aleyna Çatak on Unsplash',
    category: 'roses',
  },
  {
    id: 2,
    name: 'Spring Tulip Arrangement',
    price: 39.99,
    description: 'Fresh pastel tulips in an elegant vase, bringing spring into your home.',
    image: 'https://images.unsplash.com/photo-1645370930024-61bacbc3e79f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHx0dWxpcHMlMjBzcHJpbmclMjBmbG93ZXJzJTIwdmFzZXxlbnwwfDF8fHwxNzYxNTQ5NTkxfDA&ixlib=rb-4.1.0&q=85',
    imageAlt: 'Fresh tulips in pastel colors - Nadiia Shuran on Unsplash',
    category: 'tulips',
  },
  {
    id: 3,
    name: 'Vibrant Mixed Bouquet',
    price: 59.99,
    description: 'A colorful collection of seasonal blooms, wrapped with care and love.',
    image: 'https://images.unsplash.com/photo-1702076403493-b4edd5219f11?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHxtaXhlZCUyMGZsb3dlcnMlMjBib3VxdWV0JTIwY29sb3JmdWwlMjBibG9vbXN8ZW58MHwxfHx8MTc2MTU0OTU5MXww&ixlib=rb-4.1.0&q=85',
    imageAlt: 'Colorful mixed flower bouquet - Karolina Bobek on Unsplash',
    category: 'mixed',
  },
  {
    id: 4,
    name: 'Cheerful Sunflower Bundle',
    price: 44.99,
    description: 'Bright and cheerful sunflowers to bring sunshine to any day.',
    image: 'https://images.unsplash.com/photo-1564077393805-57584a46c88d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxzdW5mbG93ZXJzJTIweWVsbG93JTIwZmxvd2VycyUyMGJvdXF1ZXR8ZW58MHwxfHx5ZWxsb3d8MTc2MTU0OTU5MXww&ixlib=rb-4.1.0&q=85',
    imageAlt: 'Bright sunflowers bouquet - No Revisions on Unsplash',
    category: 'sunflowers',
  },
  {
    id: 5,
    name: 'Romantic Peony Collection',
    price: 69.99,
    description: 'Lush pink peonies with delicate petals, perfect for special celebrations.',
    image: 'https://images.unsplash.com/photo-1759005617497-6bca92568a10?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxwZW9uaWVzJTIwcGluayUyMGZsb3dlcnMlMjByb21hbnRpYyUyMGJvdXF1ZXR8ZW58MHwxfHx8MTc2MTU0OTU5MXww&ixlib=rb-4.1.0&q=85',
    imageAlt: 'Soft pink peonies - Saniye NEBİOGLU on Unsplash',
    category: 'peonies',
  },
  {
    id: 6,
    name: 'Calming Lavender Stems',
    price: 34.99,
    description: 'Natural dried lavender for a rustic, calming touch to your space.',
    image: 'https://images.unsplash.com/photo-1601853522292-18b6484ef47c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxsYXZlbmRlciUyMHB1cnBsZSUyMGZsb3dlcnMlMjBkcmllZCUyMGZsb3dlcnN8ZW58MHwxfHxwdXJwbGV8MTc2MTU0OTU5NXww&ixlib=rb-4.1.0&q=85',
    imageAlt: 'Purple lavender stems - Jacob Thomas on Unsplash',
    category: 'lavender',
  },
];