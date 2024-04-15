<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="https://gmpg.org/xfn/11">
<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
<a class="skip-link screen-reader-text" href="#primary">
<?php esc_html_e( 'Skip to content', 'foce' ); ?>
</a>
<header id="masthead" class="site-header">
  <nav id="site-navigation" class="main-navigation">
    <div class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
      <?php bloginfo( 'name' ); ?>
      </a></div>
    <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"> 
      <span class="line"></span> 
      <span class="line"></span> 
      <span class="line"></span> 
    </button>
    <div class="navFullMenu">
      <div class="navFullMenu__animimg">
        <ul>
            <li><img src="<?php echo get_template_directory_uri() . '/assets/images/random_flower.png'; ?> " alt="fleur"></li>
            <li><img src="<?php echo get_template_directory_uri() . '/assets/images/Sunflower.png'; ?> " alt="sun flower"></li>
            <li><img src="<?php echo get_template_directory_uri() . '/assets/images/flower.png'; ?> " alt="fleur"></li>
            <li><img src="<?php echo get_template_directory_uri() . '/assets/images/hibiscus_footer.png'; ?> " alt="hibiscus"></li>
            <li><img src="<?php echo get_theme_file_uri() . '/assets/images/orchid.png'; ?>" alt="orchid"> </li>
            <li><img src="<?php echo get_theme_file_uri() . '/assets/images/cat-orange.png'; ?>" alt="cat orange"> </li>
            <li><img src="<?php echo get_theme_file_uri() . '/assets/images/cat-blue.png'; ?>" alt="cat blue"> </li>
            <li><img src="<?php echo get_theme_file_uri() . '/assets/images/cat-black.png'; ?>" alt="cat black"> </li>
        </ul>  
      </div>
      <ul class="navFullMenu__menu">
        <li><img src="<?php echo get_theme_file_uri() . '/assets/images/logo-menu.png'; ?>" alt="logo"> </li>
        <li><a href="#story">Histoire</a></li>
        <li><a href="#characters">Personnages</a></li>
        <li><a href="#place">Lieu</a></li>
        <li><a href="#studio">Studio Koukaki</a></li>
        <li><p>Studio Koukaki</p></li>
      </ul>
    </div>
  </nav>
  <!-- #site-navigation --> 
</header>
<!-- #masthead --> 
