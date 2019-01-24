<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>Gifs - Howdy, I'm Wuz.</title>

    <meta name="description" content="" />
    <meta name="robots" content="robots.txt" />

    <!-- Site styles and authors -->
    <link rel="stylesheet" href="/css/style.css" />
    <link href="humans.txt" rel="author" />

    <link rel="icon" type="image/png" sizes="64x64" href="/favicon-64x64.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="icon" type="image/png" href="/favicon.png" />

    <!-- Open Graph protocol  -->
    <meta property="og:title" content="" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="" />
    <meta property="og:url" content="http://wuz.fyi" />
    <meta property="og:description" content="" />
    <meta property="og:site_name" content="" />
    <meta property="og:locale" content="en_US" />
</head>

<body>
    <?php
$dir = "./*.gif";
//get the list of all files with .jpg extension in the directory and safe it in an array named $images
$images = glob($dir);

//extract only the name of the file without the extension and save in an array named $find
foreach ($images as $image):
  echo "<a href='" . urlencode($image) . "'>$image</a><br />";
endforeach;
?>
</body>

</html>