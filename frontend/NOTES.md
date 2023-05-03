# Serving the Same Build from Different Paths
Note: this feature is available with react-scripts@0.9.0 and higher.

If you are not using the HTML5 pushState history API or not using client-side routing at all, it is unnecessary to specify the URL from which your app will be served. Instead, you can put this in your package.json:

    "homepage": ".",

This will make sure that all the asset paths are relative to index.html. You will then be able to move your app from http://mywebsite.com to http://mywebsite.com/relativepath or even http://mywebsite.com/relative/path without having to rebuild it.

https://skryvets.com/blog/2018/09/20/an-elegant-solution-of-deploying-react-app-into-a-subdirectory/

# Proxying API Requests in Development
https://create-react-app.dev/docs/proxying-api-requests-in-development