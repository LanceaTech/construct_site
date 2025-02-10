// components/home/Services.tsx
"use client";
import { motion } from 'framer-motion';
import { Building, HomeIcon } from 'lucide-react';

const containerVariants = {
 hidden: { opacity: 0 },
 visible: {
   opacity: 1,
   transition: { staggerChildren: 0.3 }
 }
};

const itemVariants = {
 hidden: { y: 20, opacity: 0 },
 visible: {
   y: 0,
   opacity: 1,
   transition: { duration: 0.5 }
 }
};

export default function Services() {
 return (
   <section className="bg-white">
     <div className="container px-8 md:px-16">
       <motion.div
         variants={containerVariants}
         initial="hidden"
         animate="visible"
       >
         <motion.h2 
           className="text-3xl font-bold mb-12"
           variants={itemVariants}
         >
           Our Services
         </motion.h2>
         
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           <motion.div 
             className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
             variants={itemVariants}
             whileHover={{ scale: 1.02 }}
           >
             <Building className="text-orange-500 w-12 h-12 mb-4" />
             <h3 className="text-xl font-bold mb-2">Commercial Construction</h3>
             <p className="text-gray-600">Modern office buildings and retail spaces built to last</p>
           </motion.div>
           
           <motion.div 
             className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
             variants={itemVariants}
             whileHover={{ scale: 1.02 }}
           >
             <HomeIcon className="text-orange-500 w-12 h-12 mb-4" />
             <h3 className="text-xl font-bold mb-2">Residential Development</h3>
             <p className="text-gray-600">Custom homes and multi-family residential complexes</p>
           </motion.div>
         </div>
       </motion.div>
     </div>
   </section>
 );
}