import type { GcpSkillBadge } from "@/types/verification";

const GCP_PROFILE_URL =
  "https://www.skills.google/profile/badges?credential_type=skill_badge";

export const GCP_SKILL_BADGES: GcpSkillBadge[] = [
  {
    id: "ai-agents-adk",
    name: "Engineer AI Agents with Agent Development Kit (ADK)",
    issuer: "Google Cloud",
    category: "skill-badge",
    completed: "April 2026",
    description:
      "Intermediate skill badge covering AI-agent development, language-model research problems, tokenization, dataset preparation, and transformer training workflows.",
    skills: [
      "AI Agents",
      "Agent Development Kit",
      "LLMs",
      "Tokenization",
      "Model Training",
      "Generative AI",
    ],
    verificationUrl:
      "https://www.skills.google/public_profiles/2ef583cc-4bfc-466-ab95-d10bf23bee13/badges/23895518",
  },
  {
    id: "terraform-gcp",
    name: "Build Infrastructure with Terraform on Google Cloud",
    issuer: "Google Cloud",
    category: "skill-badge",
    completed: "May 2025",
    description:
      "Intermediate skill badge covering Infrastructure as Code, Terraform provisioning, state management, remote state, and reusable Terraform modules.",
    skills: [
      "Terraform",
      "Google Cloud",
      "IaC",
      "State Management",
      "Cloud Infrastructure",
    ],
    verificationUrl:
      "https://www.skills.google/public_profiles/2ef583cc-4bfc-466-ab95-d10bf23bee13/badges/15927319",
  },
  {
    id: "multimodal-rag",
    name: "Inspect Rich Documents with Gemini Multimodality and Multimodal RAG",
    issuer: "Google Cloud",
    category: "skill-badge",
    completed: "September 2024",
    description:
      "Intermediate skill badge covering multimodal prompting, document metadata, visual and textual retrieval, Gemini multimodality, and citation-aware RAG.",
    skills: [
      "Gemini",
      "Multimodal AI",
      "RAG",
      "Document AI",
      "Prompt Engineering",
      "Generative AI",
    ],
    verificationUrl:
      "https://www.skills.google/public_profiles/2ef583cc-4bfc-466-ab95-d10bf23bee13/badges/11662104",
  },
  {
    id: "prompt-design-agent-platform",
    name: "Prompt Design in Agent Platform",
    issuer: "Google Cloud",
    category: "skill-badge",
    completed: "August 2024",
    description:
      "Introductory skill badge covering prompt engineering, image analysis, multimodal generative techniques, and Gemini-based applications.",
    skills: ["Prompt Engineering", "Gemini", "Multimodal AI", "Generative AI"],
    verificationUrl:
      "https://www.skills.google/public_profiles/2ef583cc-4bfc-466-ab95-d10bf23bee13/badges/10718628",
  },
  {
    id: "gcp-app-environment",
    name: "Set Up an App Dev Environment on Google Cloud",
    issuer: "Google Cloud",
    category: "skill-badge",
    completed: "August 2024",
    description:
      "Skill badge covering Cloud Storage, IAM, Cloud Functions, and Pub/Sub for cloud application infrastructure.",
    skills: [
      "Google Cloud",
      "Cloud Storage",
      "IAM",
      "Cloud Functions",
      "Pub/Sub",
    ],
    verificationUrl:
      "https://www.skills.google/public_profiles/2ef583cc-4bfc-466-ab95-d10bf23bee13/badges/10633544",
  },
  {
    id: "gcp-load-balancing",
    name: "Implementing Cloud Load Balancing for Compute Engine",
    issuer: "Google Cloud",
    category: "skill-badge",
    completed: "July 2024",
    description:
      "Introductory skill badge covering Compute Engine virtual machines and network/application load balancing.",
    skills: ["Compute Engine", "Load Balancing", "Networking", "Google Cloud"],
    verificationUrl:
      "https://www.skills.google/public_profiles/2ef583cc-4bfc-466-ab95-d10bf23bee13/badges/9901400",
  },
];

export { GCP_PROFILE_URL };
