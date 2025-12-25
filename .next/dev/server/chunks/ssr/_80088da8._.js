module.exports = [
"[project]/app/data/experience.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "experience",
    ()=>experience
]);
const experience = [
    {
        id: "freelance-2023",
        company: "Freelance Software Engineer",
        companyShort: "Freelance",
        role: "Full Stack Engineer",
        period: "Jan 2023 – Present",
        location: "Remote",
        highlights: [
            "Built and deployed custom full-stack solutions for 6+ small business clients using React, Spring Boot, and PostgreSQL with payment, booking, and analytics integrations that improved operational visibility.",
            "Led end-to-end client engagements from requirements through maintenance to deliver scalable, user-focused systems while sustaining 100% client satisfaction."
        ],
        tech: [
            "React",
            "Spring Boot",
            "PostgreSQL",
            "MongoDB",
            "API Integration",
            "Full Stack Development"
        ]
    },
    {
        id: "sjsu-research-2025",
        company: "SJSU Aerospace",
        companyShort: "SJSU ",
        role: "Software Engineer / Research ",
        period: "June 2025 – Present",
        location: "San Jose, CA",
        link: "https://www.sjsu.edu",
        highlights: [
            "Advancing space imaging research through a nanosatellite mission by developing an onboard Jetson TX2 stack that autonomously captures and processes high-resolution lunar imagery during targeted phases.",
            "Designing an autonomous multi-UAV network that safely collects volcanic monitoring data in hazardous zones, enabling real-time situational awareness.",
            "Developed and tested a Zigbee-mesh communication system and real-time UAV navigation software to deliver fault-tolerant, low-power telemetry from 10+ sensor nodes to a central ground station."
        ],
        tech: [
            "Jetson TX2",
            "C++",
            "Python",
            "Autonomy",
            "UAVs",
            "Zigbee"
        ]
    },
    {
        id: "siemens-2024",
        company: "Siemens",
        companyShort: "Siemens",
        role: "Software Engineer Intern",
        period: "June 2024 – Aug 2024",
        location: "Fremont, CA",
        link: "https://www.siemens.com",
        tech: [
            "Python",
            "Bash",
            "Java",
            "Docker",
            "Distributed Systems"
        ],
        highlights: [
            "Developed Python and Bash automation in Unix/Linux to streamline data extraction and analysis via the Jira REST API, reducing manual reporting time and improving accuracy.",
            "Designed interactive analytics dashboards with Apache Superset and Docker to visualize engineering performance metrics across teams in real time.",
            "Delivered insights that helped managers identify bottlenecks, cutting ticket cycle times by up to 20% and improving team efficiency."
        ]
    },
    {
        id: "circuit-launch-2021",
        company: "Circuit Launch",
        companyShort: "Circuit Launch",
        role: "Automation Engineer Intern",
        period: "June 2021 – Aug 2021",
        location: "Oakland, CA",
        link: "https://www.circuitlaunch.com",
        tech: [
            "Python",
            "C/C++",
            "Machine Learning"
        ],
        highlights: [
            "Built a Raspberry Pi–based autonomous vehicle prototype with real-time sensor fusion and control algorithms to explore low-cost navigation systems.",
            "Optimized path planning and motion control through testing and data-driven tuning, achieving 95% navigation accuracy across varied conditions."
        ]
    }
];
}),
"[project]/components/experience/ExperienceItem.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExperienceItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function ExperienceItem({ active }) {
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl sm:text-2xl font-normal text-white leading-tight",
                children: [
                    active.role,
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-teal-300",
                        children: [
                            "@",
                            " ",
                            active.link ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: active.link,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-teal-300 hover:text-teal-200 transition-colors duration-200",
                                children: active.company
                            }, void 0, false, {
                                fileName: "[project]/components/experience/ExperienceItem.tsx",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this) : active.company
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experience/ExperienceItem.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/experience/ExperienceItem.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-xs sm:text-sm text-slate-400",
                children: [
                    active.location ? `${active.location} | ` : "",
                    active.period
                ]
            }, void 0, true, {
                fileName: "[project]/components/experience/ExperienceItem.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-6 sm:mt-8 md:mt-10 space-y-5 sm:space-y-6 md:space-y-7 text-slate-300",
                children: active.highlights.map((point, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-start gap-4 group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-1 text-teal-300 text-base sm:text-lg leading-none group-hover:text-teal-200 transition-colors duration-200",
                                children: "▸"
                            }, void 0, false, {
                                fileName: "[project]/components/experience/ExperienceItem.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "leading-relaxed text-sm sm:text-[15px] group-hover:text-slate-200 transition-colors duration-200",
                                children: point
                            }, void 0, false, {
                                fileName: "[project]/components/experience/ExperienceItem.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/components/experience/ExperienceItem.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/experience/ExperienceItem.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            active.tech && active.tech.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 md:mt-8 sm:md:mt-10 md:md:mt-12 flex flex-wrap gap-2",
                children: active.tech.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-lg border border-teal-300/20 bg-teal-300/5 px-4 py-1.5 text-xs font-medium text-teal-200 hover:bg-teal-300/10 hover:border-teal-300/40 transition-all duration-200 cursor-default",
                        children: t
                    }, t, false, {
                        fileName: "[project]/components/experience/ExperienceItem.tsx",
                        lineNumber: 55,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/experience/ExperienceItem.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "animate-in fade-in duration-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 shadow-lg",
                children: content
            }, void 0, false, {
                fileName: "[project]/components/experience/ExperienceItem.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block",
                children: content
            }, void 0, false, {
                fileName: "[project]/components/experience/ExperienceItem.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/experience/ExperienceItem.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/experience/ExperienceSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExperienceSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$experience$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/data/experience.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experience$2f$ExperienceItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/experience/ExperienceItem.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function ExperienceSection() {
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$experience$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["experience"], []);
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(items[0]?.id);
    const active = items.find((e)=>e.id === activeId) ?? items[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "experience",
        className: "mx-auto max-w-6xl px-6 py-16 sm:py-24 md:py-35 sm:px-10 lg:px-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold text-slate-100",
                        children: "My experiences"
                    }, void 0, false, {
                        fileName: "[project]/components/experience/ExperienceSection.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-px flex-1 bg-white/10"
                    }, void 0, false, {
                        fileName: "[project]/components/experience/ExperienceSection.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/experience/ExperienceSection.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 sm:mt-12 md:mt-16 grid grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-12 md:col-span-4 lg:col-span-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:hidden overflow-x-auto pb-4 -mx-6 px-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 min-w-max",
                                    children: items.map((item)=>{
                                        const isActive = item.id === activeId;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setActiveId(item.id),
                                            className: [
                                                "flex-shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 touch-manipulation whitespace-nowrap",
                                                isActive ? "bg-teal-300/20 text-teal-300 border-2 border-teal-300/40" : "bg-white/5 text-slate-400 border-2 border-white/10 hover:border-white/20 active:bg-white/10"
                                            ].join(" "),
                                            "aria-current": isActive ? "true" : undefined,
                                            children: item.companyShort ?? item.company
                                        }, item.id, false, {
                                            fileName: "[project]/components/experience/ExperienceSection.tsx",
                                            lineNumber: 42,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/experience/ExperienceSection.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/experience/ExperienceSection.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:block relative pl-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute left-0 top-2 h-[calc(100%-1rem)] w-0.5 rounded-full bg-gradient-to-b from-teal-300/30 via-white/15 to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experience/ExperienceSection.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col space-y-1",
                                        children: items.map((item)=>{
                                            const isActive = item.id === activeId;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setActiveId(item.id),
                                                className: [
                                                    "group relative flex items-center justify-between gap-3 rounded-r-2xl py-3 sm:py-4 pl-5 sm:pl-6 pr-3 sm:pr-4 text-left text-sm font-medium tracking-wide transition-all duration-200 touch-manipulation",
                                                    isActive ? "text-teal-300 bg-white/5" : "text-slate-300 hover:text-slate-100 hover:bg-white/5 active:bg-white/10"
                                                ].join(" "),
                                                "aria-current": isActive ? "true" : undefined,
                                                children: [
                                                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute -left-1 top-1/2 h-10 w-1 -translate-y-1/2 rounded-full bg-teal-300"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experience/ExperienceSection.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "truncate",
                                                        children: item.companyShort ?? item.company
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experience/ExperienceSection.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, item.id, true, {
                                                fileName: "[project]/components/experience/ExperienceSection.tsx",
                                                lineNumber: 71,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/experience/ExperienceSection.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experience/ExperienceSection.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experience/ExperienceSection.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-12 md:col-span-8 lg:col-span-9",
                        children: active ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experience$2f$ExperienceItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            active: active
                        }, void 0, false, {
                            fileName: "[project]/components/experience/ExperienceSection.tsx",
                            lineNumber: 103,
                            columnNumber: 21
                        }, this) : null
                    }, void 0, false, {
                        fileName: "[project]/components/experience/ExperienceSection.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/experience/ExperienceSection.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/experience/ExperienceSection.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/about/AboutSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
'use client';
;
;
function AboutSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "jsx-3000fc8c3784ac01" + " " + "relative overflow-hidden py-24 sm:py-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3000fc8c3784ac01" + " " + "absolute inset-0 -z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3000fc8c3784ac01" + " " + "absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-slate-900 to-cyan-900/20"
                    }, void 0, false, {
                        fileName: "[project]/components/about/AboutSection.tsx",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3000fc8c3784ac01" + " " + "absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-900/80 to-slate-900"
                    }, void 0, false, {
                        fileName: "[project]/components/about/AboutSection.tsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/about/AboutSection.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3000fc8c3784ac01" + " " + "absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-full mix-blend-screen blur-3xl"
            }, void 0, false, {
                fileName: "[project]/components/about/AboutSection.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3000fc8c3784ac01" + " " + "absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full mix-blend-screen blur-3xl"
            }, void 0, false, {
                fileName: "[project]/components/about/AboutSection.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3000fc8c3784ac01" + " " + "relative max-w-7xl mx-auto px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-3000fc8c3784ac01" + " " + "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-3000fc8c3784ac01" + " " + "space-y-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-3000fc8c3784ac01" + " " + "inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-white/5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-3000fc8c3784ac01" + " " + "text-xs font-mono font-medium tracking-wider text-cyan-300",
                                        children: "ABOUT ME"
                                    }, void 0, false, {
                                        fileName: "[project]/components/about/AboutSection.tsx",
                                        lineNumber: 21,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/about/AboutSection.tsx",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "jsx-3000fc8c3784ac01" + " " + "text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300",
                                    children: [
                                        "Crafting digital experiences ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-3000fc8c3784ac01" + " " + "text-cyan-400",
                                            children: "with purpose"
                                        }, void 0, false, {
                                            fileName: "[project]/components/about/AboutSection.tsx",
                                            lineNumber: 25,
                                            columnNumber: 44
                                        }, this),
                                        " and precision"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/about/AboutSection.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-3000fc8c3784ac01" + " " + "space-y-6 text-slate-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-3000fc8c3784ac01" + " " + "text-lg leading-relaxed",
                                            children: [
                                                "I'm a ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-3000fc8c3784ac01" + " " + "text-white font-medium",
                                                    children: "product-focused engineer"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/about/AboutSection.tsx",
                                                    lineNumber: 30,
                                                    columnNumber: 23
                                                }, this),
                                                " with a passion for building",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-3000fc8c3784ac01" + " " + "text-cyan-300",
                                                    children: " intuitive interfaces"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/about/AboutSection.tsx",
                                                    lineNumber: 31,
                                                    columnNumber: 17
                                                }, this),
                                                " and ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-3000fc8c3784ac01" + " " + "text-cyan-300",
                                                    children: "scalable systems"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/about/AboutSection.tsx",
                                                    lineNumber: 31,
                                                    columnNumber: 82
                                                }, this),
                                                ". With a background spanning fintech, developer tools, and creative platforms, I thrive at the intersection of technology and design."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/about/AboutSection.tsx",
                                            lineNumber: 29,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-3000fc8c3784ac01" + " " + "text-lg leading-relaxed",
                                            children: [
                                                "My approach combines ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-3000fc8c3784ac01" + " " + "text-white font-medium",
                                                    children: "technical rigor"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/about/AboutSection.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 38
                                                }, this),
                                                " with ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-3000fc8c3784ac01" + " " + "text-white font-medium",
                                                    children: "creative problem-solving"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/about/AboutSection.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 107
                                                }, this),
                                                ". Whether architecting complex systems or refining micro-interactions, I believe in the power of thoughtful, human-centered design to create meaningful digital experiences."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/about/AboutSection.tsx",
                                            lineNumber: 35,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/about/AboutSection.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-3000fc8c3784ac01" + " " + "pt-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#contact",
                                        className: "jsx-3000fc8c3784ac01" + " " + "group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300",
                                        children: [
                                            "Let's work together",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                className: "jsx-3000fc8c3784ac01" + " " + "w-4 h-4 group-hover:translate-x-1 transition-transform",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M14 5l7 7m0 0l-7 7m7-7H3",
                                                    className: "jsx-3000fc8c3784ac01"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/about/AboutSection.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/about/AboutSection.tsx",
                                                lineNumber: 48,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/about/AboutSection.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/about/AboutSection.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/about/AboutSection.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-3000fc8c3784ac01" + " " + "relative h-full min-h-[400px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3000fc8c3784ac01" + " " + "absolute inset-0 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-800/20 backdrop-blur-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-3000fc8c3784ac01" + " " + "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iNjAwIiBvcGFjaXR5PSIwLjA1Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iMTAsMTAiLz48L3N2Zz4=')]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/about/AboutSection.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this),
                                    [
                                        {
                                            text: "React",
                                            top: "15%",
                                            left: "20%",
                                            delay: "0s"
                                        },
                                        {
                                            text: "TypeScript",
                                            top: "25%",
                                            right: "15%",
                                            delay: "0.2s"
                                        },
                                        {
                                            text: "Node.js",
                                            top: "40%",
                                            left: "25%",
                                            delay: "0.4s"
                                        },
                                        {
                                            text: "Design Systems",
                                            bottom: "30%",
                                            right: "20%",
                                            delay: "0.6s"
                                        },
                                        {
                                            text: "Cloud Architecture",
                                            bottom: "20%",
                                            left: "15%",
                                            delay: "0.8s"
                                        }
                                    ].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                top: item.top,
                                                left: item.left,
                                                right: item.right,
                                                bottom: item.bottom,
                                                animation: `float 6s ease-in-out infinite ${item.delay}`
                                            },
                                            className: "jsx-3000fc8c3784ac01" + " " + "absolute px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm text-white/90 whitespace-nowrap",
                                            children: item.text
                                        }, index, false, {
                                            fileName: "[project]/components/about/AboutSection.tsx",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-3000fc8c3784ac01" + " " + "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-3000fc8c3784ac01" + " " + "w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400/10 to-blue-400/10 border border-cyan-400/20 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-3000fc8c3784ac01" + " " + "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-3000fc8c3784ac01" + " " + "text-4xl font-bold text-white",
                                                        children: "5+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/about/AboutSection.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-3000fc8c3784ac01" + " " + "text-sm text-cyan-200/80 mt-1",
                                                        children: "Years Experience"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/about/AboutSection.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/about/AboutSection.tsx",
                                                lineNumber: 86,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/about/AboutSection.tsx",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/about/AboutSection.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/about/AboutSection.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/about/AboutSection.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/about/AboutSection.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/about/AboutSection.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "3000fc8c3784ac01",
                children: "@keyframes float{0%,to{transform:translateY(0)rotate(0)}50%{transform:translateY(-10px)rotate(1deg)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/about/AboutSection.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_80088da8._.js.map