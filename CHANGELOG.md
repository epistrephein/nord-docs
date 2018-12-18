<p align="center"><a href="https://develop.nordtheme.com"><img src="https://raw.githubusercontent.com/arcticicestudio/nord-docs/develop/assets/repository-hero.svg?sanitize=true"/></a></p>

<p align="center"><a href="https://github.com/arcticicestudio/nord-docs/releases/latest"><img src="https://img.shields.io/github/release/arcticicestudio/nord-docs.svg?style=flat-square&label=Release&logo=github&logoColor=eceff4&colorA=4c566a&colorB=88c0d0"/></a></p>

<p align="center"><a href="https://nordtheme.com"><img src="https://img.shields.io/badge/Deployment-production-88c0d0.svg?style=flat-square&logoColor=eceff4&colorA=4c566a&colorB=88c0d0&logo=netlify"/></a> <a href="https://develop.nordtheme.com"><img src="https://img.shields.io/badge/Deployment-development-88c0d0.svg?style=flat-square&logoColor=eceff4&colorA=4c566a&colorB=88c0d0&logo=netlify"/></a></p>

<p align="center">Changelog for the official <a href="https://github.com/arcticicestudio/nord" alt="Nord">Nord</a> website and documentation</p>

<!-- lint disable no-duplicate-headings -->

# 0.3.0

