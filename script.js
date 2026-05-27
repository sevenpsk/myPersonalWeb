/**
 * script.js
 * Drives the interactive elements for Seven Yuenyang's Portfolio.
 * Manages dynamic scroll tracking (5 navigation items), live radio broadcast countdown (UTC+10),
 * audio streaming simulations, and consolidated chronological timeline rendering.
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       1. Navigation Scroll Tracking
       ========================================== */
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.canvas-section');

    function trackNavigationScroll() {
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120; // Offset for stick-nav clearance
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', trackNavigationScroll);


    /* ==========================================
       2. Timeline Data & Rendering Logic
       ========================================== */
    const timelineBox = document.getElementById('interactive-timeline-box');

    const timelineData = [
        {
            date: "Oct 2024 - Present",
            role: "Graduate Enterprise Architect Officer",
            org: "Department of Transport and Main Roads | Queensland, Australia",
            bullets: [
                "Secured a position through the Queensland Government Digital Graduate Program to work in the Strategy and Architecture team within the IT Branch.",
                "Rotated between Solution Architecture and Enterprise Architecture teams to gain a comprehensive understanding of government ICT governance, assurance processes, and strategic frameworks.",
                "Provide architectural advice and guidance to internal customers, ensuring solution designs align with enterprise architecture plans and stringent government security requirements.",
                "Navigate complex governance workflows and assurance processes unique to large-scale public sector environments to ensure project compliance.",
                "Applied EA principles and frameworks specific to TMR to support long-term digital transformation and infrastructure planning.",
                "Collaborate with cross-functional branches to bridge the gap between high-level enterprise strategy and practical solution design.",
                "Engage in continuous professional development through the Digital Graduate Program, mastering tools and methodologies such as TOGAF and the EA Repository (OrbusInfinity).",
                "<strong>Achievement (Streamlined EA Operations):</strong> Played a key role in the migration of the Enterprise Architecture repository from iServer to OrbusInfinity, managing end-to-end data cleansing, migration, and stakeholder communication.",
                "<strong>Achievement (Modernised Information Sharing):</strong> Led the migration of internal SharePoint on-premises data to SharePoint Online, designing the 'ICT Architecture Hub' to centralise and improve data accessibility for architects across the Department."
            ]
        },
        {
            date: "2024 - Present",
            role: "Radio Program Host & Storyteller",
            org: "Sawasdee Australia Thai Radio (4EB FM 98.1) | Queensland, Australia",
            bullets: [
                "Producing and hosting weekly live FM broadcasts in Queensland targeting the Thai-Australian community.",
                "Curating content on social systems, cross-cultural storytelling, and artist spotlights.",
                "Bridging cultural gaps by translating complex technical narratives into friendly local conversations.",
                "Managing social media connectivity and content campaigns across TikTok, Instagram, and Facebook."
            ]
        },
        {
            date: "Sep 2023 - Jul 2024",
            role: "IT Service Desk Analyst",
            org: "Just Group (Premier Retail) | Melbourne, VIC, Australia",
            bullets: [
                "Delivered 24/7 remote and in-person IT support within a 15-member team, acting as the primary technical liaison for corporate and retail users across 7 major retail brands (AUS, NZ, SG, UK).",
                "Resolved technical issues for Store, Office, and Distribution Centre staff in a fast-paced environment, leveraging a strong customer service mindset to ensure accurate, high-quality, and timely incident responses.",
                "Actively bridged the gap between operations and IT by gathering frontline feedback from end-users and communicating actionable insights to the Systems team to drive continuous process improvements.",
                "Navigated complex IT structures to accurately triage, routing complex technical issues to the correct specialised IT support teams to ensure timely and successful resolutions.",
                "<strong>Achievement (Script Automation):</strong> Went above and beyond standard duties by developing automation scripts using Python and PowerShell, and optimising SQL queries, resulting in a significant improvement in the team's overall productivity."
            ]
        },
        {
            date: "Aug 2022 - Oct 2022",
            role: "Business Analyst Intern",
            org: "Thrive Refugee Enterprise | Melbourne, VIC, Australia",
            bullets: [
                "Provided end-to-end support to SME owners seeking expansion, developing Shopify websites to establish online presence and wholesale channels.",
                "Analysed client requirements and constraints to deliver sustainable solutions, leveraging existing Shopify subscriptions and free platforms (Google Classroom) to eliminate technical debt and minimise maintenance post-handover.",
                "<strong>Achievement:</strong> Successfully launched online platforms and business strategies on time and within budget, exceeding expectations of clients, advisors, and unit lecturers."
            ]
        },
        {
            date: "Dec 2020 - Apr 2022",
            role: "Cloud Engineer (Omni-channel Support Engineer)",
            org: "TMG (The Mall Group) | Bangkok, Thailand",
            bullets: [
                "Managed cloud infrastructure and omni-channel support for one of Thailand's largest retail conglomerates.",
                "Streamlined application development and deployment pipelines to maximise cloud platform capabilities and deliver highly effective, scalable solutions via robust CI/CD pipelines.",
                "Engineered automated alerting systems to rapidly detect anomalies, ensuring platform reliability and security.",
                "Monitored and optimised cloud platform costs by developing automation scripts, enhancing project-level financial visibility and reporting accuracy.",
                "Managed the end-to-end design, testing, and implementation of native and hybrid cloud applications alongside cross-functional teams.",
                "<strong>Achievement:</strong> Slashed external consultancy costs and accelerated incident response times by bringing general infrastructure support and resolution in-house.",
                "<strong>Achievement:</strong> Uplifted system security and operational efficiency by integrating best-practice access management into the development lifecycle."
            ]
        },
        {
            date: "Aug 2016 - Dec 2018",
            role: "System Engineer (Associate Endpoint Management Engineer)",
            org: "Kasikorn Business-Technology Group (KBTG) | Bangkok, Thailand",
            bullets: [
                "Modernised enterprise digital workplaces by driving a large-scale migration from legacy infrastructure to Microsoft 365, alongside managing and supporting cloud environments.",
                "Executed a large-scale enterprise migration of on-premise email and workflow applications from IBM Notes to Microsoft 365, collaborating closely with cross-functional stakeholders.",
                "Key contributor to the adoption of cloud platforms, significantly enhancing the performance, scalability, and efficiency of user-facing applications.",
                "Partnered with business leaders to design, architect, and deploy diverse technology solutions across Microsoft 365 and AWS environments.",
                "Delivered responsive Tier-2 technical support, rapidly troubleshooting and resolving complex system incidents throughout all phases of the M365 migration.",
                "<strong>Achievement:</strong> Honoured with the company's 'High Performer Award' for two consecutive years, recognised for consistent project excellence, hard work, and outstanding technical delivery."
            ]
        }
    ];

    function renderTimeline() {
        if (!timelineBox) return;
        timelineBox.innerHTML = '';

        timelineData.forEach(item => {
            const eventDiv = document.createElement('div');
            eventDiv.className = 'timeline-event';

            let listItems = '';
            item.bullets.forEach(bullet => {
                listItems += `<li>${bullet}</li>`;
            });

            eventDiv.innerHTML = `
                <div class="timeline-header">
                    <span class="timeline-date">${item.date}</span>
                    <h3 class="timeline-role">${item.role}</h3>
                    <span class="timeline-org">${item.org}</span>
                </div>
                <div class="timeline-body">
                    <ul>${listItems}</ul>
                </div>
            `;
            timelineBox.appendChild(eventDiv);
        });
    }

    // Initial timeline rendering
    renderTimeline();


    /* ==========================================
       3. Live Radio Broadcast Tracker (UTC+10)
       ========================================== */
    const badge = document.getElementById('broadcast-badge');
    const badgeText = document.getElementById('broadcast-status-text');
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minsEl = document.getElementById('minutes');

    function updateBroadcastTimer() {
        if (!daysEl || !hoursEl || !minsEl) return;

        const now = new Date();
        
        // Convert to UTC+10 (AEST - Brisbane QLD local time)
        const utcMs = now.getTime() + (now.getTimezoneOffset() * 60000);
        const qldNow = new Date(utcMs + (3600000 * 10));

        const currentDay = qldNow.getDay(); // 4 = Thursday
        const currentHour = qldNow.getHours();
        const currentMinute = qldNow.getMinutes();

        const isThursday = (currentDay === 4);
        const isLive = isThursday && (currentHour === 18); // 6 PM to 7 PM (18:00 - 18:59)

        if (isLive) {
            badge.classList.add('on-air');
            badgeText.textContent = "ON AIR NOW";
            daysEl.textContent = "00";
            hoursEl.textContent = "00";
            minsEl.textContent = "00";
            return;
        }

        badge.classList.remove('on-air');
        badgeText.textContent = "OFF AIR";

        // Find days until next Thursday
        let daysUntilNextThursday = (4 - currentDay + 7) % 7;
        if (currentDay === 4 && currentHour >= 19) {
            daysUntilNextThursday = 7;
        }

        const targetDate = new Date(qldNow);
        targetDate.setDate(qldNow.getDate() + daysUntilNextThursday);
        targetDate.setHours(18, 0, 0, 0); // 6 PM
        
        let diffMs = targetDate - qldNow;

        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        diffMs -= diffDays * (1000 * 60 * 60 * 24);

        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        diffMs -= diffHours * (1000 * 60 * 60);

        const diffMins = Math.floor(diffMs / (1000 * 60));

        daysEl.textContent = String(diffDays).padStart(2, '0');
        hoursEl.textContent = String(diffHours).padStart(2, '0');
        minsEl.textContent = String(diffMins).padStart(2, '0');
    }

    updateBroadcastTimer();
    setInterval(updateBroadcastTimer, 60000);


    /* ==========================================
       4. Dynamic Secure Email Decoder
       ========================================== */
    const emailLink = document.querySelector('.secure-email-link');
    const emailText = document.querySelector('.secure-email-text');

    if (emailLink && emailText) {
        let isDecoded = false;

        function getDecodedEmail() {
            const encoded = emailLink.getAttribute('data-encoded-email');
            try {
                return atob(encoded);
            } catch (e) {
                console.error("Failed to decode email", e);
                return "pongsakorn.y@outlook.com"; // Safe local fallback
            }
        }

        function handleEmailReveal() {
            if (!isDecoded) {
                const decodedEmail = getDecodedEmail();
                emailText.textContent = decodedEmail;
                emailLink.href = `mailto:${decodedEmail}`;
                isDecoded = true;
            }
        }

        // Decode on hover for desktop users
        emailLink.addEventListener('mouseenter', handleEmailReveal);

        // Decode on focus for keyboard accessibility
        emailLink.addEventListener('focus', handleEmailReveal);

        // Decode and trigger mailto on click for touch screen devices
        emailLink.addEventListener('click', (e) => {
            handleEmailReveal();
        });
    }

});