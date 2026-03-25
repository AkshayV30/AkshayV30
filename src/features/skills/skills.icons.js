export const iconMap = {
  Docker: "🐳",
  Kubernetes: "☸️",
  Terraform: "🌍",
  "Node.js": "🟢",
  Python: "🐍",
  AWS: "☁️",
  GCP: "🌐",
};

export function getSkillIcon(skill) {
  return iconMap[skill] || "⚙️";
}