![Release Date: 2018-12-18](https://img.shields.io/badge/Release_Date-2018--12--18-88c0d0.svg?style=flat-square&colorA=4c566a) [![Project Board](https://img.shields.io/badge/Project_Board-0.3.0-88c0d0.svg?style=flat-square&colorA=4c566a&logo=github&logoColor=eceff4)](https://github.com/arcticicestudio/nord-docs/projects/5) [![Milestone](https://img.shields.io/badge/Milestone-0.3.0-88c0d0.svg?style=flat-square&colorA=4c566a&logo=github&logoColor=eceff4)](https://github.com/arcticicestudio/nord-docs/milestone/3)

This version focused on the [responsive web design][gh-52], [core & base component][gh-63] as well as [base HTML elements as components][gh-69] of _Nord Docs_. It includes the [base layout][gh-66] which initially consists of the [header][gh-64] that provides the global navigation links.
Another focus was the handling of exceptional & special states like [empty states][gh-78] and the [404 error state][gh-84].

## Features

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/49325616-f1053900-f545-11e8-9725-0b8f5af8d1e2.png" width="12%" /></p>

**Base Media Query Setup** — #61 ⇄ #62 (⊶ 6b78d691)
↠ The basic setup for components with responsive styles through media queries has been implemented based on the [“Responsive Web Design” design concept][gh-52].

### Media Query Generator

To simplify the usage of [media queries][mdn-mq] with [styled-components][gh-51], a utility function to generate [media templates][stc-docs-mqt]has been implemented. It uses the `min-width` parameter to fulfill the used _mobile-first_ approach. The base size that is used has been implemented as theme property in [#54][gh-55-diff-r49].

### Initial Media Queries

> Always adjust media queries to the content individually and not vice-versa.
> The design supports the content. Not the other way around.

Like documented in the #52, _Nord Docs_ uses the _mobile-first_ pattern and follows the great [“Google Developer Responsive Web Design” guidelines][gdev-web-fund-rwd]. The recommended way is to create media queries not based on any device sizes but individually based on the content which is unique for each project. This is the best practice and, contrary to most popular CSS framework like Bootstrap, the correct way since each site is different and there are thousands of devices and in the future new sizes will appear.
The following media query template functions have been implemented:

- `phonePortrait` — `max-width: 479px`
- `phoneLandscape` — `max-width: 480px`
- `tabletPortrait` — `max-width: 600px`
- `tabletLandscape` — `max-width: 900px`
- `desktop` — `max-width: 1200px`
- `desktopPlus` — `max-width: 1800px`

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48676311-39475300-eb65-11e8-9654-16c24c1c9a94.png" width="15%"/></p>

**Core Layout Component: BaseLayout** — #66 ⇄ #68 (⊶ 208c9ac0)
↠ Implemented the `BaseLayout` core layout component, the default layout of _Nord Docs_. It consists of the [`Root` core container][gh-36] as root element and the core components representing the [header][gh-64], the main [page container][gh-65] and in the future the _footer_.

**Core Container Component: Page** — #65 ⇄ #67 (⊶ 701ec43d)
↠ Implemented the core container component `Page`, the base wrapper for page content of _Nord Docs_. It renders the [HTML `<main>` element][mdn-html-el-main] to wrap page content and is used in layout components like [`BaseLayout`][gh-66].

**Core Atom HTML Element: P** — #79 ⇄ #80 (⊶ ad995b0a)
↠ Implemented the core atom `P` that represents the [text content][mdn-html-el-tc] HTML element [`<p>`][mdn-html-el-p]. It uses adjusted styles instead of browser defaults to match _Nord Docs_ brand style.

**Core Atom HTML Element: Heading** — #81 ⇄ #82 (⊶ c4e1aa84)
↠ Implemented the core atoms `H1`-`H6` that represent the [content sectioning][mdn-html-el-cs] HTML elements [`<h1>`-`<h6>`][mdn-html-el-h]. They use custom styles instead of browser defaults and allow to disable the bottom margin via the `noMargin` prop. The font style like size, modular scale and family adhere to the [“Typography” design concept][gh-2].

**Core Atom HTML Element: A** — #70 ⇄ #71 (⊶ 75d0e49c)
↠ Implemented the core atom `A` that represents the [inline text semantic][mdn-html-el-inl-txt-sem] HTML element [`<a>`][mdn-html-el-a]. This is a special dynamic and _failsafe_ component because it internally uses the [Gatsby `Link`][gatsby-docs-link] component to route within the site (internal links) while also being able to link to external data.

### URL Routing Utilities

To handle the logic of conditionally rendering a Gatsby `Link` or a basic `<a>`, based on the passed target URL (internal & external), utility functions has been implemented to evaluate the passed target.

**Core Organism Component: Header** — #64 ⇄ #75 (⊶ d6f0fef2)
↠ Implemented the essential core organism component `Header` that provides the main site navigation and a user action component to [toggle between the global theme modes][gh-57].

### Layout

The header uses the CSS _flexbox_ layout consisting of two container components with the maximum of flexible space between both. The containers contain the branding and the navigation components like described in the sections below.

### Navigation

To allow users to simply navigate around the site, the component provides the quickly accessible navigation. It is placed in the right-sided container and currently contains the following items:

- “Ports” — links to `/ports`, the landing page for all Nord port projects.
- “Docs” — links to `/docs`, the landing page for Nord's documentation.
- “Blog” — links to `/blog`, the landing page for Nord's blog.
- “Community” — links to `/community`, the landing page of the Nord community channels.

### Branding

To represent Nord's branding, the left-sided container contains the Nord logo with the caption. It links the landing page to allow quick access to the root (`/`) page.

### Theme Mode Switcher

The user action component mentioned in the introduction paragraph above allows to toggle between the available global theme modes. Both modes are represented through icons where a sun is used for the “bright snow flurry” and a moon for the “dark night frost” mode. They are implemented using the awesome [React Pose][react-pose] project to animate the switching. The icons “fly out and in” within the bounds of the component that takes the form of a button.

Like documented in the [“Iconography” design concept][gh-74], the awesome [Eva Icons][eva-icons] project is for icons.

### Responsive Design

For reduced width views (responsive design) the header adjusts several styles and composed components.

#### Slide Menu

The main navigation link list will be hidden and replaced by a user action element (button) that toggles an animated slide down menu containing the navigation links. The drop down starts right below the header and takes up the available height and width to cover the full screen. As soon as the animation starts all scroll events will be removed from the underlying content (body) using the [body-scroll-lock][gh-bsl] project. This prevents users from scrolling the content below the menu when the menu itself overflows the Y-axis and shows a scroll bar.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/49829535-fc026980-fd8e-11e8-9cba-d5d6e8149c10.png" width="15%"/></p>

### Behavior

To allow quick access while also being inconspicuous, the component is _sticky_ at the top of the site, but collapses as soon as the user scrolls down and only switches back into expanded mode when at top of the site.
In expanded mode, the height of the header is larger and the caption of the logo is visible. As soon as switching into collapsed mode the height decreases and the logo caption fades out with a smooth transition animation.

To achieve the resizing animation based on the scroll position the [subscribe-ui-event][gh-sue] project is used to listen to scroll events. It provides throttling by default, only calls `document.body.scrollTop` and `window.innerWidth` once and uses `requestAnimationFrame` for a better performance.

**Empty State Component** — #78 ⇄ #83 (⊶ 2079c056)
↠ Implemented the `EmptyState` molecule component to represent an [empty state][md-com-es]. It consists an vector illustration, a headline and the corresponding subline.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/50157534-f696a900-02d1-11e9-9d04-80a813da9e6c.png" width="12%"/></p>

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/50157551-0615f200-02d2-11e9-898f-611ebd20621e.png" width="12%"/></p>

There are initially 3 different illustrations available that can be selected through the `illustrationVariant` prop. The headline informs the user about the purpose of the illustration and the reason why it is currently shown while the subline can include additional information and helpful instructions.

The empty state component has been placed within a base HTML component that represents a [`<section>`][mdn-html-el-sec] with multiple base style variants and is now initially used by the new base page components for the [header navigation links][gh-64].

**404 Page Components** — #84 ⇄ #85 (⊶ a39649fa)
↠ Implemented the [404][wiki-404] page and illustration components to handle requested but non-existing routes and resources.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/50157486-d23acc80-02d1-11e9-9ed9-628174d012c9.png" width="15%"/></p>

It aligns with _Nord Docs_ brand and can use a humorous image and tagline that conveys the purpose of the screen, without appearing actionable.
Also see the [great Gatsby documentation about 404 pages][gatsby-docs-404] for more details.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/49604267-bceaa780-f98d-11e8-932a-05ee4b952a83.png" width="15%" /></p>

**SVGR Integration** — #72 ⇄ #73 (⊶ 39c13041)
↠ Integrated [SVGR][], a transformer for SVG into ready to use React components. It is part of [create-react-app][cra] and makes SVG integration into React projects easy.

All configurations are placed in the `svgr.config.js` file instead of passing them to the corresponding Gatsby plugin for the Webpack loader that is described in the section below.

### Webpack Loader

To directly import SVG's as React component the [@svgr/webpack][gh-svgr-wpl] package is used to simply integrate SVGR as Webpack plugin. It has been added through [gatsby-plugin-svgr][npm-gp-svgr] which adjusts the required Webpack configurations by adding the loader and removing the default `.svg` file loader/handler.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48661206-c0fe6600-ea6e-11e8-8142-4c65c82b9927.png" /></p>
<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48837384-7ab64900-ed85-11e8-829c-3fd6efe86c60.png" width="15%"/></p>

**Jest utilities for Styled Components** — #76 ⇄ #77 (⊶ 47010b8c)
↠ Integrated [jest-styled-components][gh-jsc], a set of utilities for testing [Styled Components][styled-components] with [Jest][] that improves the snapshot testing experience and provides a brand new matcher to make expectations on the style rules.
Instead of storing the generated class names in snapshots it allows to track the actual CSS rules and attributes for **better comparison what changed** and **if the change is even really related to the affected component**.

This is the officially [recommended library to use Jest with styled-components][stc-docs-tooling-jest].

```js
const Button = styled.button`
  color: red;
`;
```

```js
exports[`snapshot`] = `
<button
  className="sc-bdVaJa rOCEJ"
/>
`;
```

**Before**

```diff
- Snapshot
+ Received

 <button
-  className="sc-bdVaJa rOCEJ"
+  className="sc-bdVaJa hUzqNt"
 />
```

**After**

```diff
- Snapshot
+ Received

+.c0 {
+  color: green;
+}
+
 <button
-  className="sc-bdVaJa rOCEJ"
+  className="c0"
 />
```

The package has been added in the setup file defined in Jest's `setupTestFrameworkScriptFile` field (#39) to enable all included features.

### Custom Style Matcher

The [custom `toHaveStyleRule` matcher][gh-jsc-matcher] is useful to test if a given rule is applied to a component. It is added to the extended global `except` object when the main package file is being imported.

# 0.2.0

![Release Date: 2018-12-04](https://img.shields.io/badge/Release_Date-2018--12--04-88c0d0.svg?style=flat-square&colorA=4c566a) [![Project Board](https://img.shields.io/badge/Project_Board-0.2.0-88c0d0.svg?style=flat-square&colorA=4c566a&logo=github&logoColor=eceff4)](https://github.com/arcticicestudio/nord-docs/projects/4) [![Milestone](https://img.shields.io/badge/Milestone-0.2.0-88c0d0.svg?style=flat-square&colorA=4c566a&logo=github&logoColor=eceff4)](https://github.com/arcticicestudio/nord-docs/milestone/2)

This version focused on the [typography][gh-2], the [brand design & styling][gh-51] and _theme modes_ of _Nord Docs_. It includes the globally used [typefaces][gh-54], a React context [provider and consumer component for the available theme modes][gh-57] as well as some initial [global base styles][gh-59].

## Features

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48346100-5e762600-e67a-11e8-8f9d-86a633c69043.png" width="60%" /></p>

**Typefaces** — #54 ⇄ #55 (⊶ 81a5b238)
↠ Integrated globally available open source typefaces like documented in the [“Typograhpy” design concept][gh-2] and implemented the `typography` module to define style properties and configurations. The font size and units are based on the used [modular scale][modularscale-majorsecond] documented in #2.

[Rubik][gf-rubik] — the main stylistic and visualization sans-serif font installed through through the [typeface-rubik][npm-typeface-rubik] package.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/49332499-28a7cb80-f5ae-11e8-976f-8dc2bbabaf94.png" width="60%"/></p>

[Inter UI][inter-ui] — the sans-serif font for documentations as well as technical and factual content. It is installed through the [inter-ui][npm-inter-ui] package. Note that the font is currently not available through [Google Fonts][gf] yet, but might be added in the future very soon due to its large popularity and perfect implementation.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/49332633-e9c74500-f5b0-11e8-9690-2f473df739ba.png" width="60%"/></p>

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/49332647-298e2c80-f5b1-11e8-8ba1-bbcc0f72c50d.png" width="60%"/> <img src="hhttps://user-images.githubusercontent.com/7836623/49332648-298e2c80-f5b1-11e8-8c75-29cf754d481e.png" width="60%"/> <img src="https://user-images.githubusercontent.com/7836623/49332649-298e2c80-f5b1-11e8-9fc8-a880fa0c78e1.png" width="60%"/></p>

[Source Code Pro][gf-source-code-pro] — the main monospace font for all code elements installed through the [typeface-source-code-pro][npm-typeface-source-code-pro] package.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/49332718-93f39c80-f5b2-11e8-8be6-13755cb333eb.png" width="40%"/></p>

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/49332737-ce5d3980-f5b2-11e8-95bb-5b32855f8322.png" width="60%"/></p>

**Base Style & Theme Setup** — #53 ⇄ #56 (⊶ 85498ca0)
↠ Implemented the basic style & theme setup like documented in the [“Brand Design & Styling” design concept][gh-51] using the CSS-in-JS library [styled-components][] for component representations. To use uniform global theme definitions and to simplify CSS styling, the [styled-theming][gh-styled-theming] and [polished][] libraries are also integrated next to some useful and required specific Babel & Gatsby plugins.

##### Default Browser Style Normalization

Integrated the great project [modern-normalize][gh-modern-normalize] that normalizes the default styles of browsers for a consistent appearance across different modern browsers. For the best usage with _styled-components_ the [npm-styled-modern-normalize][npm-styled-modern-normalize] project is used. It exports the styles via the `css` API and has been added to the created global styles component mentioned below.

##### CSS Tools

To simplify the CSS styling, the [polished][] package is used that provides a lightweight toolset for writing styles in JavaScript (CSS-in-JS).

##### CSS Base Styles

Global and normalization CSS styles have been implemented using _styled-components_ `css` API. They extend _modern-normalize_ and define, next to the browser normalization, styles of the available global themes like documented in the sections below.

In order to use fonts in _Nord Docs_ style & themes (implemented in #54) the basic properties and values have been added and integrated into this CSS base styles.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48661206-c0fe6600-ea6e-11e8-8142-4c65c82b9927.png" /></p>

##### Global Styles

To inject global styles, _styled-components_ v4 [`createGlobalStyle`][stc-docs-api-cgs] API is used to create a `<GlobalStyle>` component to inject various styles globally.

##### Global Themes

To [provide the global theme][stc-docs-theming], the [`ThemeProvider`][stc-docs-api-thp] component has been added to the _Nord Docs_ [`Root` core container component][gh-36]. The global theme is now passed to the provider.

##### Simplified Theme Usage

To simplify the usage of _styled-theming's_ [`theme()`][gh-stth-api-th] and `theme.variants()` API functions, two utility functions have been implemented:

- `themeMode(modeStyles : object)` — Shorthand function for the `theme` API to define styles based on the global theme mode(s).
- `themedModeVariant(modeStyles : object, variantPropName : string)` — Shorthand function for the `theme.variants` API to define variant styles based on the global theme mode(s).

##### Available Themes

Initially _Nord Docs_ will be build with the “bright snow flurry” and “dark night frost” _theme modes_. The names have been implemented as constants with values `BRIGHT_SNOW_FLURRY` and `DARK_NIGHT_FROST` that are used with the utility functions mentioned above to define the styles of a component for each available global theme.

##### Plugins

[_styled-components_ great Babel plugin][stc-docs-tool-babel] adds support for server-side rendering, minification of styles, and a nicer debugging experience. It has been integrated via the [corresponding Gatsby's plugin][npm-gatsby-plugin-styled-components].

##### Nord Colors

Since the main [JavaScript implementation of Nord][gh-nord-36] is currently not completed and released yet, the colors and palettes have been provided "manually" via the `nord` and `palettes` modules. As soon as the implementation has been done they will be replaced through imports from the official package.

##### Motion

Some basic configurations for motion related styles like animations have been implemented, inspired by [Material Designs][md] great documentation and guide about [motion speed][md-motion-speed]. This includes values for speed like transition durations for the global theme modes. It'll be used to set the CSS transition for the base background and font color within the `globals` CSS style module.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/49328407-a4832300-f570-11e8-8613-21c78267b558.png" width="20%" /></p>

**Theme Mode Context** — #57 ⇄ #58 (⊶ 86edb920)
↠ Implemented a [`React.Context` provider and consumer][react-docs-context] for the global theme modes. It provides the name of the currently active theme and a function to toggle through available themes.

##### Context Provider & Consumer

Both the context consumer and provider components have been implemented in the [`Root` core container component][gh-36]. The consumer is exported and can then be imported in any component to consume the provided values.

The `Root` component has beene changed from a SFC to a class component to store the currently active state and handle the theme mode toggle logic through a function. It migrated the currently used simple [styled-component theme][stc-docs-theming] (provided through the `<ThemeProvider` component) to the [styled-theming theme][gh-styled-theming] that provides the initially implemented theme (#53).

##### Session Storage

To persist the current active theme mode when changing the route (which unmounts the `Root` component and therefore resets the state), the value is written to the browser's [session storage][mdn-ss]. The storage type has been preferred over the [local storage][mdn-ls] since this would persist the active theme mode even when the user closes the tab, but the desired behavior is to optimize the site for the “bright snow flurry” aura theme mode that is set as default theme.

To simplify the read- and write handling as well as prevent possible errors due to wrong storage keys, two utility functions have also been implemented:

- `readSessionCache(key : string)` — Reads the value of the given key from the session storage (if available).
- `writeSessionCache(key : string, value : any)` — Writes the given key-value pair to the session storage (if available).

**Theme Global Base Styles** — #59 ⇄ #60 (⊶ 2c545da1)
↠ Implemented some basic theme styles like font and background colors. They are initially used in the global theme styles implemented in #53. This includes a transition for both attributes (`background-color` and `color`) to ensure a smooth theme mode transition.

# 0.1.0

![Release Date: 2018-11-29](https://img.shields.io/badge/Release_Date-2018--11--29-88c0d0.svg?style=flat-square&colorA=4c566a) [![Project Board](https://img.shields.io/badge/Project_Board-0.1.0-88c0d0.svg?style=flat-square&colorA=4c566a&logo=github&logoColor=eceff4)](https://github.com/arcticicestudio/nord-docs/projects/3) [![Milestone](https://img.shields.io/badge/Milestone-0.1.0-88c0d0.svg?style=flat-square&colorA=4c566a&logo=github&logoColor=eceff4)](https://github.com/arcticicestudio/nord-docs/milestone/1)

This is the initial release version of _Nord Docs_.
It represents the basic project setup, structure and development workflow with an deployable state. There are many initial implementations and configurations for the documented design concepts. They are covered in the following sections of this version changelog to introduce used technologies and explain why several decisions have been made.

To get an overview of the general project plan, read the [“Design Concept & Initial Launch Plan”][gh-1] documentation which describes the project's justification, it's goals, the architecture, the tech stack and the “UI Design & Branding“ concept.

## Features

### Basic Project Setup

<p align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg?sanitize=true" width="100" /></p>

**NPM configuration file** — #4 (⊶ f4df27cb)
↠ Added the [NPM `.npmrc` file][npm-docs-rc] to ensure specific configurations are set project-wide for all core team members and contributors. This includes the usage of the [lockfile][npm-docs-lock] and exact (dev)dependency package versions.

<p align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" width="100" /></p>

**Git mail mapping** — #9 (⊶ e5629109)
↠ Added a Git [mailmap][git-docs-mailmap] file to link to in documentations and allow contributors to send mails regarding security issues. This prevents unnecessary overhead of updating all documents when new core team and members and contributors are added and additionally adds the main functionality of the file: Mapping commits when someone uses a different email address.

<p align="center"><img src="https://editorconfig.org/logo.png" width="100" /></p>

**EditorConfig** — #11 (⊶ 4fa30ce4)
↠ Added the [EditorConfig][] file to define and maintain consistent coding styles between different editors and IDEs.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/49230107-35ca8c00-f3ef-11e8-9e83-6f4e5f1fcbfe.png" width="100" /></p>

**GitHub code owners** — #7 (⊶ 05ded0c2)
↠ Adapted to GitHub's [code owners][gh-blog-intro-code-owners] feature to define matching pattern for project paths to automatically add all required reviewers of the core team and contributors to new PRs. Read the [GitHub Help article][gh-help-code-owners] for more details.

![](https://user-images.githubusercontent.com/2513/27803645-87c9a9c8-5ff8-11e7-91d7-2fa0718e6871.png)

![](https://user-images.githubusercontent.com/2513/27803663-a4bb073e-5ff8-11e7-9c45-2c3cbdc999cd.png)

![](https://user-images.githubusercontent.com/2513/27803610-544ba222-5ff8-11e7-9313-e4062315fb0c.png)

<p align="center"><img src="https://opensource.guide/assets/images/illos/beginners.svg?sanitize=true" width="200" /></p>

**GitHub Open Source community standards** — #8 ⇄ #12 (⊶ 262f731e)
↠ Inspired _Nord Docs_ project philosophy using GitHub's features for [recommended community standards][gh-blog-intro-comm-tools]. It adheres to the great [Open Source Guides][ossg] and adapted to the recommendations to complete the projects [community profile][gh-community-profile].

<p align="center"><img src="https://opensource.guide/assets/images/illos/coc.svg?sanitize=true" width="200" /></p>

To facilitate a healthy and constructive community behavior, _Nord Docs_ also introduced and enforces a [code of conduct][gh-help-coc].
Read the [GitHub Help article][gh-help-coc] for more details about the provided integrations.

The added [contribution guidelines][gh-blog-intro-contrib-gl] help to build a community that [encourages people to use, contribute to][ossg-contrib], and evangelize the project.

<p align="center"><img src="https://opensource.guide/assets/images/illos/contribute.svg?sanitize=true" width="200" /></p>

It includes sections about

- how to get started
- bug reports
- enhancement suggestions
- pull requests
- style guides
  - [JavaScript Style Guide][gh-styleguide-js]
  - [Markdown Style Guide][gh-styleguide-md]
  - [Git Style Guide][gh-styleguide-git]
- credits

Read the [GitHub introduction blog post][gh-blog-intro-contrib-gl] and the [GitHub Help article][gh-help-contrib-gl] for more details about the provided integrations.

**GitHub issue and pull request templates** — #10 ⇄ #13 (⊶ c3c7b8af)
↠ Integrated GitHub's feature to define [multiple issue templates][gh-blog-multi-issue-templ] while the [initial template file][gh-blog-intro-issue-templ] is used as a fallback/generic template to link to the specific ones.

<p align="center"><img src="https://user-images.githubusercontent.com/7321362/35420642-8e5271e2-01f3-11e8-8109-0d21ddb89011.png" width="80%" /></p>

<p align="center"><img src="https://blog.github.com/assets/img/2018-04-30-issue-templates/new-issue-page-with-multiple-templates.png" width="80%" /></p>

Read the [GitHub Help article][gh-help-issue-templ] for more details about issue and pull request templates. Also check out how to manually create [issue templates][gh-help-pr-templ], a [pull request template][gh-help-issue-templ-repo]. and the guide on [how to create the (deprecated) fallback/generic issue template][gh-help-issue-templ-depr].

<p align="center"><img src="https://raw.githubusercontent.com/remarkjs/remark-lint/02295bc/logo.svg?sanitize=true" width="100" /></p>

**Introducing _remark-lint_** — #14 ⇄ #19 (⊶ 1d2959ca)
↠ Integrated [remark-lint][gh-remark-lint], a linter built on [remark][], the powerful Markdown processor powered by plugins such as remark-lint.
It is used through [remark-cli][npm-remark-cli] with [remark-preset-lint-arcticicestudio][gh-remark-preset-lint-arcticicestudio], the custom preset that implements the [Arctic ice Studio Markdown Style Guide][styleguide-markdown].

To lint all Markdown sources within the project the `lint:md` NPM script has been added which will be picked up by the main `lint` script.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48658871-4707b600-ea49-11e8-8a08-39e1a318c442.png" width="400" /></p>

**Introducing _ESLint_** — #15 ⇄ #20 (⊶ d4bd7833)
↠ Integrated [ESLint][], the pluggable and de-facto standard linting utility for JavaScript using the configuration preset [eslint-config-arcticicestudio][gh-eslint-config-arcticicestudio] which implements the [Arctic Ice Studio JavaScript Style][styleguide-javascript].
Read #15 for more details about the configuration and setup as well as included plugins.

To lint all JavaScript sources within the project the `lint:js` NPM script has been added which will be picked up by the main `lint` script. The second script `format:js` allows to make use of ESLint's great [auto-fixing][eslint-docs-auto-fix] feature.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48644231-4556d780-e9e2-11e8-862e-e8ce630fd0ba.png" width="100" /></p>

**Introducing _Prettier_** — #16 ⇄ #21 (⊶ 39af1daf)
↠ Integrated [Prettier][], the opinionated code formatter with support for many languages and integrations with most editors. It ensures that all outputted code conforms to a consistent style and provides the best and recommended style configurations of-out-the-box™.
Read #16 for more details about the configuration and setup as well as included plugins.

To format all compatible sources within the project the `format:pretty` NPM script has been added which will be picked up by the main `format` script.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48658851-01e38400-ea49-11e8-911e-d859eefe6dd5.png" width="100" /></p>

**Introducing _lint-staged_** — #17 ⇄ #22 (⊶ 6ab10911)
↠ Integrated [lint-staged][gh-lint-staged] to run linters against staged Git files and prevent adding code that violates any style guide into the code base.

Read #17 for more details about the configuration and setup.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48658801-30ad2a80-ea48-11e8-9323-16bb0b25002b.png" width="100" /></p>

**Introducing _Husky_** — #18 ⇄ #23 (⊶ 16e90c34)
↠ Integrated [Husky][gh-husky], the tool that make Git hooks easy and can prevent bad Git commits, pushes and more _woof_!

Read #18 for more details about the configuration and setup.

**Project repository README** — #49 (⊶ f8561505)
↠ Wrote the project's repository README that initially contains the hero and various badges provided by the great [shields.io][] project. Further documentations about the design concept, architecture and technologies as well as guides for contributions to develop, run and maintain the project will be documented within the docs itself. Minimal instructions might be added later on within a “Getting Started” / “Quick Start” section.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48669288-c5c02a00-eb01-11e8-8dc9-00142b4abce1.png" width="200" /></p>

### Design Concept: JAMstack

The following sections include details about implemented requirements for the three key criteria of the [“JAMstack” design concept][gh-24].

<p align="center"><img src="https://user-images.githubusercontent.com/74381/34074079-93ac0420-e25c-11e7-9c0a-642986b2aa58.png" width="200"/></p>

The [“Gatsby” design concept][gh-25] defines process steps and aspects for the static site generator that is used to build _Nord Docs_ like the Gatsby core configuration, Gatsby API implementations, required Gatsby plugins, custom configurations for [Babel][] and [Webpack][] and many more.

**Gatsby initial configuration** — #27 ⇄ #28 (⊶ 3cda2621)
↠ Initially implemented the [core configuration of Gatsby][gatsby-docs-config] through the `gatsby-config.js` file. It defines project-wide site metadata that can be used through the GraphQL API and configures all used plugins.

Read #27 for more details about the configuration and setup as well as included plugins. There have also been some tickets for bug fixe

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48694124-c3ca9980-ebdb-11e8-9cc3-1379d9ed4a20.png" width="100"/></p>

**Babel configuration** — #29 ⇄ #30 (⊶ b288befb)
↠ Implemented the configuration for [Babel][] even when Gatsby comes with an already optimized setup to create SSR “static” websites and apps, but there are also use cases that require to modify and extend this configuration to e.g. add a new Babel [plugin for the latest syntax feature/proposal][babel-docs-plug] support.

Read #29 for more details about the configuration and setup as well as included plugins.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48711809-761a5500-ec0c-11e8-8ba7-dc4acbd5d64c.png" width="100"/></p>

**Webpack configuration** — #31 ⇄ #32 (⊶ 7734d052)
↠ Implemented the configuration for [Webpack][] to add useful production bundle plugins and development workflow optimizations by using Gatsby's [Node API][gatsby-docs-api-node].

Read #31 for more details about the configuration and setup as well as included plugins.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48669377-c0fc7580-eb03-11e8-82e8-4853fb0ed52c.png" width="100" /></p>

**Introduce React** — #33 (⊶ 24aecae9)
↠ Initially added [React's][react] currently latest stable [version 16.6.3][npm-react-v16.6.3]. Since Gatsby v2, [React][npm-react] and [React DOM][npm-react-dom] are a peer dependencies which allows users to freely choose the version they'd like to use.

**Introduce React “prop-types”** — #35 (⊶ 4fe54731)
↠ To support type validation and checking, _Nord Docs_ initially uses [React prop types][react-docs-typecheck-pt] through the [prop-types][npm-prop-types] package. This technique is sufficient for the beginning of the project and might be revised and refactored later on by migrating to [TypeScript][] or integrating [Flow][].

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48676311-39475300-eb65-11e8-9654-16c24c1c9a94.png" width="100"/></p>

### Design Concept: Component & Project Structure

The following sections include details about implemented requirements for the [“Component & Project Structure” design concept][gh-26].

**Implemented the `Root` core container component (data provider)** — #36 ⇄ #37 (⊶ 0465f375)
↠ The `Root` core container is the first and one of the important main data provider React components of this project. It represents the base element and entry point that wraps the all custom application components and serves as a data provider later on. Some of the tasks in the future will be to

- provide context _props_ and functions for the global [styled-components][] theme through the [`ThemeProvider`][stc-docs-thprov] component
- inject global styles through _styled-components_ [`createglobalstyle`][stc-docs-globstyle] function including typography (#2) related data like application-wide used fonts
- possibly data stores for state management libraries like [MobX][]

This initial implementation only renders a `React.Fragment`.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48822935-24ceaa80-ed5f-11e8-8328-eec53dfc68f9.png" width="100"/></p>

### Design Concept: Testing

The following sections include details about implemented requirements for the [“Testing” design concept][gh-38].

**Set up the basic testing setup** — #39 ⇄ #42 (⊶ 7a4d356c)
↠ To start writing tests the basic testing environment has been set up. This includes the [Gatsby specific configurations][gatsby-docs-testing], the base setup for [Jest][] as well as the fantastic [react-testing-library][gh-rtl] and [just-dom's custom matchers][gh-jest-dom-matcher].

Read #39 for more details about the configuration and setup as well as included plugins.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48966346-26eb7000-efd0-11e8-818b-80035dd538ca.png" width="100"/></p>

### Design Concept: Continuous Integration & Testing

The following sections include details about implemented requirements of the workflow for the [“Continuous Integration & Testing” design concept][gh-43].

**Basic continuous integration & testing setup** — #44 ⇄ #45 (⊶ 2d0000e3)
↠ To ensure a great project quality, the stable and proven continuous integration & testing providers [Circle CI][circleci] and [Codecov][] have been set up to automate the CI process pipelines and provide code coverage reports.

Read #44 for more details about the configuration and setup as well as available automated pipelines.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48661237-35d1a000-ea6f-11e8-8e16-f48948969be6.png" width="100" /></p>

### Design Concept: Hosting & Continuous Deployment

The following sections include details about implemented requirements of the workflow for the [“Hosting & Continuous Deployment” design concept][gh-46].

**Basic [Netlify][] configuration** — #48 (⊶ f03dc824)
↠ Implemented [Netlify's configuration file][netlify-docs-toml-ref] to define the `command` and `publish` path for production builds.

Read #48 and the design concept for more details about the configuration and setup as well as automated deployment pipelines.

## Bug Fixes

**Added missing “React Helmet” dependency** — #34 (⊶ b63bab36)
↠ Implemented the configuration for [Babel][] even when Gatsby comes with an already optimized setup to create SSR “static” websites and apps, but there are also use cases that require to modify and extend this configuration to e.g. add a new Babel [plugin for the latest syntax feature/proposal][babel-docs-plug] support.

During the initial implementation of Gatsby (#27) the [gatsby-plugin-react-helmet][npm-gatsby-plugin-react-helmet] has been added, but the required [react-helmet][npm-react-helmet] main package was accidentally forgotten to be added too.

**Fix invalid Webpack resolve alias for `pages`** — #40 (⊶ d2e72e39)
↠ Fixed the [Webpack resolve alias][webpack-docs-resv-alias] `pages` for Gatsby pages that was configured to the invalid `src/components/pages` path instead of the correct `src/pages` path.

**Fixed overridden ESLint `import/no-extraneous-dependencies` rule** — #41 (⊶ 7eccff4b)
↠ The [import/no-extraneous-dependencies][eslint-r-import/no-extraneous-dependencies] rule allows to define a array of glob pattern that are allowed to define import `devDependencies`. In #15 the rule was overridden to include the project specific path `**/.gatsby/**` which whitelists all Gatsby specific scripts. Unfortunately this removed all glob pattern defined in the used [eslint-config-arcticicestudio][npm-eslint-config-arcticicestudio] (rule is defined in the `-base` package) resulting in errors in other projects paths like tests.
It has been fixed by importing the paths defined in the preset from the [eslint-config-arcticicestudio-base][npm-eslint-config-arcticicestudio-base] package and merge it with the additional `**/.gatsby/**` path.

## Tasks

<p align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg?sanitize=true" width="100" /></p>

**NPM package initialization** — #3 (⊶ ff99b861)
↠ Initialized the [NPM `package.json` file][npm-docs-pkg] that contains the project's metadata and dependency definitions.

**Dependency update including security incident** — #47 (⊶ 43204f06)
↠ Performed the first regular batch update for outdated dependencies that includes an important update since it for the hijacked package [event-stream][npm-event-stream] that [includes malicious code which has been revealed yesterday][snyk-blog-malicious-event-stream]. _Nord Docs_ was affected passively because the package was a traverse dependency of the used package [npm-run-all][npm-npm-run-all]. The maintainer has reacted quickly and released the fix version [4.1.5][gh-npm-run-all-rln-4.1.5].

Note that packages marked with an double exclamation mark `‼` have been affected by the security incident!

###### Production Dependencies

- gatsby `2.0.50` ➔ `2.0.55`
- gatsby-source-filesystem `2.0.8` ➔ `2.0.9`

###### Development Dependencies

- husky `1.1.4` ➔ `1.2.0`
- lint-staged `8.0.5` ➔ `8.1.0`
- ‼ npm-run-all `4.1.3` ➔ `4.1.50`

<p align="center"><img src="https://opensource.org/files/osi_symbol.png" width="100" /></p>

**MIT license** — #5 (⊶ a6b4e4e1)
↠ Added the `LICENSE.md` file for the [MIT license][mit-lic].

<p align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" width="100" /></p>

**Git ignore and attribute pattern** — #6 (⊶ 6b265454)
↠ Added the [`.gitattributes`][git-docs-gitattributes] and [`.gitignore`][git-docs-gitignore] configuration files to define the pattern.

**Using `binary` Git attribute for “Adobe Illustrator” artwork project files** — #50 (⊶ f524be00)
↠ [“Adobe Illustrator“][wikip-ai] `.ai` artwork project files have been changed to be handled with the `binary` Git attribute instead of “normal” plain text to prevent encoding problems and noisy diff views.

---

<!--
+------------------+
+ Symbol Reference +
+------------------+
↠ (U+21A0): Start of a log section description
— (U+2014): Separator between a log section title and the metadata
⇄ (U+21C4): Separator between a issue ID and pull request ID in a log metadata
⊶ (U+22B6): Icon prefix for the short commit SHA checksum in a log metadata
-->

<!-- lint disable final-definition -->

<!-- Base Links -->

[babel]: https://babeljs.io
[babel-docs-plug]: https://babeljs.io/docs/en/plugins
[circleci]: https://circleci.com
[codecov]: https://codecov.io
[cra]: https://facebook.github.io/create-react-app
[editorconfig]: https://editorconfig.org
[eslint]: https://eslint.org
[eslint-docs-auto-fix]: https://eslint.org/docs/user-guide/command-line-interface#fixing-problems
[eslint-r-import/no-extraneous-dependencies]: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
[eva-icons]: https://akveo.github.io/eva-icons
[flow]: https://flow.org
[gatsby-docs-404]: https://www.gatsbyjs.org/docs/add-404-page
[gatsby-docs-api-node]: https://www.gatsbyjs.org/docs/node-apis
[gatsby-docs-config]: https://gatsbyjs.org/docs/gatsby-config
[gatsby-docs-link]: https://www.gatsbyjs.org/docs/gatsby-link
[gatsby-docs-testing]: https://www.gatsbyjs.org/docs/testing
[gdev-web-fund-rwd]: https://developers.google.com/web/fundamentals/design-and-ux/responsive
[gf-rubik]: https://fonts.google.com/specimen/Rubik
[gf-source-code-pro]: https://fonts.google.com/specimen/Source+Code+Pro
[gh-1]: https://github.com/arcticicestudio/nord-docs/issues/1
[gh-2]: https://github.com/arcticicestudio/nord-docs/issues/2
[gh-24]: https://github.com/arcticicestudio/nord-docs/issues/24
[gh-25]: https://github.com/arcticicestudio/nord-docs/issues/25
[gh-26]: https://github.com/arcticicestudio/nord-docs/issues/26
[gh-36]: https://github.com/arcticicestudio/nord-docs/issues/36
[gh-38]: https://github.com/arcticicestudio/nord-docs/issues/38
[gh-43]: https://github.com/arcticicestudio/nord-docs/issues/43
[gh-46]: https://github.com/arcticicestudio/nord-docs/issues/46
[gh-51]: https://github.com/arcticicestudio/nord-docs/issues/51
[gh-52]: https://github.com/arcticicestudio/nord-docs/issues/52
[gh-54]: https://github.com/arcticicestudio/nord-docs/issues/54
[gh-57]: https://github.com/arcticicestudio/nord-docs/issues/57
[gh-59]: https://github.com/arcticicestudio/nord-docs/issues/59
[gh-63]: https://github.com/arcticicestudio/nord-docs/issues/63
[gh-64]: https://github.com/arcticicestudio/nord-docs/issues/64
[gh-65]: https://github.com/arcticicestudio/nord-docs/issues/65
[gh-66]: https://github.com/arcticicestudio/nord-docs/issues/66
[gh-69]: https://github.com/arcticicestudio/nord-docs/issues/69
[gh-74]: https://github.com/arcticicestudio/nord-docs/issues/74
[gh-78]: https://github.com/arcticicestudio/nord-docs/issues/78
[gh-84]: https://github.com/arcticicestudio/nord-docs/issues/84
[gh-bsl]: https://github.com/willmcpo/body-scroll-lock
[gh-community-profile]: https://github.com/arcticicestudio/nord-docs/community
[gh-eslint-config-arcticicestudio]: https://github.com/arcticicestudio/eslint-config-arcticicestudio
[gh-help-coc]: https://help.github.com/articles/adding-a-code-of-conduct-to-your-project
[gh-help-code-owners]: https://help.github.com/articles/about-codeowners
[gh-help-contrib-gl]: https://help.github.com/articles/setting-guidelines-for-repository-contributors
[gh-help-issue-templ]: https://help.github.com/articles/about-issue-and-pull-request-templates
[gh-help-issue-templ-depr]: https://help.github.com/articles/manually-creating-a-single-issue-template-for-your-repository
[gh-help-issue-templ-repo]: https://help.github.com/articles/creating-issue-templates-for-your-repository
[gh-help-pr-templ]: https://help.github.com/articles/creating-a-pull-request-template-for-your-repository
[gh-husky]: https://github.com/typicode/husky
[gh-jest-dom-matcher]: https://github.com/gnapse/jest-dom#custom-matchers
[gh-jsc]: https://github.com/styled-components/jest-styled-components
[gh-lint-staged]: https://github.com/okonet/lint-staged
[gh-remark-lint]: https://github.com/remarkjs/remark-lint
[gh-remark-preset-lint-arcticicestudio]: https://github.com/arcticicestudio/remark-preset-lint-arcticicestudio
[gh-rtl]: https://github.com/kentcdodds/react-testing-library
[gh-styleguide-git]: https://github.com/arcticicestudio/styleguide-git
[gh-styleguide-js]: https://github.com/arcticicestudio/styleguide-javascript
[gh-styleguide-md]: https://github.com/arcticicestudio/styleguide-markdown
[gh-sue]: https://github.com/yahoo/subscribe-ui-event
[git-docs-gitattributes]: https://git-scm.com/docs/gitattributes
[git-docs-gitignore]: https://git-scm.com/docs/gitignore
[git-docs-mailmap]: https://git-scm.com/docs/git-shortlog#_mapping_authors
[inter-ui]: https://rsms.me/inter
[jest]: https://jestjs.io
[md]: https://material.io
[md-com-es]: https://material.io/design/communication/empty-states.html
[md-motion-speed]: https://material.io/design/motion/speed.html
[mdn-html-el-a]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
[mdn-html-el-cs]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Content_sectioning
[mdn-html-el-h]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements
[mdn-html-el-inl-txt-sem]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Inline_text_semantics
[mdn-html-el-main]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main
[mdn-html-el-p]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p
[mdn-html-el-sec]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section
[mdn-html-el-tc]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Text_content
[mdn-ls]: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
[mdn-mq]: https://developer.mozilla.org/de/docs/Web/CSS/Media_Queries/Using_media_queries
[mdn-ss]: https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
[mit-lic]: https://opensource.org/licenses/MIT
[mobx]: https://mobx.js.org
[netlify]: https://www.netlify.com
[netlify-docs-toml-ref]: https://www.netlify.com/docs/netlify-toml-reference
[npm-docs-lock]: https://docs.npmjs.com/files/package-locks
[npm-docs-pkg]: https://docs.npmjs.com/files/package.json
[npm-docs-rc]: https://docs.npmjs.com/files/npmrc
[npm-eslint-config-arcticicestudio]: https://www.npmjs.com/package/eslint-config-arcticicestudio
[npm-eslint-config-arcticicestudio-base]: https://www.npmjs.com/package/eslint-config-arcticicestudio-base
[npm-gatsby-plugin-react-helmet]: https://www.npmjs.com/package/gatsby-plugin-react-helmet
[npm-npm-run-all]: https://www.npmjs.com/package/npm-run-all
[npm-prop-types]: https://www.npmjs.com/package/prop-types
[npm-react-helmet]: https://www.npmjs.com/package/react-helmet
[npm-react]: https://www.npmjs.com/package/react
[npm-react-dom]: https://www.npmjs.com/package/react-dom
[npm-remark-cli]: https://www.npmjs.com/package/remark-cli
[ossg]: https://opensource.guide
[ossg-contrib]: https://opensource.guide/how-to-contribute
[polished]: https://polished.js.org
[prettier]: https://prettier.io
[react]: https://reactjs.org
[react-docs-context]: https://reactjs.org/docs/context.html
[react-docs-typecheck-pt]: https://reactjs.org/docs/typechecking-with-proptypes.html
[react-pose]: https://popmotion.io/pose
[remark]: https://remark.js.org
[stc-docs-globstyle]: https://www.styled-components.com/docs/api#createglobalstyle
[stc-docs-mqt]: https://www.styled-components.com/docs/advanced#media-templates
[stc-docs-thprov]: https://www.styled-components.com/docs/api#themeprovider
[stc-docs-tooling-jest]: https://www.styled-components.com/docs/tooling#jest-integration
[styled-components]: https://styled-components.com
[styleguide-javascript]: https://arcticicestudio.github.io/styleguide-javascript
[styleguide-markdown]: https://arcticicestudio.github.io/styleguide-markdown
[svgr]: https://www.smooth-code.com/open-source/svgr
[typescript]: https://www.typescriptlang.org
[webpack]: https://webpack.js.org
[webpack-docs-resv-alias]: https://webpack.js.org/configuration/resolve/#resolve-alias
[wiki-404]: https://en.wikipedia.org/wiki/HTTP_404

<!-- v0.1.0 -->

[gh-blog-intro-code-owners]: https://github.com/blog/2392-introducing-code-owners
[gh-blog-intro-comm-tools]: https://github.com/blog/2380-new-community-tools
[gh-blog-intro-contrib-gl]: https://github.com/blog/1184-contributing-guidelines
[gh-blog-intro-issue-templ]: https://blog.github.com/2016-02-17-issue-and-pull-request-templates
[gh-blog-multi-issue-templ]: https://blog.github.com/2018-01-25-multiple-issue-and-pull-request-templates
[gh-npm-run-all-rln-4.1.5]: https://github.com/mysticatea/npm-run-all/releases/tag/v4.1.5
[npm-event-stream]: https://www.npmjs.com/package/event-stream
[npm-react-v16.6.3]: https://www.npmjs.com/package/react/v/16.6.3
[shields.io]: https://shields.io
[snyk-blog-malicious-event-stream]: https://snyk.io/blog/malicious-code-found-in-npm-package-event-stream
[wikip-ai]: https://en.wikipedia.org/wiki/Adobe_Illustrator_Artwork

<!-- v0.2.0 -->

[gf]: https://fonts.google.com
[gh-modern-normalize]: https://github.com/sindresorhus/modern-normalize
[gh-nord-36]: https://github.com/arcticicestudio/nord/issues/36
[gh-stth-api-th]: https://github.com/styled-components/styled-theming#themename-values
[gh-styled-theming]: https://github.com/styled-components/styled-theming
[modularscale-majorsecond]: https://www.modularscale.com/?1&em&1.125
[npm-gatsby-plugin-styled-components]: https://www.npmjs.com/package/gatsby-plugin-styled-components
[npm-inter-ui]: https://www.npmjs.com/package/inter-ui
[npm-styled-modern-normalize]: https://www.npmjs.com/package/styled-modern-normalize
[npm-typeface-rubik]: https://www.npmjs.com/package/typeface-rubik
[npm-typeface-source-code-pro]: https://www.npmjs.com/package/typeface-source-code-pro
[stc-docs-api-cgs]: https://www.styled-components.com/docs/api#createglobalstyle
[stc-docs-api-thp]: https://www.styled-components.com/docs/api#themeprovider
[stc-docs-theming]: https://www.styled-components.com/docs/advanced#theming
[stc-docs-tool-babel]: https://www.styled-components.com/docs/tooling#babel-plugin

<!-- v0.3.0 -->

[gh-55-diff-r49]: https://github.com/arcticicestudio/nord-docs/pull/55/files#diff-90a2aa45c339ce4720a7fbbd23c65e3eR49
[gh-jsc-matcher]: https://github.com/styled-components/jest-styled-components#tohavestylerule
[gh-svgr-wpl]: https://github.com/smooth-code/svgr/tree/master/packages/webpack
[npm-gp-svgr]: https://www.npmjs.com/package/gatsby-plugin-svgr