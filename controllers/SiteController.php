<?php

namespace app\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\filters\VerbFilter;
use app\models\LoginForm;
use app\models\ContactForm;
use yii\helpers\Url;
class SiteController extends Controller
{
    public $layout = 'start';
    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['logout'],
                'rules' => [
                    [
                        'actions' => ['logout'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'logout' => ['post'],
                ],
            ],
        ];
    }

    /**
     * @inheritdoc
     */
    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
            'captcha' => [
                'class' => 'yii\captcha\CaptchaAction',
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
            ],
        ];
    }

    /**
     * Displays homepage.
     *
     * @return string
     */
    public function actionIndex()
    {
      /*  $model = new LoginForm();
	
        if ($model->load(Yii::$app->request->post()) && $model->login()) {
            $post=Yii::$app->request->post("LoginForm");
		
            Yii::$app->session->set('greenCount',0);
            Yii::$app->session->set('redCount',0);
			if (Yii::$app->user->identity->id_role==4)
				return $this->redirect(Url::to(['transfer/index2']));
			else return $this->redirect(Url::to(['sell/index']));
        }*/
        return $this->render('tablo');
    }


    /**
     * Login action.
     *
     * @return string
     */

    public function actionLogin()
    {

        return $this->redirect('index');
    }

    public function actionLogout()
    {
        Yii::$app->user->logout();

        return $this->goHome();
    }
    public function actionChangeGreenCount($greenCount)
    {
        Yii::$app->session->set('greenCount',$greenCount);
        

    }
    public function actionChangeRedCount($redCount)
    {
        Yii::$app->session->set('redCount',$redCount);

    }
    public function actionChangeWeight($weight)
    {
        Yii::$app->session->set('weight',$weight);

    }
    public function actionChangeLevel($level)
    {
        Yii::$app->session->set('level',$level);

    }
    public function actionChangeRound($round)
    {
        Yii::$app->session->set('round',$round);

    }
    public function actionChangePlayer($player1,$player2)
    {
        Yii::$app->session->set('player1',$player1);
        Yii::$app->session->set('player2',$player2);

    }
    /**
     * Displays contact page.
     *
     * @return string
     */
    public function actionContact()
    {
        $model = new ContactForm();
        if ($model->load(Yii::$app->request->post()) && $model->contact(Yii::$app->params['adminEmail'])) {
            Yii::$app->session->setFlash('contactFormSubmitted');

            return $this->refresh();
        }
        return $this->render('contact', [
            'model' => $model,
        ]);
    }

    public  function actionTimer()
    {
        
 
        Yii::$app->session->get('m');
        Yii::$app->session->get('s');
        $datetime3 = new \DateTime(date("H:i:s"));//Получаем текущее время
        $datetime4 = new \DateTime('00:00:00');//Время события где первые 00 - Это часы, вторые - это минуты и последние - это сек
        
        
       
        $interval2 = $datetime3->diff($datetime4);
        
        
      
        echo $interval2->format('%i:%s');
    }
    public function actionResetSession()
    {
        Yii::$app->session->remove('greenCount');
        Yii::$app->session->remove('redCount');
        Yii::$app->session->remove('weight');
        Yii::$app->session->remove('player1');
        Yii::$app->session->remove('player2');
        Yii::$app->session->remove('level');
        Yii::$app->session->remove('round');
    }
    public function actionTablo()
    {
        if (!Yii::$app->session->get('greenCount'))
        {
            Yii::$app->session->set('greenCount',0);
           
        }
        if (!Yii::$app->session->get('redCount'))
        {
            Yii::$app->session->set('redCount',0);
           
        }
        $greenCount =  Yii::$app->session->get('greenCount');
        $redCount =  Yii::$app->session->get('redCount');
        $weight =  Yii::$app->session->get('weight');
        $player1 =  Yii::$app->session->get('player1');
        $player2 =  Yii::$app->session->get('player2');
        $level =  Yii::$app->session->get('level');
        if (!Yii::$app->session->get('round')) $round=1;
       else  $round =  Yii::$app->session->get('round');
        return $this->render('tablo',[
            'greenCount' => $greenCount,
            'redCount' => $redCount,
            'weight' => $weight,
            'player1' => $player1,
            'player2' => $player2,
            'level' => $level,
            'round' => $round,
        ]);
    }

    public function actionTablo2()
    {
        if (!Yii::$app->session->get('greenCount'))
        {
            Yii::$app->session->set('greenCount',0);
           
        }
        if (!Yii::$app->session->get('redCount'))
        {
            Yii::$app->session->set('redCount',0);
           
        }
        $greenCount =  Yii::$app->session->get('greenCount');
        $redCount =  Yii::$app->session->get('redCount');
        return $this->render('tablo2',[
            'greenCount' => $greenCount,
            'redCount' => $redCount
        ]);
    }
    /**
     * Displays about page.
     *
     * @return string
     */
    public function actionAbout()
    {
        return $this->render('about');
    }



    public function actionProverka()
    {
        return $this->render('about');
    }



}
