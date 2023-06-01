export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Speed Runner',
    price: 95.99,
    description: 'High-performance running shoes with superior comfort',
    image: 'http://localhost:8080/shoe-1.avif',
    longDescription:
      'Our Speed Runner shoes are designed to provide maximum comfort and performance. They feature a lightweight design and high-quality materials that provide superior cushioning and support. Whether you are running a marathon or just out for a jog, the Speed Runner shoes are perfect for any distance.',
  },
  {
    id: 2,
    name: 'Street Walker',
    price: 78.99,
    description: 'Stylish and comfortable walking shoes for everyday wear.',
    image: 'http://localhost:8080/shoe-2.avif',
    longDescription:
      'The Street Walker shoes combine style and comfort in a shoe that is perfect for everyday wear. With a sleek design and a comfortable fit, these shoes are ideal for walking around town or running errands. They are made with durable materials that can withstand the rigors of daily use.',
  },
  {
    id: 3,
    name: 'Mountain Climber',
    price: 107.99,
    description: 'Rugged and durable shoes designed for mountain climbing.',
    image: 'http://localhost:8080/shoe-3.avif',
    longDescription:
      'Our Mountain Climber shoes are designed for the adventurous spirit. They feature a rugged design and durable materials that can handle any terrain. Whether you are climbing a mountain or hiking a trail, these shoes will keep your feet protected and comfortable.',
  },
  {
    id: 4,
    name: 'City Sleek',
    price: 85.99,
    description: 'Elegant shoes for formal occasions',
    image: 'http://localhost:8080/shoe-4.avif',
    longDescription:
      'City Sleek shoes bring sophistication to any outfit. Their minimalist design, combined with high-quality leather, makes them perfect for formal events or a stylish day at work. With a comfortable insole, you can wear them all day without fatigue.',
  },
  {
    id: 5,
    name: 'Trail Tracker',
    price: 110.99,
    description: 'Versatile hiking shoes for all terrains',
    image: 'http://localhost:8080/shoe-5.avif',
    longDescription:
      'Trail Tracker shoes are designed to accompany you on any hiking journey. Their robust construction ensures durability and comfort, even on the roughest terrains. Waterproof materials keep your feet dry, while the superior traction helps you navigate with ease.',
  },
  {
    id: 6,
    name: 'Winter Warrior',
    price: 120.99,
    description: 'Warm and cozy shoes for cold weather',
    image: 'http://localhost:8080/shoe-6.avif',
    longDescription:
      'Winter Warrior shoes are the perfect companion during cold weather. With their warm lining and waterproof exterior, your feet will stay cozy and dry, no matter how cold or wet it gets. Their stylish design doesn’t compromise on comfort, making them an essential part of your winter wardrobe.',
  },
  {
    id: 7,
    name: 'Summer Breeze',
    price: 65.99,
    description: 'Lightweight and breathable shoes for summer',
    image: 'http://localhost:8080/shoe-7.avif',
    longDescription:
      'Summer Breeze shoes are your perfect summer companion. Their breathable material keeps your feet cool, while the lightweight construction allows for easy movement. Whether you’re on a beach holiday or a casual city trip, these shoes will keep you comfortable and stylish.',
  },
  {
    id: 8,
    name: 'Gym Pro',
    price: 95.99,
    description: 'Flexible and supportive shoes for workouts',
    image: 'http://localhost:8080/shoe-8.avif',
    longDescription:
      'Gym Pro shoes are designed to support you during your workouts. With their flexible soles and supportive structure, they’re perfect for a variety of exercises. The breathable material prevents your feet from overheating, helping you focus on achieving your fitness goals.',
  },
  {
    id: 9,
    name: 'Casual Comfort',
    price: 70.99,
    description: 'Comfortable everyday shoes for casual wear',
    image: 'http://localhost:8080/shoe-9.avif',
    longDescription:
      'Casual Comfort shoes are your everyday go-to. Their simplistic, yet stylish design is perfect for any casual occasion. The cushioned insole and flexible sole provide maximum comfort throughout the day, whether you’re at work, shopping, or going for a walk.',
  },
  {
    id: 10,
    name: 'Dance Deluxe',
    price: 130.99,
    description: 'High-quality dance shoes with a sleek design',
    image: 'http://localhost:8080/shoe-10.avif',
    longDescription:
      'Dance Deluxe shoes are engineered for dancers of all styles. They feature a sleek, elegant design and a soft, flexible sole that allows for quick and easy movements. Whether you’re a beginner or a professional, these shoes will help you move effortlessly on the dance floor.',
  },
];

export default products;
