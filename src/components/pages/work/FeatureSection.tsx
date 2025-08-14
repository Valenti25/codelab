// 'use client';

// import Image from 'next/image';
// import type { Feature } from '@/data/projects-data';

// export const FeatureSection = ({ title, text, image, layout }: Feature) => {
//   const isTextLeft = layout === 'text-left';
  
//   return (
//     <div className="container mx-auto px-4 py-16">
//       <div className={`flex flex-col md:flex-row gap-12 items-center ${isTextLeft ? '' : 'md:flex-row-reverse'}`}>
//         {/* Text Content */}
//         <div className="md:w-1/2">
//           <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
//           <p className="text-gray-400 text-lg">{text}</p>
//         </div>
//         {/* Image */}
//         <div className="md:w-1/2">
//           <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-lg">
//             <Image 
//               src={image} 
//               alt={title} 
//               fill 
//               className="object-cover"
//               unoptimized // สำหรับ placeholder.co
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
