import React from "react";
import { configure, addDecorator, storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { createTheme } from "../src/theme/createTheme";
import { createPalette } from "../src/theme/createPalette";
import { Cms } from "@alethio/cms";

// "lazy" option is important so that stories are loaded after Cms
const req = require.context("../src", true, /.stories.tsx?$/, "lazy");

function loadStories() {
    req.keys().forEach(req);
}

addDecorator(withInfo({
    inline: true,
    source: false
}));
addDecorator(storyFn => <Cms
    config={{
        pluginsBaseUrl: "",
        plugins: {},
        pages: [],
        rootModules: {}
    }}
    theme={createTheme(createPalette())}
    logger={console}
    locale="en-US"
    defaultLocale="en-US"
    renderErrorPage={() => <div>404</div>}
    renderErrorPlaceholder={() => <div>An error has occurred</div>}
    renderLoadingPlaceholder={() => <div>Loading...</div>}
>
    {() => <div>{storyFn()}</div>}
</Cms>);

// define a dummy story first, that will force the Cms decorator to be rendered, so that we have the plugin-api ready
storiesOf("_root", module)
    .addParameters({ info: { disable: true }})
    .add("default", () => <div>Select a story from the sidebar to begin</div>);

// setTimeout to allow time for the stories to load, otherwise we get errors on HMR
setTimeout(() =>
    configure(loadStories, module), 1000
);
