<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- SEO -->
    <meta name="keywords" content="">
    <meta name="description" content="">
    <meta name="robots" content="index, follow">
    <!-- Compatible -->
    <meta http-equiv="X-UA-Compatible" content="IE=7">
    <!-- Icon -->
    <link rel="shortcut icon" href="<?php echo PATH.$this->setConfig('icon'); ?>" type="image/png">


    <!-- Style -->
    <link rel="stylesheet" href="<?php echo PATH?>views/public/assets/styles/global.min.css">
    
    <?php if ($this->setConfig('style')): ?>
        <?php foreach ($this->setConfig('style') as $value): ?>
            <link rel="stylesheet" href="<?php echo PATH.$value?>">
        <?php endforeach?>
    <?php endif?>

    <!-- Title -->
    <title><?php echo $this->setConfig('title'); ?></title>
</head>
<body>
    <main>
        <?php
            $this->setConfig('up');
            $this->setConfig('middle');
            $this->setConfig('low');
        ?>
    </main>

    <script src="<?php echo PATH?>views/public/assets/javascript/global.js"></script>

    <?php if ($this->setConfig('script')): ?>
        <?php foreach ($this->setConfig('script') as $value): ?>
            <script src="<?php echo PATH.$value?>"></script>
        <?php endforeach?>
    <?php endif?>

</body>
</html>