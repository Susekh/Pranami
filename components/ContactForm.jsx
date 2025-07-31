export default function ContactForm() {
  return (
    <section id="contact" className="py-16 px-4 md:px-12 w-full md:w-6xl bg-white">
      <h2 className="text-[#0e1b18] text-3xl font-bold tracking-tight mb-12 text-center">
        Contact Us
      </h2>

      <div className="flex flex-col md:flex-row gap-10 w-full">
        {/* Contact Form */}
        <form className="w-full md:w-2/3 space-y-6 bg-[#f8fcfb] border border-[#d0e7e2] rounded-2xl p-8 shadow-sm">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-semibold text-[#0e1b18]">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="rounded-xl border border-[#d0e7e2] bg-white p-3 text-[#0e1b18] placeholder:text-[#a0bcb5] focus:border-[#15cfa4] focus:ring-2 focus:ring-[#d3f7ee] outline-none transition"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold text-[#0e1b18]">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              className="rounded-xl border border-[#d0e7e2] bg-white p-3 text-[#0e1b18] placeholder:text-[#a0bcb5] focus:border-[#15cfa4] focus:ring-2 focus:ring-[#d3f7ee] outline-none transition"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-semibold text-[#0e1b18]">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Your Message"
              className="rounded-xl border border-[#d0e7e2] bg-white p-3 text-[#0e1b18] placeholder:text-[#a0bcb5] focus:border-[#15cfa4] focus:ring-2 focus:ring-[#d3f7ee] outline-none transition"
            />
          </div>

          <button
            type="submit"
            className="w-fit mt-2 px-6 py-2 rounded-full bg-[#15cfa4] text-[#0e1b18] font-bold hover:bg-[#12b895] transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="w-full md:w-1/3 flex flex-col justify-start gap-6 bg-[#f8fcfb] border border-[#d0e7e2] rounded-2xl p-8 shadow-sm">
          <div>
            <h4 className="text-[#0e1b18] font-semibold text-lg mb-1">Email</h4>
            <p className="text-[#4d9987] text-sm">hello@yourdomain.com</p>
          </div>
          <div>
            <h4 className="text-[#0e1b18] font-semibold text-lg mb-1">Phone</h4>
            <p className="text-[#4d9987] text-sm">+91 98765 43210</p>
          </div>
          <div>
            <h4 className="text-[#0e1b18] font-semibold text-lg mb-1">Location</h4>
            <p className="text-[#4d9987] text-sm">
              123 Foundation Street,<br />
              Bengaluru, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
