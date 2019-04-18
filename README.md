# Node Image Doanloader
## Download remote images from CSV file

### Getting Started

```bash
$ git clone https://github.com/hugodias/node-image-downloader.git
$ yarn
```

### Running
```bash
$ node index.js
```

### CSV File structure

1. The first line should have a `url` string
1. Use 1 URL per line

_example_
```csv
url
https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/220px-Node.js_logo.svg.png
https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/140px-Unofficial_JavaScript_logo_2.svg.png
```
