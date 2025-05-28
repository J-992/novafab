export const servicePages = {
  engineering: {
    title: 'Engineering <span class="highlight">Consultation</span>',
    subtitle: 'Expert design optimization and manufacturing guidance for complex precision components',
    content: {
      overview: {
        title: 'Comprehensive Engineering Support',
        content: `<p>Our engineering consultation services bridge the gap between concept and production. We work closely with your design team to optimize components for manufacturability while maintaining critical performance specifications.</p>
        <p>From initial concept review to production planning, our experienced engineers provide the technical expertise needed to ensure your projects succeed on time and within budget.</p>`
      },
      capabilities: [
        {
          icon: '📐',
          title: 'Design for Manufacturing (DFM)',
          description: 'Optimize your designs for efficient production while maintaining functionality and performance requirements.'
        },
        {
          icon: '🔍',
          title: 'Material Selection',
          description: 'Expert guidance on material properties, certifications, and cost-effective alternatives for your specific applications.'
        },
        {
          icon: '📊',
          title: 'Feasibility Analysis',
          description: 'Comprehensive assessment of manufacturing feasibility, cost estimation, and timeline projections.'
        },
        {
          icon: '🎯',
          title: 'Process Optimization',
          description: 'Advanced manufacturing process selection and optimization for maximum efficiency and quality.'
        }
      ]
    }
  },
  cnc: {
    title: 'CNC <span class="highlight">Machining</span>',
    subtitle: 'High-precision computer numerical control machining for complex geometries and tight tolerances',
    content: {
      overview: {
        title: 'Advanced CNC Manufacturing Capabilities',
        content: `<p>Our state-of-the-art CNC machining centers deliver exceptional precision for the most demanding applications. With multi-axis capabilities and advanced tooling systems, we manufacture complex components that meet aerospace, defense, and nuclear industry standards.</p>
        <p>From prototype development to production runs, our CNC services provide the accuracy and repeatability your critical applications require.</p>`
      },
      capabilities: [
        {
          icon: '⚙️',
          title: '5-Axis Machining',
          description: 'Complex geometries and undercuts machined in a single setup for superior accuracy and surface finish.'
        },
        {
          icon: '🎯',
          title: 'Tight Tolerances',
          description: 'Consistent precision to ±0.0001" for critical dimensions and surface requirements.'
        },
        {
          icon: '🔬',
          title: 'Advanced Materials',
          description: 'Expertise in machining titanium, Inconel, stainless steel, and other challenging materials.'
        },
        {
          icon: '📏',
          title: 'In-Process Inspection',
          description: 'Real-time quality monitoring ensures every component meets specification requirements.'
        }
      ]
    }
  },
  edm: {
    title: 'Electrical Discharge <span class="highlight">Machining</span>',
    subtitle: 'Precision EDM services for complex internal geometries and hard-to-machine materials',
    content: {
      overview: {
        title: 'Specialized EDM Manufacturing',
        content: `<p>Electrical Discharge Machining (EDM) enables us to create complex internal cavities, intricate shapes, and precise features that are impossible with conventional machining methods. Our EDM capabilities are essential for aerospace, medical, and defense applications requiring exceptional precision.</p>
        <p>From small, intricate components to large structural parts, our EDM services deliver the accuracy and surface quality your applications demand.</p>`
      },
      capabilities: [
        {
          icon: '⚡',
          title: 'Wire EDM',
          description: 'Complex 2D and 3D profiles with exceptional accuracy and superior surface finish capabilities.'
        },
        {
          icon: '🕳️',
          title: 'Sinker EDM',
          description: 'Complex internal cavities and detailed surface textures for specialized applications.'
        },
        {
          icon: '🔥',
          title: 'Hard Materials',
          description: 'Machine hardened materials up to 65 HRC without affecting material properties.'
        },
        {
          icon: '🎨',
          title: 'Surface Texturing',
          description: 'Precise surface textures and finishes for functional and aesthetic requirements.'
        }
      ]
    }
  },
  finishing: {
    title: 'Finishing <span class="highlight">Services</span>',
    subtitle: 'Professional surface treatments and finishing processes for enhanced performance and appearance',
    content: {
      overview: {
        title: 'Complete Finishing Solutions',
        content: `<p>Our comprehensive finishing services enhance both the functional performance and aesthetic appearance of your precision components. From basic deburring to advanced surface treatments, we provide the finishing touches that make your parts perform optimally in their intended applications.</p>
        <p>Every finishing process is carefully controlled to maintain dimensional accuracy while improving surface characteristics, corrosion resistance, and wear properties.</p>`
      },
      capabilities: [
        {
          icon: '✨',
          title: 'Surface Polishing',
          description: 'Mirror finishes and precision surface textures for optical, medical, and aesthetic applications.'
        },
        {
          icon: '🛡️',
          title: 'Protective Coatings',
          description: 'Anodizing, plating, and specialized coatings for corrosion resistance and wear protection.'
        },
        {
          icon: '🔧',
          title: 'Deburring & Edge Finishing',
          description: 'Precision edge work and deburring for safety and functional requirements.'
        },
        {
          icon: '🎯',
          title: 'Custom Treatments',
          description: 'Specialized finishing processes tailored to your specific application requirements.'
        }
      ]
    }
  },
  inspections: {
    title: 'Inspections & <span class="highlight">Testing</span>',
    subtitle: 'Comprehensive quality assurance and testing services ensuring component reliability and compliance',
    content: {
      overview: {
        title: 'Advanced Quality Assurance',
        content: `<p>Our inspection and testing services provide the comprehensive quality documentation required for aerospace, defense, and nuclear applications. Using advanced metrology equipment and certified procedures, we ensure every component meets or exceeds specification requirements.</p>
        <p>From first article inspection to production verification, our quality systems provide the confidence and documentation your critical applications demand.</p>`
      },
      capabilities: [
        {
          icon: '📏',
          title: 'Dimensional Inspection',
          description: 'CMM inspection, precision measurement, and geometric dimensioning and tolerancing verification.'
        },
        {
          icon: '🔬',
          title: 'Material Testing',
          description: 'Material composition verification, hardness testing, and mechanical property validation.'
        },
        {
          icon: '📋',
          title: 'Documentation',
          description: 'Complete inspection reports, certificates of conformance, and traceability documentation.'
        },
        {
          icon: '✅',
          title: 'Compliance Verification',
          description: 'Industry standard compliance verification including aerospace, nuclear, and defense requirements.'
        }
      ]
    }
  }
};

