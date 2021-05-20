export const callApi = async (url) => await (await fetch(url)).json()
export const callRegServer = async (url, options) => await (await fetch(url, options)).json()
