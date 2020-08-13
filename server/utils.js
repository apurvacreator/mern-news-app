const buildUrlWithParams = (params, apiKey, apiUrl) => {
    const url = new URL(apiUrl)
    const p = { ...params, apiKey };
    Object.keys(p).forEach(key => url.searchParams.append(key, p[key]))
    return url;
}


module.exports = {
    buildUrlWithParams
}