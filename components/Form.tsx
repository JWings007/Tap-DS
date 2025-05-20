export default function CareerCounsellingForm() {
  return (
    <div className="mx-auto bg-white p-6 rounded-4xl border-2 border-gray-200">
      <div className="flex flex-col items-center gap-2">
        <img src="/svg/icons8-phone.svg" alt="phone" />
        <h2 className="text-xl font-semibold text-center">
          Need to know more about{" "}
          <span className="text-[#2091d0]"> Data Science?</span>
        </h2>
      </div>
      <p className="text-sm text-center text-gray-600 mb-2">
        Schedule a session for free with our experts
      </p>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-2 border border-gray-300 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border border-gray-300 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="relative flex gap-2 before:content-['+91'] before:text-gray-500 before:text-sm before:font-semibold before:absolute before:left-0 before:top-0 before:bottom-0 before:h-full before:w-16 before:flex before:items-center before:justify-center">
          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full px-4 py-2 border border-gray-300 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-16"
          />
        </div>

        <select className="w-full px-4 py-2 border border-gray-300 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Mode of Learning</option>
          <option value="0">Online</option>
          <option value="1">Offline</option>
        </select>

        <p className="text-xs text-center text-gray-500 pt-0">
          By providing your contact details, you agree to our{" "}
          <a href="#" className="text-[#2091d0] underline">
            Terms of Use
          </a>{" "}
          &{" "}
          <a href="#" className="text-[#2091d0] underline">
            Privacy Policy
          </a>
        </p>
        <button
          type="submit"
          className="w-full bg-[#2091d0] text-white py-2 font-semibold rounded-2xl hover:bg-[#2091d0]/80 transition duration-200 cursor-pointer"
        >
          CALL OUR EXPERTS
        </button>
      </form>
    </div>
  );
}
