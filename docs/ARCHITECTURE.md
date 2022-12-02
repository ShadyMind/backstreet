# Architecture concepts

### Package accessing

[![Package Accessing](./images/packageAccessing.jpg)](./images/packageAccessing.jpg)

<br />

----

<br />

### Get package

|||
|----|----|
|Method:|`GET`|
|URI:|`/api/v1/[@:namespace/]:package[@:version]`|

Response: **Binary**

<br />

----

<br />

### Get package metadata 

|||
|----|----|
|Method:|`GET`|
|URI:|`/api/v1/[@:namespace/]:package[@:version]/meta`|

Response: **Filtered package.json content of package**