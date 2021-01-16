<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- SEO -->
    <meta name="keywords" content="">
    <meta name="description" content="">
    <meta name="robots" content="index, follow">
    <!-- Compatible -->
    <meta http-equiv="X-UA-Compatible" content="IE=7">
    <!-- Fonts -->

    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap"  rel="stylesheet">
    <!-- Icon -->
    <link rel="shortcut icon" href="<?php echo PATH.self::setConfig('icon'); ?>" type="image/png">


    <!-- Style -->
    <link rel="stylesheet" href="<?php echo PATH?>views/public/assets/styles/global.min.css">
    
    <?php if (self::setConfig('style')): ?>
        <?php foreach (self::setConfig('style') as $value): ?>
            <link rel="stylesheet" href="<?php echo PATH.$value?>">
        <?php endforeach?>
    <?php endif?>

    <!-- Title -->
    <title><?php echo self::setConfig('title'); ?></title>
</head>
<body>
    <main>
        <?php
            self::setConfig('up');
            self::setConfig('middle');
            self::setConfig('low');
        ?>
    </main>

    <script src="https://kit.fontawesome.com/b06a805acd.js" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="<?php echo PATH?>views/public/assets/javascript/global.js"></script>

    <?php if (self::setConfig('script')): ?>
        <?php foreach (self::setConfig('script') as $value): ?>
            <script src="<?php echo PATH.$value?>"></script>
        <?php endforeach?>
    <?php endif?>

</body>
</html>