import { defineConfig } from "tinacms"
import {menu_itemFields, pageFields} from "./templates"

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main"

export default defineConfig({
  branch,
  /*contentApiUrlOverride: '/api/gql',
  admin: {
    auth: {
      useLocalAuth: process.env.TINA_PUBLIC_IS_LOCAL === 'true',
    }
  },*/
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN || "foo",
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "static/uploads",
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
        fields: [
          {
            type: "object",
            name: "app",
            label: "App",
            fields: [
              {
                type: "string",
                name: "siteName",
                label: "App name",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
              },
              {
                type: "image",
                name: "banner",
                label: "App Image",
              },
              {
                type: "boolean",
                name: "activeGa",
                label: "Activer Google Analytics",
              },
              {
                type: "string",
                name: "gaId",
                label: "Gtag ID",
              },
            ],
          },
          {
            type: "object",
            name: "consent",
            label: "GDPR",
            fields: [
              {
                type: "string",
                name: "accept",
                label: "accept",
              },
              {
                type: "string",
                name: "content",
                label: "content",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "decline",
                label: "decline",
              },
              {
                type: "string",
                name: "manage",
                label: "manage",
              },
              {
                type: "string",
                name: "more",
                label: "more",
              },
              {
                type: "object",
                name: "customize",
                label: "customize",
                fields: [
                  {
                    type: "string",
                    name: "menuTitle",
                    label: "menuTitle",
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "title",
                  },
                  {
                    type: "string",
                    name: "content",
                    label: "content",
                  },
                  {
                    type: "string",
                    name: "validate",
                    label: "validate",
                  },
                ],
              },
              {
                type: "object",
                name: "services",
                label: "services",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "custom_id",
                    nameOverride: "id",
                    label: "id",
                  },
                  {
                    type: "string",
                    name: "label",
                    label: "label",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "forms",
            label: "Forms",
            fields: [
              {
                type: "string",
                name: "recipients",
                label: "Recipients",
                list: true,
                ui: {
                  component: "tags",
                },
              },
              {
                type: "string",
                name: "subject",
                label: "Subject (default)",
              },
            ],
          },
          {
            type: "object",
            name: "fourZeroFour",
            label: "404",
            fields: [
              {
                type: "string",
                name: "title",
                label: "title",
              },
              {
                type: "string",
                name: "content",
                label: "content",
              },
              {
                type: "string",
                name: "cta",
                label: "cta",
              },
              {
                type: "string",
                name: "metaTitle",
                label: "metaTitle",
              },
            ],
          },
          {
            type: "object",
            name: "post",
            label: "Post navigation",
            fields: [
              {
                type: "string",
                name: "nextPost",
                label: "nextPost",
              },
              {
                type: "string",
                name: "previousPost",
                label: "previousPost",
              },
            ],
          },
          {
            type: "object",
            name: "switcher",
            label: "Switcher",
            fields: [
              {
                type: "string",
                name: "label",
                label: "label",
              },
            ],
          },
          {
            type: "string",
            name: "followTitle",
            label: "Follow Title",
          },
          {
            type: "string",
            name: "viewMore",
            label: "View More",
          },
        ],
      },
    ],
  },
})