export const industryPages = {
  aerospace: {
    title: 'Aerospace <span class="highlight">Manufacturing</span>',
    subtitle: 'Precision components for aircraft, spacecraft, and defense systems with full traceability',
    content: {
      overview: {
        title: 'Aerospace-Grade Precision Manufacturing',
        content: `<p>The aerospace industry demands the highest levels of precision, quality, and reliability. Our aerospace manufacturing capabilities meet stringent industry standards including AS9100 certification processes and complete material traceability.</p>
        <p>From critical flight components to ground support equipment, we deliver the quality and documentation required for aerospace applications.</p>`
      },
      applications: [
        {
          icon: '✈️',
          title: 'Aircraft Components',
          description: 'Structural components, engine parts, and flight-critical systems manufactured to aerospace standards.'
        },
        {
          icon: '🚀',
          title: 'Space Systems',
          description: 'Satellite components, launch vehicle parts, and space-qualified materials and processes.'
        },
        {
          icon: '🛡️',
          title: 'Defense Systems',
          description: 'Military aircraft components, missile systems, and defense equipment manufacturing.'
        },
        {
          icon: '📋',
          title: 'Documentation',
          description: 'Complete traceability, material certifications, and quality documentation packages.'
        }
      ]
    }
  },
  nuclear: {
    title: 'Nuclear <span class="highlight">Components</span>',
    subtitle: 'Safety-critical manufacturing for nuclear power generation and research applications',
    content: {
      overview: {
        title: 'Nuclear-Qualified Manufacturing Excellence',
        content: `<p>Nuclear applications require uncompromising quality and safety standards. Our nuclear manufacturing capabilities include specialized processes, materials, and documentation required for nuclear safety systems and power generation equipment.</p>
        <p>We maintain strict quality control procedures and work with certified materials to ensure every component meets nuclear industry requirements.</p>`
      },
      applications: [
        {
          icon: '⚛️',
          title: 'Reactor Components',
          description: 'Safety-critical components for CANDU and other reactor designs with full quality documentation.'
        },
        {
          icon: '🔧',
          title: 'Maintenance Parts',
          description: 'Replacement components and maintenance tooling for nuclear facility operations.'
        },
        {
          icon: '🧪',
          title: 'Research Equipment',
          description: 'Specialized components for nuclear research facilities and testing equipment.'
        },
        {
          icon: '📊',
          title: 'Quality Assurance',
          description: 'Nuclear-grade quality procedures and comprehensive documentation packages.'
        }
      ]
    }
  },
  industries: {
    title: 'Aerospace <span class="highlight">Manufacturing</span>',
    subtitle: 'Precision components for aircraft, spacecraft, and defense systems with full traceability',
    content: {
      overview: {
        title: 'Aerospace-Grade Precision Manufacturing',
        content: `<p>The aerospace industry demands the highest levels of precision, quality, and reliability. Our aerospace manufacturing capabilities meet stringent industry standards including AS9100 certification processes and complete material traceability.</p>
        <p>From critical flight components to ground support equipment, we deliver the quality and documentation required for aerospace applications.</p>`
      },
      applications: [
        {
          icon: '✈️',
          title: 'Aircraft Components',
          description: 'Structural components, engine parts, and flight-critical systems manufactured to aerospace standards.'
        },
        {
          icon: '🚀',
          title: 'Space Systems',
          description: 'Satellite components, launch vehicle parts, and space-qualified materials and processes.'
        },
        {
          icon: '🛡️',
          title: 'Defense Systems',
          description: 'Military aircraft components, missile systems, and defense equipment manufacturing.'
        },
        {
          icon: '📋',
          title: 'Documentation',
          description: 'Complete traceability, material certifications, and quality documentation packages.'
        }
      ]
    }
  },
  robotics: {
    title: 'Robotics <span class="highlight">Components</span>',
    subtitle: 'Precision manufacturing for next-generation robotics and automation systems',
    content: {
      overview: {
        title: 'Robotics Manufacturing Excellence',
        content: `<p>The robotics industry requires components that combine precision, durability, and innovative design. Our robotics manufacturing capabilities support everything from research prototypes to production automation systems, delivering the accuracy and reliability that modern robotics demands.</p>
        <p>From autonomous systems to industrial automation, we manufacture the critical components that enable robotics innovation across all sectors.</p>`
      },
      applications: [
        {
          icon: '🤖',
          title: 'Robotic Systems',
          description: 'Precision components for industrial robots, collaborative robots, and autonomous systems.'
        },
        {
          icon: '⚙️',
          title: 'Automation Equipment',
          description: 'Manufacturing automation components, sensors, and precision mechanical systems.'
        },
        {
          icon: '🔬',
          title: 'Research Platforms',
          description: 'Custom components for university research robots and experimental platforms.'
        },
        {
          icon: '🏭',
          title: 'Production Systems',
          description: 'High-volume production components for commercial robotics manufacturers.'
        }
      ]
    }
  },
  defense: {
    title: 'Defense <span class="highlight">Manufacturing</span>',
    subtitle: 'Secure, reliable manufacturing for defense and military applications with full compliance',
    content: {
      overview: {
        title: 'Defense-Grade Manufacturing Security',
        content: `<p>Defense applications require the highest levels of security, quality, and reliability. Our defense manufacturing capabilities include secure facilities, vetted personnel, and compliance with all relevant security and quality standards for military and defense applications.</p>
        <p>From small precision components to complex assemblies, we deliver the quality and security assurance that defense applications require.</p>`
      },
      applications: [
        {
          icon: '🛡️',
          title: 'Military Systems',
          description: 'Components for military vehicles, weapons systems, and defense equipment manufacturing.'
        },
        {
          icon: '📡',
          title: 'Communications',
          description: 'Precision components for secure communications and electronic warfare systems.'
        },
        {
          icon: '🎯',
          title: 'Guidance Systems',
          description: 'High-precision components for navigation, targeting, and guidance applications.'
        },
        {
          icon: '🔒',
          title: 'Secure Manufacturing',
          description: 'Controlled access facilities and security-cleared personnel for sensitive projects.'
        }
      ]
    }
  }
};


