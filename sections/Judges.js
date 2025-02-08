function Judges() {
  const judges = [
    { 
      name: "Annamalai Kathirkamanathan", 
      position: "Co-founder & CEO", 
      company: "tryCoM.ai", 
      image: "/Annamalai_Jury-modified.png", 
      linkedin: "https://www.linkedin.com/in/annamalai-kathirkamanathan/", 
      email: "mailto:ak@trycom.ai"
    },
    {
      name: "Hareesh Rajendran", 
      position: "SDE", 
      company: "Highbrow Technologies", 
      image: "/Hareesh Rajendran_Jury-modified.png", 
      linkedin: "https://www.linkedin.com/in/hareesh-r/", 
      email: "mailto:hareeshprogrammer@gmail.com"
    },
    { 
      name: "Rehan Mohammed", 
      position: "Founder & Design Head", 
      company: "Auradigital.in", 
      image: "/Rehan_Jury-modified.png", 
      linkedin: "https://www.linkedin.com/in/mdrehan15/", 
      email: "mailto:mdrehan1507@gmail.com"
    },
    {  
    name: "Hyuna Kim", 
    position: "Google Solution Challenge (GSC'24) Winner", 
    company: "Korea", 
    image: "/Kim_Jury-modified.png", 
    linkedin: "https://www.linkedin.com/in/akxmcse/", 
    email: "mailto:akxmcse@gmail.com"
  },
  {  
    name: "Apoorv Yash", 
    position: "SDE Intern", 
    company: "Amazon", 
    image: "/Yash_Jury-modified.png", 
    linkedin: "https://www.linkedin.com/in/apoorv-yash-75b130230/", 
    email: "mailto:apoorvyash123@gmail.com"
  },
  {  
    name: "S Mahaboob Hussain", 
    position: "IIT Ranchi", 
    company: "",
    image: "/Mahabook_Jury-modified.png", 
    linkedin: "https://www.linkedin.com/in/smhussain1626/", 
    email: "mailto:mahaboobhussain.s@vishnu.edu.in"
  },
  {  
    name: "Priyanshu Agrawal", 
    position: "AI Engineer", 
    company: "Samsung R&D", 
    image: "/priyanshu-modified.png", 
    linkedin: "https://www.linkedin.com/in/thisispriyanshu/", 
    email: "mailto:Priyanshuagrawal9169@gmail.com"
  },
  {  
    name: "Shudharsan N", 
    position: "SDE", 
    company: "Wells Fargo", 
    image: "/sudharshan-modified.png", 
    linkedin: "https://www.linkedin.com/in/sudarssan-n-a7aaa91bb/", 
    email: "mailto:sudarssan73@gmail.com"
  },
  {  
    name: "Sivaperumal Muthukrishnan", 
    position: "Solution Architect", 
    company: "Wipro Ltd, Canada", 
    image: "/Kim_Jury-modified.png", 
    // linkedin: "https://www.linkedin.com/in/sudarssan-n-a7aaa91bb/", 
    email: "mailto:Smsperumal@gmail.com"
  },
  {  
    name: "Trishiraj M", 
    position: "Professional Android Engineer", 
    company: "Solaris SE", 
    image: "/Trishiraj_Jury-modified.png", 
    linkedin: "https://www.linkedin.com/in/trishiraj/", 
    email: "mailto:trishiraj.247@gmail.com"
  }
];




  return (
    <section className="py-10 text-center text-white px-5 sm:px-10">
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8">Meet the Judges of Phase 2</h2>

      {/* Judges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-10 justify-center">
        {judges.map((judge, index) => (
          <div 
            key={index} 
            className="p-3 bg-gray-800 rounded-xl shadow-lg flex flex-col items-center w-full max-w-xs min-h-[280px] sm:min-h-[300px] mx-auto border border-blue-500 transform transition-transform duration-300 hover:scale-105"
          >
            {/* Profile Image */}
            <img 
              src={judge.image} 
              alt={judge.name} 
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full mb-3 object-cover border border-blue-300" 
            />
            
            {/* Name */}
            <h3 className="text-sm sm:text-base md:text-lg font-bold">{judge.name}</h3>
            
            {/* Position & Company */}
            <p className="text-xs sm:text-sm md:text-base font-semibold mt-1">{judge.position}</p>
            <p className="text-xs sm:text-sm md:text-base font-medium">{judge.company}</p>

            {/* Social Icons */}
            <div className="flex mt-3 space-x-4">
              <a href={judge.linkedin} target="_blank" rel="noopener noreferrer">
                <img 
                  src="/icons.png" 
                  alt="LinkedIn" 
                  className="w-10 h-10 sm:w-7 sm:h-7 hover:opacity-80 transition transform hover:scale-110"
                />
              </a>
              <a href={judge.email} target="_blank" rel="noopener noreferrer">
                <img 
                  src="/mail.png" 
                  alt="Email" 
                  className="w-10 h-10 sm:w-7 sm:h-7 hover:opacity-80 transition transform hover:scale-110"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Judges;
