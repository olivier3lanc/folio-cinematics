<?php
    if (isset($_GET['url_start']) && isset($_GET['url_end']) && isset($_GET['iterations'])) {
        $url_start = $_GET['url_start'];
        $url_end = $_GET['url_end'];
        $iterations = $_GET['iterations'];
        echo $url_start.' - '.$url_end.' - '.$iterations;

    }