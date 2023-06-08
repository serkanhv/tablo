<?php

/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use app\assets\AppAsset;
use app\models\Exchange;
AppAsset::register($this);

$exchange=Exchange::find()->one();
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
<body>
<?php $this->beginBody() ;

if (  Yii::$app->user->identity->id_role==2 || Yii::$app->user->identity->id_role==3)  $role=1;

else $role=0;
?>

<div class="wrap">
    <?php
    NavBar::begin([
        'brandLabel' => 'My Company',
        'brandUrl' => Yii::$app->homeUrl,
        'options' => [
            'class' => 'navbar  navbar-default',
            'id' => 'main-menu'
        ],
    ]);
    echo Nav::widget([
        'options' => ['class' => 'navbar-nav navbar-right'],
        'items' => [

            $role?
                [
                    'label' => ' Mal qəbulu',
                    'url' => ['/arrival/index']

                ] : "",
            $role ?
                [
                    'label' => 'Hesabat',
                    'items'=>[
                        ['label' => 'Mal qalığı', 'url' => ['/arrival/rest']],
                        ['label' => 'Mal Qəbulu', 'url' => ['/arrival/report']],

                        ['label' => 'Satışlar', 'url' => ['/sell/report']],
						 ['label' => 'Satışlar(num)', 'url' => ['/sell/report-num']],
                     //   ['label' => 'Ustalar', 'url' => ['/postponed/master']],
                      //  ['label' => 'Mal hərəkəti', 'url' =>['/move/index']],
                       	['label' => 'Vozvrat ', 'url' => ['/returnp/index']],
                        ['label' => 'Vozvrat (şirkət)', 'url' => ['/return-arrival/report']],
                        ['label' => 'Transfer', 'url' => ['/transfer/report']],
                        ['label' => 'Şirket hərəkəti', 'url' => ['/move/contr']],
						//   ['label' => 'Günün sonu', 'url' => ['/move/itog']],
						   ['label' => 'Product', 'url' => ['/move/move-report']],
						['label' => 'History', 'url' => ['/history/index']],
                      //  ['label' => 'Müştəri hərəkəti', 'url' => ['/move/client']],
                    ]
                ] :  "",
            $role ?
            [
                'label' => 'Pul Əməliyyatları',
                'items'=>[
                    ['label' => 'Şirkətlər', 'url' => ['/debt/index']],
					['label' => 'Xərc əməliyyatı', 'url' => ['/costs/create']],
					['label' => 'Medaxil əməliyyatı', 'url' => ['/costs/prixod']],
					['label' => 'Balans ve transfer', 'url' => ['/costs/transfer']],
					['label' => 'Xərclər həsabatı', 'url' => ['/costs/index']],
					['label' => 'Medaxil həsabatı', 'url' => ['/costs/index2']],
					['label' => 'Kassa hesabatı', 'url' => ['/costs/kassa']], 
					['label' => 'Günün sonu', 'url' => ['/move/itog']],					
					
                ]
            ] : '',
            $role ?

            [
                'label' => 'Əməliyyatlar',
                'items'=>[
                   // ['label' => 'Vozvrat', 'url' => ['/arrival/return']],
                   // ['label' => 'Sverka', 'url' => ['/sverka/index']],
                    ['label' => 'Transfer', 'url' => ['/transfer/index']], 
                    ['label' => 'Düzəliş', 'url' => ['/arrival/edit']],
                   /*['label' => 'Tərəzi', 'url' => ['/sell/scales']], 
                    ['label' => 'Ştrixkodun çapı', 'url' => ['/barcode/index']],
					  ['label' => 'Qeymət kağızı ', 'url' => ['/barcode/price']],
					   ['label' => 'Save ', 'url' => ['/history/history']], */

                ]
            ]:"",
            $role ?
            ['label' => 'İdarə Etmə', 'url' =>  ['/admin/index']]:"",

            ['label' => 'Satış', 'url' => ['/sell/index']],
            Yii::$app->user->isGuest ? (
                ['label' => 'Login', 'url' => ['/site/login']]
            ) : (
                '<li>'
                . Html::beginForm(['/site/logout'], 'post', ['class' => 'navbar-form'])
                . Html::submitButton(
                    'Logout (' . Yii::$app->user->identity->login . ')',
                    ['class' => 'btn btn-link']
                )
                . Html::endForm()
                . '</li>'
            ),
             
        ],
    ]);
    NavBar::end();
    ?>

    <div class="container">
        <?= Breadcrumbs::widget([
            'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] :"",
        ]) ?>
        <?= $content ?>
    </div>
    <div id="Resultat"></div>
</div>
<!--<footer class="footer  noprint" >
    <div class="container  noprint">
    <p class="pull-left"><b>Shift</b> - Təsdiqlə , <b>F2</b>  - Axtarış</p>

    </div>

</footer>
<footer class="footer">
    <div class="container">
        <p class="pull-left">&copy; My Company <?= date('Y') ?></p>

        <p class="pull-right"><?= Yii::powered() ?></p>
    </div>
</footer>-->

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
