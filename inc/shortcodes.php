<?php

add_shortcode( 'react_rest_api_app', 'api_shortcode' );
function api_shortcode( $atts ) {

  $atts = shortcode_atts( array(
    'api_id' => 'app_wrapper'
  ), $atts );

  // create the html
  $html = '<div id="'. esc_attr($atts['api_id']) .'">';
  $html .= 'Loading......';
  $html .= '</div>';

  return $html;
}
