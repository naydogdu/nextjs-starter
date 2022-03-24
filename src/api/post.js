import fs from 'fs'
import {getContentBySlug, commonFields, postsDirectory} from "./common"

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory)
}

export function getAllPosts(fields = commonFields) {
    const slugs = getPostSlugs()
    const posts = slugs.map((slug) => getContentBySlug('post', slug, fields))
    const filtered = posts?.filter((item) => !item.private)
        .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))

    return filtered
}

export function getLatestPosts(number = 3) {
    const all = getAllPosts()
    return all.slice(0,number)
}

export function getAdjacentPosts(slug) {
    const all = getAllPosts()

    let prev, next
    all?.find((obj,i) => {
        next = all[i-1] || null
        prev = all[i+1] || null

        return obj.filename === slug
    })

    return {prev: prev, next: next}
}
