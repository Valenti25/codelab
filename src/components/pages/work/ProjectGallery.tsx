// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import type { Project } from '@/data/projects-data'; // Import Type จากไฟล์ข้อมูล

// // --- ข้อมูลจำลอง (Mock Data) ---
// // ส่วนนี้ควรจะย้ายไปอยู่ที่ src/data/projects-data.ts ในโปรเจกต์จริง
// // แต่ผมนำมารวมไว้ที่นี่เพื่อให้ไฟล์นี้สมบูรณ์ในตัวเอง
// const projectsData: Project[] = [
//   {
//     slug: 'jib-dashboard',
//     logo: '/placehold.co/64x64/1a1a1a/ffffff?text=JIB',
//     title: 'JIB Dashboard',
//     shortDescription: 'Gain full control and clarity over your business with our intuitive dashboards. Track performance, visualize key metrics, and make better decisions — all in one place.',
//     tags: ['UX/UI', 'Dashboard', 'Data Analytic'],
//     heroImage: '/placehold.co/1200x600/1a1a1a/ffffff?text=JIB+Hero',
//     fullDescription: 'A comprehensive project to overhaul the user experience for JIB\'s internal management systems.',
//     features: [], // ใส่ข้อมูล features ที่นี่
//     gallery: [] // ใส่ข้อมูล gallery ที่นี่
//   },
//   {
//     slug: 'melon-thai',
//     logo: '/placehold.co/64x64/e6007e/ffffff?text=MT',
//     title: 'MELON THAI',
//     shortDescription: 'Discover the best yearly data SIMs from all major networks! Enjoy unlimited high-speed internet, free calls, and uninterrupted connectivity for a full year.',
//     tags: ['UX/UI', 'Website', 'E-commerce'],
//     heroImage: '/placehold.co/1200x600/e6007e/ffffff?text=Melon+Hero',
//     fullDescription: 'We partnered with MELON THAI to create a vibrant and user-friendly e-commerce platform.',
//     features: [],
//     gallery: []
//   },
// ];


// // --- Component ย่อย: การ์ดแสดงผลงาน ---
// // ปกติไฟล์นี้ควรอยู่ที่ src/components/pages/work/ProjectCard.tsx
// const ProjectCard = ({ project }: { project: Project }) => {
//   return (
//     <Link href={`/work/${project.slug}`} className="block group mb-20 transition-opacity duration-300 hover:opacity-80">
//       <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
//         {/* Left Side: Details */}
//         <div className="md:w-1/3 flex-shrink-0">
//           <Image 
//             src={project.logo} 
//             alt={`${project.title} Logo`} 
//             width={56} 
//             height={56} 
//             className="mb-6 rounded-lg"
//             unoptimized // สำหรับ placeholder.co
//           />
//           <h2 className="text-3xl font-bold mb-3 text-white">{project.title}</h2>
//           <p className="text-gray-400 mb-5 text-base">{project.shortDescription}</p>
//           <div className="flex flex-wrap gap-2">
//             {project.tags.map(tag => (
//               <span key={tag} className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full">{tag}</span>
//             ))}
//           </div>
//         </div>
        
//         {/* Right Side: Image Preview */}
//         <div className="md:w-2/3 w-full">
//           <div className="relative aspect-[16/10] bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-transform duration-500 group-hover:scale-105">
//             <Image 
//               src={project.heroImage} 
//               alt={`${project.title} preview`} 
//               fill 
//               className="object-cover"
//               unoptimized // สำหรับ placeholder.co
//             />
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };


// // --- Component หลัก: หน้า Work ที่ประกอบร่างแล้ว ---
// interface WorkProps {
//   title: string;
//   subtitle: string;
// }

// export const Work = ({ title, subtitle }: WorkProps) => {
//   return (
//     <div className="w-full">
//       {/* ส่วนหัวของหน้า */}
//       <div className="container mx-auto px-4 py-16 text-center">
//         <h1 className="text-5xl font-bold text-white">{title}</h1>
//         <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">{subtitle}</p>
//       </div>
      
//       {/* ส่วนรายการผลงาน */}
//       <div className="container mx-auto px-4">
//         {projectsData.map(project => (
//           <ProjectCard key={project.slug} project={project} />
//         ))}
//       </div>
//     </div>
//   )
// }
