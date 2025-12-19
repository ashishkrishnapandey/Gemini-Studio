import { Step, Project } from './types';

// Based on text/csv
export const PROJECTS: Project[] = [
    {
        id: 1,
        name: "Bamboo Biochar",
        type: "Tech-Enabled CDR",
        location: "Sindhudurg, India",
        removal_annual: "12,000 t/yr",
        permanence: "100y+",
        status: "Active",
        img: "https://picsum.photos/id/214/800/600" 
    },
    {
        id: 2,
        name: "Nagapattinam Mangroves",
        type: "Blue Carbon",
        location: "Nagapattinam, India",
        removal_annual: "500ha",
        permanence: "100y+",
        status: "Active",
        img: "https://picsum.photos/id/220/800/600"
    },
    {
        id: 3,
        name: "Himalayan Native",
        type: "Bamboo Reforestation",
        location: "Nagaland, India",
        removal_annual: "800 ha",
        permanence: "50y+",
        status: "Active",
        img: "https://picsum.photos/id/231/800/600"
    },
    {
        id: 4,
        name: "Project Pipeline",
        type: "Mixed",
        location: "Global",
        removal_annual: "N/A",
        permanence: "N/A",
        status: "Feasibility",
        img: "https://picsum.photos/id/240/800/600"
    }
];

// Based on js/app.js
export const STEPS: Step[] = [
    {
        id: 1,
        title: "Identify",
        subtitle: "Satellite-Driven Scouting",
        desc: "We use geospatial data and spectral analysis to identify high-potential sites for restoration and biochar deployment, ensuring maximum ecological uplift.",
        img: "https://picsum.photos/id/110/1200/800",
        icon: "travel_explore"
    },
    {
        id: 2,
        title: "Structure",
        subtitle: "Rigorous Due Diligence",
        desc: "Our legal and financial teams structure projects to ensure land tenure security, community buy-in, and long-term financial viability before a single dollar is deployed.",
        img: "https://picsum.photos/id/112/1200/800",
        icon: "hub"
    },
    {
        id: 3,
        title: "Deploy",
        subtitle: "Boots on the Ground",
        desc: "We manage the implementation phase directly or through trusted local partners, overseeing planting, facility construction, and initial operations.",
        img: "https://picsum.photos/id/116/1200/800",
        icon: "construction"
    },
    {
        id: 4,
        title: "Verify",
        subtitle: "MRV Integration",
        desc: "Continuous Monitoring, Reporting, and Verification (MRV) using IoT sensors and remote sensing to prove carbon removal occurred and persists.",
        img: "https://picsum.photos/id/118/1200/800",
        icon: "verified_user"
    },
    {
        id: 5,
        title: "Steward",
        subtitle: "Long-Term Care",
        desc: "We commit to decades of stewardship, ensuring projects mature and communities thrive alongside the restored ecosystems.",
        img: "https://picsum.photos/id/120/1200/800",
        icon: "volunteer_activism"
    }
];