"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm({ onClose }: { onClose: () => void }) {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_z5b4mcj",     // ✅ Service ID
        "template_pxm33sh",    // ✅ Template ID
        formRef.current,
        "Hycjqz7ztQDXJh5pM"    // ✅ Public Key
      )
      .then(() => {
        alert("Cám ơn bạn đã quan tâm! Chúng tôi sẽ liên lạc với bạn sớm nhất.");
        formRef.current?.reset();
        onClose(); // ✅ đóng popup
      })
      .catch((error) => {
        console.error("Send failed:", error);
        alert("Gửi không thành công. Vui lòng thử lại.");
      });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input type="text" name="user_name" placeholder="Your Name" className="input-style" required />
        <input type="email" name="user_email" placeholder="Your Email" className="input-style" required />
        <input type="text" name="website" placeholder="Your Website/App URL" className="input-style" />
        <input type="text" name="whatsapp" placeholder="Your WhatsApp" className="input-style" />
        <input type="text" name="country" placeholder="Your Country" className="input-style" />
        <input type="text" name="telegram" placeholder="Your Telegram No." className="input-style" />
        <input
          type="text"
          name="page_views"
          placeholder="Your Daily Page Views"
          className="input-style col-span-1 sm:col-span-2"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
      >
        Get Started
      </button>
    </form>
  );
}