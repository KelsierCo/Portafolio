import { useState } from 'preact/hooks';
import avion from '../assets/images/avion.webp';

export type ExperienceItem = {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type Point = { x: number; y: number };

function getCubicBezierXYatT(
  startPt: Point,
  controlPt1: Point,
  controlPt2: Point,
  endPt: Point,
  T: number
): Point {
  const x = Math.pow(1 - T, 3) * startPt.x
    + 3 * Math.pow(1 - T, 2) * T * controlPt1.x
    + 3 * (1 - T) * Math.pow(T, 2) * controlPt2.x
    + Math.pow(T, 3) * endPt.x;
  const y = Math.pow(1 - T, 3) * startPt.y
    + 3 * Math.pow(1 - T, 2) * T * controlPt1.y
    + 3 * (1 - T) * Math.pow(T, 2) * controlPt2.y
    + Math.pow(T, 3) * endPt.y;
  return { x, y };
}

interface Props {
  experience: ExperienceItem[];
}

export default function ExperienceLineIsland({ experience }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const n = experience.length;
  const startPt = { x: 0, y: 50 };
  const controlPt1 = { x: 200, y: 0 };
  const controlPt2 = { x: 700, y: 100 };
  const endPt = { x: 900, y: 50 };
  const flagPositions = Array.from({ length: n }, (_, i) => {
    const t = (i + 1) / (n + 1);
    return getCubicBezierXYatT(startPt, controlPt1, controlPt2, endPt, t);
  });

  return (
    <div class='mb-28'>
        <div class="flex" id="lineaExperience">
            <svg class="absolute w-full -translate-x-72 translate-y-20" height="160" viewBox="0 0 900 200" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0 50 C 200 0, 700 100, 900 50" stroke="black" stroke-width="2" fill="transparent" />
            {flagPositions.map((pos, index) => (
                <g key={index} class='z-10'>
                    {/* Mástil de la bandera */}
                    <line
                        x1={pos.x}
                        y1={pos.y}
                        x2={pos.x}
                        y2={pos.y + 38}
                        stroke="#222"
                        strokeWidth={3}
                    />
                    {/* Bandera con triángulo inferior */}
                    <g style={{ cursor: 'pointer' }} onClick={() => setSelectedIndex(index)}>
                        {/* Bordes de la bandera: solo lados y parte superior */}
                        <path
                            d={`
                                M ${pos.x - 20} ${pos.y + 48}
                                Q ${pos.x - 20} ${pos.y + 38} ${pos.x - 10} ${pos.y + 38}
                                L ${pos.x + 10} ${pos.y + 38}
                                Q ${pos.x + 20} ${pos.y + 38} ${pos.x + 20} ${pos.y + 48}
                                L ${pos.x + 20} ${pos.y + 110}
                                L ${pos.x - 20} ${pos.y + 110}
                                Z
                            `}
                            fill={index % 2 === 0 ? '#31E981' : '#AE8ABC'}
                        />
                        {/* Triángulo rectángulo inferior izquierdo */}
                        <polygon
                            points={`
                                ${pos.x - 20},${pos.y + 109}
                                ${pos.x},${pos.y + 109}
                                ${pos.x - 20},${pos.y + 125}
                            `}
                            fill={index % 2 === 0 ? '#31E981' : '#AE8ABC'}
                        />
                        {/* Triángulo rectángulo inferior derecho */}
                        <polygon
                            points={`
                                ${pos.x},${pos.y + 109}
                                ${pos.x + 20},${pos.y + 109}
                                ${pos.x + 20},${pos.y + 125}
                            `}
                            fill={index % 2 === 0 ? '#31E981' : '#AE8ABC'}
                        />
                    </g>
                    {/* Texto de la bandera */}
                    <text
                        x={pos.x}
                        y={pos.y + 70}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#082D0F"
                        fontSize={18}
                        fontFamily="inherit"
                        style={{ cursor: 'pointer', writingMode: 'vertical-rl', glyphOrientationVertical: 0 }}
                        onClick={() => setSelectedIndex(index)}
                    >
                        {experience[index].company}
                    </text>
                    {/* Círculo en la curva */}
                    <circle
                        cx={pos.x}
                        cy={pos.y}
                        r={8}
                        fill={selectedIndex === index ? index % 2 === 0 ? '#31E981' : '#AE8ABC' : '#222'}
                        stroke={index % 2 === 0 ? '#31E981' : '#AE8ABC'}
                        strokeWidth={3}
                        style="cursor:pointer"
                        onClick={() => setSelectedIndex(index)}
                    />
                </g>
            ))}
            </svg>
            <img src={avion.src} alt="Imagen de experiencia" class="py-10 scale-x-[-1] inline-block" />
        </div>
        <div class="border border-gray-700 p-4 my-16 rounded-xl experiencia bg-gray-300 min-h-[240px] flex flex-col justify-between">
            <div>
                <h3 class="text-lg font-semibold text-secondary">{experience[selectedIndex].title}</h3>
                <h4 class="text-md">{experience[selectedIndex].company}</h4>
                <time class="text-sm text-gray-500">
                    {experience[selectedIndex].startDate} a {experience[selectedIndex].endDate}
                </time>
                <p class="text-black mt-2">{experience[selectedIndex].description}</p>
            </div>
            <hr class="mt-4 border-gray-700" />
        </div>
    </div>
  );
}
