export const easeQuint = [0.22, 1, 0.36, 1] as const;

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: easeQuint } },
};

export const fadeUp = (delay = 0, y = 20) => ({
  initial: { opacity: 0, y },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeQuint, delay },
  },
});

export const fadeDown = (delay = 0, y = 20) => ({
  initial: { opacity: 0, y: -y },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeQuint, delay },
  },
});

export const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeQuint, delay },
  },
});

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const splitTextReveal = {
  initial: { y: "100%" },
  animate: {
    y: 0,
    transition: { duration: 0.8, ease: easeQuint },
  },
};

export const imageReveal = {
  initial: { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
  animate: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: { duration: 0.8, ease: easeQuint },
  },
};

export const getAssetPath = (path: string) => {
  const isProd = process.env.NODE_ENV === "production";
  const basePath = isProd ? "/SIC068" : "";
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("data:")) return path;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
};

