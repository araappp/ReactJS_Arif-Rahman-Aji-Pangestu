<!DOCTYPE html>
<html>
<head>
  <title> Tugas Web Temu 11 </title>
</head>
<body>
<table border="1">
<tr><td>Nama</td><td>Cabang Warnet</td><td>Pemesanan</td><td>Lama Pakai</td></tr>
<?php
$NokiWarnet = array(
		array("Arjun", "Cabang Tebet", "1 PC", "2 jam"),
		array("Ryan", "Cabang Kebayoran", "1 PC", "5 jam"),
		array("Abim", "Cabang Tebet", "2 PC", "3 jam"),
		array("Rehan", "Cabang Kemanggisan", "2 PC", "1 jam"),
		array("Ojan", "Cabang Kebayoran", "1 PC", "5 jam"),
		array("Dilla", "Cabang Kebayoran", "1 PC", "2 jam")
		);
			
	for ($row = 0; $row < 6; $row++) {
		echo "<tr>";
		for ($col = 0; $col < 4; $col++) {
			echo "<td>".$NokiWarnet[$row][$col]."</td>";
		}
	echo "</tr>";
}
?>
</table>
</body>
</html