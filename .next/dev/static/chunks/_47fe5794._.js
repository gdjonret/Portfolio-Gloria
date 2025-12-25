(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/data/experience.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/experience/ExperienceItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExperienceItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function ExperienceItem({ active }) {
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl sm:text-2xl font-normal text-white leading-tight",
                children: [
                    active.role,
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-teal-300",
                        children: [
                            "@",
                            " ",
                            active.link ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-6 sm:mt-8 md:mt-10 space-y-5 sm:space-y-6 md:space-y-7 text-slate-300",
                children: active.highlights.map((point, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-start gap-4 group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-1 text-teal-300 text-base sm:text-lg leading-none group-hover:text-teal-200 transition-colors duration-200",
                                children: "▸"
                            }, void 0, false, {
                                fileName: "[project]/components/experience/ExperienceItem.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            active.tech && active.tech.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 md:mt-8 sm:md:mt-10 md:md:mt-12 flex flex-wrap gap-2",
                children: active.tech.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "animate-in fade-in duration-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 shadow-lg",
                children: content
            }, void 0, false, {
                fileName: "[project]/components/experience/ExperienceItem.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c = ExperienceItem;
var _c;
__turbopack_context__.k.register(_c, "ExperienceItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/experience/ExperienceSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExperienceSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$experience$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/data/experience.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experience$2f$ExperienceItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/experience/ExperienceItem.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ExperienceSection() {
    _s();
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ExperienceSection.useMemo[items]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$experience$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["experience"]
    }["ExperienceSection.useMemo[items]"], []);
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(items[0]?.id);
    const active = items.find((e)=>e.id === activeId) ?? items[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "experience",
        className: "mx-auto max-w-6xl px-6 py-16 sm:py-24 md:py-35 sm:px-10 lg:px-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold text-slate-100",
                        children: "My experiences"
                    }, void 0, false, {
                        fileName: "[project]/components/experience/ExperienceSection.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 sm:mt-12 md:mt-16 grid grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-12 md:col-span-4 lg:col-span-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:hidden overflow-x-auto pb-4 -mx-6 px-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 min-w-max",
                                    children: items.map((item)=>{
                                        const isActive = item.id === activeId;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:block relative pl-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute left-0 top-2 h-[calc(100%-1rem)] w-0.5 rounded-full bg-gradient-to-b from-teal-300/30 via-white/15 to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experience/ExperienceSection.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col space-y-1",
                                        children: items.map((item)=>{
                                            const isActive = item.id === activeId;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setActiveId(item.id),
                                                className: [
                                                    "group relative flex items-center justify-between gap-3 rounded-r-2xl py-3 sm:py-4 pl-5 sm:pl-6 pr-3 sm:pr-4 text-left text-sm font-medium tracking-wide transition-all duration-200 touch-manipulation",
                                                    isActive ? "text-teal-300 bg-white/5" : "text-slate-300 hover:text-slate-100 hover:bg-white/5 active:bg-white/10"
                                                ].join(" "),
                                                "aria-current": isActive ? "true" : undefined,
                                                children: [
                                                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute -left-1 top-1/2 h-10 w-1 -translate-y-1/2 rounded-full bg-teal-300"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experience/ExperienceSection.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-12 md:col-span-8 lg:col-span-9",
                        children: active ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experience$2f$ExperienceItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_s(ExperienceSection, "E+M57BoPpPSVWw6Bhxu73F3uyCw=");
_c = ExperienceSection;
var _c;
__turbopack_context__.k.register(_c, "ExperienceSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_47fe5794._.js.map