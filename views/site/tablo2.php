<?php

use yii\widgets\Pjax;
use app\models\Players;
use kartik\select2\Select2;
use yii\helpers\ArrayHelper;
?>
<html> 
<title>Tablo by TuReN </title>  

<head> 
</head>

<body> 
    
<?php
$m = '03';
$s = '00';


?>
<table style='width:100%'>
    <tr>
        <td style='width:35%'>
        <?php
            Pjax::begin(["id" => 'pjaxGreen']);
        ?>
                <table border="2" class='tablo'>
                    <tr> 
                        <td  colspan='2' widt="30"> Çəki: </td>
                        <td  width="10%"> 57 </td>
                    </tr> 
                    <tr> 
                        <td class="td_name" colspan="3"> 
                            <?=Select2::widget([
                                'data' => ArrayHelper::map(Players::find()->all(), 'id', 'name'),
                                'name' => 'player1',
                                'value'=>Yii::$app->session->get('player1'),
                                'options' => [
                                    'placeholder' => 'Seçin',
                                    'id'=>'player1',
                                    'onChange' => 'changePlayer()'
                                ],    
                            ]); ?>
                         </td>

                    </tr>
                    <tr>
                    <td colspan="3"> <img class="bayraq" src="/img/bayraq.png"  height="400"> </td>
                        
                    </tr>
                    <tr>
                            <td class="td_count" colspan="3" id='greenCount' bgcolor="green"  width="30%"> <? echo $greenCount; ?> </td>
                            
                    </tr>
                 
                 </table>
                 <?php
                    Pjax::end();
                ?>
        </td>
        <td >
                <table border="2" class='tablo '>
                   
                   
                    <tr> 
                        <td > </td>
                      
                    </tr> 
                    <tr> 
                        <td class="td_name" > 
                         
                         </td>

                    </tr>
                    <tr>
                        <td   class="td_text"> <span  onclick ='clickStart()' id='but'>START</span> 
                        <select id="second">
                            <option value="1.3">01:30</option>
                            <option value="2">02:00</option>
                            <option value="2.3"> 02:30</option>
                            <option selected value="3">03:00</option>
                        </select> 
                        </td>
                    </tr>
                    <tr>
                         <td class="td_text"><b> ROUND 1 </b></td>
                    </tr>
                    <tr>   
                        <td class="td_timer" id="time"></td> 
                       
                    </tr>
                    <tr> 
                        <td > </td>
                      
                    </tr> 
                    <tr> 
                        <td > </td>
                      
                    </tr>         
                </table>
        </td>
        <td style='width:35%'>
                <?php
                    Pjax::begin(["id" => 'pjaxRed']);
                ?>
                <table border="2" class='tablo'>
                     <tr> 
                        <td colspan='2' width="10%"> Mərhələ: </td>
                        <td >1/4 </td>
                    </tr> 
                    <tr> 
                        <td class="td_name" colspan="3"> 
                            <?=Select2::widget([
                                'data' => ArrayHelper::map(Players::find()->all(), 'id', 'name'),
                                'name' => 'player2',
                                'value'=>Yii::$app->session->get('player2'),
                                'options' => [
                                    'placeholder' => 'Seçin',
                                    'id'=>'player2',
                                    'onChange' => 'changePlayer()'
                                ],    
                            ]); ?>
                         </td>

                    </tr>
                    <tr>
                        
                        <td colspan="3"> <img src="/img/bayraq.png" alt=""> </td>
                        
                    </tr>
                    <tr>
                                
                        <td  class="td_count"  colspan="3" id='redCount' bgcolor="red" width="30%"><? echo $redCount; ?>  </td>
                            
                    </tr>
                   


                </table>
                <?php
                    Pjax::end();
                ?>
        </td>
    </tr>
</table>






</body>

<?php	
$script = <<< JS
let my_set_interval_id;
JS;
$this->registerJs($script);

?>


</html>

 <!--<tr> 
                        <td class="td_name" colspan="3"> 
                        <?=Select2::widget([
                                'data' => ArrayHelper::map(Players::find()->all(), 'id', 'name'),
                                'name' => 'player1',
                                'value'=>Yii::$app->session->get('player1'),
                                'options' => [
                                    'placeholder' => 'Seçin',
                                    'id'=>'player1',
                                    'onChange' => 'changePlayer()'
                                ],    
                            ]); ?>
                         </td>

                    </tr>-->



                       <!--<tr> 
                        <td class="td_name" colspan="3"> 
                        <?=Select2::widget([
                                'data' => ArrayHelper::map(Players::find()->all(), 'id', 'name'),
                                'name' => 'player2',
                                'value'=>Yii::$app->session->get('player2'),
                                'options' => [
                                    'placeholder' => 'Seçin',
                                    'id'=>'player2',
                                    'onChange' => 'changePlayer()'
                                ],    
                            ]); ?>
                         </td>

                    </tr>-->