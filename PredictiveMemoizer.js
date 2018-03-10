function InputMemoizer(options) {
    var
        sets = [],
        matcher = defaultMatcher;

    function addSet(key, items) {
        var existing = getSet(key);

        if (existing == null)
            sets.push({
                key,
                items
            });
        else
            existing.items = items;
    }

    function removeSet(key) {
        var idx = sets.findIndex(el => {
            return matcher(el.key, key);
        });

        if (idx < 0)
            return;
        else
            sets.splice(idx, 1);
    }

    function getSet(query) {
        return sets.find(el => {
            return matcher(el.key, query);
        });
    }

    function defaultMatcher(key, query) {
        var
            a = key.toUpperCase().trim(),
            b = query.toUpperCase().trim();

        return b.startsWith(a);
    }

    function getPredictions(query) {
        var existing = getSet(query);

        if (existing == null)
            return null;

        return existing.items.filter(el => {
            return matcher(query, el)
        })
    }

    function setMatcher(customMatcher) {
        if (typeof customMatcher === "function")
            matcher = customMatcher;
    }

    return {
        getPredictions,
        setMatcher,
        addSet
    };
}