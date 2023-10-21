const shortPahtnameHandler = ( pathname) => {

    const splitPath = pathname.split("")
    const slicePath = splitPath.slice(4 , splitPath.length)
    const result = slicePath.join("")
    

    return `/${result}`
}

export {shortPahtnameHandler}