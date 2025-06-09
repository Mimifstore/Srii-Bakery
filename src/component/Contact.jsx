import { FaWhatsapp, FaInstagram, FaTwitter, FaGooglePlusG } from "react-icons/fa";

const Footer = () => {
    return (
        <footer id="contact" className="bg-white text-gray-700 text-sm pt-12 pb-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
            {/* Judul & Deskripsi */}
            <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-[#8B4513] mb-2">INFO FROM US</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
                Roti lembut, enak, dan fresh setiap hari. Hubungi kami untuk info pemesanan, kerja sama, dan lainnya.
            </p>
            </div>

            {/* Konten Bawah: Links + Sosial + Payment */}
            <div className="flex flex-wrap sm:flex-nowrap justify-between items-center border-t border-[#8B4513] pt-6 gap-6 sm:gap-0">
            {/* Link Company */}
            <div className="text-left text-gray-600">
                <p className="font-semibold mb-2">Occasions</p>
                <ul className="space-y-1">
                    <li>Wedding</li>
                    <li>Birthday</li>
                    <li>Graduation</li>
                    <li>Special Event</li>
                </ul>
            </div>

            {/* Social + Payment */}
            <div className="flex flex-col items-center gap-4">
                {/* Sosial Media */}
                <div className="flex gap-4 mt-4 justify-center">
                    <a
                        href="https://wa.me/6281288492802"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-green-500 text-xl"
                    >
                        <FaWhatsapp />
                    </a>
                    <a
                        href="https://instagram.com/mief0_7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-pink-500 text-xl"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://twitter.com/mifta94236"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-400 text-xl"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="https://plus.google.com/hulhikammiftah@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-red-500 text-xl"
                    >
                        <FaGooglePlusG />
                    </a>
                </div>
            </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center mt-6 text-gray-400 text-xs">
            Terms of Use | Privacy Policy  
            <br />
            © 2025 Srii Bakery. All rights reserved.
            </div>
        </div>
        </footer>
    );
};

export default Footer;