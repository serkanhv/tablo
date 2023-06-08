<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "game".
 *
 * @property integer $id
 * @property integer $id_player1
 * @property integer $id_player2
 * @property integer $count1
 * @property integer $count2
 * @property string $date
 */
class Game extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'game';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id_player1', 'id_player2', 'count1', 'count2', 'date'], 'required'],
            [['id_player1', 'id_player2', 'count1', 'count2'], 'integer'],
            [['date'], 'safe'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'id_player1' => 'Id Player1',
            'id_player2' => 'Id Player2',
            'count1' => 'Count1',
            'count2' => 'Count2',
            'date' => 'Date',
        ];
    }
}
