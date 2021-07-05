import fs from 'fs'
import {getContentBySlug, commonFields, pagesDirectory} from "./common"

export function getPageSlugs() {
    return fs.readdirSync(pagesDirectory)
}

export function getAllPages(fields = commonFields) {
    const slugs = getPageSlugs()
    const pages = slugs.map((slug) => getContentBySlug('page', slug, fields))

    return pages
}
