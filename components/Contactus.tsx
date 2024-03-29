// Aggiungo la direttiva "use client"
"use client";

// Importo React, useState e emailjs
import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';

function Contactus() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [remainingChars, setRemainingChars] = useState(200);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    
    const { name, value } = e.target;

    if (name === 'message') {
      const currentLength = value.length;
      const charsLeft =currentLength;
      setRemainingChars(charsLeft);
    } 
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send('service_j7t98az', 'template_cfvckjn', form, 'xABZuAu8x-lpgihBd')
      .then(() => {
        alert('Email inviata con successo!');
        setForm({ name: '', email: '', message: '' });
        setRemainingChars(200); // Ripristina il numero massimo di caratteri 
      })
      .catch((error) => {
        alert('Si è verificato un errore: ' + error.text);
      });
  };

  return (
<section id="contacts">   
    <div className="min-h-screen flex items-center justify-center bg">
    <div className="border  p-8 rounded-md shadow-md w-full max-w-md">
        <h1 className="my-10 text-center font-bold text-4xl">
            Contact me 👇
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Name
                </label>
                <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required // Aggiungo l'attributo required
                placeholder="Your Name" 
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
                </label>
                <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required // Aggiungo l'attributo required
                placeholder="Your email address" // Aggiungo l'attributo placeholder
                />
            </div>
            <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                Messagge (Max 200 characters)
                </label>
                <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                rows={4}
                maxLength={200}
                required // Aggiungo l'attributo required
                placeholder="Your message" // Aggiungo l'attributo placeholder
                style={{ resize: "none" }}
                ></textarea>
                <p className={`text-sm ${remainingChars === 200 ? 'text-red-500' : 'text-gray-500'}`}>
                  {remainingChars}/200</p>
            </div>
            <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
            Send
            </button>
        </form>
    </div>
    </div>
</section>
);
}

export default Contactus;
