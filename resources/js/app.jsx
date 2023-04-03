import "./bootstrap";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { createRoot } from "react-dom/client";
import { InertiaProgress } from "@inertiajs/progress";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    //     const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
    //     return pages[`./Pages/${name}.jsx`];
    // },
    // setup({ el, App, props }) {
    //     const root = createRoot(el);
    //     root.createRoot(el).render(<App {...props} />);
    // },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
});

InertiaProgress.init();
