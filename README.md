# gatsby-starter-default
The default Gatsby starter.

For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).

## Install

Make sure that you have the Gatsby CLI program installed:
```sh
npm install --global gatsby-cli
```

And run from your CLI:
```sh
gatsby new gatsby-example-site
```

Then you can run it by:
```sh
cd gatsby-example-site
npm run develop
```

*NOTE:* For now, use node version `10.x`

## Imagemagick

Resize photos to aspect ratio of `2000x1335`:

```bash
convert orig.jpg -resize '2000x1335^' -gravity center -crop 2000x1335+0+0 +repage resized.jpg
convert orig.jpg -resize '1600x1068^' -gravity center -crop 1600x1068+0+0 +repage resized.jpg
```


## Deploy

```bash
rm -rf ./.cache/
rm -rf ./public/
npm run build
rsync -hrvz --delete --checksum --stats public/ $HOST:$HOSTDIR
```
