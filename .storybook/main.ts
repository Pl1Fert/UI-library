import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
    webpackFinal: async (config) => {
        // Make whatever fine-grained changes you need
        config.module.rules.push({
            test: /.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"],
            include: path.resolve(__dirname, "../"),
        });

        config.resolve.alias = {
            ...config.resolve.alias,
            "@/styles": path.resolve(__dirname, "../src/styles"),
        };

        return config;
    },
};
export default config;
