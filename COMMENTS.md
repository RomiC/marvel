# Functionality

1. App is loading only first 20 comics (there are about 50K comics in DB)
2. Filtering and pagination work only for the first 20 comics
3. Filter by start date is missing
4. Description block is limited to the one line, while there is enough space for 3 or more lines.

# Code structure/architecture

1. It's good practice to extract business logic into the separate service/module. In this particular case, the fetching comics (or working w/ Marvel API) - is business logic. So, it's good to have a separate service to deal with it.
2. It will be good idea to create a custom hook for working comics, which encapsulate all logic related to fetching, filtering and paginating. And expose only necessary data and methods, like `comics` (current list of comics), `total` (total amount of comics), `error` (occurs during last request), `isLoading` (active request indicator).
3. Nice to move filter-related elements into the separate component. In this case it will be easy to maintain them, i.e. adding new filters and options.
4. Extracting comics grid view into separate component also make sense, as we can control the way of how the list is look like without worrying about CSS class-names collisions. This should also increase maintainability and testability of the code.

# Code styling

1. Code isn't formatted in the same way - formatters could help here
2. Non-meaningful variable names: `_DATA`, `count` (count of what?), `f`.
3. Long expressions which hard to read and understand at first glance: `.filter((f) => f.title.toLowerCase().includes(filter.toLowerCase()) || filter === ""`)
