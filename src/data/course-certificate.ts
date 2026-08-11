import type { CourseCertificate } from "@/types/certification";

export const COURSE_CERTIFICATES: CourseCertificate[] = [
  // ---------------------------------------------------------------------------
  // IBM DevOps and Software Engineering
  // ---------------------------------------------------------------------------

  {
    id: "ibm-devops-introduction",
    name: "Introduction to DevOps",
    issuer: "IBM",
    completed: "April 2023",
    verificationUrl:
      "https://www.coursera.org/account/accomplishments/verify/KGATLHTU9SYT",
    parentCredentialId: "ibm-devops",
  },

  {
    id: "ibm-agile",
    name: "Introduction to Agile Development and Scrum",
    issuer: "IBM",
    completed: "April 2023",
    verificationUrl:
      "https://www.coursera.org/account/accomplishments/verify/NLHL78BT93ST",
    parentCredentialId: "ibm-devops",
  },

  {
    id: "ibm-containers",
    name: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
    issuer: "IBM",
    completed: "May 2023",
    verificationUrl:
      "https://www.coursera.org/account/accomplishments/verify/LCVS8CWZFGDW",
    parentCredentialId: "ibm-devops",
  },

  {
    id: "ibm-cicd",
    name: "Continuous Integration and Continuous Delivery (CI/CD)",
    issuer: "IBM",
    completed: "May 2023",
    verificationUrl:
      "https://www.coursera.org/account/accomplishments/verify/WQ8943XKZME9",
    parentCredentialId: "ibm-devops",
  },

  {
    id: "ibm-tdd",
    name: "Introduction to Test and Behavior Driven Development",
    issuer: "IBM",
    completed: "May 2023",
    verificationUrl:
      "https://www.coursera.org/account/accomplishments/verify/SJK2RSNQNLGB",
    parentCredentialId: "ibm-devops",
  },

  {
    id: "ibm-application-security",
    name: "Application Security for Developers and DevOps Professionals",
    issuer: "IBM",
    completed: "May 2023",
    verificationUrl:
      "https://www.coursera.org/account/accomplishments/verify/YSR8NVPDKF53",
    parentCredentialId: "ibm-devops",
  },

  {
    id: "ibm-capstone",
    name: "DevOps Capstone Project",
    issuer: "IBM",
    completed: "May 2023",
    verificationUrl:
      "https://www.coursera.org/account/accomplishments/verify/EZ833QZ49CVK",
    parentCredentialId: "ibm-devops",
  },

  {
    id: "ibm-microservices",
    name: "Application Development using Microservices and Serverless",
    issuer: "IBM",
    completed: "May 2023",
    verificationUrl:
      "https://www.coursera.org/account/accomplishments/verify/PTEGF2JFEAX7",
    parentCredentialId: "ibm-devops",
  },

  // ---------------------------------------------------------------------------
  // Google Cybersecurity Professional Certificate
  // ---------------------------------------------------------------------------

  {
    id: "google-foundations",
    name: "Foundations of Cybersecurity",
    issuer: "Google",
    completed: "August 2023",
    grade: "90.03%",
    verificationUrl:
      "https://www.coursera.org/account/accomplishments/verify/JJEQKHBVRWSQ",
    parentCredentialId: "google-cybersecurity",
  },

  {
    id: "google-risk-management",
    name: "Play It Safe: Manage Security Risks",
    issuer: "Google",
    completed: "August 2023",
    grade: "83.82%",
    verificationUrl:
      "https://www.coursera.org/account/accomplishments/verify/AXP276DPACQP",
    parentCredentialId: "google-cybersecurity",
  },

  {
    id: "google-network-security",
    name: "Connect and Protect: Networks and Network Security",
    issuer: "Google",
    completed: "August 2023",
    grade: "91.68%",
    verificationUrl:
      "https://www.coursera.org/account/accomplishments/verify/K6G7NSGEX67C",
    parentCredentialId: "google-cybersecurity",
  },

  {
    id: "google-linux-sql",
    name: "Tools of the Trade: Linux and SQL",
    issuer: "Google",
    completed: "August 2023",
    grade: "93.93%",
    verificationUrl:
      "https://www.coursera.org/account/accomplishments/verify/R2WYU8CVGTHS",
    parentCredentialId: "google-cybersecurity",
  },

  {
    id: "google-assets-threats",
    name: "Assets, Threats, and Vulnerabilities",
    issuer: "Google",
    completed: "September 2023",
    grade: "83.75%",
    verificationUrl:
      "https://www.coursera.org/account/accomplishments/verify/AT7VGPQ543VK",
    parentCredentialId: "google-cybersecurity",
  },

  {
    id: "google-detection-response",
    name: "Sound the Alarm: Detection and Response",
    issuer: "Google",
    completed: "September 2023",
    grade: "84.56%",
    verificationUrl:
      "https://www.coursera.org/account/accomplishments/verify/4MH52P2WNGV8",
    parentCredentialId: "google-cybersecurity",
  },

  {
    id: "google-python-security",
    name: "Automate Cybersecurity Tasks with Python",
    issuer: "Google",
    completed: "September 2023",
    grade: "95.25%",
    verificationUrl:
      "https://www.coursera.org/account/accomplishments/verify/6C22DE77W2VR",
    parentCredentialId: "google-cybersecurity",
  },

  {
    id: "google-security-career",
    name: "Put It to Work: Prepare for Cybersecurity Jobs",
    issuer: "Google",
    completed: "September 2023",
    grade: "84.80%",
    verificationUrl:
      "https://www.coursera.org/account/accomplishments/verify/6XHG5UBVEF4E",
    parentCredentialId: "google-cybersecurity",
  },

  // ---------------------------------------------------------------------------
  // AWS Fundamentals
  // ---------------------------------------------------------------------------

  {
    id: "aws-ec2-autoscaling",
    name: "Launch an Auto-Scaling AWS EC2 Virtual Machine",
    issuer: "Coursera",
    completed: "April 2025",
    verificationUrl:
      "https://www.coursera.org/account/accomplishments/verify/D6LN8EY06GGR",
    parentCredentialId: "aws-fundamentals",
  },
];
