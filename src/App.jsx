import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
import Lanyard from "./components/Lanyard/Lanyard";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import { listTools, listProyek } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal"; // <-- IMPORT MODAL
import Aurora from "./components/Aurora/Aurora";
import AOS from 'aos';
import ChatRoom from "./components/ChatRoom";
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null); // null = modal tertutup

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  // -------------------------

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload) {
      // Ambil path tanpa hash
      const baseUrl = window.location.origin + "/portofolio/";
      window.location.replace(baseUrl);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        <Aurora
          colorStops={["#3b0000", "#7a0000", "#1a0000"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <div className="flex items-center gap-3 mb-6 bg-zinc-900/80 border border-red-900/40 shadow-[0_0_15px_rgba(220,38,38,0.15)] w-fit p-4 rounded-2xl">              <img src="/assets/haikal1.png" className="w-10 rounded-md" />
              <q>Every pixel tells a story</q>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <ShinyText text="Hi I'm Haikal" disabled={false} speed={3} className='custom-class' />
            </h1>
            <BlurText
              text="A passionate Graphic Designer and Content Creator dedicated to transforming ideas into compelling visual stories and engaging digital campaigns."
              delay={150}
              animateBy="words"
              direction="top"
              className=" mb-6"
            />
            <div className="flex items-center sm:gap-4 gap-2">
              <a 
                href="/assets/CV.pdf" 
                download="Haikal_Pernandes_CV.pdf" 
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
              >
                <ShinyText text="Download CV" disabled={false} speed={3} className="custom-class" />
              </a>

              <a href="#project" className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors">
                <ShinyText text="Explore My Projects" disabled={false} speed={3} className="custom-class" />
              </a>
            </div>

          </div>
          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
            <ProfileCard
              name="Haikal Pernandes"
              title=""
              handle="hklprds"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/assets/haikal.png"
              miniAvatarUrl="/assets/haikal3.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked')}
            />
          </div>
        </div>
        {/* tentang */}
        <div className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-red-600/40 shadow-[0_0_30px_rgba(220,38,38,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6" id="about"> 
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-8" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-red-600/30">
              {/* Kolom kiri */}
              <div className="flex-1 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                  About Me
                </h2>

                <BlurText
                  text="Hallo i'm  Haikal, a creative Graphic Designer and Content Creator with a strong passion for visual storytelling. I specialize in designing engaging digital assets, such as posters, flyers, and social media campaigns, while also having solid skills in video editing. My goal is to craft compelling visual narratives that capture audience attention, communicate messages effectively, and strengthen brand identity in the digital space."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
                />

                <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      100<span className="text-red-600">+</span>
                    </h1>
                    <p>Editing (Photo&Video)</p>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      3<span className="text-red-600">+</span>
                    </h1>
                    <p>Years of Experience</p>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true">
                    <h1 className="text-3xl md:text-4xl mb-1">
                      3.78<span className="text-red-600">/4.00</span>
                    </h1>
                    <p>GPA</p>
                  </div>
                </div>


                <ShinyText
                  text="Where visual creativity meets digital strategy"
                  disabled={false}
                  speed={3}
                  className="text-sm md:text-base text-red-600"
                />
              </div>
            </div>

            {/* Kolom kanan */}
            <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center ">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </div>

        </div>
        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" >Tools & Technologies</h1>
          <p className="w-2/5 text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">My Profesional Skills</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map((tool) => (
              <div
                key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true"
                className="flex items-center gap-4 p-4 border border-zinc-800 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:border-red-900/60 hover:bg-red-950/30 transition-all duration-300 group shadow-lg"              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                />
                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <ShinyText
                      text={tool.nama}
                      disabled={false}
                      speed={3}
                      className="text-lg font-semibold block"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 truncate">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

{/* --- MULAI EXPERIENCE & ACHIEVEMENTS --- */}
        <div className="experience mt-32 max-w-5xl mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <h1 className="text-4xl font-bold mb-2 text-center text-white">Experience & Achievements</h1>
          <p className="text-base/loose text-center opacity-50 mb-14 text-zinc-300">Milestones in content creation, digital media management, and visual design.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Kartu Pengalaman 1 */}
            <div className="bg-zinc-900/60 border border-red-900/40 p-6 rounded-2xl hover:bg-red-950/30 hover:border-red-700 transition-all duration-300 shadow-lg">
              <h3 className="text-xl font-bold text-red-500 mb-1">Creative Media Dept. Manager</h3>
              <p className="text-sm text-zinc-400 mb-4">Ikatan Duta Bahasa Sumatra Barat • Jun 2025 - Present</p>
              <ul className="list-disc list-inside text-zinc-300 space-y-2 text-sm leading-relaxed">
                <li>Mengelola dan mengarahkan seluruh aktivitas media kreatif serta publikasi organisasi.</li>
                <li>Mengoordinasikan pembuatan aset desain grafis, foto, dan video.</li>
                <li>Merancang konsep publikasi strategis untuk mendukung program Duta Bahasa.</li>
              </ul>
            </div>

            {/* Kartu Pengalaman 2 */}
            <div className="bg-zinc-900/60 border border-red-900/40 p-6 rounded-2xl hover:bg-red-950/30 hover:border-red-700 transition-all duration-300 shadow-lg">
              <h3 className="text-xl font-bold text-red-500 mb-1">Creative Media & InfoComm</h3>
              <p className="text-sm text-zinc-400 mb-4">Forum GenRe & Senat Mahasiswa FST • 2023 - 2025</p>
              <ul className="list-disc list-inside text-zinc-300 space-y-2 text-sm leading-relaxed">
                <li>Memproduksi dan mendistribusikan konten media visual dan digital.</li>
                <li>Mengelola dokumentasi digital dan konten media sosial untuk menjangkau audiens.</li>
                <li>Mendukung strategi komunikasi digital melalui perencanaan konten visual yang terstruktur.</li>
              </ul>
            </div>

            {/* Kartu Pencapaian 1: Desain */}
            <div className="bg-zinc-900/60 border border-red-900/40 p-6 rounded-2xl hover:bg-red-950/30 hover:border-red-700 transition-all duration-300 shadow-lg">
              <h3 className="text-xl font-bold text-red-500 mb-1">Award-Winning Designer</h3>
              <p className="text-sm text-zinc-400 mb-4">National & University Level • 2024</p>
              <ul className="list-disc list-inside text-zinc-300 space-y-2 text-sm leading-relaxed">
                <li><span className="font-semibold text-white">1st Place:</span> Poster Design Competition GEMORAYA FST.</li>
                <li><span className="font-semibold text-white">2nd Place:</span> National Poster Design Kopma UIN IB & "World Mental Health Day".</li>
                <li><span className="font-semibold text-white">3rd Place:</span> National Poster Design "Independence Day".</li>
              </ul>
            </div>

            {/* Kartu Pencapaian 2: Duta & Beasiswa */}
            <div className="bg-zinc-900/60 border border-red-900/40 p-6 rounded-2xl hover:bg-red-950/30 hover:border-red-700 transition-all duration-300 shadow-lg">
              <h3 className="text-xl font-bold text-red-500 mb-1">Ambassador & Top Scholar</h3>
              <p className="text-sm text-zinc-400 mb-4">Regional & International Level • 2023 - 2025</p>
              <ul className="list-disc list-inside text-zinc-300 space-y-2 text-sm leading-relaxed">
                <li><span className="font-semibold text-white">Ambassador:</span> 3rd RU Duta Bahasa Sumbar, Most Talented Uda UIN IB, & Male GenRe Inspirational.</li>
                <li><span className="font-semibold text-white">Scholarships:</span> CIMB Niaga Awardee, Australia Smart Internship, Karya UIN, & GenRe Scholarship.</li>
              </ul>
            </div>

          </div>
        </div>
        {/* --- SELESAI EXPERIENCE & ACHIEVEMENTS --- */}
        {/* tentang */}

        {/* Proyek */}
        <div className="proyek mt-32 py-10" id="project" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"></div>
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Project</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Showcasing a selection of projects that reflect my skills, creativity, and passion for building meaningful digital experiences.</p>
        <div className="proyek-box mt-14" >

          <div style={{ height: 'auto', position: 'relative' }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true" >
            <ChromaGrid
              items={listProyek}
              onItemClick={handleProjectClick} // Kirim fungsi untuk handle klik
              radius={500}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>
        {/* Proyek */}


        {/* Kontak */}
        <div className="kontak mt-32 sm:p-10 p-0" id="contact">
          <h1
            className="text-4xl mb-2 font-bold text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Contact & Chat
          </h1>
          <p
            className="text-base/loose text-center mb-10 opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Get in touch with me or chat in real-time
          </p>

          {/* Container dua kolom */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Chat Room di kiri */}
            <div className="flex-1 bg-zinc-800 p-6 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
              <ChatRoom />
            </div>

            {/* Contact Form di kanan */}
            <div className="flex-1">
              <form
                action="https://formsubmit.co/kalprds26@gmail.com"
                method="POST"
                className="bg-zinc-800 p-10 w-full rounded-md"
                autoComplete="off"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Full Name</label>
                    <input
                      type="text"
                      name="Name"
                      placeholder="Input Name..."
                      className="border border-zinc-700 p-2 rounded-md bg-zinc-900/50 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600 transition-all text-white"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Email</label>
                    <input
                      type="email"
                      name="Email"
                      placeholder="Input Email..."
                      className="border border-zinc-700 p-2 rounded-md bg-zinc-900/50 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600 transition-all text-white"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-semibold">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      cols="45"
                      rows="7"
                      placeholder="Message..."
                      className="border border-zinc-700 p-2 rounded-md bg-zinc-900/50 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600 transition-all text-white"                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full w-full cursor-pointer border border-gray-700 hover:bg-[#222] transition-colors"
                    >
                      <ShinyText text="Send" disabled={false} speed={3} className="custom-class" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Kontak */}
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  )
}

export default App
