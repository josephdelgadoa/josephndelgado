import {
    Palette,
    Brain,
    Layout,
    Code,
    Terminal,
    Globe
} from 'lucide-react';
import afficientSatImg from './assets/afficient-sat-01.jpeg';
import afficientMathImg from './assets/afficient-math-01.jpeg';
import afficientEnglishImg from './assets/afficient-english-01.jpeg';
import vallartaVowsImg from './assets/vallarta-vows-marketing-suite-01.png';
import type { Project, Service } from './types';

// Placeholder images - in a real scenario these would be imported assets
const PLACEHOLDER_IMG = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop";

export const PROJECTS: Project[] = [
    {
        id: "afficient-sat",
        title: "Afficient SAT",
        category: "EdTech Platform",
        subtitle: "AI-Driven Learning Optimization",
        tools: ["Figma", "React", "AI Algorithms", "Data Viz"],
        image: afficientSatImg,
        description: "An intelligent adaptive learning platform preparing students for SATs.",
        challenge: <>SAT preparation tools often overwhelm students with static practice and generic pacing. Students struggled to understand <strong>which specific skills were holding them back</strong>, how those weaknesses impacted their projected SAT score, and what to focus on next—leading to inefficient study time and disengagement.</>,
        research: <>Working closely with educators, engineers, and academic leadership, we analyzed <strong>hundreds of real student learning sessions</strong> across SAT Math. By examining skill-level accuracy, time-to-solve patterns, and progression data, we identified that students needed:
            <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
                <li>Clear visibility into <strong>skill dependencies and mastery status</strong></li>
                <li>Immediate feedback that connects performance to score outcomes</li>
                <li>Practice that dynamically prioritizes <strong>high-impact weaknesses,</strong> not volume</li>
            </ul>
            These insights aligned with Afficient’s core learning engine, which models skills, proficiency levels, accuracy, and speed to predict test outcomes.</>,
        solution: <>I led the design of an <strong>AI-driven SAT dashboard experience</strong> that transforms complex learning data into actionable guidance:
            <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
                <li>A <strong>skill-based progression model</strong> that tracks mastery from “To Be Learned” through Proficient</li>
                <li>Real-time adaptation of problem sets based on <strong>accuracy, speed, and improvement factor</strong></li>
                <li>Predictive scoring visuals that show how mastering specific skills impacts the <strong>projected SAT score</strong></li>
                <li>A focused practice flow that continuously surfaces the <strong>highest-value skills</strong> to improve next</li>
            </ul>
            The result is a system that personalizes SAT preparation at the skill level, while remaining intuitive and motivating for students.</>,
        impact: <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>+15% average improvement in student SAT scores</li>
            <li>+40% increase in engagement, driven by clearer goals and adaptive feedback</li>
            <li>Reduced cognitive load by replacing generic drills with targeted, data-driven practice</li>
            <li>Stronger alignment between student effort and measurable score outcomes</li>
        </ul>,
        url: "https://sat.afficienta.com/"
    },
    {
        id: "afficient-act",
        title: "Afficient ACT",
        category: "EdTech Platform",
        subtitle: "Adaptive ACT Test Preparation Platform",
        tools: ["UX Research", "Interaction Design", "Prototyping", "Design Systems", "Data-Driven UX"],
        image: PLACEHOLDER_IMG,
        description: "Adaptive ACT Test Preparation Platform",
        challenge: <>ACT preparation requires students to perform well across <strong>multiple subjects under strict time constraints.</strong> Existing tools focused heavily on content delivery but failed to help students understand how <strong>accuracy, speed, and consistency directly affect ACT scores.</strong> Students practiced extensively without clarity on <strong>where they were losing points</strong> or <strong>how to improve efficiently.</strong></>,
        research: <>I worked closely with <strong>educators, engineers, and academic leadership</strong> to analyze <strong>real student performance data</strong> across <strong>ACT Math, English, Reading, and Science.</strong> Key insights included:
            <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
                <li><strong>Time management is as critical as correctness</strong> for ACT success</li>
                <li>Students struggle to translate practice results into <strong>score impact awareness</strong></li>
                <li><strong>Generic practice leads to diminishing returns</strong> without prioritization</li>
            </ul>
            We identified the need for an experience that adapts not just by subject, but by skill performance and time efficiency.</>,
        solution: <>I led the design of an <strong>ACT-focused adaptive learning system</strong> that connects <strong>performance data directly to score readiness:</strong>
            <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
                <li>A <strong>skill-based practice engine</strong> that tracks <strong>accuracy and time-to-solve per skill</strong></li>
                <li>Adaptive problem selection that prioritizes high-impact, time-sensitive weaknesses</li>
                <li>Predictive readiness indicators showing progress toward target ACT scores</li>
                <li>Contextual in-product guidance that helps students optimize pacing strategies</li>
            </ul>
            The UX translates complex performance modeling into a clear, motivating preparation experience.</>,
        impact: <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Improved ACT readiness through targeted, time-aware practice</li>
            <li>Increased student engagement by making score impact visible and actionable</li>
            <li>Reduced wasted study time by focusing on skills with the highest improvement potential</li>
            <li>Established a scalable ACT UX framework aligned with other Afficient products</li>
        </ul>
    },
    {
        id: "myaa",
        title: "Afficient Math",
        category: "EdTech Platform",
        subtitle: "Self-Paced, Adaptive Mathematics Learning Platform",
        tools: ["UX Research", "Interaction Design", "Data-Driven UX", "Prototyping", "Design Systems"],
        image: afficientMathImg,
        description: "Self-Paced, Adaptive Mathematics Learning Platform",
        challenge: <>Students often struggle with math programs that are either <strong>too linear or too generic.</strong> Traditional platforms fail to adapt to individual learning gaps, leaving students practicing concepts they already know while missing <strong>foundational skills</strong> that block progress. Parents and educators also lacked clear visibility into <strong>true mastery versus surface-level completion.</strong></>,
        research: <>I collaborated with educators and engineers to analyze <strong>hundreds of real student learning sessions</strong>, focusing on:
            <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
                <li><strong>Skill-level accuracy trends</strong></li>
                <li><strong>Time-to-solve data</strong> across sessions</li>
                <li>Patterns of regression when foundational skills were weak</li>
            </ul>
            We identified that effective math learning requires:
            <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
                <li>A clear <strong>skill dependency model</strong></li>
                <li>Continuous measurement of <strong>accuracy and speed</strong>, not completion</li>
                <li>Practice that dynamically prioritizes <strong>high-impact weaknesses</strong></li>
            </ul>
            These insights reinforced the need for a system that adapts at the skill level, not the lesson level.</>,
        solution: <>I led the UX design of a <strong>skill-based adaptive learning experience</strong> built around Afficient Math’s core learning engine:
            <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
                <li>A structured <strong>Skills Hierarchy</strong> that mirrors real curriculum dependencies</li>
                <li>Progressive learning sessions (<strong>Learning → Proficiency → Afficiency → Test</strong>) designed for cognitive reinforcement</li>
                <li>Adaptive problem selection driven by <strong>weighted accuracy, response time, and improvement factor</strong></li>
                <li>Clear visual feedback showing <strong>mastery progression</strong> and readiness for grade-level advancement</li>
            </ul>
            The interface transforms complex learning logic into an experience that feels focused, motivating, and easy to follow for students, parents, and educators.</>,
        impact: <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Improved student mastery and retention through <strong>targeted skill remediation</strong></li>
            <li>Reduced time spent on ineffective practice by prioritizing <strong>skills with the highest improvement potential</strong></li>
            <li>Increased student confidence through <strong>visible progress</strong> and <strong>predictive readiness indicators</strong></li>
            <li>Established a <strong>scalable UX foundation</strong> reused across other Afficient products (SAT, ACT, English)</li>
        </ul>
    },
    {
        id: "afficient-english",
        title: "Afficient English",
        category: "EdTech Platform",
        subtitle: "Adaptive English Language & Literacy Learning Platform",
        tools: ["UX Research", "Information Architecture", "Interaction Design", "Prototyping", "Design Systems"],
        image: afficientEnglishImg,
        description: "Adaptive English Language & Literacy Learning Platform",
        challenge: <>English learning platforms often treat reading, writing, vocabulary, and grammar as isolated activities. Students struggled to build <strong>foundational language skills progressively</strong>, while parents and educators lacked visibility into whether learners were truly developing comprehension and language fluency—not just completing exercises.</>,
        research: <>I partnered with educators and internal stakeholders to analyze <strong>student learning behaviors</strong> across multiple English skill areas, including reading comprehension, vocabulary acquisition, and grammar usage. Through usage analysis and educator feedback, we identified that:
            <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
                <li>Language mastery depends on <strong>incremental skill building</strong>, not content volume</li>
                <li>Students lose confidence when difficulty increases without <strong>clear scaffolding</strong></li>
                <li>Parents need transparent indicators of <strong>real language progress</strong>, not time spent</li>
            </ul>
            These insights highlighted the need for an adaptive system that reinforces language fundamentals while continuously adjusting to each learner’s pace.</>,
        solution: <>I led the design of a <strong>skill-driven English learning experience</strong> that adapts content based on ongoing performance:
            <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
                <li>A <strong>modular skill progression model</strong> spanning vocabulary, grammar, reading, and writing</li>
                <li>Adaptive practice that adjusts difficulty based on <strong>accuracy and consistency</strong></li>
                <li>Clear <strong>visual indicators</strong> that show language mastery and readiness to advance</li>
                <li>A <strong>clean, focused interface</strong> that reduces cognitive load while encouraging daily practice</li>
            </ul>
            The experience balances structured learning with flexibility, helping students build confidence and fluency over time.</>,
        impact: <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Improved reading comprehension and language retention through <strong>progressive skill reinforcement</strong></li>
            <li>Increased student engagement driven by visible progress and <strong>adaptive feedback</strong></li>
            <li>Reduced frustration by aligning content difficulty with <strong>individual learner readiness</strong></li>
            <li>Delivered a <strong>scalable UX framework</strong> that integrates seamlessly with the <strong>Afficient ecosystem</strong></li>
        </ul>
    },
    {
        id: "vallarta-vows",
        title: "Vallarta Vows – Marketing Suite",
        category: "Marketing & Conversion System",
        subtitle: "AI-Powered Marketing & Conversion System for a Luxury Wedding Brand",
        tools: ["UX Research", "Conversion-Focused UX", "Landing Page Design", "AI Content Workflows", "Analytics & SEO Strategy"],
        image: vallartaVowsImg,
        description: "AI-Powered Marketing & Conversion System for a Luxury Wedding Brand",
        challenge: <>Luxury wedding services rely heavily on <strong>emotion, trust, and timing</strong>, yet Vallarta Vows lacked a cohesive system to <strong>attract, nurture, and convert high-intent couples</strong> across digital touchpoints.<br /><br />Key challenges included:
            <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
                <li>Fragmented marketing assets across platforms</li>
                <li>No clear funnel from <strong>first impression to consultation booking</strong></li>
                <li>Difficulty communicating <strong>premium value</strong> while maintaining elegance</li>
                <li>Low visibility into which channels and content drove conversions</li>
            </ul></>,
        research: <>I analyzed <strong>user behavior, inquiry patterns, and competitive luxury wedding brands</strong>, while collaborating closely with the founder and marketing stakeholders.<br /><br />Key insights:
            <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
                <li>Couples make decisions based on <strong>visual storytelling and emotional reassurance</strong></li>
                <li>Trust increases when content feels <strong>curated, personal, and seamless</strong></li>
                <li>Conversion improves when messaging is <strong>simple, guided, and low-friction</strong></li>
                <li>SEO-driven discovery must align with <strong>high-end brand perception</strong>, not mass-market tactics</li>
            </ul></>,
        solution: <>I led the design of the <strong>Vallarta Vows Marketing Suite</strong>—a unified, AI-enhanced system designed to drive <strong>qualified leads and premium conversions</strong>:
            <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
                <li><strong>High-conversion landing pages</strong> with clear emotional storytelling and CTAs</li>
                <li>A <strong>visual-first content system</strong> aligned with luxury wedding aesthetics</li>
                <li><strong>AI-assisted blog and content workflows</strong> to scale SEO without sacrificing tone</li>
                <li>A structured <strong>lead capture and consultation funnel</strong> optimized for trust and clarity</li>
                <li>Modular components reusable across <strong>ads, social, and long-form content</strong></li>
            </ul>
            The suite transforms marketing from scattered assets into a <strong>cohesive conversion experience</strong>.</>,
        impact: <ul className="list-disc pl-5 mt-2 space-y-2">
            <li><strong>Increased lead quality</strong> by aligning content with <strong>high-intent couples</strong></li>
            <li><strong>Improved consultation bookings</strong> through simplified, trust-driven flows</li>
            <li><strong>Stronger brand positioning</strong> as a premium, full-service wedding planner</li>
            <li><strong>Scalable marketing foundation</strong> supporting SEO, paid ads, and social growth</li>
            <li>Reduced manual effort through <strong>AI-powered content automation</strong></li>
        </ul>
    },
    {
        id: "nutriviva",
        title: "Nutriviva",
        category: "Health & Wellness",
        subtitle: "Personalized Nutrition Ecosystem",
        tools: ["Adobe XD", "User Testing", "Visual Design"],
        image: PLACEHOLDER_IMG,
        description: "A comprehensive platform for tracking nutrition and health goals.",
        challenge: "Generic nutrition apps fail to account for individual metabolic differences.",
        research: "Collaborated with nutritionists to understand key health metrics.",
        solution: "Developed a modular dashboard visualizing complex health data simply.",
        impact: "Rated 4.8/5 on App Store with over 10k active monthly users."
    },
    {
        id: "autopilot-ux",
        title: "AutoPilot UX",
        category: "Automotive",
        subtitle: "Next-Gen In-Car Interface",
        tools: ["Figma", "ProtoPie", "HMI Design"],
        image: PLACEHOLDER_IMG,
        description: "Redefining the driver experience for autonomous vehicles.",
        challenge: "Trust and clarity in semi-autonomous driving modes.",
        research: "Simulated driving scenarios to test reaction times and clarity.",
        solution: "Immersive HUD and console design focusing on trust and status visibility.",
        impact: "Adopted as the standard interface concept for 2025 model prototypes."
    },
    {
        id: "finexa-bank",
        title: "Finexa Bank",
        category: "FinTech",
        subtitle: "Modern Digital Banking",
        tools: ["Sketch", "Design Systems", "Accessibility"],
        image: PLACEHOLDER_IMG,
        description: "A complete redesign of a legacy banking application.",
        challenge: "Complex, outdated navigation causing user frustration.",
        research: "Audit of existing flows and competitive analysis of challenger banks.",
        solution: "Clean, card-based UI with simplified transfer flows and dark mode.",
        impact: "Increased mobile transaction volume by 25% post-launch."
    },
    {
        id: "trupik",
        title: "Trupik Mobile App",
        category: "On-Demand Mobile Platform",
        subtitle: "On-Demand Mobile Platform (iOS & Android)",
        tools: ["Sketch", "InVision", "Adobe Illustrator", "Information Architecture", "Mobile Design Systems"],
        image: PLACEHOLDER_IMG,
        description: "On-Demand Mobile Platform (iOS & Android)",
        challenge: <>Trupik needed a <strong>mobile-first experience</strong> that could translate complex business requirements into a <strong>simple, intuitive on-demand app</strong> for both iOS and Android. The challenge was to design a unified experience across platforms while maintaining native interaction patterns, performance expectations, and visual consistency—under aggressive startup timelines.</>,
        research: <>I collaborated closely with <strong>product managers and developers</strong> to understand user goals, technical constraints, and market expectations for mobile experiences. Through early wireframing, flow validation, and design reviews, we identified that success depended on:
            <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
                <li>Clear, <strong>frictionless user flows</strong> optimized for mobile usage</li>
                <li>Visual clarity that supports <strong>speed and confidence</strong> in decision-making</li>
                <li>Consistent interaction patterns across <strong>Android and iOS</strong>, without sacrificing platform conventions</li>
            </ul></>,
        solution: <>I owned the <strong>end-to-end UI/UX design process</strong> for the Trupik mobile applications:
            <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
                <li>Designed <strong>low-fidelity wireframes</strong> and user flows in Sketch to validate structure and navigation</li>
                <li>Created <strong>high-fidelity visual designs</strong> aligned with mobile-first principles</li>
                <li>Built <strong>interactive prototypes in InVision</strong> to simulate real user interactions and validate flows</li>
                <li>Partnered directly with engineering to ensure designs were <strong>feasible, scalable, and implementation-ready</strong></li>
                <li>Iterated rapidly based on feedback from stakeholders and internal testing</li>
            </ul>
            The result was a polished, intuitive mobile experience ready for development across both platforms.</>,
        impact: <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Delivered a <strong>production-ready UI/UX system</strong> for both iOS and Android</li>
            <li>Accelerated development by providing <strong>clear, interactive prototypes</strong></li>
            <li>Reduced design-to-development friction through close <strong>cross-functional collaboration</strong></li>
            <li>Established a <strong>mobile UX foundation</strong> that supported future product iterations</li>
        </ul>
    },
    {
        id: "city-sunnyvale",
        title: "City of Sunnyvale",
        category: "Government",
        subtitle: "Civic Engagement Portal",
        tools: ["Service Design", "Webflow", "Accessibility"],
        image: PLACEHOLDER_IMG,
        description: "Modernizing the digital presence of a major Silicon Valley city.",
        challenge: "Inaccessible information and disjointed services for residents.",
        research: "Community workshops and accessibility audits (WCAG 2.1).",
        solution: "Accessible, mobile-first portal with clear service navigation.",
        impact: "Awarded 'Best Civic Website' regional recognition 2024."
    }
];

