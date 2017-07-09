<?php

add_action('wp_enqueue_scripts', 'default_calculator_scripts');
function default_calculator_scripts()
{

  wp_register_script( 'api-js', plugins_url( '../app/scripts/main.js', __FILE__ ) );
  wp_enqueue_script( 'api-js', '', '', false, true );

  wp_register_style( 'api-lib', plugins_url( '../app/style/api_lib.css', __FILE__ ), array(), '20120208', 'all' );
  wp_enqueue_style( 'api-lib' );
  wp_register_style( 'api-style', plugins_url( '../app/style/api_style.css', __FILE__ ), array(), '20120208', 'all' );
  wp_enqueue_style( 'api-style' );

}
