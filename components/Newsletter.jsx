export default function Newsletter() {
  return (
    <section className="flex flex-col justify-center items-center gap-6 px-4 py-10">
      <div className="flex flex-col gap-2 text-center max-w-[720px]">
        <h1 className="text-[#0e1b18] text-2xl font-bold">Stay Updated</h1>
        <p className="text-[#0e1b18] text-base">
          Subscribe to our newsletter to receive the latest news and updates from Pranami Charity Foundation.
        </p>
      </div>
      <form className="flex flex-col w-full max-w-md gap-2 sm:flex-row items-center">
        <input
          type="email"
          placeholder="Your Email"
          className="flex-1 rounded-xl px-4 py-3 border border-[#d0e7e2] bg-[#e7f3f0] text-[#0e1b18] focus:border-[#15cfa4] focus:outline-none"
        />
        <button
          type="submit"
          className="h-10 px-6 bg-[#15cfa4] text-[#0e1b18] rounded-full font-bold"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
