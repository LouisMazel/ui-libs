import { Library } from "@/types/library";

const libraries: Library[] = [
  {
    name: "NuxtLabs UI",
    logo: "nuxt.svg",
    url: "https://ui.nuxtlabs.com",
    styling: "STYLED",
    usage: "IMPORT",
    tailwindCSSBased: true,
    darkModeSupport: true,
    accessible: true,
    figma: false,
    free: true,
    official: true,
  },
  {
    name: "Tailwind UI",
    logo: "tailwind.svg",
    url: "https://tailwindui.com",
    styling: "STYLED",
    usage: "PASTE",
    tailwindCSSBased: true,
    darkModeSupport: false,
    accessible: false,
    figma: false,
    free: false,
    official: false,
  },
  {
    name: "Prime Vue",
    logo: "primevue.svg",
    url: "https://primevue.org",
    styling: "BOTH",
    usage: "IMPORT",
    tailwindCSSBased: true,
    darkModeSupport: false,
    accessible: false,
    figma: false,
    free: true,
    official: false,
  },
  {
    name: "Quasar",
    logo: "quasar.svg",
    logoDark: "quasar_dark.svg",
    url: "https://quasar.dev",
    styling: "STYLED",
    usage: "IMPORT",
    tailwindCSSBased: true,
    darkModeSupport: false,
    accessible: true,
    figma: false,
    free: true,
    official: false,
  },
  {
    name: "Vuetify",
    logo: "vuetify.svg",
    url: "https://vuetifyjs.com",
    styling: "STYLED",
    usage: "IMPORT",
    tailwindCSSBased: false,
    darkModeSupport: false,
    accessible: true,
    figma: false,
    free: true,
    official: false,
  },
  {
    name: "Daisy UI",
    logo: "daisyui.svg",
    url: "https://daisyui.com",
    styling: "STYLED",
    usage: "IMPORT",
    tailwindCSSBased: true,
    darkModeSupport: false,
    accessible: false,
    figma: false,
    free: true,
    official: false,
  },
  {
    name: "Flowbite Vue 3",
    logo: "flowbite-vue.svg",
    url: "https://flowbite-vue.com",
    styling: "STYLED",
    usage: "IMPORT",
    tailwindCSSBased: true,
    darkModeSupport: false,
    accessible: true,
    figma: false,
    free: true,
    official: false,
  },
];

export default libraries;
