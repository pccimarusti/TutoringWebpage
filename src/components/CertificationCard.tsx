import React from "react";
import { motion, Variants } from "framer-motion";
import { fadeInUp } from "../constants/animations";

interface CertificationCardProps {
    title: string;
    issuer: string;
    url: string;
    image?: string;
    description: string;
    skills: string[];
    github?: string;
    date: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
    title,
    issuer,
    url,
    image,
    description,
    skills,
    github,
    date,
}) => {
return (
    <motion.div
        variants={fadeInUp as Variants}
        exit={{ opacity: 0, scale: 0.8 }}
        className="relative w-full max-w-3xl bg-gradient-to-r from-cyan-500 to-blue p-[2px] rounded-xl"
    >
    <div className="flex flex-col justify-between gap-4 rounded-xl bg-[#15181F] p-6">
        {/* Title, Issuer, Date, Buttons */}
        <div className="flex justify-between items-start">
        <div>
            <h6 className="text-lg font-semibold text-white">{title}</h6>
            <p className="text-sm text-neutral-400">{issuer}</p>
            <p className="text-sm text-neutral-500 italic">{date}</p>
        </div>
        <div className="flex space-x-2">
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-cyan-600 px-3 py-1 text-xs font-medium text-white transition-all hover:bg-cyan-700 hover:underline"
                aria-label={`View certificate: ${title}`}
            >
                View PDF
            </a>
            {github && (
            <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-cyan-600 px-3 py-1 text-xs font-medium text-white transition-all hover:bg-cyan-700 hover:underline"
                aria-label={`View GitHub: ${github}`}
            >
                View GitHub
            </a>
            )}
        </div>
        </div>

        {/* Certificate Image */}
        {image && (
        <motion.img
            loading="lazy"
            src={image}
            alt={`${title} certificate`}
            className="w-full h-56 sm:h-64 md:h-72 object-contain rounded-lg mt-2 transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        />
        )}

        {/* Description */}
        <motion.p
            variants={fadeInUp as Variants}
            className="text-neutral-400 mt-2"
        >
            {description}
        </motion.p>

        {/* Skills */}
        <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
            <motion.span
                key={idx}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="rounded-full bg-cyan-600 px-3 py-1 text-xs font-medium text-white hover:bg-cyan-700 transition-all"
            >
                {skill}
            </motion.span>
            ))}
        </div>
    </div>
    </motion.div>
    );
};

export default CertificationCard;