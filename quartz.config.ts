import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Ubuntu",
    enableSPA: true,
    enablePopovers: false,
    analytics: { provider: 'google', tagId: '<G-WCYL42MG7F>' },
    locale: "en-US",
    baseUrl: "ubuntu.sankofapedia.org",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      cdnCaching: true,
      typography: {
        header: "Alegreya Sans",
        body: "Alegreya Sans",
        code: "Alegreya Sans",
      },
      colors: {
        lightMode: {
          light: "#e6b90a",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#020202",
          dark: "#020202",
          secondary: "#FFFFFF",
          tertiary: "#FFFFFF",
          highlight: "FFFFFF",
        },
        darkMode: {
          light: "#020202",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#e6b90a",
          dark: "#e6b90a",
          secondary: "#FFFFFF",
          tertiary: "#FFFFFF",
          highlight: "FFFFFF",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        // you can add 'git' here for last modified from Git
        // if you do rely on git for dates, ensure defaultDateType is 'modified'
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting({
        // uses themes bundled with Shikiji, see https://shikiji.netlify.app/themes
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        // set this to 'true' to use the background color of the Shikiji theme
        // if set to 'false', will use Quartz theme colors for background
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
