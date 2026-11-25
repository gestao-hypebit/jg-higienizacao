import type { SVGProps } from "react";

export function WhatsAppIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.4.8 3.2.6.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2l-.5-.3z" />
    </svg>
  );
}

export function InstagramIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

export function PinIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...p}>
      <path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export type IconName =
  | "home" | "drop" | "shield" | "chat" | "check" | "camera" | "calendar" | "van" | "wind"
  | "clock" | "sun" | "bug" | "layers" | "eye" | "repeat" | "paw" | "hand" | "x";

const paths: Record<IconName, React.ReactNode> = {
  home: <><path d="M3 11l9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" /></>,
  drop: <><path d="M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11z" /><path d="M9.5 14.5a2.5 2.5 0 0 0 2.5 2.5" /></>,
  shield: <><path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></>,
  chat: <><path d="M4 5h16v11H9l-5 4z" /><path d="M8 10h8M8 13h5" /></>,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  x: <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" />,
  camera: <><path d="M4 8h3l2-3h6l2 3h3v11H4z" /><circle cx="12" cy="13" r="3.5" /></>,
  calendar: <><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 10h16M8 3v4M16 3v4" /></>,
  van: <><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" /><circle cx="7" cy="17.5" r="1.8" /><circle cx="17" cy="17.5" r="1.8" /></>,
  wind: <path d="M3 9h11a3 3 0 1 0-3-3M3 15h15a3 3 0 1 1-3 3M3 12h8" />,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
  bug: <><ellipse cx="12" cy="13.5" rx="5" ry="6" /><path d="M12 7.5V4.5M7.3 10.5L3.5 8.5M16.7 10.5l3.8-2M7 14.5H3M17 14.5h4M8 18.5l-3 2.5M16 18.5l3 2.5" /></>,
  layers: <><path d="M12 3l9 5-9 5-9-5z" /><path d="M3 13l9 5 9-5" /></>,
  eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></>,
  repeat: <><path d="M4 12a8 8 0 0 1 14-5.3L20 9M20 4v5h-5" /><path d="M20 12a8 8 0 0 1-14 5.3L4 15M4 20v-5h5" /></>,
  paw: <><circle cx="6.5" cy="10" r="1.8" /><circle cx="10" cy="6" r="1.8" /><circle cx="14.5" cy="6" r="1.8" /><circle cx="18" cy="10" r="1.8" /><path d="M7.5 18c0-3 2.2-6 4.5-6s4.5 3 4.5 6c0 1.8-2 2-4.5 2s-4.5-.2-4.5-2z" /></>,
  hand: <><path d="M7 11V5.5a1.5 1.5 0 0 1 3 0V11M10 10V4a1.5 1.5 0 0 1 3 0v6M13 10V5a1.5 1.5 0 0 1 3 0v7" /><path d="M16 9.5a1.5 1.5 0 0 1 3 0V14a7 7 0 0 1-7 7h-.5a6 6 0 0 1-4.8-2.4L4 15a1.6 1.6 0 0 1 2.4-2.1L8 14.5" /></>,
};

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

const careProps = {
  className: "care",
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.2,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function CareIcon({ name }: { name: string }) {
  switch (name) {
    case "sofa":
      return (<svg {...careProps}><path d="M6 30V20a4 4 0 0 1 8 0v4h20v-4a4 4 0 0 1 8 0v10z" /><path d="M14 24v-6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6M8 30v5M40 30v5" /></svg>);
    case "armchair":
      return (<svg {...careProps}><path d="M12 36V22a3 3 0 0 1 6 0v4h12v-4a3 3 0 0 1 6 0v14z" /><path d="M18 26V12a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v14M14 36v4M34 36v4" /></svg>);
    case "chair":
      return (<svg {...careProps}><path d="M14 8h20v18H14zM12 26h24v5H12zM15 31v10M33 31v10" /></svg>);
    case "rug":
      return (<svg {...careProps}><rect x="7" y="12" width="34" height="24" rx="2" /><path d="M7 17h34M7 31h34M4 12v24M44 12v24" strokeDasharray="2 3" /></svg>);
    case "seat":
      return (<svg {...careProps}><path d="M16 40l-4-14a4 4 0 0 1 4-5h3l2-11a4 4 0 0 1 4-3h3a3 3 0 0 1 3 3.5L29 22h3a4 4 0 0 1 4 4.5L34 40z" /></svg>);
    default:
      return (<svg {...careProps}><path d="M24 6c0 0-12 13-12 21a12 12 0 0 0 24 0C36 19 24 6 24 6z" /><path d="M18 28a6 6 0 0 0 6 6" /></svg>);
  }
}
