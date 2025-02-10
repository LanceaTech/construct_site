// components/contact/ContactForm.tsx
"use client";
import { useState } from 'react';

export default function ContactForm() {
 const [formData, setFormData] = useState({
   name: '',
   email: '',
   service: 'commercial',
   message: ''
 });

 const handleSubmit = async (e: React.FormEvent) => {
   e.preventDefault();
   try {
     const response = await fetch('/api/contact', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(formData),
     });
     if (response.ok) {
       alert('Message sent successfully!');
       setFormData({ name: '', email: '', service: 'commercial', message: '' });
     }
   } catch (error) {
     console.error('Error:', error);
     alert('Failed to send message');
   }
 };

 return (
   <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
     <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
     <div className="space-y-4">
       <div>
         <label className="block text-gray-700 mb-2">Name</label>
         <input
           type="text"
           value={formData.name}
           onChange={(e) => setFormData({...formData, name: e.target.value})}
           className="w-full px-4 py-2 border rounded-lg focus:ring-orange-500"
           required
         />
       </div>
       <div>
         <label className="block text-gray-700 mb-2">Email</label>
         <input
           type="email"
           value={formData.email}
           onChange={(e) => setFormData({...formData, email: e.target.value})}
           className="w-full px-4 py-2 border rounded-lg focus:ring-orange-500"
           required
         />
       </div>
       <div>
         <label className="block text-gray-700 mb-2">Service</label>
         <select
           value={formData.service}
           onChange={(e) => setFormData({...formData, service: e.target.value})}
           className="w-full px-4 py-2 border rounded-lg focus:ring-orange-500"
         >
           <option value="commercial">Commercial Construction</option>
           <option value="residential">Residential Projects</option>
           <option value="renovation">Renovation</option>
         </select>
       </div>
       <div>
         <label className="block text-gray-700 mb-2">Message</label>
         <textarea
           value={formData.message}
           onChange={(e) => setFormData({...formData, message: e.target.value})}
           className="w-full px-4 py-2 border rounded-lg focus:ring-orange-500"
           rows={4}
           required
         />
       </div>
       <button
         type="submit"
         className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600"
       >
         Send Message
       </button>
     </div>
   </form>
 );
}