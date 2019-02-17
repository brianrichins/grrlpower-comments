# About
Highlights unread comments on the [Grrl Power comic site](https://grrlpowercomic.com), based on a stored timestamp of the last site visit.

- Highlights unread comments
- Saves last read time to determine which comments are new to you
- Adds prev/next buttons to skip directly to new comments
- Sticks the comments nav bar to the top of the page for convenience

You will need cookies enabled, but the script does not use 3rd-party cookies so most configurations should work out of the box. Imports the popular _moment.js_ library for date parsing, but does not send data to any site or service.

Tested on Chrome, Firefox, Edge, and IE 11. Uses [jsDeliver](https://www.jsdelivr.com/) for CDN caching and auto-updating.  
_(If you are still using IE 11 or less, please please go get a modern browser.)_

# Setup
Copy the contents of the comments-min.js file into a bookmarklet.
1. Open the [bookmarklet code file](/bookmarklet.js).
2. Select and copy the entire contents of the file _(Ctrl/Cmd + c, or right-click > Copy)_.
3. Create a new browser bookmark, e.g. by pressing _Ctrl+D_ or dragging this page's URL into your bookmarks bar.
4. Edit the bookmark title to "Grrl Comments" (or similar), paste the bookmarklet code as the URL _(Ctrl/Cmd + v, or right-click > Paste)_, and Save the bookmark.
5. Move the bookmark into the bookmarks bar (or other place you can easily activate it).

# Usage
1. Run the bookmarklet on the [Grrl Power comic site](https://grrlpowercomic.com) by clicking the bookmark. _(If you are on the home/latest page, you need to browse to the 'comments' version first.)_ All comments created after you last saved (or the last 24 hours if never saved) will be highlighted, and the page will scroll to the first unread comment.
2. Click 'Save' to set your reading progress after viewing all desired comment pages. On next script run, only comments after this time will be highlighted. _Script does not autosave because this clears reading status on all comments pages, not just the current one._
3. Use the 'Prev'/'Next' buttons to jump to the next new comment.

Since this script runs without being installed as a browser extension or similar, you will have re-run the bookmarklet after each page load.

# Feedback
I would be happy to get feedback on whether this is helpful for you, as well as any ideas for additional features that would be useful to the Grrl Power community. I won't always see comments within the forum, especially for anything but the current comic page, so ping me here by creating or commenting on Issues.

If there is sufficient interest, I would consider making this more powerful, e.g. new tools or auto-loading via a browser extension.
