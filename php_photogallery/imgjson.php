<?php



 /*
  JSON list of all images files in  directory
 */

function left($str, $length) {
    return substr($str, 0, $length);
}

function right($str, $length) {
    return substr($str, -$length);
}

/*
Template for ID

$stringnumber = "01_1006.jpg";
$leftstring =  left($stringnumber,7);
$rightstring = right($leftstring,4);
var_dump($rightstring);

*/
$dir = "./content/player";
$dh = opendir($dir);

$json = array();

while (($file = readdir($dh)) !== false) {
    
    $match = preg_match("/.*\.(jpg|png|gif|jpeg|bmp)/", $file);
    if ($match) {
        
        $leftstring =  left($file,7);
        $rightstring = right($leftstring,4);
        $array = array(
            "id" => $rightstring ,
            "link" => $file ,
           
        );
        array_push($json,$array);
    }
}

closedir($dh);



//creates the file
$fp = fopen('results.json', 'w');
fwrite($fp, json_encode($json));
fclose($fp);




?>