export const aboutPages = {
  companyProfile: {
    title: 'Company <span class="highlight">Profile</span>',
    subtitle: 'Founded by engineering students with a vision to strengthen Canadian manufacturing capabilities',
    content: {
      overview: {
        title: 'Our Story',
        content: `<p>Nova Precision Fabrication was founded by two engineering students who recognized the growing need for high-quality, domestic manufacturing in Canada. With backgrounds in aerospace engineering and hands-on experience at leading organizations like Framatome and the Canadian Space Agency, our founders bring both technical expertise and industry insight to every project.</p>
        <p>What started as a vision to support university design teams has evolved into a comprehensive precision manufacturing company serving aerospace, defense, nuclear, and robotics industries across Canada.</p>`
      },
      mission: {
        title: 'Our Mission',
        content: `<p>To empower Canadian innovation by providing exceptional manufacturing capabilities for complex, high-precision components while fostering the next generation of domestic manufacturing expertise.</p>`
      },
      vision: {
        title: 'Our Vision',
        content: `<p>To become Canada's premier specialized manufacturing partner for innovative organizations, recognized for uncompromising quality, technical excellence, and advancing the frontier of what Canadian manufacturing can achieve.</p>`
      }
    },
    founders: [
      {
        icon: '👨‍💼',
        title: 'Jaffer Razavi',
        description: 'Co-Founder & Technical Director. University of Waterloo engineering student with experience at Framatome and Fuse Energy Technologies.'
      },
      {
        icon: '👨‍💼',
        title: 'Anwar Al-Shamkhany',
        description: 'Co-Founder & Business Director. University of Western Ontario engineering student with Canadian Space Agency experience.'
      }
    ]
  },
  join: {
    title: 'Join <span class="highlight">Our Team</span>',
    subtitle: 'Be part of Canada\'s next generation of precision manufacturing excellence',
    content: {
      overview: {
        title: 'Career Opportunities',
        content: `<p>Nova Precision Fabrication is growing rapidly and looking for talented individuals who share our passion for precision manufacturing and innovation. We offer competitive compensation, excellent growth opportunities, and the chance to work on cutting-edge projects across aerospace, defense, and nuclear industries.</p>
        <p>Whether you're an experienced machinist, recent engineering graduate, or skilled technician, we want to hear from you.</p>`
      },
      benefits: [
        {
          icon: '💰',
          title: 'Competitive Compensation',
          description: 'Industry-leading salary and benefits packages with performance-based bonuses.'
        },
        {
          icon: '📈',
          title: 'Growth Opportunities',
          description: 'Rapid company growth means excellent advancement opportunities for all team members.'
        },
        {
          icon: '🎓',
          title: 'Learning & Development',
          description: 'Continuous training on the latest manufacturing technologies and industry certifications.'
        },
        {
          icon: '🤝',
          title: 'Collaborative Culture',
          description: 'Work directly with founders and contribute to company direction and growth.'
        }
      ]
    }
  }
};

export const blogContent = {
  title: 'Nova Fabrication <span class="highlight">Blog</span>',
  subtitle: 'Insights, updates, and expertise from the world of precision manufacturing',
  posts: [
    {
      id: 1,
      title: 'The Future of Canadian Manufacturing',
      excerpt: 'How domestic manufacturing is becoming more critical for Canadian businesses in an uncertain global trade environment.',
      date: '2025-01-15',
      category: 'Industry Insights'
    },
    {
      id: 2,
      title: 'EDM vs CNC: Choosing the Right Manufacturing Process',
      excerpt: 'A technical comparison of EDM and CNC machining capabilities for different applications and materials.',
      date: '2025-01-10',
      category: 'Technical Guides'
    },
    {
      id: 3,
      title: 'Quality Standards in Aerospace Manufacturing',
      excerpt: 'Understanding AS9100 certification and quality requirements for aerospace component manufacturing.',
      date: '2025-01-05',
      category: 'Quality & Standards'
    }
  ]
};