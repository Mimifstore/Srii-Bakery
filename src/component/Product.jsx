import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Product = () => {
    const [products, setProducts] = useState([]);

    const API_KEY = 'moNqZbnrsbMmIWai1ZirVznAz6SZWfIXvyqYV1xtwUCVJQuNB7ArglWq'; 
    useEffect(() => {
        getBakeryImages();
    }, []);

    const getBakeryImages = async () => {
        try {
        const res = await axios.get('https://api.pexels.com/v1/search', {
            headers: {
            Authorization: API_KEY
            },
            params: {
            query: 'single bakery',
            per_page: 6
            }
        });

        setProducts(res.data.photos);
        } catch (err) {
        console.error('Gagal fetch gambar:', err);
        }
    };

    return (
        <section id='product' className="bg-[#fff5eb] py-20 px-4">
        <h2 className="text-2xl font-bold text-center text-[#7b4a16] mb-12">Spesial Bakery</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <img
                src={item.src.large}
                alt={item.alt}
                className="w-full h-48 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                />
                <div className="p-4 flex flex-col items-start justify-between">
                <h3 className="text-base font-medium text-[#7b4a16] mb-1">{item.alt || 'Roti Lezat'}</h3>
                {/* <p className="text-[#7b4a16] font-medium mb-2">Rp. {25000 + index * 5000}</p> */}
                <p className="text-[#7b4a16] font-medium mb-2">Rp {(Math.floor(Math.random() * 20000) + 15000).toLocaleString('id-ID')}</p>
                <button className="mt-auto bg-[#7b4a16] hover:bg-yellow-700 text-white px-4 py-2 rounded cursor-pointer">
                    🛒 Add Chart
                </button>
                </div>
            </div>
            ))}
        </div>
        </section>
    );
};

export default Product;