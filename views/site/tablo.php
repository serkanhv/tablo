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
<p>Zaqatala RR sərbəst güləş məktəbi</p>
<body style="background-color:#1E1E1E"> 
    
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
                    <td colspan="4"> <img style='width:100%' src="/img/bayraq.png" alt=""> </td>
                        
                    </tr>
                    <tr> 
                        <td  class='td-input' colspan="4"><input type="text"  class='input-black td_pl' id='player1' onChange='changePlayer()'  value="<?php echo $player1?>"></td>
                    </tr>
                    <tr>
                            <td class="td_count" colspan="4" id='greenCount' bgcolor="#3572FF"  style='width:30%'> <? echo $greenCount; ?> </td>
                            
                    </tr>
                    <tr>
                        <td width="13%"> <button class='btn-tablo' onclick="greenClick(<?php echo $greenCount;?>,1)"> +1</button> </td>
                        <td width="13%"> <button  class='btn-tablo' onclick="greenClick(<?php echo $greenCount;?>,2)"> +2</button></td> 
                        <td width="13%"> <button class='btn-tablo' onclick="greenClick(<?php echo $greenCount;?>,3)"> +3</button> </td> 
                        <td width="13%"> <button class='btn-tablo' onclick="greenClick(<?php echo $greenCount;?>,4)"> +4</button> </td>  
                    </tr>
                    <tr>
                        <td width="13%"> <button class='btn-tablo' onclick="greenClick(<?php echo $greenCount;?>,-1)"> -1</button> </td>
                        <td width="13%"> <button class='btn-tablo' onclick="greenClick(<?php echo $greenCount;?>,-2)"> -2</button></td> 
                        <td width="13%"> <button class='btn-tablo' onclick="greenClick(<?php echo $greenCount;?>,-3)"> -3</button> </td>
                        <td width="13%"> <button class='btn-tablo' onclick="greenClick(<?php echo $greenCount;?>,-4)"> -4</button> </td>   
                    </tr>
                 </table>
                 <?php
                    Pjax::end();
                ?>
        </td>
        <td >
                <table border="2" class='tablo '>
                   
                    <tr> 
                        <td   widt="30" class='text-white'> Çəki: </td>
                        <td  width="10%"> <input type="text" size='5' class='input-black td_input' value="<?php echo $weight?>" id='weight' onChange='changeWeight()'></td>
                    </tr> 
                    <tr> 
                        <td  width="10%" class='text-white'> Mərhələ: </td>
                        <td >
                        <input type="text" size='5' class='input-black' value="<?php echo $level?>" id='level' onChange='changeLevel()'>
                   
                        </td>
                    </tr> 
                   
                    <tr> 
                        <td class="td_name" > 
                         
                         </td>

                    </tr>
                    <tr>
                        <td colspan='2'  class="td_text"> <span  onclick ='clickStart()' id='but' class='text-white'>START</span> 
                        <select id="second" onChange='changeRound()' >
                            <option value="1.3">01:30</option>
                            <option value="2">02:00</option>
                            <option value="2.3"> 02:30</option>
                            <option selected value="3">03:00</option>
                        </select> 
                        </td>
                    </tr>
                    <tr>
                         <td colspan='2' class="td_text text-white"><b>RAUND <input type="text" size='2' class='input-black td_input' value="<?php echo $round?>" id='round' onChange='changeRound()'></b></td>
                    </tr>
                    <tr>   
                        <td  colspan='2'class="td_timer" id="time"></td> 
                       
                    </tr>
                    <tr> 
                        <td   colspan='2'  ><span  onclick ='clickWait()' id='wait' class='btn-tablo'>FASİLƏ</span>  </td>
                      
                    </tr> 
                    <tr> 
                        <td   colspan='2'  ><span  onclick ='clickReset()' class='btn-tablo reset'>RESET</span>  </td>
                      
                    </tr> 
                           
                </table>
        </td>
        <td style='width:35%'>
                <?php
                    Pjax::begin(["id" => 'pjaxRed']);
                ?>
                <table border="2" class='tablo'>
                     
                 
                    <tr>
                        
                    <td colspan="4"> <img style='width:100%' src="/img/bayraq.png" alt=""> </td>
                        
                    </tr>
                    <tr> 
                        <td  colspan="4"><input type="text"  class='input-black td_pl' id='player2' onChange='changePlayer()'  value="<?php echo $player2?>"></td>
                    </tr>
                    <tr>
                                
                        <td  class="td_count"  colspan="4" id='redCount' bgcolor="#B52C2E" width="30%"><? echo $redCount; ?>  </td>
                            
                    </tr>
                    <tr>
                        <td width="13%"> <button class='btn-tablo' onclick="redClick(<?php echo $redCount;?>,1)"> +1</button> </td>
                        <td width="13%"> <button class='btn-tablo' onclick="redClick(<?php echo $redCount;?>,2)"> +2</button></td> 
                        <td width="13%"> <button class='btn-tablo' onclick="redClick(<?php echo $redCount;?>,3)"> +3</button> </td>   
                        <td width="13%"> <button class='btn-tablo' onclick="redClick(<?php echo $redCount;?>,4)"> +4</button> </td>
                    </tr>
                    <tr>
                        <td width="13%"> <button class='btn-tablo' onclick="redClick(<?php echo $redCount;?>,-1)"> -1</button> </td>
                        <td width="13%"> <button class='btn-tablo' onclick="redClick(<?php echo $redCount;?>,-2)"> -2</button></td> 
                        <td width="13%"> <button class='btn-tablo' onclick="redClick(<?php echo $redCount;?>,-3)"> -3</button> </td>  
                        <td width="13%"> <button class='btn-tablo' onclick="redClick(<?php echo $redCount;?>,-4)"> -4</button> </td>  
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