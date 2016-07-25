<?php

$arr = [-5, -3, -1, -2, -4, 1, 4, 2, 5, 3];

function reorganize($arr, $direction){
	$neg = array_filter($arr, function($val){
		return $val < 0;
	});
	$pos = array_filter($arr, function($val){
		return $val > 0;
	});

	if($direction === 'positive'){
		return array_merge($pos, $neg);	
	}else if($direction === 'negative'){
		return array_merge($neg, $pos);
	}else{
		throw new Exception("You did not pick a direction");
	}
	
}
function reverse_t9($keys){
	preg_match_all('/([0-9])\1*/', $keys, $output);
	$digits = $output[0];
	foreach($digits as $o){
		switch($o){
			case '0':
			$composite[] = ' ';
			break;

			case '2':
			$composite[] = 'a';
			break;

			case '22':
			$composite[] = 'b';
			break;

			case '222':
			$composite[] = 'c';
			break;

			case '3':
			$composite[] = 'd';
			break;

			case '33':
			$composite[] = 'e';
			break;

			case '333':
			$composite[] = 'f';
			break;

			case '4':
			$composite[] = 'g';
			break;

			case '44':
			$composite[] = 'h';
			break;

			case '444':
			$composite[] = 'i';
			break;

			case '5':
			$composite[] = 'j';
			break;

			case '55':
			$composite[] = 'k';
			break;

			case '555':
			$composite[] = 'l';
			break;

			case '6':
			$composite[] = 'm';
			break;

			case '66':
			$composite[] = 'n';
			break;

			case '666':
			$composite[] = 'o';
			break;

			case '7':
			$composite[] = 'p';
			break;

			case '77':
			$composite[] = 'q';
			break;

			case '777':
			$composite[] = 'r';
			break;

			case '7777':
			$composite[] = 's';
			break;

			case '8':
			$composite[] = 't';
			break;

			case '88':
			$composite[] = 'u';
			break;

			case '888':
			$composite[] = 'v';
			break;

			case '9':
			$composite[] = 'w';
			break;

			case '99':
			$composite[] = 'x';
			break;

			case '999':
			$composite[] = 'y';
			break;

			case '9999':
			$composite[] = 'z';
			break;

			default:
			break;
		}
	}
	$word = implode($composite);
	return $word;
}

function digitSum($n) {
    
    $ppp = str_split($n);
    $agg = 0;
    print_r($output);

    foreach($ppp as $p){
    	echo $p . "<br>";
        $agg += $p;
    }

    return $agg;
}

try{
	$new = reorganize($arr, 'negative');
	$ppp = reverse_t9('44 444');
	$agg = digitSum(111);
	$ttt = reverse_t9('999337777');
	$xxx = reverse_t9('66 666');
	$yyy = reverse_t9('44204420442');
	$zzz = reverse_t9('2 2 2 2 2 2 2 2 2');
	$aaa = reverse_t9('22 22 22 22 22 22 22 22 22');
	$bbb = reverse_t9('2 22 2223 33 3334 44 4445 55 5556 66 666');
	echo '<pre>';
	print_r($arr);
	print_r($new);
	echo $ppp . ' ' . $ttt . ' ' . $xxx . ' ' . $yyy . ' ' . $zzz . ' ' . $aaa . ' ' . $bbb . ' ';
	echo $agg;
	echo '</pre>';
	
}catch(Exception $e){
	echo "There was an error: " . $e->getMessage();
}