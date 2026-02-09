// servicesData.js
// Central data for all service categories and individual services.
// Add / change copy here to update site content.

const servicesData = {
  categories: [
    {
      id: "marketing",
      title: "Marketing Services",
      short: "Drive measurable growth with data-led marketing.",
      services: [
        {
          slug: "digital-marketing",
          title: "Digital Marketing",
          overview:
            "Full-funnel digital marketing services focused on performance and ROI — from paid campaigns to conversion optimization.",
          features: [
            "Paid search & display (PPC)",
            "Performance Social Ads (Facebook, LinkedIn, X)",
            "Conversion Rate Optimization (CRO)",
            "Analytics & tracking (GA4, GTM)"
          ],
          benefits: [
            "Increase qualified leads and lower CPL",
            "Drive measurable revenue from digital channels",
            "Data-driven campaign optimization"
          ],
          tech: ["Google Ads", "Meta Ads", "GA4", "Hotjar"],
          caseStudy: "Improved conversion rate by 40% for SaaS client"
        },
        {
          slug: "social-media-management",
          title: "Social Media Management",
          overview:
            "Strategic social presence — community growth, content calendars, creative production and social paid amplification.",
          features: [
            "Content strategy & calendar",
            "Community management",
            "Creative production & short-form video",
            "Performance reporting"
          ],
          benefits: [
            "Build brand trust and audience",
            "Generate inbound leads and brand awareness"
          ],
          tech: ["Buffer", "Meta Business", "Canva", "Premiere Pro"]
        },
        {
          slug: "seo-services",
          title: "SEO Services",
          overview:
            "Technical & content SEO that improves rankings, traffic quality and organic conversions.",
          features: [
            "Technical SEO audit",
            "Keyword strategy & content planning",
            "On-page optimization",
            "Backlink & outreach strategy"
          ],
          benefits: [
            "Higher organic visibility and long-term traffic",
            "Lower customer acquisition cost via organic channels"
          ],
          tech: ["Ahrefs", "Screaming Frog", "Semrush"]
        },
        {
          slug: "lead-generation",
          title: "Lead Generation",
          overview:
            "Qualified lead generation programs combining paid, organic and automation for predictable pipeline.",
          features: [
            "Account-based marketing (ABM)",
            "Landing page + CRO",
            "Email nurture sequences",
            "Lead scoring and handoff"
          ],
          benefits: [
            "Predictable pipeline for sales teams",
            "Higher lead-to-opportunity conversion rates"
          ],
          tech: ["HubSpot", "Mailchimp", "Salesforce"]
        },
        {
          slug: "branding-creative",
          title: "Branding & Creative",
          overview:
            "Brand strategy, visual identity and high-quality creative to position your company as market-leading.",
          features: [
            "Brand strategy & positioning",
            "Visual identity & style guide",
            "Brand collateral & motion design"
          ],
          benefits: ["Distinct brand identity", "Stronger positioning & recall"],
          tech: ["Figma", "Adobe XD", "Illustrator"]
        }
      ]
    },

    {
      id: "it",
      title: "IT Services",
      short: "Enterprise-grade engineering, cloud & security expertise.",
      services: [
        {
          slug: "software-development",
          title: "Software Development",
          overview:
            "End-to-end custom software development using modern engineering practices and cloud native architectures.",
          features: [
            "Product discovery & architecture",
            "Agile development (Sprint cadence)",
            "Automated testing & CI/CD",
            "Managed support & SLAs"
          ],
          benefits: [
            "Faster time-to-market",
            "Reduced maintenance overhead",
            "Scalable, secure systems"
          ],
          tech: ["React.js", "Java Spring Boot", "PostgreSQL", "Docker", "AWS"]
        },
        {
          slug: "it-consulting",
          title: "IT Consulting",
          overview:
            "Strategic IT advisory to modernize stack, optimize costs, and accelerate digital transformation.",
          features: ["Architecture reviews", "Cloud migration planning", "Roadmapping"],
          benefits: [
            "Clear technology roadmap",
            "Reduced technical debt and cost optimization"
          ],
          tech: ["AWS", "Azure", "GCP"]
        },
        {
          slug: "cloud-solutions",
          title: "Cloud Solutions",
          overview:
            "Cloud engineering, migration and ops — secure and cost-efficient deployments on AWS and cloud-native stacks.",
          features: [
            "Cloud cost optimization",
            "Containerization & orchestration",
            "IaC: Terraform/CloudFormation"
          ],
          benefits: ["Scalable infrastructure", "Lower operational risk"],
          tech: ["AWS (EC2, S3, RDS)", "Terraform", "Kubernetes"]
        },
        {
          slug: "cybersecurity",
          title: "Cybersecurity",
          overview:
            "Security-first approach: threat assessment, hardening, monitoring and compliance readiness.",
          features: [
            "Vulnerability assessments & pentesting",
            "Security architecture",
            "Monitoring & incident response"
          ],
          benefits: [
            "Improved security posture",
            "Risk reduction & compliance readiness"
          ],
          tech: ["Splunk", "WAF", "OSSEC"]
        },
        {
          slug: "infrastructure-management",
          title: "Infrastructure Management",
          overview:
            "End-to-end infrastructure lifecycle management, automation and 24/7 support.",
          features: ["Provisioning & monitoring", "Patch management", "Backups"],
          benefits: ["Reliable uptime", "Predictable operations"],
          tech: ["Prometheus", "Grafana", "Ansible"]
        }
      ]
    },

    {
      id: "web",
      title: "Web Services",
      short: "High-performance websites and e-commerce platforms built for scale.",
      services: [
        {
          slug: "website-development",
          title: "Website Development",
          overview:
            "Fast, accessible and SEO-friendly websites designed to convert and scale.",
          features: ["Responsive design", "SEO best practices", "Static + dynamic builds"],
          benefits: ["Better search presence", "Higher conversions"],
          tech: ["React.js", "TailwindCSS", "Next.js"]
        },
        {
          slug: "web-applications",
          title: "Web Applications",
          overview:
            "Robust single-page and multi-page web applications with secure APIs and stateful UX.",
          features: ["SPA/SSR design", "API-first approach", "Scalable architecture"],
          benefits: ["Improved user engagement", "Scalable application growth"],
          tech: ["React.js", "Spring Boot", "GraphQL"]
        },
        {
          slug: "ecommerce-platforms",
          title: "E-Commerce Platforms",
          overview:
            "Custom and platform-based e-commerce solutions that convert traffic into sales.",
          features: [
            "Payments & checkout optimization",
            "Inventory sync & integrations",
            "Performance tuning"
          ],
          benefits: ["Higher AOV and conversion", "Operational efficiency"],
          tech: ["Shopify", "Magento", "Custom React storefronts"]
        },
        {
          slug: "ui-ux-design",
          title: "UI/UX Design",
          overview:
            "User-centered design, prototypes and usability testing to create exceptional customer experiences.",
          features: ["Wireframes & prototypes", "User testing", "Design systems"],
          benefits: ["Higher retention", "Faster design-to-dev handoffs"],
          tech: ["Figma", "Miro", "Principle"]
        },
        {
          slug: "performance-optimization",
          title: "Performance Optimization",
          overview:
            "Web performance audits and improvements that speed up load times and improve conversions.",
          features: ["Core Web Vitals diagnosis", "Image & asset optimization", "Caching strategies"],
          benefits: ["Improved UX and SEO", "Lower bounce rate"],
          tech: ["Lighthouse", "CDN", "Varnish"]
        }
      ]
    },

    {
      id: "payroll",
      title: "Payroll & HR Outsourcing",
      short: "Accurate payroll, compliance and HR automation.",
      services: [
        {
          slug: "employee-payroll",
          title: "Employee Payroll",
          overview:
            "End-to-end payroll processing with accuracy, compliance and timely payouts.",
          features: ["Payroll runs & reconciliation", "Statutory compliance", "Payslip generation"],
          benefits: ["Eliminates errors", "Reduces payroll-related overhead"],
          tech: ["Custom HRMS", "Payroll engines"]
        },
        {
          slug: "hrms",
          title: "HRMS",
          overview:
            "Integrated HR management systems for leave, attendance, employee records and reporting.",
          features: ["Employee database", "Leave & attendance", "Reporting & analytics"],
          benefits: ["Single source of truth for HR", "Improved people operations"],
          tech: ["PostgreSQL", "Spring Boot", "React.js"]
        },
        {
          slug: "compliance",
          title: "Compliance",
          overview:
            "Local labour law compliance and statutory filings handled end-to-end.",
          features: ["Regulatory filings", "Payroll tax compliance", "Audit support"],
          benefits: ["Reduce legal risk", "Peace of mind for HR leaders"],
          tech: ["Secure document management"]
        },
        {
          slug: "recruitment-support",
          title: "Recruitment Support",
          overview:
            "Talent sourcing, screening and shortlisting support integrated with HR workflows.",
          features: ["Job listing & screening", "Interview coordination", "Offer management"],
          benefits: ["Speed up hiring", "Improve candidate quality"],
          tech: ["ATS integrations", "LinkedIn Recruiter"]
        }
      ]
    }
  ]
};

export default servicesData;
