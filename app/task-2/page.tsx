import Image from "next/image"; // Kita butuh ini buat nampilin SVG

export default function Task2Page() {
  const tasks = [
    { 
      title: "Adobe Photoshop", 
      category: "Design", 
      time: "in 3 days", 
      color: "bg-[#E0F7FA]", 
      textColor: "text-[#006064]",
      icon: "/palette.svg" // Ikon Design dari folder public
    },
    { 
      title: "DALL·E 2, Midjourney, Stable Diffusion", 
      category: "AI", 
      time: "in 5 days", 
      color: "bg-[#E8F5E9]", 
      textColor: "text-[#1B5E20]",
      icon: "/AI.svg" // Pastikan file AI.svg ini ada di folder public/
    },
    { 
      title: "Figma", 
      category: "Design", 
      time: "8 hours ago", 
      color: "bg-[#F3E5F5]", 
      textColor: "text-[#4A148C]",
      icon: "/palette.svg" 
    },
    { 
      title: "Python", 
      category: "Codding", 
      time: "2 days ago", 
      color: "bg-[#FFF3E0]", 
      textColor: "text-[#E65100]",
      icon: "/codding.svg" // Ikon Coding dari folder public
    },
    { 
      title: "Sketch", 
      category: "Design", 
      time: "4 days ago", 
      color: "bg-[#FCE4EC]", 
      textColor: "text-[#880E4F]",
      icon: "/palette.svg" 
    },
  ];

  return (
    <div className="min-h-screen bg-white p-6 md:p-12 font-sans relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Logo 'W' di Pojok Kiri Atas */}
        <div className="absolute top-10 left-10">
          <Image 
            src="/vercel.svg" // Ganti dengan logo 'W' yang benar kalau ada, sementara pakai logo Vercel biar ada isinya
            alt="Logo" 
            width={30} 
            height={30}
            className="opacity-60"
          />
        </div>

        {/* Jarak dari Logo ke Grid */}
        <div className="pt-20">
          
          {/* Grid Utama (6 Kolom) */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            
            {/* Baris Pertama: 2 Kartu Lebar */}
            {tasks.slice(0, 2).map((item, index) => (
              <div key={index} className={`${item.color} md:col-span-3 p-10 rounded-[45px] flex flex-col justify-between min-h-[320px] shadow-sm relative group`}>
                
                {/* Bagian Atas: Kategori + Ikon */}
                <div className="flex items-center gap-3">
                  <Image 
                    src={item.icon} 
                    alt={item.category} 
                    width={18} 
                    height={18}
                    className="opacity-70"
                  />
                  <span className={`text-sm font-black uppercase tracking-widest ${item.textColor}`}>{item.category}</span>
                </div>

                {/* Judul (Dibuat lebar agar teks jatuh ke bawah jika terlalu panjang) */}
                <h2 className={`text-4xl font-extrabold ${item.textColor} leading-tight w-3/4`}>{item.title}</h2>

                {/* Waktu (Mepet ke bawah) */}
                <p className={`text-sm font-bold ${item.textColor} opacity-60`}>{item.time}</p>
                
                {/* Ikon tambahan di pojok kanan atas kartu AI */}
                {item.category === "AI" && (
                   <div className="absolute top-10 right-10 text-xl text-green-900 opacity-60">★</div>
                )}
              </div>
            ))}

            {/* Baris Kedua: 3 Kartu Kecil */}
            {tasks.slice(2).map((item, index) => (
              <div key={index} className={`${item.color} md:col-span-2 p-10 rounded-[45px] flex flex-col justify-between min-h-[320px] shadow-sm`}>
                
                {/* Bagian Atas: Kategori + Ikon */}
                <div className="flex items-center gap-3">
                  <Image 
                    src={item.icon} 
                    alt={item.category} 
                    width={18} 
                    height={18}
                    className="opacity-70"
                  />
                  <span className={`text-sm font-black uppercase tracking-widest ${item.textColor}`}>{item.category}</span>
                </div>

                {/* Judul */}
                <h2 className={`text-4xl font-extrabold ${item.textColor} leading-tight`}>{item.title}</h2>

                {/* Waktu */}
                <p className={`text-sm font-bold ${item.textColor} opacity-60`}>{item.time}</p>
              </div>
            ))}
            
          </div>
        </div>

        {/* Footer 'Day 020 / 365' */}
        <div className="mt-16 text-right">
          <p className="text-gray-400 font-bold tracking-widest text-sm">Day 020 / 365</p>
        </div>
      </div>
    </div>
  );
}