<?php
namespace bright\yii2\toolbox;

interface EnabledInterface
{
    const STATUS_DISABLE = 0;
    const STATUS_ENABLE = 1;
    
    public function enable();
    public function disable();
    
}