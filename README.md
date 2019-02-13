# grrlpower-comments
Highlights unread comments on the [Grrl Power comic site](grrlpowercomic.com), based on a stored timestamp of the last site visit.

Comments bookmark is saved by setting a cookie with the current timestamp. Imports moment.js for date parsing, but otherwise does not communicate with any other site or service.

# Setup
Copy the contents of the comments-min.js file into a bookmarklet.

# Usage
Run the bookmarklet when visiting the site

# Known Issues
Currently only usable on a single page of comments because it updates the bookmark when run; future page views will see the new timestamp. Will require creating separate load/save functions - either 2 bookmarklets or float buttons in the corner of the page.
