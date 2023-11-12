const clearAllCookies = () => {
    let cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        let eqPos = cookie.indexOf('=');
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    }
};

const getCookie = (name) => {
    let value = '; ' + document.cookie;
    let parts = value.split('; ' + name + '=');
    if (parts.length === 2)
        return parts
            .pop()
            .split(';')
            .shift();
};

const setCookie = (cname, cvalue, exMins) => {
    const d = new Date();
    d.setTime(d.getTime() + (exMins*60*1000));
    const expires = 'expires='+d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=';
};

const markVisited = (item) => {
    let viewedItemsList = getCookie('viewed_items') && JSON.parse(getCookie('viewed_items'));
    if (viewedItemsList && viewedItemsList.length !== 0) {
        const isItemAlreadyViewed = viewedItemsList.some(el => el.id === item.id);

        if (!isItemAlreadyViewed) {
            viewedItemsList.push(item);

            if (viewedItemsList.length > 10) {
                viewedItemsList.shift();
            }
        }
    } else {
        viewedItemsList = [item];
    }

    setCookie('viewed_items', JSON.stringify(viewedItemsList), 10000);
}

export {
    clearAllCookies,
    getCookie,
    setCookie,
    markVisited
};