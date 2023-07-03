import { defineConfig } from "tinacms";
import {menu_itemFields, pageFields, settingsFields} from "./templates"
import getTinaLocalKey from "../src/utils/getTinaLocalKey"

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  contentApiUrlOverride: '/api/gql',
  admin: {
    auth: {
      customAuth: true,
      async authenticate() {
        console.log('Authenticating...')
        window.location.href = "/login"
        return {}
      },
      getToken: async () => {
        return {
          id_token: process.env.ADMIN_TOKEN_1,
        }
      },
      async logOut() {
        console.log('logOut...')
        localStorage.removeItem(getTinaLocalKey)
        window.location.href = '/'
      },
    }
  },
  //clientId: null, // Get this from tina.io
  //token: null, // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Posts",
        name: "posts",
        path: "content/news",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...pageFields(),
        ],
      },
      {
        format: "md",
        label: "Pages",
        name: "pages",
        path: "content/pages",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...pageFields(),
        ],
      },
      {
        format: "json",
        label: "Menus",
        name: "menus",
        path: "content",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "nav",
        },
        fields: [
          {
            type: "object",
            name: "primary",
            label: "Primary navigation",
            fields: [
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                fields: [...menu_itemFields()],
              },
            ],
          },
          {
            type: "object",
            name: "footer",
            label: "Footer navigation",
            fields: [
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                fields: [...menu_itemFields()],
              },
            ],
          },
          {
            type: "object",
            name: "social",
            label: "Social networks",
            fields: [
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                fields: [...menu_itemFields()],
              },
            ],
          },
        ],
      },
      {
        format: "json",
        label: "Texts & Settings",
        name: "texts___settings",
        path: "content",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "main",
        },
        fields: [...settingsFields()],
      },
    ],
  },
});
