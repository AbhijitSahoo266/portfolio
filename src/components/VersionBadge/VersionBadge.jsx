import React from "react";
import { FiGitBranch, FiExternalLink } from "react-icons/fi";

const VersionBadge = () => {
  const currentVersion = "v1.0.0";
  const releaseUrl = "https://github.com/AbhijitSahoo266/portfolio/releases/tag/v1.0.0";

  return (
    <a
      href={releaseUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-3 py-1 text-[1.1rem] sm:text-[1.2rem] font-medium text-[var(--main-color)] bg-[#112e42] border border-[var(--main-color)]/30 rounded-full hover:bg-[var(--main-color)] hover:text-[#081b29] transition-all duration-300 group shadow-sm"
      title="View GitHub Release v1.0.0"
    >
      <FiGitBranch className="text-[1.3rem] shrink-0" />
      <span>{currentVersion}</span>
      <FiExternalLink className="text-[1rem] opacity-70 group-hover:opacity-100 transition-opacity" />
    </a>
  );
};

export default VersionBadge;