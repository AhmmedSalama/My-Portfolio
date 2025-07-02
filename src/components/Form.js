import { useState } from "react";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

function Form() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [budget, setbudget] = useState("");
  const [Message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name: Name,
      email: Email,
      message: Message,
      budget: budget,
      title: "New Message from Portfolio"
    };

    emailjs.send(
      'service_eawo0f8',
      'template_zyr4ajj',
      templateParams,
      'jF5IPZoHoW-Dob0GS'
    )
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: '✅ Your message has been sent successfully.',
        showConfirmButton: true,
        confirmButtonText: 'OK',
        background: getComputedStyle(document.documentElement).getPropertyValue('--color-card-bg'),
        color: getComputedStyle(document.documentElement).getPropertyValue('--color-text'),
        confirmButtonColor: getComputedStyle(document.documentElement).getPropertyValue('--color-accent'),
        customClass: {
          popup: 'rounded-lg border border-[var(--color-border)] shadow-md',
          confirmButton: 'text-white rounded-md px-4 py-2 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-hover)] hover:from-[var(--color-accent-hover)] hover:to-[var(--color-accent)]'
        },
        timer: 5000,
        timerProgressBar: true
      });

      setName("");
      setEmail("");
      setbudget("");
      setMessage("");
    })
    .catch((err) => {
      console.error("EmailJS Error:", err);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '❌ Failed to send message. Please try again later.',
        showConfirmButton: true,
        confirmButtonText: 'Try Again',
        background: getComputedStyle(document.documentElement).getPropertyValue('--color-card-bg'),
        color: getComputedStyle(document.documentElement).getPropertyValue('--color-text'),
        confirmButtonColor: getComputedStyle(document.documentElement).getPropertyValue('--color-accent'),
        customClass: {
          popup: 'rounded-lg border border-[var(--color-border)] shadow-md',
          confirmButton: 'text-white rounded-md px-4 py-2 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-hover)] hover:from-[var(--color-accent-hover)] hover:to-[var(--color-accent)]'
        },
        timer: 5000,
        timerProgressBar: true
      });
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <div className="form-container mt-8 bg-[var(--color-card-bg)] border border-[var(--color-border)] rounded-lg p-6">
      <h3 className="text-2xl font-bold text-[var(--color-text)] mb-6">Get in Touch</h3>
      <form className="space-y-6" onSubmit={handleSubmit}>

        {/* Name */}
        <div>
          <label htmlFor="Name" className="block text-[var(--color-text-secondary)] text-sm mb-2">Name</label>
          <input
            type="text"
            id="Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full p-3 border border-[var(--color-border)] bg-transparent text-[var(--color-text)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--color-accent-hover)]"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="Email" className="block text-[var(--color-text-secondary)] text-sm mb-2">Email</label>
          <input
            type="email"
            id="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="w-full p-3 border border-[var(--color-border)] bg-transparent text-[var(--color-text)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--color-accent-hover)]"
            required
          />
        </div>

        {/* Budget */}
        <div>
          <label htmlFor="budget" className="block text-[var(--color-text-secondary)] text-sm mb-2">
            Budget <span className="text-xs text-[var(--color-text-secondary)]">(Optional)</span>
          </label>
          <input
            type="text"
            id="budget"
            value={budget}
            onChange={(e) => setbudget(e.target.value)}
            placeholder="Your Budget"
            className="w-full p-3 border border-[var(--color-border)] bg-transparent text-[var(--color-text)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--color-accent-hover)]"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="Message" className="block text-[var(--color-text-secondary)] text-sm mb-2">Message</label>
          <textarea
            id="Message"
            value={Message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message..."
            className="w-full p-3 border border-[var(--color-border)] bg-transparent text-[var(--color-text)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--color-accent-hover)] h-32"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`text-white flex items-center justify-center gap-2
            bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-hover)]
            w-32 h-10 rounded-md border border-[var(--color-border)]
            hover:scale-105 duration-200 hover:from-[var(--color-accent-hover)] hover:to-[var(--color-accent)]
            ${loading ? 'opacity-60 cursor-not-allowed' : ''}
          `}
        >
          {loading ? (
            <span className="loader w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            "Send"
          )}
        </button>
      </form>
    </div>
  );
}

export default Form;