export const SERVICES: Service[] = [
    {
        id: "ux-research",
        title: "UX Research & Strategy",
        description: "Deep dive user analysis, personas, and journey mapping to build solid foundations.",
        icon: Brain
    },
    {
        id: "ui-design",
        title: "UI & Visual Design",
        description: "Creating stunning, pixel-perfect interfaces with robust design systems.",
        icon: Palette
    },
    {
        id: "ai-product",
        title: "AI Product Design",
        description: "Integrating LLMs and generative AI into intuitive user experiences.",
        icon: Terminal
    },
    {
        id: "frontend",
        title: "Frontend Engineering",
        description: "Building responsive, accessible web applications with React and Tailwind.",
        icon: Code
    },
    {
        id: "prototyping",
        title: "Interactive Prototyping",
        description: "High-fidelity prototypes to validate concepts before development.",
        icon: Layout
    },
    {
        id: "web-dev",
        title: "Web Development",
        description: "Full-cycle website creation from concept to deployment.",
        icon: Globe
    }
];

export const RESUME_CONTENT = {
    name: "Joseph N. Delgado",
    title: "Senior UX/UI Designer & AI Product Specialist",
    summary: "Over 20 years of experience bridging the gap between design and engineering. Specialized in building intuitive, AI-driven digital experiences that solve complex problems. Passionate about luxury aesthetics and pixel-perfect implementation.",
    experience: [
        {
            role: "Sr. Software Engineer (UI/UX Specialist)",
            company: "Afficient Academy · San Jose, California (On-site)",
            period: "Nov 2014 - Present",
            description: <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Spearheaded the UX/UI design for the flagship Afficient SAT Test Preparation platform, orchestrating the entire user journey from diagnostic assessment to a personalized, adaptive learning path, which became a key new product line for the company.</li>
                <li>Designed and launched specialized, data-driven applications, including the Afficient Manager (an enterprise tool for educators) and the MyAA learning platform, translating complex user needs into intuitive interfaces that improved workflow efficiency.</li>
                <li>Drove product strategy and influenced the roadmap by conducting comprehensive user research (usability testing, interviews) and presenting design rationale and prototypes to C-level stakeholders to secure buy-in.</li>
                <li>Accelerated engineering velocity and ensured product-wide consistency by establishing and scaling a design system from the ground up, utilizing React.js and Ant Design components.</li>
            </ul>
        }
    ]
};

export const PROMPTS = [
    "Generate a futuristic, glassmorphism-inspired dashboard for an AI analytics tool.",
    "Create a dark mode UI kit with neon blue and purple accents.",
    "Design a minimal hero section with floating 3D orbs and cinematic lighting.",
    "Visualize a user journey map for a voice-activated smart home assistant."
];
