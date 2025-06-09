import React from "react";
import img1 from '../assets/about1.png';
import img2 from '../assets/about2.png';
import img3 from '../assets/about3.png';
import img4 from '../assets/about4.png';

const About = () => {
    return (
        <section id="about" className="w-full bg-gradient-to-b from-[#f6efe7] to-[#f3e2ce] pt-12 md:pt-20 pb-16 px-4 flex justify-center items-center border-t-4 border-[#e0c3a0]">
        <div className="max-w-[1000px] w-full mx-auto text-center">
            {/* Heading */}
            <div className="text-center mb-14">
            <h2 className="text-1xl md:text-2xl font-serif font-bold text-[#5c3b12] mb-4">
                Sweet Welcome<br />Fresh Flavors for Every Gues.
            </h2>
            <p className="text-[#7b4a16] text-[13px] md:text-[16px] max-w-2xl mx-auto">
                Sejak 2022, Srii Bakery hadir sebagai pilihan roti dan kue rumahan yang selalu fresh dan penuh rasa. 
                Dibuat tanpa pengawet, menggunakan bahan pilihan, dan dipanggang setiap hari kami ingin menyuguhkan 
                kualitas terbaik di setiap gigitan.
            </p>
            </div>

            {/* Grid Item */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
            {[{ img: img1, title: 'Kings Cream Ring', desc: 'Roti khas berbentuk cincin yang lembut, dipenuhi krim manis dan dihiasi buah kering serta taburan kacang.' },
            { img: img2, title: 'Cinnamon Roll', desc: 'lembut dengan aroma kayu manis yang khas.' },
            { img: img3, title: 'Choco Pastry Roll', desc: 'Pastry lembut berlapis cokelat manis di bagian dalam, dibalut kulit renyah dan ditaburi meses cokelat di atasnya.' },
            { img: img4, title: 'Caramel Nut Layer Cake', desc: 'Kue berlapis krim karamel dengan taburan kacang renyah dan gula halus. Manis, lembut, dan garing dalam satu gigitan.' }
            ].map((item, i) => (
                <div key={i} className="flex items-center sm:items-start gap-4 text-left">
                <img
                    src={item.img}
                    alt={`item ${i + 1}`}
                    className="w-24 h-24 sm:w-28 sm:h-28 object-contain bg-transparent rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                    style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))" }}
                />
                <div>
                    <h3 className="text-base font-semibold text-[#7b4a16] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#5c3b12] leading-snug">{item.desc}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};

export default About;