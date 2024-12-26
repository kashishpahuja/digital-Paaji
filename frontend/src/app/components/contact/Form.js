'use client';
export default function ContactForm() {
  return (
    <div className="mx-4 md:mx-12 xl:mx-60">
         <h3 className="bungeeHead mb-10  text-[30px] text-[#cc5f4d] xl:text-[40px]">
         Let’s get in touch
          </h3>
   
    <form className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {/* First Name */}
      <div>
        <label className="bungeeHead block lg:text-lg  mb-2">FIRST NAME *</label>
        <input
          type="text"
          placeholder="Enter your first name"
          className="bg-[#ede7db] w-full border px-4 py-2 focus:outline-none border-black"
        />
      </div>
      {/* Last Name */}
      <div>
        <label className="bungeeHead block lg:text-lg  mb-2">LAST NAME *</label>
        <input
          type="text"
          placeholder="Enter your last name"
          className="bg-[#ede7db] w-full border px-4 py-2 focus:outline-none border-black"
        />
      </div>
      {/* Phone */}
      <div>
        <label className="bungeeHead block lg:text-lg  mb-2">YOUR PHONE *</label>
        <input
          type="tel"
          placeholder="+91 2929 29xxx"
          className="bg-[#ede7db] w-full border px-4 py-2 focus:outline-none border-black"
        />
      </div>
      {/* Email */}
      <div>
        <label className="bungeeHead block lg:text-lg  mb-2">YOUR EMAIL *</label>
        <input
          type="email"
          placeholder="youremail@domain.com"
          className="bg-[#ede7db] w-full border px-4 py-2 focus:outline-none border-black"
        />
      </div>
      {/* Message */}
      <div className="md:col-span-2">
        <label className="bungeeHead block lg:text-lg  mb-2">MESSAGE *</label>
        <textarea
          placeholder="Enter Message"
          rows={4}
          className="bg-[#ede7db] w-full border px-4 py-2 focus:outline-none border-black"
        ></textarea>
      </div>
      {/* Submit Button */}
      <div className="md:col-span-2">
        <button
          type="submit"
          className="flex items-center justify-center gap-2 w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-md transition duration-300"
        >
          <span>
          Send message 
          </span>
<img src="/Images/addOn/ContactIcon.webp" className="w-2 h-2" alt="" />          
        </button>
      </div>
    </form>
    </div>
  );
}
