import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 90 para as fotos do Jefferson (hero e "Sobre"); 75 é o padrão do resto
    qualities: [75, 90],
  },
};

export default nextConfig;
