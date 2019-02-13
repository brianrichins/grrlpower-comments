# About
Highlights unread comments on the [Grrl Power comic site](https://grrlpowercomic.com), based on a stored timestamp of the last site visit.

A "comments read" bookmark is saved by setting a cookie with the current timestamp - you will need cookies enabled, but it is not a 3rd-party cookie so most configurations should work out of the box. The script imports the popular _moment.js_ library for date parsing, but otherwise does not communicate with any other site or service.

While this script was developed specifically for Grrl Power, it could easily be adapted for any other WordPress site using a similar forum layout. I personally am not interested in doing this, but am open to others porting it and would be willing to answer questions.

# Setup
Copy the contents of the comments-min.js file into a bookmarklet.
1. Open the [bookmarklet code file](/comments-min.js).
2. Select and copy the entire contents of the file _(Ctrl/Cmd + c, or right-click > Copy)_.
3. Create a new browser bookmark, e.g. by pressing _Ctrl+D_ or dragging this page's URL into your bookmarks bar.
4. Edit the bookmark title to "Grrl Comments" (or similar), paste the bookmarklet code as the URL _(Ctrl/Cmd + v, or right-click > Paste)_, and Save the bookmark.
5. Move the bookmark into the bookmarks bar or other place you can easily activate it.

# Usage
Run the bookmarklet when visiting the site by clicking the bookmark. All comments created after you last ran the bookmarklet will be highlighted. If you have never run the bookmarklet before, it defaults to comments from the last 24 hours.

Since this script runs without being installed as a browser extension or similar, you will have to hit the button on each page load.

# Feedback
I would be happy to get feedback on whether this is helpful for you, as well as any ideas for additional features that would be useful to the Grrl Power community. I won't always see comments within the forum, especially for anything but the current comic page, so ping me here.

If there is sufficient interest, I would consider making this into a more powerful browser extension to provide a more seamless experience.
