<?php
/**
 * @author Sam Xiao
 */
namespace bright\yii2\toolbox;

use yii\web\AssetBundle;

/**
 *
 * @author
 * @since
 */
class AlertAsset extends AssetBundle
{

    public $sourcePath = '@vendor/bright-tech/yii2-toolbox/assets';
    
    
    public $css = [
        'css/alert.css',
    ];
    
    public $js = [
        'js/alert.js',
    ];

    public $depends = [
        'yii\web\JqueryAsset',
        'yii\bootstrap\BootstrapPluginAsset'
    ];
}
