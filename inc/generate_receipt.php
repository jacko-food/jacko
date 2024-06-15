<?php

require_once '../vendor/autoload.php';

use \Mpdf\Mpdf;

// Получаем JSON данные
$json = file_get_contents('php://input');
$data = json_decode($json, true);
echo "gosex";
print_r($data);

// Создаем экземпляр mpdf
$mpdf = new Mpdf();

// HTML для чека
$html = '<h1>Чек</h1>';

// Добавляем информацию о продуктах
$html .= '<table border="1" cellspacing="0" cellpadding="5">
            <tr>
              <th>Название продукта</th>
              <th>Цена за единицу</th>
              <th>Количество</th>
              <th>Сумма</th>
            </tr>';


  $html .= '<tr>
                <td>' . 'wdwdwd' . '</td>
                <td>' . 'wdwdwd' . '</td>
                <td>' . 'wdwdwd' . '</td>
              </tr>';

$html .= '</table>';

// Добавляем общую сумму
$html .= '<p><strong>Общая сумма: ' . 'wdwd' . '</strong></p>';


//$mpdf->WriteHTML($html);
//$mpdf->Output('check.pdf', 'D');
//$mpdf->Output();
