import React from "react";
import TestimonialCard from "./TestimonialCard";
import testimonials from "../data/testimonials";

const Testimonials = () => {
    return (
        <section className="py-10 bg-white text-center">
        <h2 className="text-2xl font-bold mb-6">What Our Customers Say</h2>
        <div className="flex flex-wrap gap-6 justify-center">
            {testimonials.map((item, index) => (
            <TestimonialCard
                key={index}
                {...item}
                direction={index % 2 === 0 ? "left" : "right"}
            />
            ))}
        </div>
        </section>
    );
};

export default Testimonials;
