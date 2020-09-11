
export function path(path) {
    return process.env.PUBLIC_URL + path;
}

export function setup_router(navigate) {
    let l = window.location;
    if (l.search) {
        var q = {};
        l.search.slice(1).split('&').forEach(function (v) {
            var a = v.split('=');
            q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
        });
        if (q.p !== undefined) {
            let path = (l.pathname.endsWith('/') ? l.pathname.slice(0, -1) : l.pathname) + (q.p || '') +
                (q.q ? ('?' + q.q) : '') +
                l.hash;
            navigate(path);
        }
    }
}
