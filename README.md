# About
Highlights unread comments on the [Grrl Power comic site](https://grrlpowercomic.com), based on a stored timestamp of the last site visit.

A "comments read" bookmark is saved by setting a cookie with the current timestamp - you will need cookies enabled, but it is not a 3rd-party cookie so most configurations should work out of the box. The script imports the popular _moment.js_ library for date parsing, but otherwise does not communicate with any other site or service.

While this script was developed specifically for Grrl Power, it could easily be adapted for any other WordPress site using a similar forum layout.

# Setup
Copy the contents of the comments-min.js file into a bookmarklet.
1. Open the [bookmarklet code file](/bookmarklet.js).
2. Select and copy the entire contents of the file _(Ctrl/Cmd + c, or right-click > Copy)_.
3. Create a new browser bookmark, e.g. by pressing _Ctrl+D_ or dragging this page's URL into your bookmarks bar.
4. Edit the bookmark title to "Grrl Comments" (or similar), paste the bookmarklet code as the URL _(Ctrl/Cmd + v, or right-click > Paste)_, and Save the bookmark.
5. Move the bookmark into the bookmarks bar (or other place you can easily activate it).

# Usage
1. Run the bookmarklet on the Grrl Power site by clicking the bookmark. _(If you are on the latest page, you need to hit the 'comments' link first.)_
2. All comments created after you last ran the bookmarklet (or the last 24 hours on first run) will be highlighted, and the page will scroll to the first unread comment.
3. Click 'Save' to set your reading progress. On next run, only comments after this time will be highlighted. _(Not autosaved because this clears reading status on all other comments pages as well.)_
4. Use the 'Prev'/'Next' buttons to jump to the next new comment.

Since this script runs without being installed as a browser extension or similar, you will have re-run the bookmarklet on each page load.

# Feedback
I would be happy to get feedback on whether this is helpful for you, as well as any ideas for additional features that would be useful to the Grrl Power community. I won't always see comments within the forum, especially for anything but the current comic page, so ping me here via issues.

If there is sufficient interest, I would consider making this more powerful, e.g. new tools or auto-loading via a browser extension.
