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
    description: 'Hand-selected premium roses in soft blush tones, elegantly wrapped in sustainable paper. Each stem is carefully chosen for its perfect bloom and lasting beauty. A timeless expression of love and admiration.',
    image: 'https://images.unsplash.com/photo-1712258093579-190d48841a93?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxyb3NlcyUyMGJvdXF1ZXQlMjBwaW5rJTIwZmxvd2Vyc3xlbnwwfDF8fHwxNzYxNTQ5NTkyfDA&ixlib=rb-4.1.0&q=85',
    imageAlt: 'Pink roses bouquet wrapped elegantly - Aleyna Çatak on Unsplash',
    category: 'roses',
  },
  {
    id: 2,
    name: 'Spring Tulip Arrangement',
    price: 39.99,
    description: 'A breath of spring captured in delicate pastel tulips. Sourced from local growers, these graceful blooms bring fresh energy and renewal to any space. Includes a handcrafted ceramic vase.',
    image: 'https://images.unsplash.com/photo-1645370930024-61bacbc3e79f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHx0dWxpcHMlMjBzcHJpbmclMjBmbG93ZXJzJTIwdmFzZXxlbnwwfDF8fHwxNzYxNTQ5NTkxfDA&ixlib=rb-4.1.0&q=85',
    imageAlt: 'Fresh tulips in pastel colors - Nadiia Shuran on Unsplash',
    category: 'tulips',
  },
  {
    id: 3,
    name: 'Vibrant Mixed Bouquet',
    price: 59.99,
    description: 'A symphony of colors and textures featuring the season\'s finest blooms. Each arrangement is unique, combining complementary flowers for a stunning visual impact. Perfect for celebrations and special moments.',
    image: 'https://images.unsplash.com/photo-1702076403493-b4edd5219f11?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHxtaXhlZCUyMGZsb3dlcnMlMjBib3VxdWV0JTIwY29sb3JmdWwlMjBibG9vbXN8ZW58MHwxfHx8MTc2MTU0OTU5MXww&ixlib=rb-4.1.0&q=85',
    imageAlt: 'Colorful mixed flower bouquet - Karolina Bobek on Unsplash',
    category: 'mixed',
  },
  {
    id: 4,
    name: 'Cheerful Sunflower Bundle',
    price: 44.99,
    description: 'Radiant sunflowers that capture the warmth of summer sunshine. These bold, cheerful blooms are guaranteed to brighten any room and lift spirits. Sustainably grown and hand-tied with natural twine.',
    image: 'https://images.unsplash.com/photo-1564077393805-57584a46c88d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxzdW5mbG93ZXJzJTIweWVsbG93JTIwZmxvd2VycyUyMGJvdXF1ZXR8ZW58MHwxfHx5ZWxsb3d8MTc2MTU0OTU5MXww&ixlib=rb-4.1.0&q=85',
    imageAlt: 'Bright sunflowers bouquet - No Revisions on Unsplash',
    category: 'sunflowers',
  },
  {
    id: 5,
    name: 'Romantic Peony Collection',
    price: 69.99,
    description: 'Luxurious peonies in soft pink hues, known for their lush, romantic blooms and delicate fragrance. A premium choice for weddings, anniversaries, and moments that deserve something extraordinary.',
    image: 'https://images.unsplash.com/photo-1759005617497-6bca92568a10?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxwZW9uaWVzJTIwcGluayUyMGZsb3dlcnMlMjByb21hbnRpYyUyMGJvdXF1ZXR8ZW58MHwxfHx8MTc2MTU0OTU5MXww&ixlib=rb-4.1.0&q=85',
    imageAlt: 'Soft pink peonies - Saniye NEBİOGLU on Unsplash',
    category: 'peonies',
  },
  {
    id: 6,
    name: 'Calming Lavender Stems',
    price: 34.99,
    description: 'Aromatic lavender stems, naturally dried to preserve their soothing fragrance and rustic beauty. Perfect for creating a tranquil atmosphere. Harvested from organic farms and bundled with care.',
    image: 'https://images.unsplash.com/photo-1601853522292-18b6484ef47c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxsYXZlbmRlciUyMHB1cnBsZSUyMGZsb3dlcnMlMjBkcmllZCUyMGZsb3dlcnN8ZW58MHwxfHxwdXJwbGV8MTc2MTU0OTU5NXww&ixlib=rb-4.1.0&q=85',
    imageAlt: 'Purple lavender stems - Jacob Thomas on Unsplash',
    category: 'lavender',
  },
];