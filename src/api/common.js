import fs from 'fs'
import { join } from 'path'
import matter from "gray-matter"

export const commonFields = ['title', 'preview', 'date', 'slug', 'private', 'content', 'seo']
export const pagesDirectory = join(process.cwd(), 'content/pages')
export const postsDirectory = join(process.cwd(), 'content/news')
export const directories = {
    'page': pagesDirectory,
    'post': postsDirectory,
}

export function getContentBySlug(type, slug, fields = commonFields) {
    const path = directories[type] || directories['post']
    const realSlug = slug?.replace(/\.md$/, '')
    const fullPath = join(path, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const { data, content } = matter(fileContents)
    const items = { filename: realSlug }

    fields.forEach((field) => {
        if (data[field]) {
            items[field] = data[field]
        }
        if (field === 'content') {
            items[field] = content
        }
        if (field === 'slug') {
            items[field] = realSlug
        }
    })

    return items
}
