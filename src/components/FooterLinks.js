import React from "react";

function FooterLinks() {
  const itemClasses = `
    text-black/90 text-[13px] font-[450]
    hover:underline
    cursor-pointer
    `;
  return (
    <div className="flex flex-col items-start justify-start gap-1 px-4 py-3">
      <ul className="flex flex-wrap gap-1 justify-start gap-x-3">
        <li className={itemClasses}>Terms of Service</li>
        <li className={itemClasses}>Privacy Policy</li>
        <li className={itemClasses}>Cookie Policy</li>
        <li className={itemClasses}>Accessibility</li>
        <li className={itemClasses}>Ads info</li>
        <li className={itemClasses}>More</li>
      </ul>
      <div className="text-black/90 text-[13px] font-[450]">{`© ${new Date().getFullYear()} Twitter, Inc.`}</div>
    </div>
  );
}

export default FooterLinks;
