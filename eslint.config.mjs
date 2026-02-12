import nextConfig from "eslint-config-next";
import coreWebVitals from "eslint-config-next/core-web-vitals";

const config = [...nextConfig, ...coreWebVitals];

export default config;
