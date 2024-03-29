import data from "../../content/main.json"

export const GA_TRACKING_ID = data.app?.gaId
export const GTM_TRACKING_ID = data.app?.gtmId

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
    if (typeof window.gtag === "function") {
        window.gtag('config', GA_TRACKING_ID, {
            page_path: url,
        })
    }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
    if (typeof window.gtag === "function") {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        })
    }
}
